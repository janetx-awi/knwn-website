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

      <main className="mx-auto max-w-6xl px-4 py-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
          <p className="max-w-2xl text-white/70">
            A focused set of offerings built for athlete development. Final descriptions and pricing
            will be added after Sean provides service details.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Card key={s.slug} className="border-white/10 bg-white/5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold">{s.title}</div>
                  <p className="mt-2 text-sm text-white/70">{s.summary}</p>
                </div>
                {s.comingSoon ? (
                  <Badge className="rounded-full bg-white/10 text-white hover:bg-white/10">
                    Coming soon
                  </Badge>
                ) : null}
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild className="rounded-full">
                  <Link href={`/services/${s.slug}`}>Learn more</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/#contact">Request consult</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
