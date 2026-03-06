import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Member Sign In | KNWN Brand",
  description: "Sign in to your KNWN member portal to view your schedule, track progress, and manage your account.",
};

const PORTAL_URL =
  "https://app.upperhand.io/accounts/login?redirect_to=/customers/2391-knwn-brand/dashboard";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-16">
        <div className="w-full max-w-md space-y-8 text-center">
          {/* Logo */}
          <Image
            src="/images/knwn/knwn-logo.png"
            alt="KNWN Brand"
            width={200}
            height={133}
            className="mx-auto h-16 w-auto"
          />

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl">
              Member Portal
            </h1>
            <p className="text-zinc-400">
              Access your schedule, track your progress, and manage your KNWN account.
            </p>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 space-y-4">
            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-brand-blue text-white hover:bg-brand-blue-hover"
            >
              <a href={PORTAL_URL} target="_blank" rel="noreferrer">
                Sign In to Your Account
              </a>
            </Button>
            <p className="text-xs text-zinc-500">
              You&apos;ll be taken to the KNWN member portal to log in securely.
            </p>
          </div>

          {/* Support note */}
          <p className="text-sm text-zinc-500">
            Don&apos;t have an account?{" "}
            <a href="/contact?intent=book-consultation" className="text-zinc-300 underline hover:text-white">
              Start with a consultation.
            </a>
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
