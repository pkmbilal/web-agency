"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Users,
  Trophy,
  FolderOpen,
} from "lucide-react";

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Years of Expertise",
    icon: Briefcase,
  },
  {
    value: 70,
    suffix: "+",
    label: "Clients Globally",
    icon: Users,
  },
  {
    value: 30,
    suffix: "+",
    label: "Industries Served",
    icon: Trophy,
  },
  {
    value: 100,
    suffix: "+",
    label: "Completed Projects",
    icon: FolderOpen,
  },
];

function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentValue = Math.floor(progress * end);

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCards() {
  return (
    <section className="py-12 md:py-16 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.label}
                className="rounded-2xl border border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:rounded-3xl"
              >
                <CardContent className="flex min-h-[150px] flex-col items-center justify-center p-4 text-center sm:min-h-[170px] sm:p-5 md:min-h-[200px] md:p-7">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary sm:mb-4 sm:h-12 sm:w-12 md:mb-6 md:h-14 md:w-14 md:rounded-2xl">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-5xl">
                    <Counter end={item.value} suffix={item.suffix} />
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-muted-foreground sm:mt-3 sm:text-sm md:text-base">
                    {item.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}