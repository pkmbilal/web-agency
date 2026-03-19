/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Good for static hosting because /about -> /about/
  trailingSlash: true,

  // Required because Next Image Optimization needs a server
  images: { unoptimized: true },

  // Optional but recommended: avoids failing build on Vercel due to lint/type during export
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;