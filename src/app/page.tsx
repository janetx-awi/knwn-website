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

const GOAL_PATHS = [
  {
    step: "01",
    title: "Share your target",
    description:
      "Tell us your level, season timeline, and the exact result you are chasing.",
  },
  {
    step: "02",
    title: "Compare the right path",
    description:
      "We map your best-fit coaching format, weekly cadence, and progression checkpoints.",
  },
  {
    step: "03",
    title: "Train with momentum",
    description:
      "Execute with structure, accountability, and measurable next-step progression.",
  },
];

const PROOF_STRIP = [
  "15+ Years Coaching Experience",
  "Elite Athlete Development",
  "Private Training Available",
  "College Prep Programs",
];

const WOW_STATS = [
  "Placeholder: X+ athlete milestones achieved in 2025",
  "Placeholder: X years combined coaching leadership",
  "Placeholder: X next-level placements supported",
];

const FEATURED_PATHWAYS = SERVICES.filter((service) => !service.comingSoon).slice(0, 3);

const SERVICE_IMAGES: Record<string, string> = {
  "personalized-coaching": "/images/knwn/service-intensity.webp",
  "semi-private-training": "/images/knwn/goal-start.webp",
  "hs-college-prep": "/images/knwn/hero-action.webp",
  "classes-tumbling-stunting": "/images/knwn/trust-athletes.webp",
};

