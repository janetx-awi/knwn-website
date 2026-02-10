import Link from "next/link";

import { ContactForm } from "@/components/site/contact-form";
import { MediaFrame } from "@/components/site/media-frame";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FAQS, SERVICES } from "@/lib/content";

const CONTACT_STEPS = [
  "Choose Book Consultation or Learn More About.",
  "We review your goals, service interest, and skill level.",
  "You receive next steps for scheduling or direct follow-up.",
];

const VALID_INTENTS = new Set(["book-consultation", "learn-more-about"]);
const VALID_SERVICES = new Set(SERVICES.map((service) => service.slug));

export default function ContactPage({
  searchParams,
}: {
  searchParams: { intent?: string; service?: string };
}) {
  const defaultIntent = searchParams.intent && VALID_INTENTS.has(searchParams.intent)
    ? searchParams.intent
    : undefined;

  const defaultService = searchParams.service && VALID_SERVICES.has(searchParams.service)
    ? searchParams.service
    : undefined;

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <section className="grid gap-5 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div className="space-y-4">
            <Badge className="rounded-full border border-slate-700 bg-slate-900 px-4 py-1 text-slate-100">
              Contact KNWN
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Book consultation or learn more
            </h1>

            <p className="max-w-xl text-sm text-slate-300 md:text-base">
              Short form. Clear next steps. Premium support for athletes and families.
            </p>

            <Card className="border-slate-800 bg-slate-900/60 p-5">
              <h2 className="text-lg font-semibold text-white">How it works</h2>
              <ol className="mt-3 space-y-2 text-sm text-slate-300">
                {CONTACT_STEPS.map((step, idx) => (
                  <li key={step}>
                    <span className="mr-2 font-semibold text-white">{idx + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </Card>

            <Card className="relative h-44 overflow-hidden border-slate-800 bg-slate-900 p-0">
              <MediaFrame
                src="/images/knwn/consultation-flow.webp"
                alt="KNWN training consultation environment"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
            </Card>
          </div>

          <Card className="border-slate-800 bg-slate-900/70 p-5 md:p-6">
            <ContactForm defaultIntent={defaultIntent} defaultService={defaultService} />
          </Card>
        </section>

        <section id="faq" className="mt-8">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">FAQ</h2>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-slate-700 bg-transparent text-white hover:bg-slate-900"
            >
              <Link href="/#services">View Services</Link>
            </Button>
          </div>

          <Card className="border-slate-800 bg-slate-900/70 p-2">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, idx) => (
                <AccordionItem key={faq.q} value={`faq-${idx}`} className="border-slate-800 px-4">
                  <AccordionTrigger className="text-left text-sm font-medium text-white">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-300">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
