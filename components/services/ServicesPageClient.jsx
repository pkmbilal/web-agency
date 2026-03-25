"use client";

import { useRef, useState } from "react";
import { useThemeMode } from "../../lib/useThemeMode";
import { getTheme } from "../../lib/theme";
import {
  serviceFaqs,
  serviceItems,
  processSteps,
  whyChooseUs,
  menuItems,
} from "../../lib/siteData";

import SiteHeader from "../home/SiteHeader";
import BackToTopButton from "../home/BackToTopButton";
import FooterSection from "../home/FooterSection";
import HeroSection from "../services/HeroSection";
import ServicesGridSection from "../services/ServicesGridSection";
import ProcessSection from "../services/ProcessSection";
import WhyChooseUsSection from "../services/WhyChooseUsSection";
import FaqSection from "../services/FaqSection";
import ContactSection from "../services/ContactSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesPageClient() {
  const { darkMode, setDarkMode, mounted } = useThemeMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollRef = useRef(null);
  const theme = getTheme(darkMode);

  if (!mounted) return null;

  return (
    <div
      ref={scrollRef}
      className={`h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth transition-colors duration-300 ${theme.page}`}
    >
      <SiteHeader
        darkMode={darkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setDarkMode={setDarkMode}
        menuItems={menuItems}
        theme={theme}
      />

      <HeroSection darkMode={darkMode} theme={theme} fadeUp={fadeUp} />

      <ServicesGridSection
        darkMode={darkMode}
        theme={theme}
        fadeUp={fadeUp}
        serviceItems={serviceItems}
      />

      <ProcessSection
        darkMode={darkMode}
        theme={theme}
        fadeUp={fadeUp}
        processSteps={processSteps}
      />

      <WhyChooseUsSection
        darkMode={darkMode}
        theme={theme}
        fadeUp={fadeUp}
        whyChooseUs={whyChooseUs}
      />

      <FaqSection
        darkMode={darkMode}
        theme={theme}
        fadeUp={fadeUp}
        faqs={serviceFaqs}
      />

      <ContactSection
        darkMode={darkMode}
        theme={theme}
        fadeUp={fadeUp}
      />

      <FooterSection
        darkMode={darkMode}
        theme={theme}
        fadeUp={fadeUp}
      />

      <BackToTopButton
        darkMode={darkMode}
        theme={theme}
        scrollRef={scrollRef}
      />
    </div>
  );
}