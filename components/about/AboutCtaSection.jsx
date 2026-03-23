import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "../../app/Section";

export default function AboutCtaSection({ darkMode, theme, fadeUp }) {
  return (
    <Section id="about-cta" className={theme.ctaBg} darkMode={darkMode}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="w-full text-center"
      >
        <div className={`mx-auto max-w-5xl rounded-[2.5rem] border px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20 ${theme.panel}`}>
          <div className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}>
            Let’s Work Together
          </div>

          <h2 className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}>
            Ready to build a website that reflects your brand properly?
          </h2>

          <p className={`mx-auto mt-6 max-w-2xl text-base leading-8 sm:text-lg ${theme.textSecondary}`}>
            We help businesses launch premium websites and digital experiences with strong design,
            thoughtful structure, and clean implementation.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className={`inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition ${theme.buttonPrimary}`}
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/"
              className={`inline-flex items-center rounded-full border px-7 py-4 text-base font-semibold transition ${theme.buttonGhost}`}
            >
              Back to Home
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}