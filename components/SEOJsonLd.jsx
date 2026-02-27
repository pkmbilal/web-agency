// components/SEOJsonLd.jsx
export default function SEOJsonLd() {
  const siteUrl = "https://your-domain.com"; // <-- change
  const siteName = "SparkWeb"; // <-- change

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/logo.png`, // optional if you add /public/logo.png
        sameAs: [
          // optional social links
          // "https://www.linkedin.com/company/...",
          // "https://twitter.com/..."
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "Service",
        name: "Business Websites (Mobile-First)",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "SA",
        serviceType: "Web Design & Development",
      },
      {
        "@type": "Service",
        name: "Landing Pages for Ads & Campaigns",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "SA",
        serviceType: "Landing Page Design",
      },
      {
        "@type": "Service",
        name: "Custom Web Apps & Dashboards (Next.js + Supabase)",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "SA",
        serviceType: "Web Application Development",
      },
      {
        "@type": "Service",
        name: "Website Redesign & Modernization",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "SA",
        serviceType: "Website Redesign",
      },
      {
        "@type": "Service",
        name: "Speed & Core Web Vitals Optimization",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "SA",
        serviceType: "Performance Optimization",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}