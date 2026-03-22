import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "../../app/Section";

export default function PortfolioSection({
  darkMode,
  theme,
  portfolioItems,
  fadeUp,
}) {
  return (
    <Section id="portfolio" className={theme.portfolioBg} darkMode={darkMode}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="w-full"
      >
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <div
              className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
            >
              Portfolio
            </div>
            <h2
              className={`text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl ${theme.textPrimary}`}
            >
              Selected work that delivers.
            </h2>
          </div>

          <a
            href="/portfolio"
            className={`inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition sm:px-7 sm:py-4 sm:text-base ${theme.buttonPrimary}`}
          >
            View Full Portfolio <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              className="group"
            >
              <div
                className="relative flex min-h-[460px] cursor-pointer flex-col justify-end overflow-hidden rounded-[2rem] border transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)]"
                style={{
                  borderColor: darkMode
                    ? "rgba(255,255,255,0.10)"
                    : "rgba(184,231,200,1)",
                }}
              >
                <div
                  className="absolute inset-0 scale-100 transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-95"
                  style={{
                    background: darkMode
                      ? "linear-gradient(180deg, rgba(5,5,5,0.16) 0%, rgba(5,5,5,0.78) 70%, rgba(5,5,5,0.92) 100%)"
                      : "linear-gradient(180deg, rgba(8,17,12,0.10) 0%, rgba(8,17,12,0.46) 68%, rgba(8,17,12,0.74) 100%)",
                  }}
                />

                <div className="relative z-10 p-7 transition-all duration-500 group-hover:translate-y-[-6px] sm:p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] transition-all duration-300 group-hover:scale-105 ${
                        darkMode
                          ? "border-white/15 bg-white/10 text-white/80"
                          : "border-white/20 bg-white/85 text-[#102018]"
                      }`}
                    >
                      {item.company}
                    </span>

                    <span
                      className={`text-sm font-medium uppercase tracking-[0.28em] transition-all duration-300 group-hover:translate-x-1 ${
                        darkMode ? "text-white/70" : "text-white/85"
                      }`}
                    >
                      {item.product}
                    </span>
                  </div>

                  <h3 className="max-w-sm text-3xl font-semibold leading-tight text-white transition-all duration-300 group-hover:text-white sm:text-4xl">
                    {item.title}
                  </h3>

                  <p
                    className={`mt-4 max-w-md text-base leading-7 transition-all duration-300 ${
                      darkMode
                        ? "text-white/78 group-hover:text-white/90"
                        : "text-white/90 group-hover:text-white"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
