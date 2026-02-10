import Link from "next/link";

import { MediaFrame } from "@/components/site/media-frame";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/lib/content";

const PROOF_STRIP = [
  "Colorado’s First Exclusive Cheer Training Facility",
  "College Journey Consulting Focus",
  "Membership-Driven Training Experience",
  "Limited Consultation Spots Each Month",
];

const FEATURED_SERVICE_SLUGS = new Set([
  "personalized-coaching",
  "semi-private-training",
  "high-school-college-pathway",
]);

const FEATURED_SERVICES = SERVICES.filter((service) => FEATURED_SERVICE_SLUGS.has(service.slug));

const SERVICE_IMAGES: Record<string, string> = {
  "personalized-coaching": "/images/knwn/service-intensity.webp",
  "semi-private-training": "/images/knwn/goal-start.webp",
  "high-school-college-pathway": "/images/knwn/trust-athletes.webp",
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Submit inquiry",
    description: "Choose Book Consultation or Learn More About in the contact form.",
  },
  {
    step: "02",
    title: "Get next steps",
    description: "We review service fit, skill level, and timeline, then guide your next move.",
  },
  {
    step: "03",
    title: "Start your plan",
    description: "Train with structure, clear progression, and college-journey support.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main>
        <section className="mx-auto grid max-w-6xl gap-6 px-4 py-6 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-8 md:py-10">
          <div className="space-y-4">
            <Badge className="rounded-full border border-slate-700 bg-slate-900 px-4 py-1 text-slate-100">
              Colorado&apos;s First Exclusive Cheer Training Facility
            </Badge>

            <h1 className="text-balance text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl">
              Train with structure.
              <span className="block text-slate-100">Build your college journey.</span>
            </h1>

            <p className="max-w-2xl text-base text-slate-300 md:text-lg">
              Premium cheer and stunting development for athletes and families who want more than reps.
              KNWN delivers clear progression, intentional coaching, and limited consultation access.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-slate-200">
                <Link href="/contact">Book Consult</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-slate-700 bg-transparent text-white hover:bg-slate-900"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          <Card className="relative h-[280px] overflow-hidden rounded-3xl border-slate-800 bg-slate-900 p-0 md:h-[320px]">
            <MediaFrame
              src="/images/knwn/hero-action.webp"
              alt="KNWN athletes training with focused coaching"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-black/60 p-3 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-300">KNWN Method</p>
              <p className="mt-1 text-sm font-semibold text-white">
                Exclusive model. Measurable progression. College-journey support.
              </p>
            </div>
          </Card>
        </section>

        <section className="border-y border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {PROOF_STRIP.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-center text-xs font-semibold tracking-wide text-slate-200 md:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-6 md:py-10">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Featured services</h2>
              <p className="max-w-2xl text-sm text-slate-300 md:text-base">
                Core paths built around technical growth, confidence, and next-level opportunities.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-slate-700 bg-transparent text-white hover:bg-slate-900"
            >
              <Link href="/services">All Services</Link>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {FEATURED_SERVICES.map((service) => (
              <Card key={service.slug} className="overflow-hidden border-slate-800 bg-slate-900/70 p-0">
                <div className="relative h-32">
                  <MediaFrame
                    src={SERVICE_IMAGES[service.slug]}
                    alt={`${service.title} at KNWN`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                </div>

                <div className="space-y-3 p-4">
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="text-sm text-slate-300">{service.summary}</p>
                  <p className="text-sm text-slate-200">
                    <span className="font-semibold text-white">Outcome:</span> {service.outcome}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-slate-700 bg-transparent text-white hover:bg-slate-800"
                  >
                    <Link href={`/services#${service.slug}`}>Learn More</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="border-y border-slate-800 bg-slate-950/80">
          <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
            <div className="mb-3 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">How it works</h2>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-slate-700 bg-transparent text-white hover:bg-slate-900"
              >
                <Link href="/contact">Start Inquiry</Link>
              </Button>
            </div>

            <div className="grid overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 md:grid-cols-3">
              {HOW_IT_WORKS.map((item, index) => (
                <div
                  key={item.step}
                  className={`space-y-2 p-4 ${index < HOW_IT_WORKS.length - 1 ? "border-b border-slate-800 md:border-b-0 md:border-r" : ""}`}
                >
                  <p className="text-xs font-semibold tracking-[0.18em] text-slate-400">{item.step}</p>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6 md:py-10">
          <Card className="rounded-3xl border-slate-800 bg-gradient-to-r from-slate-900 to-black p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Ready to train the KNWN way?
                </h2>
                <p className="mt-2 text-sm text-slate-300 md:text-base">
                  Consultation spots are limited each month. Request your next step now.
                </p>
              </div>
              <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-slate-200">
                <Link href="/contact">Book Consult</Link>
              </Button>
            </div>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
