import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MediaFrame } from "@/components/site/media-frame";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export const metadata: Metadata = {
  title: "About KNWN | Colorado's Premier Cheerleading Training Center",
  description:
    "KNWN was built for athletes who refuse to settle. Learn who we are, why we exist, and what sets our training environment apart from every other facility in Colorado.",
};

const VALUES = [
  {
    number: "01",
    title: "Intentional Progression",
    body: "Every rep has a purpose. We don't fill hours — we build athletes through structured, measurable progressions designed to eliminate wasted sessions.",
  },
  {
    number: "02",
    title: "Selective Access",
    body: "KNWN is not for everyone. Our model is built around athletes and families who are serious about development, ready to commit, and willing to do the work.",
  },
  {
    number: "03",
    title: "Elite Standards",
    body: "The standard at KNWN is set by the athletes who have trained here and gone on to compete at the highest levels. We maintain that standard every single session.",
  },
  {
    number: "04",
    title: "Family Partnership",
    body: "We invest in families as much as we invest in athletes. Clear communication, transparent progressions, and honest feedback — always.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main>
        {/* ── HERO ── */}
        <section className="mx-auto max-w-6xl px-4 pb-12 pt-16 md:pb-20 md:pt-24">
          <p className="font-display mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">
            Colorado&apos;s premier cheerleading training center
          </p>
          <h1 className="font-display mb-6 text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
            Built for
            <br />
            <span className="text-brand-blue">Athletes</span>
            <br />
            Who Are
            <br />
            Serious.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            KNWN exists for one reason: to develop athletes who are ready to
            compete at the highest level. Not recreational. Not for everyone. For the ones who grind.
          </p>
        </section>

        {/* ── DIVIDER ── */}
        <div className="border-t border-zinc-800" />

        {/* ── ORIGIN / STORY ── */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <h2 className="font-display mb-6 text-3xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
                Why KNWN
                <br />
                Exists
              </h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  Colorado&apos;s cheerleading landscape needed something different. A place
                  where athletes could train with structure, receive real coaching, and develop on a
                  clear path — not just show up and run drills.
                </p>
                <p>
                  KNWN was built to fill that gap. Every program, every service, and every session
                  at KNWN is designed around one question:{" "}
                  <em className="text-white">
                    what does this athlete actually need to reach the next level?
                  </em>
                </p>
                <p>
                  That question drives everything — how we structure progressions, how we select
                  athletes, how we communicate with families, and what we refuse to compromise on.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <p className="font-display mb-1 text-4xl font-black text-brand-blue">Colorado</p>
                <p className="text-sm text-zinc-400">Home base. Premier facility.</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <p className="font-display mb-1 text-4xl font-black text-brand-blue">7</p>
                <p className="text-sm text-zinc-400">Specialized training programs</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <p className="font-display mb-1 text-4xl font-black text-brand-blue">Limited</p>
                <p className="text-sm text-zinc-400">Spots. Intentionally. By design.</p>
              </div>
              {/* Founder photo */}
              <div className="relative h-56 overflow-hidden rounded-2xl border border-zinc-800">
                <MediaFrame
                  src="/images/knwn/founder-portrait.jpg"
                  alt="Sean — KNWN founder and head coach"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="[object-position:50%_30%]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div className="border-t border-zinc-800" />

        {/* ── VALUES ── */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h2 className="font-display mb-12 text-3xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
            What We
            <br />
            Stand For
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {VALUES.map((v) => (
              <div
                key={v.number}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 space-y-3"
              >
                <p className="font-display text-4xl font-extrabold text-brand-blue md:text-5xl">
                  {v.number}
                </p>
                <h3 className="font-display text-xl font-bold uppercase text-white">{v.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div className="border-t border-zinc-800" />

        {/* ── FINAL CTA ── */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="font-display mb-4 text-4xl font-black uppercase tracking-tight text-black md:text-6xl">
              Ready to Train
              <br />
              at KNWN?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-zinc-600">
              Spots are limited. Every athlete starts with a consultation so we can build the right
              training plan — not a generic one.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-brand-blue px-8 text-white hover:bg-brand-blue-hover"
              >
                <Link href="/contact?intent=book-consultation">Claim Your Consult</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-black text-black hover:bg-black hover:text-white"
              >
                <Link href="/#services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
