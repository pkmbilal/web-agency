import PortfolioPageClient from "@/components/portfolio/PortfolioPageClient";

/** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://codesudio.com"),
  title: "Web Development Company in Khobar | Codesudio",
  description:
    "Codesudio is a web development company in Khobar showcasing modern websites, redesign projects, and business-focused digital solutions for companies in Saudi Arabia.",
  keywords: [
    "web development company in Khobar",
    "website development company in Khobar",
    "web design company in Khobar",
    "web development company in Saudi Arabia",
    "custom website development Khobar",
    "web application development Khobar",
    "Codesudio",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Web Development Company in Khobar | Codesudio",
    description:
      "Codesudio is a web development company in Khobar showcasing modern websites, redesign projects, and business-focused digital solutions for companies in Saudi Arabia.",
    url: "https://codesudio.com/portfolio",
    siteName: "Codesudio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Company in Khobar - Codesudio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Khobar | Codesudio",
    description:
      "Codesudio is a web development company in Khobar showcasing modern websites, redesign projects, and business-focused digital solutions for companies in Saudi Arabia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}