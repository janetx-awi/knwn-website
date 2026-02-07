import Link from "next/link";

import { ContactForm } from "@/components/site/contact-form";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS, SERVICES } from "@/lib/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.18),rgba(0,0,0,0))]" />
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
            <div className="space-y-6">
              <Badge variant="secondary" className="rounded-full bg-white/10 text-white">
                Premium Coaching • Performance • Confidence
              </Badge>

              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Be Seen. Be KNWN.
              </h1>
              <p className="max-w-xl text-pretty text-lg text-white/70">
                A premium training experience built around progression, safety, and results. Private
                coaching, small-group training, mental performance, and next-level prep.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="#contact">Book a Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>

              <div className="grid gap-3 pt-4 sm:grid-cols-3">
                <Card className="border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-widest text-white/60">
                    Availability
                  </div>
                  <div className="mt-1 text-lg font-semibold">Limited consult spots</div>
                </Card>
                <Card className="border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-widest text-white/60">Focus</div>
                  <div className="mt-1 text-lg font-semibold">Structured progression</div>
                </Card>
                <Card className="border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-widest text-white/60">Experience</div>
                  <div className="mt-1 text-lg font-semibold">Premium, minimal, modern</div>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/0" />
              <div className="relative h-full min-h-[360px] rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex h-full flex-col justify-between">
                  <div className="space-y-3">
                    <div className="text-xs uppercase tracking-widest text-white/60">
                      Facility + athlete imagery
                    </div>
                    <p className="text-sm text-white/70">
                      This space is reserved for KNWN photos (facility, training, night shots). Once
                      assets are received, we will swap this placeholder for real imagery.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="text-sm font-semibold">Next available consultation</div>
                    <div className="mt-1 text-sm text-white/70">
                      Placeholder: confirm monthly capacity + waitlist behavior.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="bg-white/10" />

        {/* DIFFERENTIATORS */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">The KNWN Advantage</h2>
              <p className="text-white/70">
                Premium coaching with a clear plan. Every athlete gets intentional progression,
                confident execution, and a support system designed for the next level.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Structured progression",
                  desc: "A plan that matches the athlete, the season, and the goal.",
                },
                {
                  title: "Safety + confidence",
                  desc: "Technique-first coaching that builds trust and consistency.",
                },
                {
                  title: "College pathway support",
                  desc: "Prep, guidance, and performance habits that scale.",
                },
                {
                  title: "Concierge feel",
                  desc: "Premium experience from inquiry to training and beyond.",
                },
              ].map((item) => (
                <Card key={item.title} className="border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold">{item.title}</div>
                  <div className="mt-2 text-sm text-white/70">{item.desc}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight">Services</h2>
              <p className="text-white/70">A focused offering that scales as KNWN grows.</p>
            </div>
            <Button
              asChild
              variant="outline"
              className="hidden rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 md:inline-flex"
            >
              <Link href="/services">View all</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {SERVICES.map((s) => (
              <Card key={s.slug} className="border-white/10 bg-white/5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">{s.title}</div>
                    <p className="mt-2 text-sm text-white/70">{s.summary}</p>
                  </div>
                  {s.comingSoon ? (
                    <Badge className="rounded-full bg-white/10 text-white hover:bg-white/10">
                      Coming soon
                    </Badge>
                  ) : null}
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild className="rounded-full">
                    <Link href={`/services/${s.slug}`}>Learn more</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
                  >
                    <Link href="#contact">Request consult</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ABOUT / PHILOSOPHY */}
        <section id="about" className="mx-auto max-w-6xl px-4 pb-16">
          <Card className="border-white/10 bg-white/5 p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-3 md:col-span-1">
                <div className="text-xs uppercase tracking-widest text-white/60">About</div>
                <h2 className="text-2xl font-semibold tracking-tight">Built for athletes</h2>
              </div>
              <div className="space-y-4 text-white/70 md:col-span-2">
                <p>
                  KNWN is designed to feel premium, modern, and intentional. The goal is simple:
                  develop confident athletes through structured progression and coaching that meets
                  the moment.
                </p>
                <p className="text-sm">
                  Placeholder copy. Final brand story, credentials, facility details, and photos will
                  be added once assets are provided.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-4 pb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
            <p className="text-white/70">
              We will refine this section with Sean before launch.
            </p>
          </div>

          <Card className="mt-8 border-white/10 bg-white/5 p-2">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, idx) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${idx}`}
                  className="border-white/10 px-4"
                >
                  <AccordionTrigger className="text-left text-white">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-4 pb-24">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">Request a consultation</h2>
              <p className="text-white/70">
                Tell us what you are working toward. We will reply with next steps and availability.
              </p>
              <Card className="border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold">Upper Hand booking</div>
                <p className="mt-2 text-sm text-white/70">
                  Blocked until we receive the Upper Hand organization URL. Once confirmed, we will
                  replace the placeholder flow with direct booking.
                </p>
              </Card>
            </div>

            <Card className="border-white/10 bg-white/5 p-6 md:p-8">
              <ContactForm />
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
