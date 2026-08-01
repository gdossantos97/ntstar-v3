"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { WobbleCard } from "@/components/ui/wobble-card";

const items = [
  {
    title: "Internal tools",
    description:
      "Job tracking, crew dispatch, invoicing. Built around how you work, not how a vendor imagined you work.",
    span: "md:col-span-2",
    bg: "bg-violet/20",
  },
  {
    title: "AI automation",
    description:
      "The busywork dies on Friday. Practical AI that runs in production, not on a slide deck.",
    span: "md:col-span-1",
    bg: "bg-lime/10",
  },
  {
    title: "Custom software",
    description:
      "SMB to enterprise, same speed. Owned outright, without the procurement theater.",
    span: "md:col-span-1",
    bg: "bg-midnight",
  },
  {
    title: "Your dev agency hates this",
    description: "Good. We build what they quoted at $80k. In days. For a fraction of the price.",
    span: "md:col-span-2",
    bg: "bg-violet",
  },
];

export function ServicesSection() {
  return (
    <section id="build" className="bg-midnight py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="label-caps text-muted-nt">What we build</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl text-ice lg:text-5xl">
          Software your ops team will actually open
        </h2>

        <div className="mt-14 hidden md:block">
          <BentoGrid className="md:auto-rows-[20rem]">
            {items.map((item) => (
              <BentoGridItem
                key={item.title}
                title={
                  <span className="font-display text-xl text-ice">{item.title}</span>
                }
                description={
                  <span className="text-sm text-muted-nt">{item.description}</span>
                }
                className={`border-white/10 bg-[#1a1a22] ${item.span}`}
                header={
                  <div className={`h-full min-h-[6rem] w-full rounded-lg ${item.bg}`} />
                }
              />
            ))}
          </BentoGrid>
        </div>

        <div className="mt-10 grid gap-4 md:hidden">
          {items.map((item) => (
            <WobbleCard
              key={item.title}
              containerClassName="bg-violet min-h-[200px]"
            >
              <h3 className="font-display text-xl text-ice">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-nt">{item.description}</p>
            </WobbleCard>
          ))}
        </div>
      </div>
    </section>
  );
}
