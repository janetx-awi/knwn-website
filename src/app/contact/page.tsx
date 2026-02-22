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

      {/* ── HERO HEADER ── */}
      <section className="relative h-56 overflow-hidden md:h-72">
        <MediaFrame
          src="/images/knwn/girl-smiling-knwn.jpg"
          alt="KNWN athlete ready to claim their spot"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <Badge className="mb-3 rounded-full border border-slate-600 bg-black/50 px-4 py-1 text-slate-100">
            Contact KNWN
          </Badge>
          <h1 className="font-display text-5xl font-extrabold uppercase leading-none tracking-tight text-white md:text-7xl">
            Claim Your Spot.
          </h1>
          <p className="mt-3 max-w-lg text-sm text-slate-300 md:text-base">
            Short form. Clear next steps. Consultation spots are capped each month — submit to claim yours.
          </p>
        </div>
      </section>

      {/* ── FORM ── */}
      <main className="mx-auto max-w-2xl px-4 py-10 md:py-14">
        <Card className="border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <ContactForm defaultIntent={defaultIntent} defaultService={defaultService} />
        </Card>

        {/* ── FAQ ── */}
        <section id="faq" className="mt-10">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl">FAQ</h2>
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
