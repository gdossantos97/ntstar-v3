"use client";

import { RevealText } from "@/components/RevealText";
import { SectionHeading } from "@/components/SectionHeading";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const tiers = [
  {
    name: "Small teams",
    price: "From $8k",
    detail: "One internal tool or automation. Live in a week. Yours forever.",
    fit: "Founders, ops leads, teams under 50",
    color: "#1a2480",
  },
  {
    name: "Growing ops",
    price: "From $25k",
    detail: "Multiple workflows, integrations, AI where it actually saves hours.",
    fit: "Mid market companies tired of tool sprawl",
    color: "#3748bf",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Let's talk",
    detail: "Custom builds at scale. Same speed, same ownership. Less procurement.",
    fit: "Teams that want results, not a six month RFP",
    color: "#1a2480",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <RevealText text="Pricing" variant="label" className="label-caps" as="p" />
        <SectionHeading
          prefix="Pay once."
          accent="Own it forever."
          className="mt-4 text-4xl lg:text-5xl"
          breakBeforeAccent
        />
        <RevealText
          text="No per seat pricing. No annual renewals. You pay for the build, you keep the thing."
          variant="body"
          className="mt-4 block max-w-lg text-sm"
          as="p"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <CardSpotlight
              key={tier.name}
              color={tier.color}
              className={`border-white/10 bg-midnight ${
                tier.featured ? "ring-1 ring-lime/30" : ""
              }`}
            >
              <RevealText
                text={tier.name}
                variant={tier.featured ? "label-lime" : "label"}
                className="label-caps"
                as="p"
              />
              <RevealText
                text={tier.price}
                variant="ice"
                className="mt-4 block font-display text-4xl"
                as="p"
              />
              <RevealText
                text={tier.detail}
                variant="body"
                className="mt-4 block text-sm leading-relaxed"
                as="p"
              />
              <RevealText
                text={tier.fit}
                variant="small"
                className="mt-8 block text-xs"
                as="p"
              />
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
