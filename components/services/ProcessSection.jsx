import { motion } from "framer-motion";
import Section from "../../app/Section";

export default function ProcessSection({
  darkMode,
  theme,
  fadeUp,
  processSteps,
}) {
  return (
    <Section id="process" className={theme.portfolioBg} darkMode={darkMode}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="w-full"
      >
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div
            className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
          >
            Our Process
          </div>

          <h2
            className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}
          >
            A clear workflow from idea to launch.
          </h2>

          <p
            className={`mt-5 text-base leading-8 sm:text-lg ${theme.textSecondary}`}
          >
            Every project follows a structured process so the final result is
            not only visually strong, but also purposeful, scalable, and ready
            for growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`rounded-[2rem] border p-8 ${theme.softPanel}`}
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#22c55e] text-sm font-semibold text-[#04110a]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className={`text-2xl font-semibold ${theme.textPrimary}`}>
                  {step.title}
                </h3>
              </div>

              <p className={`text-base leading-8 ${theme.textSecondary}`}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}