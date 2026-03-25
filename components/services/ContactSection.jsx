import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "../../app/Section";

export default function ContactSection({ darkMode, theme, fadeUp }) {
  return (
    <Section
      id="contact"
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
            Start a Project
          </div>

          <h2
            className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}
          >
            Need a website or web app that works hard for your business?
          </h2>

          <p
            className={`mx-auto mt-6 max-w-2xl text-base leading-8 sm:text-lg ${theme.textSecondary}`}
          >
            Let’s build something modern, fast, and strategically designed to
            help your business grow with confidence online.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className={`inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition ${theme.buttonPrimary}`}
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/portfolio"
              className={`inline-flex items-center rounded-full border px-7 py-4 text-base font-semibold transition ${theme.buttonGhost}`}
            >
              View Portfolio
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}