import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/lib/content";

const SERVICE_IMAGES = [
  "/images/knwn/service-intensity.webp",
  "/images/knwn/goal-start.webp",
  "/images/knwn/hero-action.webp",
  "/images/knwn/consultation-flow.webp",
  "/images/knwn/trust-athletes.webp",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Services</h1>
          <p className="max-w-2xl text-slate-700">
            Full program lineup for athletes who want clear progression, premium coaching standards,
            and next-level performance outcomes.
          </p>
          <Button asChild className="rounded-full bg-slate-900 text-white hover:bg-slate-800">
            <Link href="/#contact">Book consult</Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SERVICES.map((service, idx) => (
            <Card
              key={service.slug}
              id={service.slug}
              className="overflow-hidden border-slate-200 bg-white shadow-sm"
            >
              <div className="relative h-44 bg-slate-100">
                <Image
                  src={SERVICE_IMAGES[idx % SERVICE_IMAGES.length]}
                  alt={`${service.title} at KNWN`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xl font-semibold tracking-tight text-slate-900">{service.title}</div>
                    <p className="mt-2 text-sm text-slate-700">{service.summary}</p>
                  </div>
                  {service.comingSoon ? (
                    <Badge className="rounded-full bg-slate-100 text-slate-800 hover:bg-slate-100">
                      Coming soon
                    </Badge>
                  ) : null}
                </div>

                <div className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  <p>
                    <span className="font-semibold text-slate-900">Best for:</span> {service.bestFor}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Format:</span> {service.format}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Typical cadence:</span> {service.cadence}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Outcome focus:</span> {service.outcome}
                  </p>
                </div>

                <div className="mt-5 flex">
                  <Button asChild className="rounded-full bg-slate-900 text-white hover:bg-slate-800">
                    <Link href="/#contact">Book consult</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
