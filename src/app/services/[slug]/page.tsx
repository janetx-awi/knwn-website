import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/lib/content";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-4 py-8 md:py-10">
        <p className="text-sm text-slate-400">
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <span className="px-2">/</span>
          <span className="text-slate-200">{service.title}</span>
        </p>

        <div className="mt-3 space-y-3">
          {service.comingSoon ? (
            <Badge className="rounded-full border border-slate-700 bg-slate-900 text-slate-200">
              Coming soon
            </Badge>
          ) : null}

          <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{service.title}</h1>
          <p className="text-sm text-slate-300 md:text-base">{service.summary}</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card className="border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-lg font-semibold text-white">Service details</h2>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
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
          </Card>

          <Card className="border-slate-800 bg-black/40 p-5">
            <h2 className="text-lg font-semibold text-white">Next step</h2>
            <p className="mt-2 text-sm text-slate-300">
              Submit a contact request and choose Book Consultation or Learn More. We will follow up
              with service fit and scheduling details.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button asChild className="rounded-full bg-white text-black hover:bg-slate-200">
                <Link href="/contact">Request consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-slate-700 bg-transparent text-white hover:bg-slate-800"
              >
                <Link href="/services">Back to services</Link>
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
