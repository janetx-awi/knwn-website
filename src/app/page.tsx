import Link from "next/link";

import { MediaFrame } from "@/components/site/media-frame";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/lib/content";

const SERVICE_IMAGES: Record<string, string> = {
  "personalized-coaching": "/images/knwn/service-intensity.webp",
  "semi-private-training": "/images/knwn/goal-start.webp",
  "classes-tumbling-stunting": "/images/knwn/trust-athletes.webp",
  "high-school-college-pathway": "/images/knwn/hero-action.webp",
  "mental-performance-training": "/images/knwn/consultation-flow.webp",
  "social-media-guidance": "/images/knwn/service-intensity.webp",
  "knwn-academy": "/images/knwn/trust-athletes.webp",
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Request Your Consult",
    description: "Submit your inquiry to claim one of this month's limited consultation spots.",
  },
  {
    step: "02",
    title: "Personalized Strategy Review",
    description: "We review your athlete's goals, level, and timeline. You receive a custom development plan.",
  },
  {
    step: "03",
    title: "Begin Your Elite Journey",
    description: "Training begins with structure, intentionality, and a clear path to elite performance.",
  },
];

const TESTIMONIAL_PLACEHOLDERS = [
  {
    quote: "Real athlete stories coming. Placeholder ready for Sean's content.",
    name: "Athlete Name",
    context: "College Commit · Cheer",
  },
  {
    quote: "Parent perspective placeholder — ready for Sean's quote.",
    name: "Parent Name",
    context: "Parent of KNWN Athlete",
  },
  {
    quote: "College pathway success story — placeholder ready.",
    name: "Athlete Name",
    context: "College Pathway Graduate",
  },
];

