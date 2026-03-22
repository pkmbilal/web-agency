import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "../../app/Section";

export default function ServicesSection({ darkMode, theme, services, fadeUp }) {
  return (
    <Section id="services" className={theme.servicesBg} darkMode={darkMode}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        className="w-full"
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <div
              className={`mb-5 text-sm font-medium uppercase tracking-[0.35em] ${theme.textFaint}`}
            >
              Services
            </div>
            <h2
              className={`max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl ${theme.textPrimary}`}
            >
              From simple websites to custom systems.
            </h2>
            <p className={`mt-7 max-w-xl text-lg leading-8 ${theme.textMuted}`}>
              We help businesses launch better digital experiences with sharper
              design, faster pages, and more strategic structure.
            </p>
            <a
              href="/services"
              className={`mt-8 inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition sm:px-7 sm:py-4 sm:text-base ${theme.buttonPrimary}`}
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <div
                    className="relative min-h-[360px] overflow-hidden rounded-[2rem] border transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl"
                    style={{
                      borderColor: darkMode
                        ? "rgba(255,255,255,0.10)"
                        : "rgba(184,231,200,1)",
                    }}
                  >
                    <div
                      className="absolute inset-0 z-0"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    <div
                      className="absolute inset-0 z-[1] transition-opacity duration-500"
                      style={{
                        background: darkMode
                          ? "linear-gradient(180deg, rgba(5,5,5,0.34) 0%, rgba(5,5,5,0.76) 60%, rgba(5,5,5,0.92) 100%)"
                          : "linear-gradient(180deg, rgba(8,17,12,0.16) 0%, rgba(8,17,12,0.44) 58%, rgba(8,17,12,0.74) 100%)",
                      }}
                    />

                    <div
                      className="absolute inset-0 z-[2] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: darkMode
                          ? "linear-gradient(180deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.16) 100%)"
                          : "linear-gradient(180deg, rgba(22,163,74,0.08) 0%, rgba(22,163,74,0.16) 100%)",
                      }}
                    />

                    <div className="relative z-10 flex min-h-[360px] flex-col justify-between px-6 py-8 sm:px-7 sm:py-10">
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className={`inline-flex rounded-2xl border p-3 backdrop-blur-sm transition-all duration-500 ${
                            darkMode
                              ? "border-white/12 bg-white/10 group-hover:border-[#22c55e]/35 group-hover:bg-[#22c55e]/12"
                              : "border-white/25 bg-white/80 group-hover:border-[#16a34a]/35 group-hover:bg-[#dcfce7]"
                          }`}
                        >
                          <Icon
                            className={`h-6 w-6 ${darkMode ? "text-white" : "text-[#102018]"}`}
                          />
                        </div>
                      </div>

                      <div className="translate-y-2 cursor-pointer transition-transform duration-500 group-hover:translate-y-0">
                        <h3
                          className={`max-w-[12ch] line-clamp-2 text-[1.7rem] font-semibold leading-tight sm:text-[1.85rem] ${
                            darkMode ? "text-white" : "text-[#f8fffb]"
                          }`}
                        >
                          {service.title}
                        </h3>

                        <p
                          className={`mt-4 max-w-md text-base leading-7 transition-opacity duration-500 ${
                            darkMode
                              ? "text-white/82 group-hover:text-white"
                              : "text-white/95 group-hover:text-white"
                          }`}
                        >
                          {service.description}
                        </p>

                        <div
                          className={`mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.24em] transition-all duration-500 ${
                            darkMode
                              ? "text-white/78 group-hover:text-white"
                              : "text-white/90 group-hover:text-white"
                          }`}
                        >
                          Explore service
                          <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}