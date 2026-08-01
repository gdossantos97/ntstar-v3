"use client";

import Link from "next/link";
import { RevealText } from "@/components/RevealText";

export function AnnouncementBar() {
  return (
    <Link
      href="#contact"
      className="fixed inset-x-0 top-0 z-50 block bg-lime px-4 py-3 text-center text-sm font-medium text-midnight transition-colors hover:bg-[#e4ff7a]"
    >
      <RevealText
        text="Death to the $80k quote. Your first internal tool ships inside a week →"
        variant="midnight"
      />
    </Link>
  );
}
