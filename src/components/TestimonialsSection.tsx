"use client";

import { RevealText } from "@/components/RevealText";
import { SectionHeading } from "@/components/SectionHeading";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "We had a tool sitting in a six month backlog. ntstar had a working version in our hands before our next standup. My team actually uses it every day.",
    name: "Marcus Webb",
  },
  {
    quote:
      "I stopped explaining our workflow to vendors and started using software built for how we work. That alone was worth it.",
    name: "Sarah Chen",
  },
  {
    quote:
      "They shipped in nine days. Not a prototype. Production software we own. I still do not fully believe it.",
    name: "James Okafor",
  },
  {
    quote:
      "Our crew leads open the app on Monday morning without anyone asking them to. That never happened with the last three tools we bought.",
    name: "Elena Ruiz",
  },
  {
    quote:
      "No slide deck. No six week discovery. One call, then working software. Refreshing does not cover it.",
    name: "David Park",
  },
  {
    quote:
      "We replaced three spreadsheets and a shared inbox with one tool they built in a week. I wish we had called them sooner.",
    name: "Priya Nair",
  },
];

export function TestimonialsSection() {
  return (
    <section className="border-y border-white/10 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-5 lg:px-8">
        <RevealText text="Testimonials" variant="label" className="label-caps" as="p" />
        <SectionHeading
          prefix="Real teams."
          accent="Real results."
          className="mx-auto mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl"
          breakBeforeAccent
        />
      </div>

      <div className="mx-auto mt-12 flex justify-center sm:mt-16">
        <InfiniteMovingCards
          items={testimonials}
          speed="slow"
          direction="left"
          className="mx-auto w-full"
        />
      </div>
    </section>
  );
}
