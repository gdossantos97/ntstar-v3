"use client"; 

import Link from "next/link";
import { GlitchAccent } from "@/components/GlitchAccent";
import { RevealText } from "@/components/RevealText";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

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
          <GlitchAccent text="software bloat" className="inline">
            <RevealText text="software bloat" variant="lime" className="inline" />
          </GlitchAccent>
        </h1>

        <RevealText
          text="Custom ops tools built in days and handed over with the keys attached. The kind your team actually opens on Monday morning."
          variant="body"
          className="mt-6 block max-w-xl text-base leading-relaxed sm:mt-8 md:text-lg"
          as="p"
        />

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <MovingBorderButton
            as={Link}
            href="#contact"
            borderRadius="0.5rem"
            containerClassName="h-12 w-full sm:w-44"
            className="border-violet/30 bg-midnight/90 text-sm font-medium text-ice"
            borderClassName="bg-[radial-gradient(#ceff1c_40%,#3748bf_60%,transparent_70%)]"
          >
            See what we build
          </MovingBorderButton>
          <Link
            href="#build"
            className="text-center text-sm font-medium text-muted-nt transition-colors hover:text-lime sm:text-left"
          >
            See the goods →
          </Link>
        </div>
      </div>
    </section>
  );
}
