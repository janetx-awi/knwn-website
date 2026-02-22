import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <Image
            src="/images/knwn/knwn-logo.png"
            alt="KNWN Brand"
            width={120}
            height={80}
            className="h-10 w-auto"
          />
          <p className="text-sm text-slate-500">Where Elite Athletes Become Unforgettable</p>
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
            href="https://instagram.com/the.knwnbrand"
            target="_blank"
            rel="noreferrer"
            aria-label="KNWN Instagram"
            className="hover:text-white"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} KNWN Brand. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
