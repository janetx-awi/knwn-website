"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#merch", label: "Merch" },
  { href: "/contact", label: "Contact" },
  { href: "/contact#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1 md:py-2">
          <Link href="/" className="flex items-center" aria-label="KNWN Brand — Home">
            <Image
              src="/images/knwn/knwn-logo.png"
              alt="KNWN Brand"
              width={360}
              height={240}
              className="h-20 w-auto md:h-28"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Book Now + hamburger */}
          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="rounded-full bg-amber-600 text-white hover:bg-amber-500">
              <Link href="/contact?intent=book-consultation">Book Now</Link>
            </Button>

            <button
              className="flex items-center justify-center text-slate-300 hover:text-white md:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/95 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <nav
            className="flex h-full flex-col items-center justify-center gap-8 px-8"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={`mobile-${link.label}`}
                href={link.href}
                className="font-display text-3xl font-extrabold uppercase tracking-tight text-white transition-colors hover:text-amber-500"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Button
              asChild
              size="lg"
              className="mt-4 rounded-full bg-amber-600 px-10 text-white hover:bg-amber-500"
            >
              <Link href="/contact?intent=book-consultation" onClick={() => setMenuOpen(false)}>
                Book Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
