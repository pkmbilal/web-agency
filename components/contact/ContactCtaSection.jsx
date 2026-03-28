"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "../../app/Section";

export default function ContactCtaSection({ darkMode, theme, fadeUp }) {
  return (
    <Section
      id="contact-cta"
      className={`${theme.ctaBg} py-0`}
      darkMode={darkMode}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        className="w-full text-center"
      >
        <div
          className={`mx-auto max-w-5xl rounded-[2.5rem] border px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20 ${theme.panel}`}
        >
          <div
            className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
          >
            Ready to Start
          </div>

          <h2
            className={`mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}
          >
            Let’s turn your idea into a modern digital experience.
          </h2>

          <p
            className={`mx-auto mt-6 max-w-2xl text-base leading-8 sm:text-lg ${theme.textSecondary}`}
          >
            Send your project details today and take the first step toward a
            stronger online presence.
          </p>

          <div className="mt-10">
            <a
              href="#contact-main"
              className={`inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition ${theme.buttonPrimary}`}
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}