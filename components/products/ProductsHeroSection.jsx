import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "../../app/Section";

export default function ProductsHeroSection({ darkMode, theme, fadeUp }) {
  return (
    <Section
      id="products-hero"
      darkMode={darkMode}
      fullBleed
      className={`relative flex min-h-screen items-center ${theme.heroBg}`}
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop"
          alt="Modern digital products workspace"
          className="h-full w-full object-cover brightness-[0.95] contrast-110"
        />
        <div className={`absolute inset-0 ${theme.heroOverlay}`} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-4xl"
        >
          <div
            className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
          >
            Digital Products
          </div>

          <h1
            className={`max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl ${theme.textPrimary}`}
          >
            Digital products designed to help brands launch faster and grow
            smarter.
          </h1>

          <p
            className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${theme.textSecondary}`}
          >
            We create product-focused websites, conversion-driven landing pages,
            scalable web solutions, and polished digital experiences built for
            real business growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className={`inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition ${theme.buttonPrimary}`}
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#products-grid"
              className={`inline-flex items-center rounded-full border border-[#16a34a] px-7 py-4 text-base font-semibold transition ${theme.buttonGhost}`}
            >
              View Products
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}