function ImageBreak({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <section className="relative h-48 overflow-hidden md:h-64">
      <MediaFrame src={src} alt={alt} sizes="100vw" />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative mx-auto flex h-full max-w-6xl items-center px-4">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">{label}</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main>
        {/* ── HERO — shortened tagline per Sean's feedback ── */}
        <section className="relative isolate min-h-screen overflow-hidden">
          <MediaFrame
            src="/images/knwn/hero-action.webp"
            alt="KNWN athletes training with focused coaching"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-4 pb-10 pt-24 md:pt-28">
            <div className="max-w-3xl space-y-5">
              <Badge className="rounded-full border border-slate-600 bg-black/50 px-4 py-1 text-slate-100">
                Colorado&apos;s Premier Elite Cheer &amp; Stunting Facility
              </Badge>

              <h1 className="text-balance text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl">
                GRIND TODAY. KNWN TOMORROW.
              </h1>

              <div className="space-y-1 text-base text-slate-200 md:text-lg">
                <p>For Athletes &amp; Families Who Demand More Than Practice. Structured progression. Intentional coaching. Exclusive monthly access.</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-slate-200">
                  <Link href="/contact?intent=book-consultation">Claim Your Consult</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-slate-500 bg-transparent text-white hover:bg-black/60"
                >
                  <Link href="/#services">Begin Your Path to Elite</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── SUB-HERO TAGLINE ── */}
        <section className="border-b border-slate-800 bg-slate-950 px-4 py-10 text-center">
          <p className="mx-auto max-w-2xl text-base font-medium text-slate-200 md:text-lg">
            For Athletes &amp; Families Who Demand More Than Practice.{" "}
            <span className="text-slate-400">Structured progression. Intentional coaching. Exclusive monthly access.</span>
          </p>
        </section>

        {/* ── IMAGE BREAK 1 — hands/reps image with matching label ── */}
        <ImageBreak
          src="/images/knwn/service-intensity.webp"
          alt="Focused hand placement and intentional reps at KNWN"
          label="Focused reps. Intentional coaching."
        />

        {/* ── SERVICES CAROUSEL ── */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-8 md:py-12">
          <div className="mb-5 space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Services</h2>
            <p className="max-w-3xl text-sm text-slate-300 md:text-base">
              Swipe through every service and choose the path that fits your athlete.
            </p>
          </div>

          <div className="-mx-4 overflow-x-auto px-4 pb-3 [scrollbar-width:thin]">
            <div className="flex snap-x snap-mandatory gap-4">
              {SERVICES.map((service) => (
                <Card
                  key={service.slug}
                  className="w-[82%] min-w-[82%] snap-start overflow-hidden border-slate-800 bg-slate-900/80 p-0 sm:w-[46%] sm:min-w-[46%] lg:w-[32%] lg:min-w-[32%]"
                >
                  <Link href={`/services/${service.slug}`} className="group block">
                    <div className="relative h-40">
                      <MediaFrame
                        src={SERVICE_IMAGES[service.slug] ?? "/images/knwn/hero-action.webp"}
                        alt={`${service.title} at KNWN`}
                        sizes="(max-width: 768px) 82vw, (max-width: 1024px) 46vw, 32vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    </div>
                  </Link>

                  <div className="space-y-3 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <Link href={`/services/${service.slug}`} className="text-lg font-semibold text-white hover:text-slate-200">
                        {service.title}
                      </Link>
                      {service.comingSoon ? (
                        <Badge className="rounded-full border border-slate-700 bg-slate-950 text-[10px] tracking-wide text-slate-300 hover:bg-slate-950">
                          Coming soon
                        </Badge>
                      ) : null}
                    </div>

                    <p className="line-clamp-3 text-sm text-slate-300">{service.summary}</p>

                    <div className="flex flex-wrap gap-2">
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full border-slate-700 bg-transparent text-white hover:bg-slate-800"
                      >
                        <Link href={`/services/${service.slug}`}>Learn More</Link>
                      </Button>
                      <Button asChild className="rounded-full bg-white text-black hover:bg-slate-200">
                        <Link href={`/contact?intent=book-consultation&service=${service.slug}`}>Book Now</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMAGE BREAK 2 — athletes image with matching label ── */}
        <ImageBreak
          src="/images/knwn/goal-start.webp"
          alt="Athletes building confidence at KNWN training"
          label="Built for athletes who want more."
        />

        {/* ── HOW IT WORKS — bolder heading, updated steps ── */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-8 md:py-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
              How It Works
            </h2>

            <div className="grid overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 md:grid-cols-3">
              {HOW_IT_WORKS.map((item, index) => (
                <div
                  key={item.step}
                  className={`space-y-2 p-5 ${index < HOW_IT_WORKS.length - 1 ? "border-b border-slate-800 md:border-b-0 md:border-r" : ""}`}
                >
                  <p className="text-xs font-semibold tracking-[0.18em] text-slate-400">{item.step}</p>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMAGE BREAK 3 — using consultation-flow to avoid the mouth-crop issue ── */}
        <ImageBreak
          src="/images/knwn/consultation-flow.webp"
          alt="Athletes and families building trust with KNWN coaching"
          label="Trusted by athletes and families."
        />

        {/* ── TESTIMONIALS ── */}
        <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
          <div className="mb-5 space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Testimonials</h2>
            <p className="max-w-2xl text-sm text-slate-300 md:text-base">
              Real athlete stories coming next. Placeholder cards are ready for Sean&apos;s quotes.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {TESTIMONIAL_PLACEHOLDERS.map((item) => (
              <Card key={item.name + item.context} className="border-slate-800 bg-slate-900/75 p-5">
                <div className="mb-4 h-12 w-12 rounded-full border border-slate-700 bg-slate-950" />
                <p className="text-base italic text-slate-200">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-slate-400">{item.context}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ── MERCH ── */}
        <section id="merch" className="mx-auto max-w-6xl px-4 py-8 md:py-12">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Official KNWN Gear</p>
                <h2 className="text-2xl font-bold text-white md:text-3xl">Wear the Standard.</h2>
                <p className="max-w-md text-sm text-slate-300">
                  KNWN apparel is built for athletes who train with intention. Shop shorts, hoodies, sports bras, and more — exclusively through our official proshop.
                </p>
                <p className="text-xs text-slate-500">Fulfilled by Fly Athletics. Ships in 4–6 weeks.</p>
              </div>
              <div className="flex-shrink-0">
                <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-slate-200">
                  <a href="https://flyathletics.com/proshops/knwn-brand/" target="_blank" rel="noreferrer">
                    Shop KNWN Gear →
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="mx-auto max-w-6xl px-4 pb-8 md:pb-12">
          <Card className="rounded-3xl border-slate-800 bg-gradient-to-r from-slate-900 to-black p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Are You Ready to Be KNWN?
                </h2>
                <p className="mt-2 text-sm text-slate-300 md:text-base">
                  Elite results require elite focus. Consultation spots are intentionally capped.
                </p>
                <p className="mt-1 text-sm font-semibold tracking-wide text-slate-300">Become Seen. Become Sought. Become KNWN.</p>
              </div>
              <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-slate-200">
                <Link href="/contact?intent=book-consultation">Claim Your Consult</Link>
              </Button>
            </div>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
