import { notFound } from "next/navigation";
import Link from "next/link";

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
  const { slug } = params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-16">
        <div className="space-y-4">
          <p className="text-sm text-white/60">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="px-2">/</span>
            <span className="text-white">{service.title}</span>
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">{service.title}</h1>
          <p className="max-w-2xl text-white/70">{service.summary}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card className="border-white/10 bg-white/5 p-6 md:col-span-2">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="text-sm text-white/70">
                Placeholder content. Once Sean provides service details, we will replace this with:
                who it is for, what is included, outcomes, requirements, and pricing.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-sm text-white/70">
                <li>Who it is for (age / level)</li>
                <li>What is included (session length, frequency)</li>
                <li>Expected outcomes</li>
                <li>Pricing + packages</li>
              </ul>
            </div>
          </Card>

          <Card className="border-white/10 bg-white/5 p-6">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Next step</h2>
              <p className="text-sm text-white/70">
                Request a consultation and we will confirm availability.
              </p>
              <Button asChild className="w-full rounded-full">
                <Link href="/#contact">Request consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
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
