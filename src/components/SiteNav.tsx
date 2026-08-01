"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandName } from "./BrandName";
import { Mark } from "./Mark";

const links = [
  { href: "#build", label: "What we build" },
  { href: "#work", label: "The work" },
  { href: "#how", label: "Process" },
  { href: "#pricing", label: "Pricing" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-[49px] z-50">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Mark className="h-6 w-auto" />
          <BrandName />
        </Link>

        <nav className="ml-6 hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-nt transition-colors hover:text-ice"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="ml-auto hidden rounded-md bg-lime px-4 py-2 text-sm font-medium text-midnight transition-colors hover:bg-[#e4ff7a] sm:inline-flex"
        >
          Book a call
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="ml-auto text-muted-nt md:ml-4 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-midnight/95 px-5 py-4 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-nt"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit rounded-md bg-lime px-4 py-2 text-sm font-medium text-midnight"
            >
              Book a call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
