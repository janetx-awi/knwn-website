import Link from "next/link";

import { MediaFrame } from "@/components/site/media-frame";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/lib/content";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <section className="grid gap-5 md:grid-cols-[1fr_1fr] md:items-center">
          <div className="space-y-3">
            <Badge className="rounded-full border border-slate-700 bg-slate-900 px-4 py-1 text-slate-100">
              KNWN Services
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">Services</h1>
            <p className="max-w-xl text-sm text-slate-300 md:text-base">
              Full service lineup built for athlete progression, confidence under pressure, and
              college journey support.
            </p>
            <Button asChild className="rounded-full bg-white text-black hover:bg-slate-200">
              <Link href="/contact">Book Consult</Link>
            </Button>
          </div>

          <Card className="relative h-52 overflow-hidden border-slate-800 bg-slate-900 p-0">
            <MediaFrame
              src="/images/knwn/consultation-flow.webp"
              alt="Athletes and coach during a KNWN training session"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
          </Card>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          {SERVICES.map((service) => (
            <Card key={service.slug} id={service.slug} className="border-slate-800 bg-slate-900/70 p-5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-semibold tracking-tight text-white">{service.title}</h2>
                {service.comingSoon ? (
                  <Badge className="rounded-full border border-slate-700 bg-slate-800 text-slate-200">
                    Coming soon
                  </Badge>
                ) : null}
              </div>

              <p className="text-sm text-slate-300">{service.summary}</p>

              <div className="grid gap-2 rounded-xl border border-slate-800 bg-black/40 p-4 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-white">Best for:</span> {service.bestFor}
                </p>
                <p>
                  <span className="font-semibold text-white">Format:</span> {service.format}
                </p>
                <p>
                  <span className="font-semibold text-white">Cadence:</span> {service.cadence}
                </p>
                <p>
                  <span className="font-semibold text-white">Outcome:</span> {service.outcome}
                </p>
              </div>

              <div className="flex gap-2">
                <Button asChild className="rounded-full bg-white text-black hover:bg-slate-200">
                  <Link href="/contact">Book Consult</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-slate-700 bg-transparent text-white hover:bg-slate-800"
                >
                  <Link href={`/services/${service.slug}`}>Details</Link>
                </Button>
              </div>
            </Card>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
