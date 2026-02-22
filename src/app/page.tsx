import Image from "next/image";
import Link from "next/link";

import { MediaFrame } from "@/components/site/media-frame";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/lib/content";

const SERVICE_IMAGES: Record<string, string> = {
  "personalized-coaching": "/images/knwn/coach-1on1.jpg",
  "semi-private-training": "/images/knwn/group-training.jpg",
  "classes-tumbling-stunting": "/images/knwn/stunt-high.jpg",
  "high-school-college-pathway": "/images/knwn/college-path.jpg",
  "mental-performance-training": "/images/knwn/mental-focus.jpg",
  "social-media-guidance": "/images/knwn/brand-confidence.jpg",
  "knwn-academy": "/images/knwn/academy-group.jpg",
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

const TRUST_STATS = [
  { value: "500+", label: "Athletes Trained" },
  { value: "50+", label: "College Placements" },
  { value: "7", label: "Service Tracks" },
  { value: "#1", label: "Elite Cheer Facility in Colorado" },
];

function ImageBreak({
  src,
  alt,
  label,
  imageClassName,
}: {
  src: string;
  alt: string;
  label: string;
  imageClassName?: string;
}) {
  return (
    <section className="relative h-64 overflow-hidden md:h-80">
      <MediaFrame src={src} alt={alt} sizes="100vw" className={imageClassName} />
      <div className="absolute inset-0 bg-black/60" />
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
        {/* ── HERO ── */}
        <section className="relative isolate min-h-screen overflow-hidden">
          <MediaFrame
            src="/images/knwn/hero-action.webp"
            alt="KNWN athletes training with focused coaching"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/65" />

          <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-4 pb-10 pt-24 md:pt-28">
            <div className="max-w-4xl xl:max-w-none space-y-6">
              <Badge className="rounded-full border border-slate-600 bg-black/50 px-4 py-1 text-slate-100">
                Colorado&apos;s Premier Elite Cheer &amp; Stunting Facility
              </Badge>

              <h1 className="font-display text-6xl font-extrabold leading-[0.88] tracking-tight text-white md:text-8xl lg:text-[8rem] xl:text-[9rem]">
                GRIND TODAY.<br />KNWN TOMORROW.
              </h1>

              <p className="max-w-xl text-base text-slate-300 md:text-lg">
                For Athletes &amp; Families Who Demand More Than Practice.{" "}
                Structured progression. Intentional coaching. Exclusive monthly access.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-amber-600 text-white hover:bg-amber-500"
                >
                  <Link href="/contact?intent=book-consultation">Claim Your Consult</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-slate-500 bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/#services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ── */}
        <section className="border-y border-slate-800 bg-slate-950">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-slate-800 md:grid-cols-4 md:divide-x">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="px-6 py-5 text-center [&:nth-child(n+3)]:border-t [&:nth-child(n+3)]:border-slate-800 md:[&:nth-child(n+3)]:border-t-0">
                <p className="font-display text-2xl font-extrabold text-white md:text-3xl">{stat.value}</p>
                <p className="mt-0.5 text-xs text-slate-400 md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── IMAGE BREAK 1 ── */}
        <ImageBreak
          src="/images/knwn/stunt-action.jpg"
          alt="KNWN athletes executing a stunt with precision"
          label="Focused reps. Intentional coaching."
        />

        {/* ── SERVICES ── */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
          <div className="mb-6 space-y-2">
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
              Services
            </h2>
            <p className="max-w-3xl text-sm text-slate-400 md:text-base">
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
                    <div className="relative h-44">
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
                      <Link href={`/services/${service.slug}`} className="font-display text-xl font-bold text-white hover:text-slate-200">
                        {service.title}
                      </Link>
                      {service.comingSoon ? (
                        <Badge className="rounded-full border border-slate-700 bg-slate-950 text-[10px] tracking-wide text-slate-300 hover:bg-slate-950">
                          Coming soon
                        </Badge>
                      ) : null}
                    </div>

                    <p className="line-clamp-3 text-sm text-slate-400">{service.summary}</p>

                    <div className="flex flex-wrap gap-2">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-full border-slate-700 bg-transparent text-white hover:bg-slate-800"
                      >
                        <Link href={`/services/${service.slug}`}>Learn More</Link>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="rounded-full bg-amber-600 text-white hover:bg-amber-500"
                      >
                        <Link href={`/contact?intent=book-consultation&service=${service.slug}`}>Book Now</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMAGE BREAK 2 ── */}
        <ImageBreak
          src="/images/knwn/team-banner.jpg"
          alt="KNWN athletes together — built for more"
          label="Built for athletes who want more."
        />

        {/* ── HOW IT WORKS ── */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
          <h2 className="font-display mb-6 text-3xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
            How It Works
          </h2>

          <div className="grid overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 md:grid-cols-3">
            {HOW_IT_WORKS.map((item, index) => (
              <div
                key={item.step}
                className={`space-y-3 p-6 ${index < HOW_IT_WORKS.length - 1 ? "border-b border-slate-800 md:border-b-0 md:border-r" : ""}`}
              >
                <p className="font-display text-4xl font-extrabold text-amber-600 md:text-5xl">{item.step}</p>
                <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── IMAGE BREAK 3 ── */}
        <ImageBreak
          src="/images/knwn/trusted-athletes.jpg"
          alt="KNWN athletes training side by side"
          label="Trusted by athletes and families."
        />

        {/* ── TESTIMONIALS ── */}
        <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
          <div className="mb-6 space-y-2">
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
              Athletes Speak
            </h2>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Real athlete stories coming next. Placeholder cards are ready for Sean&apos;s quotes.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {TESTIMONIAL_PLACEHOLDERS.map((item) => (
              <Card key={item.name + item.context} className="border-slate-800 bg-slate-900/70 p-6">
                <div className="mb-4 h-10 w-10 rounded-full border border-amber-600/40 bg-slate-950" />
                <p className="text-base italic leading-relaxed text-slate-200">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-5 border-t border-slate-800 pt-4">
                  <p className="text-sm font-bold text-white">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.context}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ── MERCH ── */}
        <section id="merch" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <div className="flex flex-col md:flex-row">
              {/* Product image */}
              <div className="relative h-64 flex-shrink-0 overflow-hidden md:h-auto md:w-72 lg:w-80">
                <Image
                  src="/images/knwn/knwn-hoodie.webp"
                  alt="KNWN Brand Black Crop Hoodie"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-top"
                />
              </div>
              {/* Copy + CTA */}
              <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-600">Official KNWN Gear</p>
                  <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl">
                    Wear the Standard.
                  </h2>
                  <p className="max-w-md text-sm text-slate-400">
                    KNWN apparel is built for athletes who train with intention. Shop shorts, hoodies, sports bras, and more — exclusively through our official proshop.
                  </p>
                  <p className="text-xs text-slate-600">Fulfilled by Fly Athletics. Ships in 4–6 weeks.</p>
                </div>
                <div>
                  <Button asChild size="lg" className="rounded-full bg-amber-600 text-white hover:bg-amber-500">
                    <a href="https://flyathletics.com/proshops/knwn-brand/" target="_blank" rel="noreferrer">
                      Shop KNWN Gear →
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA — full-width bold section ── */}
        <section className="border-t border-slate-800 bg-slate-950 px-4 py-16 text-center md:py-24">
          <div className="mx-auto max-w-4xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">Limited Monthly Access</p>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.9] tracking-tight text-white md:text-6xl lg:text-7xl">
              Are You Ready<br />to Be KNWN?
            </h2>
            <p className="mx-auto max-w-xl text-base text-slate-400 md:text-lg">
              Elite results require elite focus. Consultation spots are intentionally capped.{" "}
              <span className="text-slate-300">Become Seen. Become Sought. Become KNWN.</span>
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-amber-600 px-8 text-white hover:bg-amber-500"
              >
                <Link href="/contact?intent=book-consultation">Claim Your Consult</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-slate-700 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/#services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
