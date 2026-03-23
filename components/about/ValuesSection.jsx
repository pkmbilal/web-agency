import { motion } from "framer-motion";
import Section from "../../app/Section";

export default function ValuesSection({ darkMode, theme, fadeUp, aboutValues }) {
  return (
    <Section
      id="values"
      className={theme.servicesBg || theme.sectionBg}
      darkMode={darkMode}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="w-full"
      >
        <div className="mb-12 max-w-3xl">
          <div className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}>
            What We Believe
          </div>

          <h2 className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}>
            The principles behind every project we take on.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {aboutValues.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`group rounded-[2rem] border p-7 transition duration-300 sm:p-8 ${theme.panel}`}
              >
                <div
                  className={`inline-flex rounded-2xl border p-3 transition duration-300 ${theme.softPanel}`}
                >
                  <Icon className={`h-6 w-6 ${theme.textPrimary}`} />
                </div>

                <h3 className={`mt-6 text-xl font-semibold ${theme.textPrimary}`}>
                  {item.title}
                </h3>

                <p className={`mt-4 text-base leading-7 ${theme.textSecondary}`}>
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}