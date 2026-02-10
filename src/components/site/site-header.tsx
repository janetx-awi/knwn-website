import Link from "next/link";

import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-black/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-sm font-semibold tracking-[0.22em] text-white">
          KNWN
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <Link href="/#about" className="hover:text-white">
            About
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
          <Link href="/contact#faq" className="hover:text-white">
            FAQ
          </Link>
        </nav>

        <Button asChild size="sm" className="rounded-full bg-white text-black hover:bg-slate-200">
          <Link href="/contact">Book Consult</Link>
        </Button>
      </div>
    </header>
  );
}
