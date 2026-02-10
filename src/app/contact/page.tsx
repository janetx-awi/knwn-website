import Link from "next/link";

import { ContactForm } from "@/components/site/contact-form";
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
import { FAQS } from "@/lib/content";

const CONTACT_STEPS = [
  "Choose Book Consultation or Learn More in the form.",
  "We review your goals, service interest, and skill level.",
  "You receive next steps with scheduling or a follow-up call.",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <section className="grid gap-5 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div className="space-y-4">
            <Badge className="rounded-full border border-slate-700 bg-slate-900 px-4 py-1 text-slate-100">
              Contact KNWN
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Start your consultation inquiry
            </h1>

            <p className="max-w-xl text-sm text-slate-300 md:text-base">
              Choose your path, share your goals, and we&apos;ll send the next steps based on service
              fit and availability.
            </p>

            <Card className="border-slate-800 bg-slate-900/70 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                Monthly consultation availability
              </p>
              <p className="mt-2 text-4xl font-bold text-white">10 spots</p>
              <p className="mt-2 text-sm text-slate-300">
                Spots are intentionally limited each month. If all spots are filled, inquiries roll to
                the next month waitlist.
              </p>
            </Card>

            <Card className="border-slate-800 bg-black/40 p-5">
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
          </div>

          <Card className="border-slate-800 bg-slate-900/70 p-5 md:p-6">
            <ContactForm />
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
              <Link href="/services">View Services</Link>
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
