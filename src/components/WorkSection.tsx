"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const cases = [
  {
    quote: "Quoted 6 months. Live in 9 days. Job tracking, crew dispatch, invoicing. One tool, owned outright.",
    name: "Restoration ops",
    title: "9 day delivery",
  },
  {
    quote: "$80k quote? Cute. Replaced three SaaS subscriptions with one custom build. Team adopted it in a week.",
    name: "Field services",
    title: "One build, three tools killed",
  },
  {
    quote: "Routing automation that used to take two people four hours every morning. Now it runs itself.",
    name: "Logistics",
    title: "Your dev agency hates this",
  },
  {
    quote: "70% cheaper. Same tool. Built in house, shipped before the agency sent their second invoice.",
    name: "Operations",
    title: "Real numbers",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="bg-[#0e0e13] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="label-caps text-muted-nt">The work</p>
        <h2 className="mt-4 font-display text-4xl text-ice lg:text-5xl">
          Real builds. Real numbers.
        </h2>
      </div>

      <div className="mt-14">
        <InfiniteMovingCards
          items={cases}
          direction="left"
          speed="slow"
          className="[mask-image:linear-gradient(to_right,transparent,#14141a_10%,#14141a_90%,transparent)]"
        />
      </div>
    </section>
  );
}
