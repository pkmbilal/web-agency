import ProductsPageClient from "../../components/products/ProductsPageClient";

/** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://www.codesudio.com"),
  title: "Web Development Company in Jeddah | Codesudio",
  description:
    "Codesudio is a web development company in Jeddah offering websites, landing pages, web applications, and custom digital solutions for businesses in Saudi Arabia.",
  keywords: [
    "web development company in Jeddah",
    "website development company in Jeddah",
    "web design company in Jeddah",
    "web development company in Saudi Arabia",
    "custom website development Jeddah",
    "web application development Jeddah",
    "Codesudio",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Web Development Company in Jeddah | Codesudio",
    description:
      "Codesudio is a web development company in Jeddah offering websites, landing pages, web applications, and custom digital solutions for businesses in Saudi Arabia.",
    url: "https://www.codesudio.com/products",
    siteName: "Codesudio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Company in Jeddah - Codesudio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Jeddah | Codesudio",
    description:
      "Codesudio is a web development company in Jeddah offering websites, landing pages, web applications, and custom digital solutions for businesses in Saudi Arabia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}