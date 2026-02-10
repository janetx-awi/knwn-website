import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/lib/content";

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <div className="space-y-4">
          <p className="text-sm text-slate-400">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="px-2">/</span>
            <span className="text-white">{service.title}</span>
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">{service.title}</h1>
          <p className="max-w-3xl text-base text-slate-300">{service.summary}</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card className="space-y-4 border-slate-800 bg-slate-900/70 p-5 md:col-span-2">
            <h2 className="text-2xl font-semibold text-white">Service overview</h2>

            <p className="text-sm text-slate-300">
              This service is built for athletes who want structured development, clear feedback, and
              intentional progression.
            </p>

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
          </Card>

          <Card className="space-y-3 border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-xl font-semibold text-white">Next step</h2>
            <p className="text-sm text-slate-300">
              Submit a contact inquiry and choose Book Consultation or Learn More About.
            </p>

            <Button asChild className="w-full rounded-full bg-white text-black hover:bg-slate-200">
              <Link href={`/contact?intent=book-consultation&service=${service.slug}`}>Book Consult</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full rounded-full border-slate-700 bg-transparent text-white hover:bg-slate-900"
            >
              <Link href={`/contact?intent=learn-more-about&service=${service.slug}`}>Learn More About</Link>
            </Button>
          </Card>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
