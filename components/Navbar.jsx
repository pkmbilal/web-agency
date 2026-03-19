import Link from "next/link";
import Image from 'next/image';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* <Image src="/logo.svg" width={230} height={50} alt="codesudio logo" /> */}
        <h1 className="font-bold text-3xl text-[#198b4f]">{"<codesudio>"}</h1>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            className="font-semibold text-lg text-muted-foreground hover:text-foreground"
            href="/about"
          >
            about
          </Link>
          <Link
            className="font-semibold text-lg text-muted-foreground hover:text-foreground"
            href="#services"
          >
            services
          </Link>
          <Link
            className="font-semibold text-lg text-muted-foreground hover:text-foreground"
            href="#faq"
          >
            faq
          </Link>
          <Link
            className="font-semibold text-lg text-muted-foreground hover:text-foreground"
            href="#contact"
          >
            contact
          </Link>
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
