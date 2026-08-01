"use client";

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
    <section id="pricing" className="bg-[#0e0e13] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="label-caps text-muted-nt">Pricing</p>
        <h2 className="mt-4 font-display text-4xl text-ice lg:text-5xl">
          Pay once. Own it forever.
        </h2>
        <p className="mt-4 max-w-lg text-sm text-muted-nt">
          No per seat pricing. No annual renewals. You pay for the build, you
          keep the thing.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <CardSpotlight
              key={tier.name}
              color={tier.color}
              className={`border-white/10 bg-midnight ${
                tier.featured ? "ring-1 ring-lime/30" : ""
              }`}
            >
              <p className={`label-caps ${tier.featured ? "text-lime" : "text-muted-nt"}`}>
                {tier.name}
              </p>
              <p className="mt-4 font-display text-4xl text-ice">{tier.price}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-nt">
                {tier.detail}
              </p>
              <p className="mt-8 text-xs text-muted-nt">{tier.fit}</p>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
