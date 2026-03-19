import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutHero() {
  return (
    <section>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 pt-12 sm:pt-20 text-center md:px-6">
        <p className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-sm text-muted-foreground">
          About Our Agency
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          We build modern websites for brands that want to grow online.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          We create fast, polished, and conversion-focused digital experiences
          with a minimal approach to design and development.
        </p>

        <div className="mt-8 flex gap-3">
          <Button asChild size="lg" className="rounded-2xl">
            <Link href="/contact">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="rounded-2xl">
            <Link href="/services">View Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}