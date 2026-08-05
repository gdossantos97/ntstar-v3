"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { RevealText } from "@/components/RevealText";
import { SectionHeading } from "@/components/SectionHeading";
import { AsciiArt } from "@/components/ui/ascii-art";

function EditorialAsciiPanel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-[50vh] items-center justify-center px-6 py-12 sm:min-h-[55vh] lg:min-h-[80vh] lg:px-10"
    >
      <div className="aspect-square w-full min-h-[280px] max-w-md lg:max-w-lg">
        {isInView ? (
          <AsciiArt
            src="/images/editorial-hand.png"
            resolution={80}
            color="#CEFF1C"
            inverted
            animationStyle="typewriter"
            animated
            animateOnView={false}
            backgroundColor="transparent"
            className="h-full w-full"
            objectFit="cover"
          />
        ) : null}
      </div>
    </div>
  );
}

export function EditorialSection() {
  return (
    <section className="overflow-hidden sm:min-h-[70vh] lg:min-h-[80vh]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 lg:min-h-[80vh]">
        <EditorialAsciiPanel />

        <div className="relative flex min-h-0 flex-col justify-center px-4 py-10 sm:px-8 sm:py-12 lg:min-h-[80vh] lg:px-16 lg:py-16">
          <p
            className="pointer-events-none absolute right-4 bottom-0 hidden font-brand text-[10rem] leading-none text-ice/[0.05] lg:block xl:text-[12rem]"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            aria-hidden
          >
            ntstar
          </p>

          <RevealText
            text="Release 01"
            variant="label"
            className="label-caps"
            as="p"
          />
          <SectionHeading
            prefix="Built for operators,"
            accent="not committees"
            className="mt-5 text-3xl sm:mt-6 sm:text-4xl lg:text-6xl"
            breakBeforeAccent
          />
          <RevealText
            text="We started ntstar because we watched good companies wait six months for software their teams needed yesterday. We build fast, we build loud, and we hand you the keys when we are done."
            variant="body"
            className="mt-8 block max-w-lg text-base leading-relaxed lg:max-w-xl"
            as="p"
          />
          <RevealText
            text="Ops tools your people actually open. Built like you mean it."
            variant="body"
            className="mt-4 block max-w-lg text-base leading-relaxed lg:max-w-xl"
            as="p"
          />
        </div>
      </div>
    </section>
  );
}
