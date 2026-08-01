"use client";

import Link from "next/link";
import { RevealText } from "@/components/RevealText";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-midnight antialiased pt-24">
      <StarsBackground
        starDensity={0.00012}
        allStarsTwinkle
        className="z-0"
      />
      <ShootingStars
        minSpeed={12}
        maxSpeed={28}
        minDelay={2000}
        maxDelay={5000}
        starColor="#ceff1c"
        trailColor="#3748bf"
        className="z-[1]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 lg:px-8">
        <RevealText
          text="Volume 01 / 2026"
          variant="label"
          className="label-caps"
        />

        <h1 className="mt-6 max-w-4xl font-display text-4xl uppercase md:text-7xl lg:text-8xl">
          <RevealText text="Murder your " variant="ice" className="inline" />
          <RevealText text="SaaS bill" variant="lime" className="inline" />
        </h1>

        <RevealText
          text="The ops tool you were quoted $80k for, built in days and owned outright. No seats. No renewals."
          variant="body"
          className="mt-8 block max-w-xl text-base leading-relaxed md:text-lg"
          as="p"
        />

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
