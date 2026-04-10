import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Section from "../../app/Section";

function CounterNumber({ value, isActive, darkMode, duration = 2000 }) {
  const numericValue = parseInt(value, 10);
  const suffix = value.replace(String(numericValue), "");
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isActive || startedRef.current) return;
    startedRef.current = true;

    let animationFrame;
    const startTime = performance.now();

    const updateCount = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * numericValue);
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [isActive, numericValue, duration]);

  const numberClass = `text-[2.5rem] font-semibold leading-none tabular-nums sm:text-[3.15rem] lg:text-[3.9rem] ${
    darkMode ? "text-[#22c55e]" : "text-[#16a34a]"
  }`;

  return (
    <div className="relative inline-block">
      <span className={`${numberClass} invisible`}>
        {numericValue}
        {suffix}
      </span>
      <span className={`${numberClass} absolute inset-0`}>
        {count}
        {suffix}
      </span>
    </div>
  );
}

export default function AboutSection({ darkMode, theme, aboutStats, fadeUp }) {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.35 });

  return (
    <Section
      id="about"
      className={theme.sectionBg}
      darkMode={darkMode}
      fullBleed
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        className="relative min-h-screen w-full overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1800&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: darkMode
              ? "linear-gradient(180deg, rgba(5,5,5,0.60) 0%, rgba(5,5,5,0.84) 55%, rgba(5,5,5,0.92) 100%)"
              : "linear-gradient(180deg, rgba(244,251,246,0.56) 0%, rgba(244,251,246,0.74) 55%, rgba(244,251,246,0.88) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: darkMode
              ? "radial-gradient(circle at top left, rgba(34,197,94,0.14), transparent 28%)"
              : "radial-gradient(circle at top left, rgba(22,163,74,0.10), transparent 28%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
          <div className="grid w-full gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
            <div className="max-w-4xl">
              <div
                className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
              >
                About
              </div>

              <h1
                className={`max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl ${theme.textPrimary}`}
              >
                Web Development Company in Dammam
              </h1>

              <p
                className={`mt-8 max-w-2xl text-lg leading-8 sm:text-xl ${theme.textMuted}`}
              >
                Codesudio is a web development company in Dammam building modern
                websites, custom web applications, and digital solutions for
                growing businesses in Saudi Arabia.
              </p>
            </div>

            <div className="lg:justify-self-end" ref={statsRef}>
              <div className="grid w-full max-w-2xl gap-5 grid-cols-2">
                {aboutStats.map((item) => {
                  const StatIcon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className={`flex min-h-[220px] flex-col rounded-[1.8rem] border p-7 backdrop-blur-md sm:p-8 ${theme.panel}`}
                    >
                      <div
                        className={`inline-flex w-fit rounded-2xl border p-3 ${
                          darkMode
                            ? "border-white/10 bg-white/5 text-[#22c55e]"
                            : "border-[#b8e7c8] bg-white/85 text-[#16a34a]"
                        }`}
                      >
                        <StatIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>

                      <div className="mt-6">
                        <CounterNumber
                          value={item.value}
                          isActive={statsInView}
                          darkMode={darkMode}
                        />
                      </div>

                      <div
                        className={`mt-4 text-base leading-7 sm:text-lg ${theme.textMuted}`}
                      >
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
