"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import Section from "../../app/Section";

export default function PortfolioTestimonialsSection({
  darkMode,
  theme,
  fadeUp,
  portfolioTestimonials = [],
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (portfolioTestimonials.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % portfolioTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [portfolioTestimonials.length]);

  if (!portfolioTestimonials.length) return null;

  const visibleCards = [
    portfolioTestimonials[activeIndex],
    portfolioTestimonials[(activeIndex + 1) % portfolioTestimonials.length],
    portfolioTestimonials[(activeIndex + 2) % portfolioTestimonials.length],
  ];

  return (
    <Section
      id="portfolio-testimonials"
      className={theme.sectionAltBg}
      darkMode={darkMode}
    >
      <div className="w-full">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.1}
          variants={fadeUp}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div
            className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
          >
            Testimonials
          </div>

          <h2
            className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}
          >
            Feedback that reflects clarity, trust, and quality.
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 lg:grid-cols-3"
            >
              {visibleCards.map((item, index) => (
                <motion.div
                  key={`${item.name}-${activeIndex}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`group relative overflow-hidden rounded-[2rem] border p-8 backdrop-blur-xl ${
                    darkMode
                      ? "border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
                      : "border-[#dbe7df] bg-white/90 shadow-[0_20px_80px_rgba(16,24,40,0.08)]"
                  }`}
                >
                  <div className="relative z-10 flex h-full flex-col">
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${
                        darkMode
                          ? "bg-white/10 text-green-400"
                          : "bg-[#f0fdf4] text-green-700"
                      }`}
                    >
                      <Quote size={24} />
                    </div>

                    <p
                      className={`flex-1 text-base leading-8 ${theme.textSecondary}`}
                    >
                      “{item.quote}”
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold ${
                          darkMode
                            ? "bg-white/10 text-white"
                            : "bg-[#f8faf8] text-[#0f172a]"
                        }`}
                      >
                        {item.name
                          .split(" ")
                          .map((word) => word[0])
                          .slice(0, 2)
                          .join("")}
                      </div>

                      <div>
                        <div className={`font-semibold ${theme.textPrimary}`}>
                          {item.name}
                        </div>
                        <div className={`mt-1 text-sm ${theme.textSecondary}`}>
                          {item.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-3">
            {portfolioTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-green-500"
                    : darkMode
                    ? "w-2.5 bg-white/20 hover:bg-white/40"
                    : "w-2.5 bg-[#cbd5e1] hover:bg-[#94a3b8]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}