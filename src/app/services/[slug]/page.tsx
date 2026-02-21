import Link from "next/link";
import { notFound } from "next/navigation";

import { MediaFrame } from "@/components/site/media-frame";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/lib/content";

const SERVICE_HERO_IMAGES: Record<string, string> = {
  "personalized-coaching": "/images/knwn/service-intensity.webp",
  "semi-private-training": "/images/knwn/goal-start.webp",
  "classes-tumbling-stunting": "/images/knwn/trust-athletes.webp",
  "high-school-college-pathway": "/images/knwn/hero-action.webp",
  "mental-performance-training": "/images/knwn/consultation-flow.webp",
  "social-media-guidance": "/images/knwn/service-intensity.webp",
  "knwn-academy": "/images/knwn/trust-athletes.webp",
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((item) => item.slug === slug);

  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main>
        <section className="relative isolate h-[50vh] min-h-[340px] overflow-hidden">
          <MediaFrame
            src={SERVICE_HERO_IMAGES[service.slug] ?? "/images/knwn/hero-action.webp"}
            alt={`${service.title} hero image`}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-8">
            <div className="space-y-3">
              <Link href="/#services" className="inline-flex text-sm text-slate-300 hover:text-white">
                ← Back to services
              </Link>
              <Badge className="rounded-full border border-slate-700 bg-black/50 text-slate-100">
                Service Detail
              </Badge>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                {service.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-4 px-4 py-6 md:grid-cols-[1.35fr_0.9fr] md:py-10">
          <Card className="space-y-4 border-slate-800 bg-slate-900/70 p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-white">Overview</h2>

            <p className="text-sm text-slate-300 md:text-base">{service.summary}</p>

            {service.detailParagraphs?.map((paragraph, index) => (
              <p key={`${service.slug}-detail-${index}`} className="text-sm text-slate-300 md:text-base">
                {paragraph}
              </p>
            ))}

            {service.closingStatement && (
              <p className="border-l-2 border-slate-500 pl-3 text-sm italic font-medium text-slate-100 md:text-base">
                {service.closingStatement}
              </p>
            )}

            <p className="text-sm text-slate-300 md:text-base">This service is built for {service.bestFor}</p>
            <p className="text-sm text-slate-300 md:text-base">
              It is delivered through {service.format.toLowerCase()} and focuses on {service.outcome.toLowerCase()}
            </p>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-white">Typical cadence:</span> {service.cadence}
              </p>
            </div>
          </Card>

          <Card className="space-y-4 border-slate-800 bg-slate-900/75 p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">Next step</h2>
            <p className="text-sm text-slate-300">
              Choose this service in the form and submit. We&apos;ll follow up with clear next steps.
            </p>

            <Button asChild className="w-full rounded-full bg-white text-black hover:bg-slate-200">
              <Link href={`/contact?intent=book-consultation&service=${service.slug}`}>Book Now</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full rounded-full border-slate-700 bg-transparent text-white hover:bg-slate-900"
            >
              <Link href="/#services">Back to services</Link>
            </Button>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
