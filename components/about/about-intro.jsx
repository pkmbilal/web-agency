import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Rocket,
  Globe,
  Code2,
  MonitorSmartphone,
  Database,
  Blocks,
  Braces,
  Cpu,
  Server,
  Workflow,
  Layers3,
  Binary,
  PanelTop,
  AppWindow,
  FileCode2,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Modern Design",
    description:
      "Clean and premium interfaces crafted to make brands look polished and memorable.",
  },
  {
    icon: Rocket,
    title: "Fast Performance",
    description:
      "Optimized experiences built for speed, responsiveness, and smooth interaction.",
  },
  {
    icon: Globe,
    title: "Growth Focused",
    description:
      "Websites designed to communicate value clearly and support business growth.",
  },
];

const bgIcons = [
  { icon: Code2, className: "left-[4%] top-[10%] h-14 w-14 rotate-[-10deg]" },
  { icon: Braces, className: "left-[16%] top-[22%] h-10 w-10 rotate-[8deg]" },
  {
    icon: MonitorSmartphone,
    className: "left-[8%] bottom-[14%] h-16 w-16 rotate-[-12deg]",
  },
  {
    icon: Database,
    className: "left-[22%] bottom-[22%] h-12 w-12 rotate-[10deg]",
  },
  { icon: Server, className: "left-[30%] top-[8%] h-12 w-12 rotate-[6deg]" },
  {
    icon: Layers3,
    className: "left-[38%] top-[20%] h-10 w-10 rotate-[-8deg]",
  },
  {
    icon: Workflow,
    className: "left-[42%] bottom-[10%] h-14 w-14 rotate-[10deg]",
  },
  {
    icon: Blocks,
    className: "right-[34%] top-[16%] h-11 w-11 rotate-[12deg]",
  },
  {
    icon: Cpu,
    className: "right-[28%] bottom-[24%] h-12 w-12 rotate-[-10deg]",
  },
  {
    icon: Binary,
    className: "right-[18%] top-[26%] h-10 w-10 rotate-[7deg]",
  },
  {
    icon: PanelTop,
    className: "right-[8%] top-[10%] h-16 w-16 rotate-[10deg]",
  },
  {
    icon: AppWindow,
    className: "right-[12%] top-[34%] h-12 w-12 rotate-[-6deg]",
  },
  {
    icon: FileCode2,
    className: "right-[6%] bottom-[18%] h-14 w-14 rotate-[8deg]",
  },
  {
    icon: Globe,
    className: "right-[20%] bottom-[10%] h-10 w-10 rotate-[-8deg]",
  },
];

export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden pb-20 md:py-28">
      <div className="absolute inset-0 bg-background" />

      {bgIcons.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className={`absolute hidden md:block text-primary/10 ${item.className}`}
            aria-hidden="true"
          >
            <Icon className="h-full w-full stroke-[1.5]" />
          </div>
        );
      })}

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/90 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            Who we are
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            A web development agency focused on clarity, performance, and
            results
          </h2>

          <p className="mt-6 text-md leading-8 text-muted-foreground">
            We help businesses build a strong online presence through modern
            websites that look professional, load fast, and communicate value
            clearly. Our goal is to keep the process simple while delivering
            work that feels premium and purposeful.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
  {features.map((item) => {
    const Icon = item.icon;

    return (
      <Card
        key={item.title}
        className="group rounded-3xl border-2 border-border/60 bg-background/95 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-lg"
      >
        <CardContent className="flex items-start gap-5 p-8 text-left">
          <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Icon className="h-7 w-7" />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold tracking-tight">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>

            <div className="mt-6 h-1 w-12 rounded-full bg-primary/20" />
          </div>
        </CardContent>
      </Card>
    );
  })}
</div>
      </div>
    </section>
  );
}
