"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type MediaFrameProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  fallbackSrc?: string;
};

export function MediaFrame({
  src,
  alt,
  sizes,
  priority,
  className,
  fallbackSrc = "/images/knwn/hero-action.webp",
}: MediaFrameProps) {
  const [activeSrc, setActiveSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 transition-opacity duration-500",
          loaded ? "opacity-0" : "opacity-100",
        )}
        aria-hidden
      />

      <Image
        src={activeSrc}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover transition-opacity duration-500", loaded ? "opacity-100" : "opacity-0", className)}
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (activeSrc !== fallbackSrc) {
            setActiveSrc(fallbackSrc);
            setLoaded(false);
            return;
          }

          setLoaded(true);
        }}
      />
    </>
  );
}
