"use client";

import { useEffect, useState } from "react";
import { useThemeMode } from "../../lib/useThemeMode";
import { getTheme } from "../../lib/theme";
import { menuItems } from "../../lib/siteData";
import { aboutStats, aboutTimeline, aboutValues } from "../../lib/siteData";

import SiteHeader from "../home/SiteHeader";
import BackToTopButton from "../home/BackToTopButton";
import FooterSection from "../home/FooterSection";

import AboutHeroSection from "../about/AboutHeroSection";
import StorySection from "../about/StorySection";
import ValuesSection from "../about/ValuesSection";
import JourneySection from "../about/JourneySection";
import AboutStatsSection from "../about/AboutStatsSection";
import AboutCtaSection from "../about/AboutCtaSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutPageClient() {
  const { darkMode, setDarkMode, mounted } = useThemeMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const theme = getTheme(darkMode);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }

    document.body.style.overflow = "";
  }, [menuOpen]);

  if (!mounted) return null;

  return (
    <div className={`${theme.page} min-h-screen transition-colors duration-300`}>
      <SiteHeader
        darkMode={darkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setDarkMode={setDarkMode}
        menuItems={menuItems}
        theme={theme}
      />

      <main className="lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-y-auto scroll-smooth">
        <AboutHeroSection darkMode={darkMode} theme={theme} fadeUp={fadeUp} />
        <AboutStatsSection
          darkMode={darkMode}
          theme={theme}
          fadeUp={fadeUp}
          aboutStats={aboutStats}
        />
        <StorySection darkMode={darkMode} theme={theme} fadeUp={fadeUp} />
        <JourneySection
          darkMode={darkMode}
          theme={theme}
          fadeUp={fadeUp}
          aboutTimeline={aboutTimeline}
        />
        <AboutCtaSection darkMode={darkMode} theme={theme} fadeUp={fadeUp} />
        <FooterSection darkMode={darkMode} theme={theme} />
      </main>

      <BackToTopButton theme={theme} />
    </div>
  );
}