const TRUST_POINTS = [
  "Structured progression checkpoints athletes and families can track",
  "Technique-first coaching system built for safe, repeatable development",
  "Consultation-led placement into the right path before training starts",
  "Performance confidence support for high-pressure competition moments",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-8 md:py-16">
          <div className="space-y-5">
            <Badge variant="secondary" className="rounded-full bg-sky-100 px-4 py-1 text-sky-950">
              Exclusive Facility • Cheer + Gymnastics • Competitive Athletes
            </Badge>

            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
              Start your path.
              <span className="block text-slate-800">Be KNWN.</span>
            </h1>

            <p className="max-w-xl text-pretty text-lg font-semibold text-slate-950">
              Colorado&apos;s first exclusive cheer and gymnastics performance facility for competitive
              athletes.
            </p>

            <p className="max-w-xl text-pretty text-base leading-relaxed text-slate-700">
              We combine technical coaching, progression planning, and performance confidence so
              every session builds toward a clear outcome.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="rounded-full bg-slate-900 text-white hover:bg-slate-800">
                <Link href="#contact">Book a Consult</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
              >
                <Link href="/services">See Programs</Link>
              </Button>
            </div>
          </div>

          <Card className="relative h-[340px] overflow-hidden rounded-3xl border-slate-200 bg-white shadow-lg md:h-[560px]">
            <MediaFrame
              src="/images/knwn/hero-action.webp"
              alt="KNWN athletes training in action"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/40 bg-white/90 p-4 backdrop-blur-sm md:bottom-5 md:left-5 md:right-5">
              <div className="text-xs uppercase tracking-widest text-slate-700">KNWN Method</div>
              <div className="mt-1 text-sm font-semibold text-slate-900">
                Structured progression, intentional coaching, and measurable athlete momentum.
              </div>
            </div>
          </Card>
        </section>

        {/* PROOF STRIP */}
        <section className="border-y border-slate-200 bg-slate-100/70">
          <div className="mx-auto max-w-6xl px-4 py-5">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {PROOF_STRIP.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-center text-sm font-semibold text-slate-950"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* GOAL PATH */}
        <section id="goal-path" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Tell us your goal. We map the path.
              </h2>
              <p className="max-w-2xl text-slate-700">
                No guesswork. Start with your current level and timeline, then train on a path built
                for your next step.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {GOAL_PATHS.map((item) => (
                <Card key={item.step} className="border-slate-200 bg-slate-50 p-5 md:p-6">
                  <div className="text-xs font-semibold tracking-[0.2em] text-slate-600">{item.step}</div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-700">{item.description}</p>
                </Card>
              ))}
            </div>

            <Card className="relative mt-6 overflow-hidden rounded-3xl border-slate-200 bg-white">
              <div className="relative h-[240px] bg-slate-100 md:h-[360px]">
                <MediaFrame
                  src="/images/knwn/goal-start.webp"
                  alt="KNWN athletes ready to begin training"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 max-w-sm rounded-2xl border border-white/30 bg-white/90 p-4 md:bottom-5 md:left-5">
                  <p className="text-sm font-semibold text-slate-900">
                    Built for athletes pursuing confident execution, not random reps.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* SIGNATURE WOW SECTION */}
        <section className="mx-auto max-w-6xl px-4 pb-10 md:pb-14">
          <Card className="relative overflow-hidden rounded-3xl border-slate-200 bg-slate-900 text-white shadow-xl">
            <div className="relative h-[360px] md:h-[440px]">
              <MediaFrame
                src="/images/knwn/service-intensity.webp"
                alt="Athlete executing a high-focus training moment"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/55 to-slate-900/20" />

              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-8">
                <Badge className="w-fit rounded-full border border-white/35 bg-white/15 text-white hover:bg-white/15">
                  Signature Performance Moment
                </Badge>
                <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                  Built for athletes who are done training generic.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-100 md:text-base">
                  “KNWN gave me a plan I could trust, and my competition confidence changed fast.”
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-200">
                  Placeholder athlete quote. Client name + team approval needed.
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {WOW_STATS.map((stat) => (
                    <div
                      key={stat}
                      className="rounded-2xl border border-white/30 bg-white/15 p-3 text-sm font-medium text-white"
                    >
                      {stat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* SERVICES PREVIEW */}
        <section id="services" className="mx-auto max-w-6xl px-4 pb-10 md:pb-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Featured pathways
              </h2>
              <p className="max-w-2xl text-slate-700">
                Start with the three most requested paths, then progress with structure as your goals
                elevate.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
            >
              <Link href="/services">See All Programs</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {FEATURED_PATHWAYS.map((service) => (
              <Card key={service.slug} className="overflow-hidden border-slate-200 bg-white shadow-sm">
                <div className="relative h-44 bg-slate-100">
                  <MediaFrame
                    src={SERVICE_IMAGES[service.slug] ?? "/images/knwn/trust-athletes.webp"}
                    alt={`${service.title} at KNWN`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="space-y-4 p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight text-slate-950">{service.title}</h3>
                    <p className="text-sm text-slate-700">{service.summary}</p>
                  </div>

                  <div className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">Outcome focus</p>
                    <p className="text-sm font-medium text-slate-900">{service.outcome}</p>
                  </div>

                  <div className="space-y-1 text-sm text-slate-700">
                    <p>
                      <span className="font-semibold text-slate-900">Best for:</span> {service.bestFor}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900">Format:</span> {service.format}
                    </p>
                  </div>

                  <div className="pt-1">
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
                    >
                      <Link href={`/services#${service.slug}`}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6">
            <Button asChild size="lg" className="rounded-full bg-slate-900 text-white hover:bg-slate-800">
              <Link href="#contact">Book a Consult</Link>
            </Button>
          </div>
        </section>

        {/* CONSULTATION FLOW */}
        <section id="contact" className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:items-start md:py-16">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Consultation inquiry flow
              </h2>
              <p className="text-slate-700">
                Share your goal and timeline. We will follow up with the right service path,
                availability, and next steps.
              </p>

              <Card className="border-slate-200 bg-slate-50 p-5 md:p-6">
                <ol className="space-y-4 text-sm text-slate-700">
                  <li>
                    <span className="font-semibold text-slate-900">1.</span> Submit your goal,
                    current level, and timeline.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">2.</span> Receive a recommended
                    path and service fit.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">3.</span> Confirm your first
                    session and start training.
                  </li>
                </ol>
              </Card>

              <Card className="relative h-52 overflow-hidden rounded-2xl border-slate-200 bg-slate-100 md:h-56">
                <MediaFrame
                  src="/images/knwn/consultation-flow.webp"
                  alt="KNWN coach and athlete during a consultation-style moment"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Card>
            </div>

            <Card className="border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <ContactForm />
            </Card>
          </div>
        </section>

        {/* TRUST / CREDIBILITY */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
          <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:gap-8">
            <Card className="relative min-h-[280px] overflow-hidden rounded-3xl border-slate-200 bg-slate-100 md:min-h-[340px]">
              <MediaFrame
                src="/images/knwn/trust-athletes.webp"
                alt="KNWN athletes smiling after a training session"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </Card>

            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Trust + authority
              </h2>
              <p className="text-slate-700">
                KNWN combines premium facility standards, progression accountability, and coaching
                structure designed for long-term athlete growth.
              </p>

              <div className="grid gap-3">
                {TRUST_POINTS.map((point) => (
                  <Card key={point} className="border-slate-200 bg-white p-4 text-sm font-medium text-slate-900 shadow-sm">
                    {point}
                  </Card>
                ))}
              </div>

              <Card className="border-slate-300 bg-slate-950 p-5 text-white">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 shrink-0 rounded-full border border-white/35 bg-white/10" aria-hidden />
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-200">Founder / Lead Coach</div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-100">
                      Placeholder: Add founder headshot, credential summary, and one outcome-backed
                      authority statement.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div id="faq" className="mt-10 md:mt-12">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">FAQ</h3>
              <p className="text-slate-700">Helpful answers before your first consultation.</p>
            </div>

            <Card className="mt-6 border-slate-200 bg-white p-2">
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((f, idx) => (
                  <AccordionItem key={f.q} value={`item-${idx}`} className="border-slate-200 px-4">
                    <AccordionTrigger className="text-left text-slate-900">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-slate-700">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
