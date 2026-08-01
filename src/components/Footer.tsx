import Link from "next/link";
import { BrandName } from "./BrandName";
import { FooterBrandMark } from "./FooterBrandMark";
import { Mark } from "./Mark";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:flex-row sm:items-end sm:justify-between lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Mark className="h-5 w-auto" />
            <BrandName />
          </div>
          <p className="mt-4 text-sm text-muted-nt">
            Internal software, built in days.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted-nt sm:text-right">
          <Link href="mailto:hello@ntstar.com" className="hover:text-ice">
            hello@ntstar.com
          </Link>
          <p className="label-caps text-[#7a7b86]">Volume 01 / 2026</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-5 lg:px-8">
        <FooterBrandMark />
      </div>
    </footer>
  );
}
