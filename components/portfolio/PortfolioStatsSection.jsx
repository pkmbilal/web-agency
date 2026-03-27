import { motion } from "framer-motion";
import Section from "../../app/Section";

export default function PortfolioStatsSection({
  darkMode,
  theme,
  portfolioStats,
}) {
  const titleVariants = {
    hidden: { opacity: 0, y: -28 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -28 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Section
      id="portfolio-stats"
      className={theme.portfolioBg || theme.sectionBg}
      darkMode={darkMode}
    >
      <div className="w-full">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="mb-12 max-w-3xl"
        >
          <div
            className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
          >
            Portfolio Highlights
          </div>

          <h2
            className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}
          >
            Work that reflects quality, trust, and strong presentation.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                delayChildren: 1,
                staggerChildren: 0.18,
              },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {portfolioStats.map((item) => (
            <motion.div
              key={item.label}
              variants={cardVariants}
              className={`group cursor-pointer flex min-h-[220px] flex-col rounded-[1.8rem] border p-7 backdrop-blur-md transition-all duration-300 sm:p-8 ${theme.panel} hover:border-[#22c55e]/40 hover:shadow-[0_0_0_1px_rgba(34,197,94,0.18),0_18px_40px_rgba(34,197,94,0.10)] ${darkMode ? "hover:bg-white/[0.05]" : "hover:bg-[#f7fff9]"}`}
            >
              <div className="mt-auto text-4xl font-bold text-[#22c55e] sm:text-5xl">
                {item.value}
              </div>

              <div
                className={`mt-4 text-base font-medium leading-7 transition-colors duration-300 ${theme.textSecondary} ${
                  darkMode ? "group-hover:text-white" : "group-hover:text-[#0f172a]"
                }`}
              >
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}