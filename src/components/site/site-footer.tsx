import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="text-sm font-semibold tracking-[0.22em] text-slate-900">KNWN</div>
          <p className="text-sm text-slate-600">
            Premium coaching, performance development, and athlete support.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
          <Link href="/services" className="hover:text-slate-900">
            Services
          </Link>
          <Link href="/#contact" className="hover:text-slate-900">
            Contact
          </Link>
          <Link href="/#faq" className="hover:text-slate-900">
            FAQ
          </Link>
        </div>

        <div className="text-sm text-slate-500">© {new Date().getFullYear()} KNWN Brand. All rights reserved.</div>
      </div>
    </footer>
  );
}
