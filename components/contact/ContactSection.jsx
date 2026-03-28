"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import Section from "../../app/Section";

export default function ContactSection({ darkMode, theme, fadeUp }) {
  return (
    <Section
      id="contact-main"
      className={theme.sectionBg}
      darkMode={darkMode}
    >
      <div className="w-full">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div
            className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
          >
            Get In Touch
          </div>

          <h2
            className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}
          >
            Tell us about your project.
          </h2>

          <p
            className={`mt-5 text-base leading-8 sm:text-lg ${theme.textSecondary}`}
          >
            Fill in the form with your project details and we will reach out to
            you as soon as possible.
          </p>
        </motion.div>

        <div className="grid gap-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className={`rounded-[2rem] border p-6 sm:p-8 lg:p-10 ${theme.panel}`}
          >
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    className={`mb-2 block text-sm font-medium ${theme.textPrimary}`}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${theme.input}`}
                  />
                </div>

                <div>
                  <label
                    className={`mb-2 block text-sm font-medium ${theme.textPrimary}`}
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your company"
                    className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${theme.input}`}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    className={`mb-2 block text-sm font-medium ${theme.textPrimary}`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${theme.input}`}
                  />
                </div>

                <div>
                  <label
                    className={`mb-2 block text-sm font-medium ${theme.textPrimary}`}
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    type="text"
                    placeholder="+966 ..."
                    className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${theme.input}`}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    className={`mb-2 block text-sm font-medium ${theme.textPrimary}`}
                  >
                    Project Type
                  </label>
                  <select
                    className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${theme.input}`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Business Website</option>
                    <option>Web Application</option>
                    <option>Website Redesign</option>
                    <option>Landing Page</option>
                    <option>SEO</option>
                  </select>
                </div>

                <div>
                  <label
                    className={`mb-2 block text-sm font-medium ${theme.textPrimary}`}
                  >
                    Budget Range
                  </label>
                  <select
                    className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${theme.input}`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select budget
                    </option>
                    <option>Below SAR 2,000</option>
                    <option>SAR 2,000 - 5,000</option>
                    <option>SAR 5,000 - 10,000</option>
                    <option>SAR 10,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  className={`mb-2 block text-sm font-medium ${theme.textPrimary}`}
                >
                  Project Details
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your project, goals, timeline, and anything important."
                  className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${theme.input}`}
                />
              </div>

              <button
                type="submit"
                className={`flex w-full items-center justify-center rounded-full px-7 py-4 text-base font-semibold transition ${theme.buttonPrimary}`}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}