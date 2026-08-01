"use client";

import Link from "next/link";
import { RevealText } from "@/components/RevealText";
import { cn } from "@/lib/utils";
import { BrandName } from "./BrandName";
import { Mark } from "./Mark";

type FooterProps = {
  embedded?: boolean;
};

export function Footer({ embedded = false }: FooterProps) {
  return (
    <footer
      className={cn(
        "py-12",
        embedded
          ? "relative border-t border-white/10 bg-transparent"
          : "border-t border-white/10 bg-midnight",
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:flex-row sm:items-end sm:justify-between lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Mark className="h-5 w-auto" />
            <BrandName />
          </div>
          <RevealText
            text="Software for operators who refuse to wait."
            variant="body"
            className="mt-4 block text-sm"
            as="p"
          />
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted-nt sm:text-right">
          <Link href="mailto:hello@ntstar.com" className="hover:text-ice">
            <RevealText text="hello@ntstar.com" variant="body" />
          </Link>
          <RevealText
            text="Volume 01 / 2026"
            variant="label"
            className="label-caps"
            as="p"
          />
        </div>
      </div>
    </footer>
  );
}
