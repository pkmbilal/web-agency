import AboutPageClient from "../../components/about/AboutPageClient";

/** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://codesudio.com"),
  title: "Web Development Company in Jubail | Codesudio",
  description:
    "Codesudio is a web development company in Jubail building modern websites, web applications, and custom digital solutions for businesses in Saudi Arabia.",
  keywords: [
    "web development company in Jubail",
    "website development company in Jubail",
    "web design company in Jubail",
    "web development company in Saudi Arabia",
    "custom website development Jubail",
    "web application development Jubail",
    "Codesudio",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Web Development Company in Jubail | Codesudio",
    description:
      "Codesudio is a web development company in Jubail building modern websites, web applications, and custom digital solutions for businesses in Saudi Arabia.",
    url: "https://codesudio.com/about",
    siteName: "Codesudio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Company in Jubail - Codesudio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Jubail | Codesudio",
    description:
      "Codesudio is a web development company in Jubail building modern websites, web applications, and custom digital solutions for businesses in Saudi Arabia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}