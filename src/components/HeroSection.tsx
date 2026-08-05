"use client";

import Link from "next/link";
import { GlitchAccent } from "@/components/GlitchAccent";
import { RevealText } from "@/components/RevealText";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100dvh-var(--site-header-height))] w-full flex-col items-center justify-center overflow-hidden antialiased">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 sm:px-5 sm:pb-20 lg:px-8">
        <RevealText
          text="Volume 01 / 2026"
          variant="label"
          className="label-caps"
        />

        <h1 className="mt-5 max-w-4xl overflow-hidden font-display text-[2rem] leading-[0.95] uppercase sm:mt-6 sm:text-5xl md:text-7xl lg:text-8xl">
          <RevealText text="Murder your " variant="ice" className="inline" />
          <GlitchAccent text="software bill" className="inline">
            <RevealText text="software bill" variant="lime" className="inline" />
          </GlitchAccent>
        </h1>

        <RevealText
          text="Software built in 7 days or your money back guaranteed"
          variant="body"
          className="mt-6 block max-w-xl text-base leading-relaxed sm:mt-8 md:text-lg"
          as="p"
        />

        <div className="mt-8 sm:mt-10">
          <Link
            href="#contact"
            className="animate-jiggle inline-flex h-12 w-full items-center justify-center rounded-full bg-lime px-8 text-sm font-medium text-midnight transition-colors hover:bg-[#e4ff7a] sm:w-auto"
          >
            Book a call
          </Link>
        </div>
      </div>
    </section>
  );
}
