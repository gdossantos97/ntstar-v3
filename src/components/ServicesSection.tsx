"use client";

import { EvervaultCard } from "@/components/ui/evervault-card";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Internal tools",
    description:
      "Job tracking, crew dispatch, invoicing. Built around how you work, not how a vendor imagined you work.",
    span: "md:col-span-2",
    text: "ops",
  },
  {
    title: "AI automation",
    description:
      "The busywork dies on Friday. Practical AI that runs in production, not on a slide deck.",
    span: "md:col-span-1",
    text: "ai",
  },
  {
    title: "Custom software",
    description:
      "SMB to enterprise, same speed. Owned outright, without the procurement theater.",
    span: "md:col-span-1",
    text: "you",
  },
  {
    title: "Your dev agency hates this",
    description:
      "Good. We build what they quoted at $80k. In days. For a fraction of the price.",
    span: "md:col-span-2",
    text: "$80k",
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

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[22rem]">
          {items.map((item) => (
            <article
              key={item.title}
              className={cn(
                "flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a22]",
                item.span,
              )}
            >
              <EvervaultCard
                text={item.text}
                className="aspect-auto h-44 w-full md:h-full md:min-h-[12rem] md:flex-1"
              />
              <div className="border-t border-white/10 p-5">
                <h3 className="font-display text-lg text-ice">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-nt">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
