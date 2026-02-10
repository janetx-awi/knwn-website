import Link from "next/link";
import { Instagram } from "lucide-react";

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
      <path d="M19.59 6.69A4.83 4.83 0 0 1 16 5.08v8.53a5.97 5.97 0 1 1-5.17-5.94v2.9a3.12 3.12 0 1 0 2.32 3V2h2.77a4.83 4.83 0 0 0 3.67 4.35v.34z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="text-sm font-semibold tracking-[0.22em] text-white">KNWN</div>
          <p className="text-sm text-slate-400">Exclusive cheer and stunting development. Be Seen. Be KNWN.</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
          <Link href="/#services" className="hover:text-white">
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

        <div className="flex items-center gap-4 text-slate-400">
          <a
            href="https://instagram.com/knwnbrand"
            target="_blank"
            rel="noreferrer"
            aria-label="KNWN Instagram"
            className="hover:text-white"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://www.tiktok.com/@knwnbrand"
            target="_blank"
            rel="noreferrer"
            aria-label="KNWN TikTok"
            className="hover:text-white"
          >
            <TikTokIcon />
          </a>
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} KNWN Brand. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
