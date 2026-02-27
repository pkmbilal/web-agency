"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  MonitorSmartphone,
  Megaphone,
  LayoutDashboard,
  RefreshCcw,
  Gauge,
  ArrowLeft,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function SlideArt({ variant = 0 }) {
  // Simple SVG "image" so you don't need real assets yet (still looks modern)
  const styles = [
    { a: "#6366F1", b: "#22C55E", c: "#EC4899" },
    { a: "#0EA5E9", b: "#6366F1", c: "#F97316" },
    { a: "#22C55E", b: "#A855F7", c: "#06B6D4" },
    { a: "#EC4899", b: "#F59E0B", c: "#6366F1" },
    { a: "#F97316", b: "#06B6D4", c: "#22C55E" }
  ];
  const s = styles[variant % styles.length];

  return (
    <div className="relative h-[260px] w-full overflow-hidden rounded-2xl border bg-white shadow-glow md:h-[330px]">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            `radial-gradient(700px 300px at 20% 20%, ${s.a}33, transparent 55%),
             radial-gradient(700px 300px at 80% 30%, ${s.b}33, transparent 55%),
             radial-gradient(700px 300px at 50% 90%, ${s.c}2b, transparent 55%)`
        }}
      />
      <svg
        className="absolute -right-10 -top-14 h-[420px] w-[420px] opacity-80"
        viewBox="0 0 400 400"
        fill="none"
      >
        <defs>
          <linearGradient id={`g${variant}`} x1="0" y1="0" x2="400" y2="400">
            <stop stopColor={s.a} />
            <stop offset="0.5" stopColor={s.b} />
            <stop offset="1" stopColor={s.c} />
          </linearGradient>
        </defs>
        <path
          d="M270 30c60 25 95 83 86 148-9 65-60 104-115 137-55 33-114 60-162 33-48-27-54-98-30-162 24-64 161-186 221-156Z"
          fill={`url(#g${variant})`}
          opacity="0.65"
        />
      </svg>

      {/* fake UI blocks */}
      <div className="absolute left-6 top-6 right-6 rounded-2xl border bg-white/70 p-4 backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="h-3 w-24 rounded-full bg-black/10" />
          <div className="h-8 w-8 rounded-xl bg-black/10" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="h-16 rounded-xl bg-black/10" />
          <div className="h-16 rounded-xl bg-black/10" />
          <div className="h-16 rounded-xl bg-black/10" />
        </div>
        <div className="mt-3 h-10 rounded-xl bg-black/10" />
      </div>

      <div className="absolute bottom-5 left-6 inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs font-semibold backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-primary" />
        Built for speed + conversion
      </div>
    </div>
  );
}

export default function HeroSlider() {
  const slides = useMemo(
    () => [
      {
        badge: "Service 1",
        title: "Static Websites",
        subtitle:
          "Fast, secure, affordable websites with great SEO and low maintenance.",
        icon: MonitorSmartphone,
        bullets: ["Mobile-first layout + clean sections", "SEO-ready structure (metadata, sitemap, OG)", "Blazing-fast load with minimal maintenance"],
        art: 0
      },
      {
        badge: "Service 2",
        title: "Dynamic Web Apps",
        subtitle:
          "Interactive, database-driven apps with logins, dashboards, and real-time updates.",
        icon: Megaphone,
        bullets: ["Auth + roles + protected dashboards", "Database + admin panels", "Real-time updates + scalable structure"],
        art: 1
      },
      {
        badge: "Service 3",
        title: "Website Redesign",
        subtitle:
          "Refresh your UI, improve UX, and modernize the structure and branding.",
        icon: LayoutDashboard,
        bullets: ["Modern UI refresh that keeps your brand", "Better UX flow + improved conversions", "Cleanup messy layout + consistent spacing"],
        art: 2
      },
      {
        badge: "Service 4",
        title: "SEO",
        subtitle:
          "Improve rankings, increase traffic, and convert more customers from search.",
        icon: RefreshCcw,
        bullets: ["Keyword research + on-page optimization for higher rankings", "Technical SEO improvements (speed, structure, indexing)", "Content strategy to grow traffic and increase conversions"],
        art: 3
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  const slide = slides[index];
  const Icon = slide.icon;

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pt-10 pb-8 md:px-6 md:pt-14">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          {/* <Badge className="rounded-full px-3 py-1">
            {slide.badge}
          </Badge> */}

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            <span className="text-primary">{slide.title}</span>
          </h1>

          <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            {slide.subtitle}
          </p>

          <div className="mt-6 grid gap-2">
            {slide.bullets.map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="text-foreground/90">{b}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild className="rounded-xl">
              <Link href="#contact">Get a Quote</Link>
            </Button>
            <Button asChild variant="secondary" className="rounded-xl">
              <Link href="#services">View Services</Link>
            </Button>

            <div className="ml-0 flex items-center gap-2 md:ml-2">
              <button
                onClick={prev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-white/70 backdrop-blur hover:bg-white"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-white/70 backdrop-blur hover:bg-white"
                aria-label="Next slide"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full border transition",
                  i === index ? "bg-primary border-primary" : "bg-white/70"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border bg-white/70 px-3 py-2 text-xs text-muted-foreground backdrop-blur">
            <Icon className="h-4 w-4 text-primary" />
            Single-page now — services pages + blog later ✅
          </div> */}
        </div>

        <div className="animate-floaty">
          <SlideArt variant={slide.art} />
        </div>
      </div>
    </section>
  );
}