"use client";

import { motion } from "framer-motion";
import Section from "../../app/Section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fallbackImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
];

export default function ProductsGridSection({
  darkMode,
  theme,
  productCategories,
}) {
  return (
    <Section id="products-grid" className={theme.sectionBg} darkMode={darkMode}>
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <div
            className={`mb-3 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
          >
            Our Products
          </div>

          <h2
            className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${theme.textPrimary}`}
          >
            Products Built for Growth and Performance
          </h2>

          <p
            className={`mt-4 text-base leading-8 sm:text-lg ${theme.textSecondary}`}
          >
            We create premium digital product experiences that help businesses
            launch faster, present better, and scale with confidence.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {productCategories.slice(0, 6).map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group [perspective:1200px]"
            >
              <div className="relative h-[235px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div
                  className={`absolute inset-0 overflow-hidden rounded-[2rem] border ${theme.panel} [backface-visibility:hidden] pointer-events-auto group-hover:pointer-events-none`}
                >
                  <img
                    src={
                      product.image ||
                      fallbackImages[index % fallbackImages.length]
                    }
                    alt={product.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/55" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.16),transparent_34%)]" />

                  <div className="relative z-10 flex h-full items-end p-6">
                    <div className="w-full">
                      <h3 className="text-2xl font-semibold leading-tight text-white">
                        {product.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-white/80 sm:text-base">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div
                  className={`absolute inset-0 rounded-[2rem] border ${theme.panel} ${
                    darkMode ? "bg-[#08110c]" : "bg-white"
                  } p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] pointer-events-none group-hover:pointer-events-auto`}
                >
                  <div className="flex h-full flex-col">
                    <div className="space-y-3">
                      {product.points?.slice(0, 4).map((point) => (
                        <div key={point} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#22c55e]" />
                          <p
                            className={`text-sm leading-6 ${
                              darkMode ? "text-white/80" : "text-black/75"
                            }`}
                          >
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-5">
                      <Link
                        href={product.href || "/products"}
                        className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#22c55e] underline underline-offset-4 transition duration-200 hover:text-[#4ade80]"
                      >
                        Explore More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
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
