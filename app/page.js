import HomePageClient from "../components/home/HomePageClient";

/** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://www.codesudio.com"),
  title: "Web Development Company in Dammam | Codesudio",
  description:
    "Codesudio is a web development company in Dammam building modern websites, web applications, and custom digital solutions for businesses in Saudi Arabia.",
  keywords: [
    "web development company in Dammam",
    "website development company in Dammam",
    "web design company in Dammam",
    "web development company in Saudi Arabia",
    "custom website development Dammam",
    "web application development Dammam",
    "Codesudio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Web Development Company in Dammam | Codesudio",
    description:
      "Codesudio is a web development company in Dammam building modern websites, web applications, and custom digital solutions for businesses in Saudi Arabia.",
    url: "https://www.codesudio.com",
    siteName: "Codesudio",
    images: [
      {
        url: "/logo-dark.svg",
        width: 1200,
        height: 630,
        alt: "Web Development Company in Dammam - Codesudio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Dammam | Codesudio",
    description:
      "Codesudio is a web development company in Dammam building modern websites, web applications, and custom digital solutions for businesses in Saudi Arabia.",
    images: ["/logo-dark.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <HomePageClient />;
}
