import ContactPageClient from "../../components/contact/ContactPageClient";

/** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://www.codesudio.com"),
  title: "Web Development Company in Saudi Arabia | Codesudio",
  description:
    "Codesudio is a web development company in Saudi Arabia helping businesses with modern websites, web applications, redesigns, and custom digital solutions.",
  keywords: [
    "web development company in Saudi Arabia",
    "website development company in Saudi Arabia",
    "web design company in Saudi Arabia",
    "custom website development Saudi Arabia",
    "web application development Saudi Arabia",
    "digital solutions company Saudi Arabia",
    "Codesudio",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Web Development Company in Saudi Arabia | Codesudio",
    description:
      "Codesudio is a web development company in Saudi Arabia helping businesses with modern websites, web applications, redesigns, and custom digital solutions.",
    url: "https://www.codesudio.com/contact",
    siteName: "Codesudio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Company in Saudi Arabia - Codesudio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Saudi Arabia | Codesudio",
    description:
      "Codesudio is a web development company in Saudi Arabia helping businesses with modern websites, web applications, redesigns, and custom digital solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}