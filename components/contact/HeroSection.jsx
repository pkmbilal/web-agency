"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "../../app/Section";

export default function HeroSection({ darkMode, theme, fadeUp }) {
  return (
    <Section
      id="contact-hero"
      darkMode={darkMode}
      fullBleed
      className={`relative flex min-h-screen items-center ${theme.heroBg}`}
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1587560699334-bea93391dcef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Contact Codesudio"
          className="h-full w-full object-cover"
        />
        <div className={`absolute inset-0 ${theme.heroOverlay}`} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-4xl"
        >
          <div
            className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
          >
            Contact Us
          </div>

          <h1
            className={`max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl ${theme.textPrimary}`}
          >
            Web Development Company in Saudi Arabia
          </h1>

          <p
            className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${theme.textSecondary}`}
          >
            Codesudio is a web development company in Saudi Arabia helping businesses with modern websites, web applications, redesigns, and custom digital solutions built for growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact-main"
              className={`inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition ${theme.buttonPrimary}`}
            >
              Send Inquiry <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}