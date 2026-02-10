import Link from "next/link";

import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-sm font-semibold tracking-[0.22em] text-slate-900">
          KNWN
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <Link href="/services" className="hover:text-slate-900">
            Services
          </Link>
          <Link href="/#about" className="hover:text-slate-900">
            About
          </Link>
          <Link href="/#contact" className="hover:text-slate-900">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="rounded-full bg-slate-900 text-white hover:bg-slate-800">
            <Link href="/#contact">Book consult</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
