import AboutHero from "@/components/about/about-hero";
import AboutIntro from "@/components/about/about-intro";
import AboutHighlights from "@/components/about/about-highlights";
import AboutProcess from "@/components/about/about-process";
import AboutCta from "@/components/about/about-cta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsCounter from "@/components/about/stats-counter";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <AboutHero />
      <StatsCounter />
      <AboutIntro />
      <AboutHighlights />
      <AboutProcess />
      <AboutCta />
    </main>
  );
}