import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Section from "../../app/Section";

export default function HeroSection({
  darkMode,
  theme,
  services,
  activeHeroSlide,
  setActiveHeroSlide,
  fadeUp,
}) {
  const currentHero = services[activeHeroSlide];

  return (
    <Section
      id="hero"
      className={`${theme.heroBg}`}
      darkMode={darkMode}
      fullBleed
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="relative min-h-screen w-full"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHero.title + String(darkMode)}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-screen w-full overflow-hidden"
            style={{
              backgroundImage: `url(${currentHero.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className={`absolute inset-0 ${theme.heroOverlay}`} />
            <div
              className="absolute inset-0"
              style={{
                background: darkMode
                  ? "radial-gradient(circle at top left, rgba(34,197,94,0.20), transparent 28%)"
                  : "radial-gradient(circle at top left, rgba(34,197,94,0.12), transparent 30%)",
              }}
            />

            <div className="relative z-10 flex min-h-screen w-full items-center">
              <div className="mx-auto w-full max-w-7xl px-6 pb-28 pt-[calc(88px+2.5rem)] sm:px-8 lg:px-12 lg:pb-32 lg:pt-[calc(88px+3rem)]">
                <div className="max-w-4xl">
                  <div
                    className={`mb-6 inline-flex rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] sm:text-sm ${theme.heroCard} ${theme.textSoft}`}
                  >
                    Codesudio services
                  </div>

                  <div
                    className={`mb-6 text-sm font-medium uppercase tracking-[0.35em] ${theme.textSoft}`}
                  >
                    {currentHero.label}
                  </div>

                  <h2
                    className={`max-w-4xl text-4xl font-semibold leading-[0.94] tracking-tight sm:text-5xl md:text-6xl lg:text-[5.6rem] ${theme.textPrimary}`}
                  >
                    {currentHero.heading}
                  </h2>

                  <p className={`mt-7 max-w-2xl text-lg leading-8 sm:text-xl ${theme.textMuted}`}>
                    {currentHero.description}
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href="#portfolio"
                      className={`inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition ${theme.buttonPrimary}`}
                    >
                      View Work <ArrowRight className="h-4 w-4" />
                    </a>

                    <a
                      href="#contact"
                      className={`inline-flex items-center gap-2 rounded-full border border-[#16a34a] px-7 py-4 text-base font-semibold transition ${theme.buttonGhost}`}
                    >
                      Start a Project
                    </a>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        aria-label="Previous slide"
                        onClick={() =>
                          setActiveHeroSlide((prev) =>
                            prev === 0 ? services.length - 1 : prev - 1
                          )
                        }
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition sm:h-12 sm:w-12 ${theme.heroArrow}`}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>

                      <button
                        type="button"
                        aria-label="Next slide"
                        onClick={() =>
                          setActiveHeroSlide((prev) => (prev + 1) % services.length)
                        }
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition sm:h-12 sm:w-12 ${theme.heroArrow}`}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      {services.map((service, index) => (
                        <button
                          key={service.title}
                          type="button"
                          aria-label={`Go to ${service.title}`}
                          onClick={() => setActiveHeroSlide(index)}
                          className={`h-2.5 rounded-full transition-all ${
                            index === activeHeroSlide
                              ? darkMode
                                ? "w-10 bg-[#22c55e]"
                                : "w-10 bg-[#16a34a]"
                              : `w-2.5 ${theme.heroDotInactive}`
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <a
                    href="#about"
                    className={`mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] transition ${theme.textFaint}`}
                  >
                    Scroll <ChevronDown className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}