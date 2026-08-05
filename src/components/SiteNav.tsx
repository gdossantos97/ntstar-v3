"use client";

import Link from "next/link";
import { BrandName } from "./BrandName";
import { Mark } from "./Mark";

export function SiteNav() {
  return (
    <div className="relative mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-5 sm:py-3.5 lg:px-8">
      <Link href="/" className="flex min-w-0 items-center gap-2.5 rounded-md sm:gap-3">
        <Mark className="h-5 w-auto shrink-0 sm:h-6" />
        <BrandName className="truncate" />
      </Link>

      <Link
        href="#contact"
        className="ml-auto inline-flex rounded-full bg-lime px-4 py-2 text-sm font-medium text-midnight transition-colors hover:bg-[#e4ff7a]"
      >
        Book a call
      </Link>
    </div>
  );
}
