import ServicesPageClient from "../../components/services/ServicesPageClient";

/** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://www.codesudio.com"),
  title: "Web Development Company in Riyadh | Codesudio",
  description:
    "Codesudio is a web development company in Riyadh offering modern websites, dynamic web applications, website redesign, and SEO-focused digital solutions for businesses in Saudi Arabia.",
  keywords: [
    "web development company in Riyadh",
    "website development company in Riyadh",
    "web design company in Riyadh",
    "web development company in Saudi Arabia",
    "custom website development Riyadh",
    "web application development Riyadh",
    "Codesudio",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web Development Company in Riyadh | Codesudio",
    description:
      "Codesudio is a web development company in Riyadh offering modern websites, dynamic web applications, website redesign, and SEO-focused digital solutions for businesses in Saudi Arabia.",
    url: "https://www.codesudio.com/services",
    siteName: "Codesudio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Company in Riyadh - Codesudio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Riyadh | Codesudio",
    description:
      "Codesudio is a web development company in Riyadh offering modern websites, dynamic web applications, website redesign, and SEO-focused digital solutions for businesses in Saudi Arabia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}