"use client";

import { motion } from "framer-motion";
import Section from "../../app/Section";

export default function PortfolioProcessSection({
  darkMode,
  theme,
  fadeUp,
  portfolioProcess,
}) {
  return (
    <Section
      id="portfolio-process"
      className={theme.sectionBg}
      darkMode={darkMode}
    >
      <div className="w-full">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.1}
          variants={fadeUp}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div
            className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
          >
            Workflow
          </div>

          <h2
            className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}
          >
            A structured process from concept to final launch.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {portfolioProcess.map((step, index) => (
            <motion.div
              key={step.step}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              custom={0.15 + index * 0.12}
              variants={fadeUp}
              className={`rounded-[2rem] border ${theme.panel} ${theme.cardBg} p-8`}
            >
              <div className="text-sm font-medium tracking-[0.3em] text-emerald-400">
                {step.step}
              </div>

              <h3 className={`mt-5 text-xl font-semibold ${theme.textPrimary}`}>
                {step.title}
              </h3>

              <p className={`mt-4 text-sm leading-7 ${theme.textSecondary}`}>
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}