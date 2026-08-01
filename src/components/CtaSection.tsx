"use client";

import Link from "next/link";
import { LampContainer } from "@/components/ui/lamp";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

export function CtaSection() {
  return (
    <section id="contact">
      <LampContainer className="min-h-[70vh] rounded-none bg-midnight">
        <p className="label-caps text-lime">We are not sorry</p>
        <h2 className="mt-4 max-w-3xl text-center font-display text-4xl text-ice md:text-6xl">
          Enterprise software is <span className="text-lime">dead</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-center text-sm text-muted-nt">
          Book a call. Tell us what you need. We will tell you honestly if we
          can build it in a week and what it will cost. No pitch deck required.
        </p>
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
      </LampContainer>
    </section>
  );
}
