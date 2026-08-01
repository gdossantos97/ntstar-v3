"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandName } from "./BrandName";
import { Mark } from "./Mark";
import { cn } from "@/lib/utils";

const links = [
  { href: "#build", label: "What we build" },
  { href: "#how", label: "Process" },
  { href: "#pricing", label: "Pricing" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-5 items-center justify-center" aria-hidden>
      <span
        className={cn(
          "absolute block h-0.5 w-5 rounded-full bg-ice transition-all duration-200",
          open ? "translate-y-0 rotate-45" : "-translate-y-[6px]",
        )}
      />
      <span
        className={cn(
          "absolute block h-0.5 w-5 rounded-full bg-ice transition-all duration-200",
          open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100",
        )}
      />
      <span
        className={cn(
          "absolute block h-0.5 w-5 rounded-full bg-ice transition-all duration-200",
          open ? "translate-y-0 -rotate-45" : "translate-y-[6px]",
        )}
      />
    </span>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <div className="relative">
      <div className="relative mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-5 sm:py-3.5 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 rounded-md sm:gap-3"
          onClick={closeMenu}
        >
          <Mark className="h-5 w-auto shrink-0 sm:h-6" />
          <BrandName className="truncate" />
        </Link>

        <nav
          className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.05] p-1 md:ml-6 md:flex lg:ml-10"
          aria-label="Primary"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-muted-nt transition-colors hover:bg-white/[0.07] hover:text-ice"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Link
            href="#contact"
            className="hidden rounded-full bg-lime px-4 py-2 text-sm font-medium text-midnight transition-colors hover:bg-[#e4ff7a] md:inline-flex"
          >
            Book a call
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-ice transition-colors hover:border-white/20 hover:bg-white/[0.1] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-[var(--site-header-height)] z-40 bg-midnight/75 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
            aria-label="Close menu"
          />

          <div
            id="mobile-nav"
            className="absolute inset-x-0 top-full z-50 border-b border-white/10 bg-[#12121a] shadow-[0_24px_48px_rgba(0,0,0,0.65)] md:hidden"
          >
            <nav className="mx-auto max-w-6xl px-4 py-3 sm:px-5" aria-label="Mobile">
              <ul className="divide-y divide-white/8">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between py-3.5 text-base text-ice transition-colors hover:text-lime"
                    >
                      {link.label}
                      <span className="text-muted-nt" aria-hidden>
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                onClick={closeMenu}
                className="mt-3 flex w-full items-center justify-center rounded-full bg-lime px-4 py-3 text-sm font-medium text-midnight transition-colors hover:bg-[#e4ff7a]"
              >
                Book a call
              </Link>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
