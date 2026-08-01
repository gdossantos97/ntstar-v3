"use client";

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { RevealText } from "@/components/RevealText";
import { SectionHeading } from "@/components/SectionHeading";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

export function CtaSection() {
  return (
    <section id="contact">
      <BackgroundLines
        className="relative h-auto bg-midnight"
        svgOptions={{ duration: 12 }}
      >
        <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-5 py-24">
          <RevealText
            text="We are not sorry"
            variant="label-lime"
            className="label-caps"
          />
          <SectionHeading
            prefix="Enterprise software"
            accent="is dead"
            className="mx-auto mt-4 max-w-3xl text-center text-4xl md:text-6xl"
            breakBeforeAccent
          />
          <RevealText
            text="Book a call. Tell us what you need. We will tell you honestly if we can build it in a week and what it will cost. No pitch deck required."
            variant="body"
            className="mx-auto mt-6 block max-w-md text-center text-sm"
            as="p"
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MovingBorderButton
              as={Link}
              href="mailto:hello@ntstar.com"
              borderRadius="0.5rem"
              containerClassName="h-12 w-40"
              className="border-violet/30 bg-midnight/90 text-sm font-medium text-ice"
              borderClassName="bg-[radial-gradient(#ceff1c_40%,#3748bf_60%,transparent_70%)]"
            >
              Book a call
            </MovingBorderButton>
            <Link
              href="mailto:hello@ntstar.com"
              className="text-sm text-muted-nt hover:text-lime"
            >
              hello@ntstar.com
            </Link>
          </div>
        </div>
        <Footer embedded />
      </BackgroundLines>
    </section>
  );
}
