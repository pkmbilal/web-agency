import Section from "@/components/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Questions people always ask"
      subtitle="Quick answers to the most common questions before we get started."
    >
      <div className="rounded-3xl border bg-white/60 p-4 backdrop-blur md:p-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-md" >Is this website really static?</AccordionTrigger>
            <AccordionContent>
              Yes — this version is a single page and can be exported as a static site. Later we can
              add service detail pages, blog (MDX), and dynamic sections if needed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-md">Can you build dashboards with login?</AccordionTrigger>
            <AccordionContent>
              Yep. For custom apps, we typically use Next.js + Supabase (Auth, DB, Storage, roles/RLS)
              and shadcn UI for fast, clean dashboards.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-md">How fast can you make it load?</AccordionTrigger>
            <AccordionContent>
              We optimize images, code splitting, fonts, and layout stability to improve Core Web Vitals
              (LCP/CLS/INP). We can also do a performance audit on your existing site.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-md">Do you support multiple languages?</AccordionTrigger>
            <AccordionContent>
              Yes. We can add multiple language support (Arabic/English, etc.).
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
}