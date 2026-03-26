"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "../../app/Section";

const fallbackImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
];

export default function PortfolioProjectsSection({
  darkMode,
  theme,
  portfolioProjects = [],
}) {
  return (
    <Section id="projects" className={theme.sectionBg} darkMode={darkMode}>
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: 0.8,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <div
            className={`mb-3 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
          >
            Selected Work
          </div>

          <h2
            className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}
          >
            Projects made to elevate brands.
          </h2>

          <p
            className={`mt-4 text-base leading-8 sm:text-lg ${theme.textSecondary}`}
          >
            These examples show the type of layouts, systems, and design direction
            we use to elevate business websites and digital products.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 1.2 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group [perspective:1200px]"
            >
              <div className="relative h-[360px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div
                  className={`absolute inset-0 overflow-hidden rounded-[2rem] border ${theme.panel} [backface-visibility:hidden] pointer-events-auto group-hover:pointer-events-none`}
                >
                  <img
                    src={
                      project.image ||
                      fallbackImages[index % fallbackImages.length]
                    }
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-70"
                  />

                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.16),transparent_34%)]" />

                  <div className="relative z-10 flex h-full w-full items-end p-7">
                    <div className="w-full">
                      <div className="text-xs font-medium uppercase tracking-[0.25em] text-white/70">
                        {project.category}
                      </div>

                      <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-white/80">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 rounded-[2rem] border ${theme.panel} ${
                    darkMode ? "bg-[#08110c]" : "bg-white/80"
                  } p-7 [backface-visibility:hidden] [transform:rotateY(180deg)] pointer-events-none group-hover:pointer-events-auto`}
                >
                  <div className="flex h-full flex-col">
                    <div>
                      <div className="text-sm font-medium uppercase tracking-[0.25em] text-[#22c55e]/80">
                        {project.title}
                      </div>

                      <h3
                        className={`mt-3 text-xl font-semibold sm:text-2xl ${
                          darkMode ? "text-white" : "text-black"
                        }`}
                      >
                        Project Highlights
                      </h3>
                    </div>

                    <div className="mt-6 space-y-3">
                      {(project.results || []).map((result) => (
                        <div key={result} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#22c55e]" />
                          <p
                            className={`text-sm leading-7 ${
                              darkMode ? "text-white/80" : "text-black"
                            }`}
                          >
                            {result}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* <div className="mt-auto pt-8">
                      <Link
                        href={project.link || "/portfolio"}
                        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#22c55e] px-5 py-3 text-sm font-semibold text-[#04110a] transition duration-200 hover:scale-[1.02] hover:bg-[#4ade80]"
                      >
                        View Project
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}