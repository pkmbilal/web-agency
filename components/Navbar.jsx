import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="#top" className="flex items-center gap-2 font-bold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-glow">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="text-sm md:text-base">
            <span className="text-primary">Spark</span>Web
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link className="text-muted-foreground font-semibold hover:text-foreground" href="#services">Services</Link>
          <Link className="text-muted-foreground font-semibold hover:text-foreground" href="#faq">FAQ</Link>
          <Link className="text-muted-foreground font-semibold hover:text-foreground" href="#contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="rounded-xl">
            <Link href="#contact">
              Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}