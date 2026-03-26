"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "../../app/Section";

export default function PortfolioHeroSection({ darkMode, theme, fadeUp }) {
  return (
    <Section
      id="portfolio-hero"
      className={`relative flex min-h-screen items-center ${theme.heroBg}`}
      darkMode={darkMode}
      fullBleed
    >
      <div className="absolute inset-0">
  <img
    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Codesudio portfolio"
    className="h-full w-full object-cover"
  />
  <div className={`absolute inset-0 ${theme.heroOverlay}`} />
</div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeUp}
            className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
          >
            Portfolio
          </motion.div>

          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.25}
            variants={fadeUp}
            className={`max-w-5xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl ${theme.textPrimary}`}
          >
            Modern digital work built to make brands look premium.
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.45}
            variants={fadeUp}
            className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${theme.textSecondary}`}
          >
            Explore selected projects, concept work, redesign directions, and
            web experiences crafted with strategy, clean structure, and high-end
            visual presentation.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.65}
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="#projects"
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${theme.buttonPrimary}`}
            >
              View Projects
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className={`inline-flex items-center rounded-full border px-7 py-4 text-base font-semibold transition ${theme.buttonGhost}`}
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
