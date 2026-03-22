"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Section from "../../app/Section";

export default function ContactSection({ darkMode, theme, fadeUp }) {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showQuoteForm ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showQuoteForm]);

  const modalBg = darkMode ? "bg-[#0f0f0f]" : "bg-white";
  const fieldBg = darkMode ? "bg-[#151515]" : "bg-white";
  const fieldBorder = darkMode ? "border-white/10" : "border-black/10";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleCloseModal = () => {
    setShowQuoteForm(false);
    setTimeout(() => setIsSubmitted(false), 200);
  };

  return (
    <Section id="getaquote" className={theme.ctaBg} darkMode={darkMode}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        className="w-full text-center"
      >
        <div
          className={`mx-auto max-w-5xl rounded-[2.5rem] border px-6 py-14 backdrop-blur-sm sm:px-10 sm:py-16 lg:px-14 lg:py-20 ${theme.panel}`}
        >
          <div
            className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
          >
            Contact
          </div>

          <h2
            className={`text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl ${theme.textPrimary}`}
          >
            Let’s build a website your business can actually be proud of.
          </h2>

          <p
            className={`mx-auto mt-7 max-w-2xl text-lg leading-8 sm:text-xl ${theme.textMuted}`}
          >
            Whether you need a fresh launch, a redesign, or a custom web app,
            Codesudio can turn the idea into a sharp digital product.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition sm:px-7 sm:py-4 sm:text-base ${theme.buttonPrimary}`}
            >
              Book a Discovery Call <ArrowRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={() => setShowQuoteForm(true)}
              className={`inline-flex items-center rounded-full border px-5 py-3 text-sm font-semibold transition sm:px-7 sm:py-4 sm:text-base ${theme.buttonGhost}`}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showQuoteForm && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-2xl rounded-[2rem] border p-6 text-left shadow-2xl sm:p-8 ${modalBg} ${fieldBorder}`}
            >
              {!isSubmitted ? (
                <>
                  <div
                    className={`mb-2 text-sm font-medium uppercase tracking-[0.3em] ${theme.textFaint}`}
                  >
                    Get a Quote
                  </div>

                  <h3
                    className={`text-2xl font-semibold sm:text-3xl ${theme.textPrimary}`}
                  >
                    Tell us about your project
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-7 sm:text-base ${theme.textMuted}`}
                  >
                    Fill in the details below and we’ll get back to you with the
                    best solution for your business.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 grid gap-4 sm:grid-cols-2"
                  >
                    <div>
                      <label
                        className={`mb-2 block text-sm font-medium ${theme.textPrimary}`}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${fieldBg} ${fieldBorder} ${theme.textPrimary} placeholder:opacity-70`}
                        required
                      />
                    </div>

                    <div>
                      <label
                        className={`mb-2 block text-sm font-medium ${theme.textPrimary}`}
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="Your phone number"
                        className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${fieldBg} ${fieldBorder} ${theme.textPrimary} placeholder:opacity-70`}
                        required
                      />
                    </div>

                    <div>
                      <label
                        className={`mb-2 block text-sm font-medium ${theme.textPrimary}`}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Your email"
                        className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${fieldBg} ${fieldBorder} ${theme.textPrimary} placeholder:opacity-70`}
                        required
                      />
                    </div>

                    <div>
                      <label
                        className={`mb-2 block text-sm font-medium ${theme.textPrimary}`}
                      >
                        Service
                      </label>
                      <select
                        defaultValue=""
                        required
                        className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${fieldBg} ${fieldBorder} ${theme.textPrimary}`}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="static-websites">Static Websites</option>
                        <option value="dynamic-web-apps">
                          Dynamic Web Applications
                        </option>
                        <option value="website-redesign">Website Redesign</option>
                        <option value="seo">SEO</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        className={`mb-2 block text-sm font-medium ${theme.textPrimary}`}
                      >
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your project"
                        className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${fieldBg} ${fieldBorder} ${theme.textPrimary} placeholder:opacity-70`}
                        required
                      />
                    </div>

                    <div className="sm:col-span-2 flex flex-wrap gap-3 pt-2">
                      <button
                        type="submit"
                        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition sm:px-7 sm:py-4 sm:text-base ${theme.buttonPrimary}`}
                      >
                        Send Quote Request <ArrowRight className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className={`inline-flex items-center rounded-full border px-6 py-3 text-sm font-semibold transition sm:px-7 sm:py-4 sm:text-base ${theme.buttonGhost}`}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[320px] flex-col items-center justify-center text-center"
                >
                  <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>

                  <h3
                    className={`text-2xl font-semibold sm:text-3xl ${theme.textPrimary}`}
                  >
                    Form submitted
                  </h3>

                  <p
                    className={`mt-4 max-w-md text-sm leading-7 sm:text-base ${theme.textMuted}`}
                  >
                    Thank you for reaching out. We will contact you soon.
                  </p>

                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className={`mt-8 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition sm:px-7 sm:py-4 sm:text-base ${theme.buttonPrimary}`}
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}