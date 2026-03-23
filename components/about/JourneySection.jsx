import { motion } from "framer-motion";
import Section from "../../app/Section";

export default function JourneySection({ darkMode, theme, fadeUp, aboutTimeline }) {
  return (
    <Section id="journey" className={theme.sectionBg} darkMode={darkMode}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        variants={fadeUp}
        className="w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-3xl"
        >
          <div className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}>
            Our Process
          </div>

          <h2 className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}>
            A simple workflow that keeps projects clear and efficient.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {aboutTimeline.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: 0.45 + index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group cursor-pointer rounded-[2rem] border p-7 transition duration-200 sm:p-8 ${theme.panel} ${theme.cardHover}`}
            >
              <div className="flex items-start gap-5">
                <div className="text-3xl font-semibold text-[#22c55e]">
                  {item.step}
                </div>

                <div>
                  <h3 className={`text-xl font-semibold ${theme.textPrimary}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-3 text-base leading-7 ${theme.textSecondary}`}>
                    {item.text}
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