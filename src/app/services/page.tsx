import Link from "next/link";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/lib/content";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <section className="space-y-4">
          <Badge className="rounded-full border border-slate-700 bg-slate-900 px-4 py-1 text-slate-100">
            KNWN Services
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">Training services</h1>

          <p className="max-w-3xl text-base text-slate-300">
            KNWN offers six focused service paths built around structured athlete development and
            college-journey support.
          </p>

          <Button asChild className="rounded-full bg-white text-black hover:bg-slate-200">
            <Link href="/contact">Book Consult</Link>
          </Button>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          {SERVICES.map((service) => (
            <Card
              key={service.slug}
              id={service.slug}
              className="space-y-4 border-slate-800 bg-slate-900/70 p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-2xl font-semibold tracking-tight text-white">{service.title}</h2>
                {service.comingSoon ? (
                  <Badge className="rounded-full border border-slate-700 bg-slate-950 text-slate-300 hover:bg-slate-950">
                    Coming soon
                  </Badge>
                ) : null}
              </div>

              <p className="text-sm text-slate-300">{service.summary}</p>

              <div className="grid gap-2 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-white">Best for:</span> {service.bestFor}
                </p>
                <p>
                  <span className="font-semibold text-white">Format:</span> {service.format}
                </p>
                <p>
                  <span className="font-semibold text-white">Typical cadence:</span> {service.cadence}
                </p>
                <p>
                  <span className="font-semibold text-white">Outcome focus:</span> {service.outcome}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button asChild className="rounded-full bg-white text-black hover:bg-slate-200">
                  <Link href={`/contact?intent=learn-more-about&service=${service.slug}`}>Learn More</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-slate-700 bg-transparent text-white hover:bg-slate-900"
                >
                  <Link href={`/services/${service.slug}`}>Service Details</Link>
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
