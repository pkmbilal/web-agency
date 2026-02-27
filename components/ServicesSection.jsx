import {
  MonitorSmartphone,
  LayoutDashboard,
  RefreshCcw,
  Gauge,
  ArrowRight,
} from "lucide-react";
import Section from "@/components/Section";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SERVICES = [
  {
    title: "Static Websites",
    desc: "Fast, secure, affordable websites with great SEO and low maintenance.",
    icon: MonitorSmartphone,
    color: "from-indigo-500/20 via-emerald-500/10 to-pink-500/10",
    chip: "Mobile + SEO",
    features: [
      "Mobile-first layout + clean sections",
      "SEO-ready structure (metadata, sitemap, OG)",
      "Blazing-fast load with minimal maintenance",
    ],
    primaryCta: "Build my website",
  },
  {
    title: "Dynamic Web Applications",
    desc: "Interactive, database-driven apps with logins, dashboards, and real-time updates.",
    icon: LayoutDashboard,
    color: "from-emerald-500/20 via-purple-500/10 to-cyan-500/10",
    chip: "Next.js + Supabase",
    features: [
      "Auth + roles + protected dashboards",
      "Database + admin panels",
      "Real-time updates + scalable structure",
    ],
    primaryCta: "Discuss my app",
  },
  {
    title: "Website Redesign",
    desc: "Refresh your UI, improve UX, and modernize the structure and branding.",
    icon: RefreshCcw,
    color: "from-pink-500/20 via-amber-500/10 to-indigo-500/10",
    chip: "Redesign",
    features: [
      "Modern UI refresh that keeps your brand",
      "Better UX flow + improved conversions",
      "Cleanup messy layout + consistent spacing",
    ],
    primaryCta: "Redesign my site",
  },
  {
    title: "Search Engine Optimization",
    desc: "Improve rankings, increase traffic, and convert more customers from search.",
    icon: Gauge,
    color: "from-orange-500/20 via-cyan-500/10 to-emerald-500/10",
    chip: "Performance",
    features: [
      "Keyword research + on-page optimization for higher rankings",
      "Technical SEO improvements (speed, structure, indexing)",
      "Content strategy to grow traffic and increase conversions",
    ],
    primaryCta: "Index my site",
  },
];

export default function ServicesSection() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Big, bold services — each with its own vibe"
      subtitle="Everything you need to launch, improve, and grow a high-performing website."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {SERVICES.map((s) => {
          const Icon = s.icon;

          return (
            <Card key={s.title} className="overflow-hidden rounded-3xl shadow-glow">
              <div className={`h-2 w-full bg-gradient-to-r ${s.color}`} />

              <CardHeader className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <CardTitle className="text-xl md:text-2xl">{s.title}</CardTitle>
                      <CardDescription className="mt-1 text-sm md:text-base">
                        {s.desc}
                      </CardDescription>
                    </div>
                  </div>

                  {/* <Badge variant="secondary" className="rounded-full">
                    {s.chip}
                  </Badge> */}
                </div>
              </CardHeader>

              <CardContent className="p-6 pt-0 md:p-7 md:pt-0">
                <div className="grid gap-3 rounded-2xl border bg-white/60 p-4 backdrop-blur">
                  <div className="text-sm text-muted-foreground">What you get:</div>

                  <ul className="grid gap-2 text-sm">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-2 flex flex-wrap gap-3">
                    <Button asChild className="rounded-xl">
                      <a href="#contact">
                        {s.primaryCta ?? "Ask about this"}{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>

                    <Button asChild variant="secondary" className="rounded-xl">
                      <a href="#faq">How it works</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}