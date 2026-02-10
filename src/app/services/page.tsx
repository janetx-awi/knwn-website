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
          <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
          <p className="max-w-2xl text-slate-600">
            A focused set of offerings built for athlete development. Start with your goal and we
            will recommend the right path.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SERVICES.map((service, idx) => (
            <Card
              key={service.slug}
              id={service.slug}
              className="overflow-hidden border-slate-200 bg-white shadow-sm"
            >
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
                    <div className="text-lg font-semibold">{service.title}</div>
                    <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
                  </div>
                  {service.comingSoon ? (
                    <Badge className="rounded-full bg-slate-100 text-slate-700 hover:bg-slate-100">
                      Coming soon
                    </Badge>
                  ) : null}
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild className="rounded-full bg-slate-900 text-white hover:bg-slate-800">
                    <Link href="/#contact">Tell us your goal</Link>
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
