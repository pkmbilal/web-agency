import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutCta() {
  return (
    <section>
      <div className="mx-auto max-w-4xl px-4 pt-5 pb-20 text-center md:px-6">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Let’s work together
        </p>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to build something great?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
          Whether you need a new website, a redesign, or a stronger digital
          presence, we can help you create a site that feels modern and works
          hard for your business.
        </p>

        <div className="mt-8">
          <Button asChild size="lg" className="rounded-2xl">
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}