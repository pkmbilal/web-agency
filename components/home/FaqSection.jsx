import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Section from "../../app/Section";

export default function FaqSection({ darkMode, theme, faqs, fadeUp }) {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (faqRef.current && !faqRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Section id="faq" className={theme.faqBg} darkMode={darkMode}>
      <motion.div
        ref={faqRef}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
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
            className={`max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl ${theme.textPrimary}`}
          >
            Clear answers before we build.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                className={`rounded-[1.6rem] border border-white/10 p-6 transition-all duration-300 ${theme.softPanel}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className={`flex w-full items-center justify-between gap-6 text-left text-xl font-semibold leading-8 sm:text-2xl ${theme.textPrimary}`}
                >
                  <span>{item.question}</span>

                  <span
                    className={`rounded-full border border-white/10 p-2 transition duration-300 ${
                      isOpen ? "rotate-45" : ""
                    } ${theme.textSoft}`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p
                        className={`pt-5 pr-12 text-base leading-8 sm:text-lg ${theme.textMuted}`}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}