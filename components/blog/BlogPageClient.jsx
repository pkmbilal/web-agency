"use client";

import { useEffect, useRef, useState } from "react";
import { useThemeMode } from "../../lib/useThemeMode";
import { getTheme } from "../../lib/theme";
import { menuItems } from "../../lib/siteData";

import SiteHeader from "../home/SiteHeader";
import BackToTopButton from "../home/BackToTopButton";
import FooterSection from "../home/FooterSection";
import BlogComingSoonSection from "../blog/BlogComingSoonSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function BlogPageClient() {
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
        <BlogComingSoonSection
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