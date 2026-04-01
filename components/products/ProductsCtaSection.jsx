import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "../../app/Section";

export default function ProductsCtaSection({ darkMode, theme, fadeUp }) {
  return (
    <Section
      id="products-cta"
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
            Ready to Build
          </div>

          <h2
            className={`mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}
          >
            Let’s build a product experience that looks premium and performs
            better.
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg ${theme.textSecondary}`}
          >
            From landing pages to complete web platforms, we create digital
            products that help brands stand out and convert with confidence.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className={`inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition ${theme.buttonPrimary}`}
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/portfolio"
              className={`inline-flex items-center rounded-full border border-[#16a34a] px-7 py-4 text-base font-semibold transition ${theme.buttonGhost}`}
            >
              View Portfolio
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}