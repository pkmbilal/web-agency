"use client";

import { useEffect, useRef, useState } from "react";
import { useThemeMode } from "../../lib/useThemeMode";
import {
  aboutStats,
  faqs,
  menuItems,
  portfolioItems,
  products,
  services,
} from "../../lib/siteData";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import ProductsSection from "./ProductsSection";
import ServicesSection from "./ServicesSection";
import SiteHeader from "./SiteHeader";
import BackToTopButton from "./BackToTopButton";
import FooterSection from "./FooterSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HomePageClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const { darkMode, setDarkMode, theme, mounted } = useThemeMode();
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

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

      <HeroSection
        darkMode={darkMode}
        theme={theme}
        services={services}
        activeHeroSlide={activeHeroSlide}
        setActiveHeroSlide={setActiveHeroSlide}
        fadeUp={fadeUp}
      />

      <AboutSection
        darkMode={darkMode}
        theme={theme}
        aboutStats={aboutStats}
        fadeUp={fadeUp}
      />

      <PortfolioSection
        darkMode={darkMode}
        theme={theme}
        portfolioItems={portfolioItems}
        fadeUp={fadeUp}
      />

      <ServicesSection
        darkMode={darkMode}
        theme={theme}
        services={services}
        fadeUp={fadeUp}
      />

      <ProductsSection
        darkMode={darkMode}
        theme={theme}
        products={products}
        fadeUp={fadeUp}
      />

      <FaqSection
        darkMode={darkMode}
        theme={theme}
        faqs={faqs}
        fadeUp={fadeUp}
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