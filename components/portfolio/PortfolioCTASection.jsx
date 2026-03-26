"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "../../app/Section";

export default function PortfolioCTASection({ darkMode, theme, fadeUp }) {
  return (
    <Section
      id="portfolio-cta"
      className="relative overflow-hidden"
      darkMode={darkMode}
      fullBleed
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.16),transparent_45%)]" />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:flex sm:min-h-screen sm:items-center sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeUp}
            className={`w-full rounded-[2rem] border ${theme.panel} ${theme.cardBg} p-10 text-center backdrop-blur-sm sm:p-14`}
          >
            <div
              className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
            >
              Let’s Build Yours
            </div>

            <h2
              className={`mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}
            >
              Need a portfolio-worthy website for your business or agency?
            </h2>

            <p
              className={`mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg ${theme.textSecondary}`}
            >
              We can create a modern, premium website that reflects your brand
              better and gives clients more confidence in your services.
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${theme.buttonPrimary}`}
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}