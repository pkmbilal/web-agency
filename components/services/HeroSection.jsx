import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "../../app/Section";

export default function HeroSection({ darkMode, theme, fadeUp }) {
  return (
    <Section
      id="services-hero"
      darkMode={darkMode}
      fullBleed
      className={`relative flex min-h-screen items-center ${theme.heroBg}`}
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80"
          alt="Codesudio services"
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
            Our Services
          </div>

          <h1
            className={`max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl ${theme.textPrimary}`}
          >
            Web Development Company in Riyadh
          </h1>

          <p
            className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${theme.textSecondary}`}
          >
            Codesudio helps businesses in Riyadh with professional website development, web design, custom web applications, and SEO-focused digital solutions built for performance, usability, and growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition ${theme.buttonPrimary}`}
            >
              Start Your Project <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#services-grid"
              className={`inline-flex items-center rounded-full border px-7 py-4 text-base font-semibold transition ${theme.buttonGhost}`}
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}