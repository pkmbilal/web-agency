"use client";

import { useEffect, useRef, useState } from "react";
import { useThemeMode } from "../../lib/useThemeMode";
import { getTheme } from "../../lib/theme";
import {
  menuItems,
  productStats,
  productCategories,
  productProcess,
  productFaqs,
} from "../../lib/siteData";

import SiteHeader from "../home/SiteHeader";
import BackToTopButton from "../home/BackToTopButton";
import FooterSection from "../home/FooterSection";


import ProductsHeroSection from "./ProductsHeroSection";
import ProductsStatsSection from "./ProductsStatsSection";
import ProductsGridSection from "./ProductsGridSection";
import ProductsProcessSection from "./ProductsProcessSection";
import ProductsFaqSection from "./ProductsFaqSection";
import ProductsCtaSection from "./ProductsCtaSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProductsPageClient() {
  const { darkMode, setDarkMode, mounted } = useThemeMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollRef = useRef(null);

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
    <div
      ref={scrollRef}
      className={`min-h-screen lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-y-auto scroll-smooth transition-colors duration-300 ${theme.page}`}
    >
      <SiteHeader
        darkMode={darkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setDarkMode={setDarkMode}
        menuItems={menuItems}
        theme={theme}
      />

      <main>
        <ProductsHeroSection
          darkMode={darkMode}
          theme={theme}
          fadeUp={fadeUp}
        />

        <ProductsStatsSection
          darkMode={darkMode}
          theme={theme}
          fadeUp={fadeUp}
          productStats={productStats}
        />

        <ProductsGridSection
          darkMode={darkMode}
          theme={theme}
          fadeUp={fadeUp}
          productCategories={productCategories}
        />

        <ProductsProcessSection
          darkMode={darkMode}
          theme={theme}
          fadeUp={fadeUp}
          productProcess={productProcess}
        />

        <ProductsFaqSection
          darkMode={darkMode}
          theme={theme}
          fadeUp={fadeUp}
          productFaqs={productFaqs}
        />

        <ProductsCtaSection
          darkMode={darkMode}
          theme={theme}
          fadeUp={fadeUp}
        />

        <FooterSection darkMode={darkMode} theme={theme} />
      </main>

      <BackToTopButton
        darkMode={darkMode}
        theme={theme}
        scrollRef={scrollRef}
      />
    </div>
  );
}