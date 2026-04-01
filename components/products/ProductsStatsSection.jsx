import { motion } from "framer-motion";
import Section from "../../app/Section";

export default function ProductsStatsSection({
  darkMode,
  theme,
  productStats,
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
      id="products-stats"
      className={theme.sectionBg}
      darkMode={darkMode}
    >
      <div className="w-full">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div
            className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
          >
            Why Our Products
          </div>

          <h2
            className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}
          >
            Built with clarity, performance, and modern user experience in mind.
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
          {productStats.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className={`group cursor-pointer flex min-h-[240px] flex-col rounded-[1.8rem] border p-7 backdrop-blur-md transition-all duration-300 sm:p-8 ${theme.panel} hover:border-[#22c55e]/40 hover:shadow-[0_0_0_1px_rgba(34,197,94,0.18),0_18px_40px_rgba(34,197,94,0.10)] ${
                  darkMode ? "hover:bg-white/[0.05]" : "hover:bg-[#f7fff9]"
                }`}
              >
                <div
                  className={`inline-flex w-fit rounded-2xl border p-3 transition-all duration-300 ${theme.softPanel} group-hover:border-[#22c55e]/35 group-hover:bg-[#22c55e]/10`}
                >
                  <Icon className="h-6 w-6 text-[#22c55e] transition-opacity duration-300 group-hover:opacity-90" />
                </div>

                <div className="mt-8 text-4xl font-bold text-[#22c55e] sm:text-5xl">
                  {item.value}
                </div>

                <div
                  className={`mt-4 text-lg font-medium transition-colors duration-300 ${theme.textPrimary} ${
                    darkMode ? "group-hover:text-white" : "group-hover:text-[#0f172a]"
                  }`}
                >
                  {item.title}
                </div>

                <p
                  className={`mt-2 text-sm leading-7 transition-colors duration-300 ${theme.textSecondary} ${
                    darkMode ? "group-hover:text-white/80" : "group-hover:text-[#334155]"
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}