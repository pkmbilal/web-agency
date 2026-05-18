const fs = require("fs");
const http = require("http");
const path = require("path");
const { URL } = require("url");
const { google } = require("googleapis");

const ROOT = process.cwd();
const CREDENTIALS_PATH = path.join(ROOT, "google-search-console-credentials.json");
const TOKEN_PATH = path.join(ROOT, "token.json");
const DEFAULT_SITE_URL = "sc-domain:codesudio.com";
const DEFAULT_SITEMAP_URL = "https://www.codesudio.com/sitemap.xml";
const SCOPES = ["https://www.googleapis.com/auth/webmasters"];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function getClientConfig() {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    throw new Error(`Missing credentials file: ${CREDENTIALS_PATH}`);
  }

  const credentials = readJson(CREDENTIALS_PATH);
  const config = credentials.installed || credentials.web;

  if (!config?.client_id || !config?.client_secret) {
    throw new Error("Credentials JSON must contain OAuth client_id and client_secret.");
  }

  return config;
}

function getRedirectUri(config) {
  if (process.env.GSC_REDIRECT_URI) {
    return process.env.GSC_REDIRECT_URI;
  }

  const localRedirect = (config.redirect_uris || []).find((uri) =>
    uri.startsWith("http://localhost:")
  );

  return localRedirect || "http://localhost:3001/oauth2callback";
}

function getOAuthClient() {
  const config = getClientConfig();
  const redirectUri = getRedirectUri(config);

  return new google.auth.OAuth2(
    config.client_id,
    config.client_secret,
    redirectUri
  );
}

function loadAuthorizedClient() {
  const client = getOAuthClient();

  if (!fs.existsSync(TOKEN_PATH)) {
    throw new Error("Not authenticated. Run `npm run gsc:auth` first.");
  }

  client.setCredentials(readJson(TOKEN_PATH));
  return client;
}

function waitForCode(redirectUri) {
  const redirect = new URL(redirectUri);
  const port = Number(redirect.port || 80);
  const pathname = redirect.pathname;

  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      try {
        const reqUrl = new URL(req.url, redirectUri);

        if (reqUrl.pathname !== pathname) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }

        const code = reqUrl.searchParams.get("code");
        const error = reqUrl.searchParams.get("error");

        if (error) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end(`Google authorization failed: ${error}`);
          reject(new Error(`Google authorization failed: ${error}`));
          server.close();
          return;
        }

        if (!code) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Missing authorization code.");
          return;
        }

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Search Console authorization complete. You can close this tab.");
        resolve(code);
        server.close();
      } catch (err) {
        reject(err);
        server.close();
      }
    });

    server.on("error", reject);
    server.listen(port, () => {
      console.log(`Waiting for Google OAuth redirect at ${redirectUri}`);
    });
  });
}

async function auth() {
  const redirectUri = getRedirectUri(getClientConfig());
  const client = getOAuthClient();
  const authUrl = client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: SCOPES,
  });

  console.log("Open this URL in your browser and approve access:");
  console.log(authUrl);

  const code = await waitForCode(redirectUri);
  const { tokens } = await client.getToken(code);
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
  console.log(`Saved OAuth token to ${TOKEN_PATH}`);
}

async function listSites() {
  const authClient = loadAuthorizedClient();
  const searchconsole = google.searchconsole({ version: "v1", auth: authClient });
  const response = await searchconsole.sites.list();
  const sites = response.data.siteEntry || [];

  if (!sites.length) {
    console.log("No Search Console sites found for this Google account.");
    return;
  }

  for (const site of sites) {
    console.log(`${site.siteUrl} ${site.permissionLevel || ""}`.trim());
  }
}

async function submitSitemap() {
  const authClient = loadAuthorizedClient();
  const searchconsole = google.searchconsole({ version: "v1", auth: authClient });
  const siteUrl = process.env.GSC_SITE_URL || DEFAULT_SITE_URL;
  const feedpath = process.env.GSC_SITEMAP_URL || DEFAULT_SITEMAP_URL;

  await searchconsole.sitemaps.submit({
    siteUrl,
    feedpath,
  });

  console.log(`Submitted sitemap ${feedpath} for ${siteUrl}`);
}

async function performance() {
  const authClient = loadAuthorizedClient();
  const searchconsole = google.searchconsole({ version: "v1", auth: authClient });
  const siteUrl = process.env.GSC_SITE_URL || DEFAULT_SITE_URL;
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - 28);

  const response = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: startDate.toISOString().slice(0, 10),
      endDate: endDate.toISOString().slice(0, 10),
      dimensions: ["query"],
      rowLimit: 10,
    },
  });

  const rows = response.data.rows || [];

  if (!rows.length) {
    console.log(`No performance rows found for ${siteUrl}.`);
    return;
  }

  for (const row of rows) {
    console.log(
      `${row.keys[0]} | clicks=${row.clicks} impressions=${row.impressions} ctr=${row.ctr} position=${row.position}`
    );
  }
}

async function main() {
  const command = process.argv[2];

  if (command === "auth") {
    await auth();
    return;
  }

  if (command === "sites") {
    await listSites();
    return;
  }

  if (command === "submit-sitemap") {
    await submitSitemap();
    return;
  }

  if (command === "performance") {
    await performance();
    return;
  }

  console.log("Usage:");
  console.log("  node scripts/search-console.js auth");
  console.log("  node scripts/search-console.js sites");
  console.log("  node scripts/search-console.js submit-sitemap");
  console.log("  node scripts/search-console.js performance");
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
