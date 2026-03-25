import { motion } from "framer-motion";
import Section from "../../app/Section";

export default function WhyChooseUsSection({
  darkMode,
  theme,
  whyChooseUs,
}) {
  return (
    <Section
      id="why-choose-us"
      className={theme.servicesBg || theme.sectionBg}
      darkMode={darkMode}
    >
      <div className="grid w-full items-stretch gap-10 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex h-full flex-col justify-center"
        >
          <div
            className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
          >
            Why Choose Us
          </div>

          <h2
            className={`max-w-xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}
          >
            A creative and technical partner focused on real business outcomes.
          </h2>

          <div className="mt-8 space-y-5">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: 1 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-start gap-4"
              >
                <span className="mt-2 h-4 w-4 shrink-0 rounded-full bg-[#22c55e]" />
                <p
                  className={`text-base leading-8 sm:text-lg ${theme.textSecondary}`}
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`relative min-h-[420px] overflow-hidden rounded-[2rem] border ${theme.panel}`}
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
            alt="Professional team planning a digital project"
            className="h-full w-full object-cover"
          />
          <div
            className={`absolute inset-0 ${
              darkMode ? "bg-black/50" : "bg-[#22c55e]/20"
            }`}
          />
        </motion.div>
      </div>
    </Section>
  );
}