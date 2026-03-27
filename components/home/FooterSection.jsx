import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import Section from "../../app/Section";

const contactItems = [
  {
    title: "Contact",
    value: "0531826230",
    href: "tel:0531826230",
    icon: Phone,
  },
  {
    title: "WhatsApp",
    value: "0531826230",
    href: "https://wa.me/966531826230",
    icon: MessageCircle,
    external: true,
  },
  {
    title: "Email",
    value: "hello@codesudio.com",
    href: "mailto:hello@codesudio.com",
    icon: Mail,
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "#contact" },
];

export default function FooterSection({ darkMode, theme, fadeUp }) {
  return (
    <Section
      id="contact"
      darkMode={darkMode}
      className={
        darkMode
          ? "bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.14),transparent_32%),linear-gradient(180deg,#050505,#0b0b0b)]"
          : "bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.10),transparent_30%),linear-gradient(180deg,#f8fffb,#ffffff)]"
      }
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="flex w-full flex-col items-center text-center"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
          <h2
            className={`text-4xl font-bold uppercase tracking-[0.18em] sm:text-5xl lg:text-6xl ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            CODESUDIO
          </h2>

          <p
            className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
              darkMode ? "text-white/70" : "text-neutral-600"
            }`}
          >
            We craft modern websites, web applications, and digital experiences
            that help businesses grow faster, look stronger, and convert better
            online.
          </p>

          <div className="mt-12 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`group relative overflow-hidden rounded-[1.8rem] border p-6 text-left transition-all duration-150 hover:-translate-y-1.5 ${
                    darkMode
                      ? "border-white/10 bg-white/[0.04] hover:border-[#22c55e]/35 hover:bg-white/[0.07]"
                      : "border-[#bfe8cc] bg-white hover:border-[#22c55e]/40 hover:bg-white hover:shadow-[0_18px_50px_rgba(34,197,94,0.14)]"
                  }`}
                >
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div
                      className={`inline-flex rounded-2xl border p-3 transition-all duration-150 ${
                        darkMode
                          ? "border-white/10 bg-white/5 text-[#22c55e] group-hover:border-[#22c55e]/30"
                          : "border-[#bfe8cc] bg-[#f6fff9] text-[#22c55e] group-hover:border-[#22c55e]/30"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <ArrowUpRight
                      className={`h-5 w-5 shrink-0 transition-all duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                        darkMode ? "text-white/35" : "text-neutral-400"
                      }`}
                    />
                  </div>

                  <div className="relative z-10 mt-5">
                    <div
                      className={`text-xs font-semibold uppercase tracking-[0.24em] ${
                        darkMode ? "text-white/45" : "text-neutral-500"
                      }`}
                    >
                      {item.title}
                    </div>

                    <div className="mt-3 break-all text-lg font-bold text-[#22c55e]">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <div className="mt-14 flex flex-col items-center">
            <div
              className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                darkMode ? "text-white/45" : "text-neutral-500"
              }`}
            >
              Quick Links
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-150 ${
                    darkMode
                      ? "border-white/10 bg-white/[0.03] text-white/80 hover:border-[#22c55e]/35 hover:bg-[#22c55e]/10 hover:text-[#22c55e]"
                      : "border-[#bfe8cc] bg-white text-neutral-700 hover:border-[#22c55e]/35 hover:bg-[#f3fff7] hover:text-[#16a34a]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div
            className={`mt-12 w-full border-t pt-6 text-center text-sm ${
              darkMode
                ? "border-white/10 text-white/50"
                : "border-[#bfe8cc] text-neutral-500"
            }`}
          >
            © {new Date().getFullYear()} Codesudio. All rights reserved.
          </div>
        </div>
      </motion.div>
    </Section>
  );
}