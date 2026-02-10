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
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Choose your service",
    description: "Select the training path that fits your athlete's goals and timeline.",
  },
  {
    step: "02",
    title: "Submit",
    description: "Complete the short inquiry form so we can review your next best step.",
  },
  {
    step: "03",
    title: "Start your journey",
    description: "Move into structured coaching and consistent progression with KNWN.",
  },
];

const TESTIMONIAL_PLACEHOLDERS = [
  {
    athlete: "Athlete testimonial",
    context: "Placeholder profile",
  },
  {
    athlete: "Parent testimonial",
    context: "Placeholder profile",
  },
  {
    athlete: "College pathway testimonial",
    context: "Placeholder profile",
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
                Colorado&apos;s First Exclusive Cheer Training Facility
              </Badge>

              <h1 className="text-balance text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl">
                Train with structure.
                <span className="block text-slate-100">Build your college journey.</span>
              </h1>

              <p className="max-w-2xl text-base text-slate-200 md:text-lg">
                Premium cheer and stunt development for athletes and families who want more than reps.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-slate-200">
                  <Link href="/contact?intent=book-consultation">Book a Consult</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-slate-500 bg-transparent text-white hover:bg-black/60"
                >
                  <Link href="/#services">See Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <ImageBreak
          src="/images/knwn/goal-start.webp"
          alt="Athletes beginning focused reps at KNWN"
          label="Focused reps. Intentional coaching."
        />

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

                    <p className="line-clamp-2 text-sm text-slate-300">{service.summary}</p>

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

        <ImageBreak
          src="/images/knwn/service-intensity.webp"
          alt="KNWN athletes training with strong intensity"
          label="Built for athletes who want more."
        />

        <section id="about" className="mx-auto max-w-6xl px-4 py-8 md:py-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">How it works</h2>

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

        <ImageBreak
          src="/images/knwn/trust-athletes.webp"
          alt="Athletes and families building trust with KNWN coaching"
          label="Trusted by athletes and families."
        />

        <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
          <div className="mb-5 space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Testimonials</h2>
            <p className="max-w-2xl text-sm text-slate-300 md:text-base">
              Real athlete stories coming next. Placeholder cards are ready for Sean&apos;s quotes.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {TESTIMONIAL_PLACEHOLDERS.map((item) => (
              <Card key={item.athlete} className="border-slate-800 bg-slate-900/75 p-5">
                <div className="mb-4 h-12 w-12 rounded-full border border-slate-700 bg-slate-950" />
                <p className="text-base italic text-slate-200">&ldquo;Placeholder: athlete testimonial needed&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-white">{item.athlete}</p>
                <p className="text-xs text-slate-400">{item.context}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-8 md:pb-12">
          <Card className="rounded-3xl border-slate-800 bg-gradient-to-r from-slate-900 to-black p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Ready to train the KNWN way?
                </h2>
                <p className="mt-2 text-sm text-slate-300 md:text-base">
                  Request your next step and we&apos;ll guide you from inquiry to action.
                </p>
              </div>
              <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-slate-200">
                <Link href="/contact?intent=book-consultation">Book a Consult</Link>
              </Button>
            </div>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
