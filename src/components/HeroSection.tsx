"use client";

import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "@/components/ui/flip-words";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-midnight antialiased pt-24">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#3748bf"
      />
      <BackgroundBeams className="absolute inset-0 z-0" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 lg:px-8">
        <p className="label-caps text-muted-nt">Volume 01 / 2026</p>

        <h1 className="mt-6 max-w-4xl font-display text-4xl text-ice md:text-7xl lg:text-8xl">
          Murder your{" "}
          <FlipWords
            words={["SaaS bill", "retainer", "agency quote", "tool sprawl"]}
            className="text-lime"
          />
        </h1>

        <div className="mt-8 max-w-xl">
          <TextGenerateEffect
            words="The ops tool you were quoted $80k for, built in days and owned outright. No seats. No renewals."
            className="font-normal"
            duration={0.4}
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <MovingBorderButton
            as={Link}
            href="#contact"
            borderRadius="0.5rem"
            containerClassName="h-12 w-44"
            className="border-violet/30 bg-midnight/90 text-sm font-medium text-ice"
            borderClassName="bg-[radial-gradient(#ceff1c_40%,#3748bf_60%,transparent_70%)]"
          >
            See what we build
          </MovingBorderButton>
          <Link
            href="#work"
            className="text-sm font-medium text-muted-nt transition-colors hover:text-lime"
          >
            Read the receipts →
          </Link>
        </div>
      </div>
    </section>
  );
}
