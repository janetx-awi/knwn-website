import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="text-sm font-semibold tracking-[0.22em]">KNWN</div>
          <p className="text-sm text-white/60">
            Premium coaching, performance development, and athlete support.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>
          <Link href="#faq" className="hover:text-white">
            FAQ
          </Link>
        </div>

        <div className="text-sm text-white/50">
          © {new Date().getFullYear()} KNWN Brand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
