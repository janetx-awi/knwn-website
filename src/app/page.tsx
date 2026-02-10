import Image from "next/image";
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
import { FAQS, SERVICES } from "@/lib/content";

const GOAL_PATHS = [
  {
    step: "01",
    title: "Tell us your goal",
    description:
      "Share where you are now and what you want to achieve this season.",
  },
  {
    step: "02",
    title: "Get your path",
    description:
      "We recommend the right service mix, progression pace, and weekly rhythm.",
  },
  {
    step: "03",
    title: "Train with confidence",
    description:
      "Start with a clear plan and coaching support built around your timeline.",
  },
];

const TRUST_POINTS = [
  "Technique-first coaching and structured progression",
  "Private and small-group formats for focused reps",
  "College pathway and performance mindset support",
  "Premium facility environment with intentional programming",
];

const SERVICE_IMAGES = [
  "/images/knwn/service-intensity.webp",
  "/images/knwn/goal-start.webp",
  "/images/knwn/hero-action.webp",
  "/images/knwn/consultation-flow.webp",
  "/images/knwn/trust-athletes.webp",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1.05fr_1fr] md:items-center md:py-16">
          <div className="space-y-6">
            <Badge
              variant="secondary"
              className="rounded-full bg-sky-100 px-4 py-1 text-sky-900"
            >
              Premium Coaching • Performance • Confidence
            </Badge>

            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Start your path.
              <span className="block text-slate-700">Be KNWN.</span>
            </h1>

            <p className="max-w-xl text-pretty text-lg text-slate-600">
              A cleaner, guided training experience for athletes who want real progression. Tell us
              your goal and we will build the right plan.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="rounded-full bg-slate-900 text-white hover:bg-slate-800">
                <Link href="#contact">Tell us your goal</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
              >
                <Link href="#services">Explore services</Link>
              </Button>
            </div>

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              <Card className="border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-xs uppercase tracking-widest text-slate-500">Approach</div>
                <div className="mt-1 text-base font-semibold">Goal-based planning</div>
              </Card>
              <Card className="border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-xs uppercase tracking-widest text-slate-500">Experience</div>
                <div className="mt-1 text-base font-semibold">Bright, premium environment</div>
              </Card>
              <Card className="border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-xs uppercase tracking-widest text-slate-500">Support</div>
                <div className="mt-1 text-base font-semibold">Clear next steps</div>
              </Card>
            </div>
          </div>

          <Card className="relative h-[420px] overflow-hidden rounded-3xl border-slate-200 bg-white shadow-lg md:h-[560px]">
            <Image
              src="/images/knwn/hero-action.webp"
              alt="KNWN athletes training in action"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/85 p-4 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-widest text-slate-600">KNWN Path</div>
              <div className="mt-1 text-sm font-semibold text-slate-900">
                Structured progression, intentional coaching, and real athlete momentum.
              </div>
            </div>
          </Card>
        </section>

        {/* GOAL PATH */}
        <section id="goal-path" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Tell us your goal. We map the path.
              </h2>
              <p className="max-w-2xl text-slate-600">
                No pressure, no guesswork. Start with your current level and timeline, then train on
                a plan built for your next step.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {GOAL_PATHS.map((item) => (
                <Card key={item.step} className="border-slate-200 bg-slate-50 p-6">
                  <div className="text-xs font-semibold tracking-[0.2em] text-slate-500">{item.step}</div>
                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </Card>
              ))}
            </div>

            <Card className="relative mt-8 overflow-hidden rounded-3xl border-slate-200 bg-white">
              <div className="relative h-[280px] md:h-[360px]">
                <Image
                  src="/images/knwn/goal-start.webp"
                  alt="KNWN athletes ready to begin training"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 max-w-sm rounded-2xl border border-white/25 bg-white/85 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Start your path with coaching that meets you where you are.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* SERVICES PREVIEW */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Services</h2>
              <p className="max-w-2xl text-slate-600">
                Choose the right training path now and scale with confidence as your goals grow.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="hidden rounded-full border-slate-300 bg-white text-slate-900 hover:bg-slate-100 md:inline-flex"
            >
              <Link href="/services">View all services</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {SERVICES.map((service, idx) => (
              <Card key={service.slug} className="overflow-hidden border-slate-200 bg-white shadow-sm">
                <div className="relative h-44">
                  <Image
                    src={SERVICE_IMAGES[idx % SERVICE_IMAGES.length]}
                    alt={`${service.title} at KNWN`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
                    </div>
                    {service.comingSoon ? (
                      <Badge className="rounded-full bg-slate-100 text-slate-700 hover:bg-slate-100">
                        Coming soon
                      </Badge>
                    ) : null}
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button
                      asChild
                      className="rounded-full bg-slate-900 text-white hover:bg-slate-800"
                    >
                      <Link href="#contact">Start this path</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
                    >
                      <Link href={`/services#${service.slug}`}>Service details</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CONSULTATION FLOW */}
        <section id="contact" className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-start">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Consultation inquiry flow
              </h2>
              <p className="text-slate-600">
                Share your goal and timeline. We will follow up with the right service path,
                availability, and next steps.
              </p>

              <Card className="border-slate-200 bg-slate-50 p-6">
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

              <Card className="relative h-56 overflow-hidden rounded-2xl border-slate-200">
                <Image
                  src="/images/knwn/consultation-flow.webp"
                  alt="KNWN coach and athlete during a consultation-style moment"
                  fill
                  className="object-cover"
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
        <section id="about" className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
            <Card className="relative min-h-[340px] overflow-hidden rounded-3xl border-slate-200">
              <Image
                src="/images/knwn/trust-athletes.webp"
                alt="KNWN athletes smiling after a training session"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </Card>

            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Trust + credibility</h2>
              <p className="text-slate-600">
                KNWN is built around athlete outcomes, coaching clarity, and a premium experience
                that supports long-term growth.
              </p>

              <div className="grid gap-3">
                {TRUST_POINTS.map((point) => (
                  <Card key={point} className="border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
                    {point}
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div id="faq" className="mt-12">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold tracking-tight">FAQ</h3>
              <p className="text-slate-600">Helpful answers before your first consultation.</p>
            </div>

            <Card className="mt-6 border-slate-200 bg-white p-2">
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((f, idx) => (
                  <AccordionItem key={f.q} value={`item-${idx}`} className="border-slate-200 px-4">
                    <AccordionTrigger className="text-left text-slate-900">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-slate-600">{f.a}</AccordionContent>
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
