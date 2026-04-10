"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock3, PenTool } from "lucide-react";

export default function BlogComingSoonSection({ darkMode, theme, fadeUp }) {
  return (
    <section className="relative flex min-h-screen snap-start items-center overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[10%] top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-[10%] top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-16 left-1/3 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl justify-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className={`w-full rounded-[32px] border p-8 text-center shadow-xl sm:p-12 lg:p-16 ${
            darkMode ? "border-gray-300/30 bg-white/5" : `${theme.card}`
          }`}
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
            <PenTool className="h-8 w-8" />
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-emerald-500">
            <Clock3 className="h-4 w-4" />
            Blog is under construction
          </div>

          <h1
            className={`text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl ${theme.textPrimary}`}
          >
            Blog coming soon
          </h1>

          <p
            className={`mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg ${theme.textSecondary}`}
          >
            We are working on useful articles covering web design, development,
            SEO, and digital growth. Fresh insights will be published soon.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition ${theme.card} ${theme.textPrimary}`}
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
