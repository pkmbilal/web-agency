import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="pb-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Separator className="mb-8" />
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} codesudio All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground">
            <a className="hover:text-foreground" href="#services">Services</a>
            <span className="mx-3">•</span>
            <a className="hover:text-foreground" href="#faq">FAQ</a>
            <span className="mx-3">•</span>
            <a className="hover:text-foreground" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}