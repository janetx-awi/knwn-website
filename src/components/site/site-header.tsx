import Link from "next/link";

import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/contact#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-black/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-sm font-semibold tracking-[0.22em] text-white">
          KNWN
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm" className="rounded-full bg-white text-black hover:bg-slate-200">
          <Link href="/contact?intent=book-consultation">Book Now</Link>
        </Button>
      </div>

      <div className="border-t border-slate-800 px-4 py-2 md:hidden">
        <nav className="mx-auto flex max-w-6xl items-center gap-4 overflow-x-auto text-xs text-slate-300 [scrollbar-width:none]">
          {NAV_LINKS.map((link) => (
            <Link key={`mobile-${link.label}`} href={link.href} className="whitespace-nowrap hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
