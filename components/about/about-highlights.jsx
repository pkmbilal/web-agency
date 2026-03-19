import { Card, CardContent } from "@/components/ui/card";
import { Globe, Rocket, Sparkles, ArrowUpRight } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "Minimal & modern",
    description:
      "We build with clarity in mind — clean visuals, intuitive structure, and messaging that feels polished and intentional.",
  },
  {
    icon: Rocket,
    title: "Fast execution",
    description:
      "From strategy to launch, our process stays focused, efficient, and built to move quickly without sacrificing quality.",
  },
  {
    icon: Globe,
    title: "Built for growth",
    description:
      "Every website is designed to strengthen trust, support conversions, and create a solid foundation for long-term scale.",
  },
];

export default function AboutHighlights() {
  return (
    <section className="relative overflow-hidden bg-background pb-16 md:pb-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_30%)]" />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center text-center md:mb-14">
          <div className="mb-4 inline-flex items-center rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground">
            Why choose us
          </div>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A better approach to
            <span className="block text-primary">modern web presence</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:mt-5 md:text-base">
            We combine strong visual direction, practical execution, and
            business-focused thinking to create websites that feel premium and
            perform with purpose.
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/80 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl md:rounded-3xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <CardContent className="flex items-start gap-4 p-5 text-left sm:gap-5 sm:p-6 md:p-8">
                  <div className="flex flex-col items-center gap-3 shrink-0">
                    <div className="text-xs font-medium text-muted-foreground/70 sm:text-sm">
                      0{index + 1}
                    </div>

                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground md:mt-4 md:text-[15px] md:leading-7">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-medium text-primary opacity-80 transition-all duration-300 group-hover:gap-3 group-hover:opacity-100 md:mt-8">
                      <span>Learn more</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
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