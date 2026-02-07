import Link from "next/link";

import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-sm font-semibold tracking-[0.22em]">
          KNWN
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <Link href="#about" className="hover:text-white">
            About
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="rounded-full">
            <Link href="#contact">Book Consultation</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
