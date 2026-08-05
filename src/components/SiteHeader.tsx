"use client";

import { useEffect, useState } from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SiteNav } from "@/components/SiteNav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <AnnouncementBar />
      <div
        className={cn(
          "relative border-b transition-[background-color,box-shadow,border-color] duration-300",
          scrolled
            ? "border-white/12 bg-midnight shadow-[0_12px_40px_rgba(0,0,0,0.55)] md:bg-midnight/97 md:backdrop-blur-xl"
            : "border-white/10 bg-midnight md:bg-midnight/92 md:backdrop-blur-lg",
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1c1c26] via-midnight to-midnight"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lime/20 to-transparent"
          aria-hidden
        />
        <SiteNav />
      </div>
    </header>
  );
}
