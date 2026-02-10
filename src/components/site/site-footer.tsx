import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="text-sm font-semibold tracking-[0.22em] text-white">KNWN</div>
          <p className="text-sm text-slate-400">Exclusive cheer and stunting development. Be Seen. Be KNWN.</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
          <Link href="/contact#faq" className="hover:text-white">
            FAQ
          </Link>
          <a href="mailto:info@knwnbrand.com" className="hover:text-white">
            info@knwnbrand.com
          </a>
        </div>

        <div className="text-sm text-slate-500">© {new Date().getFullYear()} KNWN Brand. All rights reserved.</div>
      </div>
    </footer>
  );
}
