"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Section from "../../app/Section";

export default function ProductsFaqSection({
  darkMode,
  theme,
  fadeUp,
  productFaqs,
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActiveIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Section id="products-faq" className={theme.sectionAltBg} darkMode={darkMode}>
      <motion.div
        ref={wrapperRef}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="grid w-full gap-10 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div>
          <div
            className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
          >
            FAQ
          </div>

          <h2
            className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}
          >
            Common questions about products.
          </h2>

          <p
            className={`mt-5 max-w-xl text-base leading-8 sm:text-lg ${theme.textSecondary}`}
          >
            Here are some of the questions businesses usually ask before
            choosing the right digital product or solution for their needs.
          </p>
        </div>

        <div className="space-y-4">
          {productFaqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-[1.75rem] border transition ${theme.panel}`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={`text-lg font-medium sm:text-xl ${theme.textPrimary}`}
                  >
                    {faq.question}
                  </span>

                  <Plus
                    className={`h-5 w-5 shrink-0 transition duration-300 ${
                      isActive ? "rotate-45" : ""
                    } ${theme.textPrimary}`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`px-6 pb-6 text-base leading-8 ${theme.textSecondary}`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}