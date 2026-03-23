import { motion } from "framer-motion";
import Section from "../../app/Section";

const leftVariant = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function StorySection({ darkMode, theme }) {
  return (
    <Section id="story" className={theme.sectionBg} darkMode={darkMode}>
      <div className="grid w-full items-stretch gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={leftVariant}
          className="flex h-full flex-col justify-center"
        >
          <div className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}>
            Our Story
          </div>

          <h2 className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}>
            A creative and technical partner for ambitious brands.
          </h2>

          <div className={`mt-6 space-y-6 text-base leading-8 sm:text-lg ${theme.textSecondary}`}>
            <p>
              We started Codesudio with a simple goal: help businesses present themselves better online
              through websites that are modern, strategic, and built for real outcomes.
            </p>
            <p>
              Our work combines thoughtful design, strong frontend implementation, responsive layouts,
              performance optimization, and a clear user experience. We do not just make pages look good —
              we make them work better.
            </p>
            <p>
              Whether it is a company website, SaaS product presentation, landing page, or redesign,
              we focus on delivering clean execution and a polished digital presence.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={rightVariant}
          className="h-full"
        >
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Codesudio team working together"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}