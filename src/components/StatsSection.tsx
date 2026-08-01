"use client";

import { RevealText } from "@/components/RevealText";

export function StatsSection() {
  return (
    <section className="border-y border-white/10 py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:gap-12 sm:px-5 md:grid-cols-3 lg:px-8">
        <div>
          <RevealText
            text="70%"
            variant="display-lime"
            className="font-display text-5xl sm:text-6xl lg:text-7xl"
            as="p"
          />
          <RevealText
            text="cheaper. same tool."
            variant="display"
            className="mt-2 block font-display text-2xl"
            as="p"
          />
          <RevealText
            text="Built in house, not outsourced to a six month retainer."
            variant="body"
            className="mt-4 block text-sm"
            as="p"
          />
        </div>
        <div>
          <RevealText
            text="Speed"
            variant="label"
            className="label-caps"
            as="p"
          />
          <p className="mt-4 font-display text-2xl">
            <RevealText
              text="Quoted 6 months. Live in "
              variant="display"
              className="inline"
            />
            <RevealText text="9 days." variant="display-lime" className="inline" />
          </p>
        </div>
        <div>
          <RevealText
            text="Ownership"
            variant="label"
            className="label-caps"
            as="p"
          />
          <RevealText
            text="Stop renting your own tools"
            variant="display"
            className="mt-4 block font-display text-2xl"
            as="p"
          />
          <RevealText
            text="Yours to keep. Cancel the contract."
            variant="body"
            className="mt-4 block text-sm"
            as="p"
          />
        </div>
      </div>
    </section>
  );
}
