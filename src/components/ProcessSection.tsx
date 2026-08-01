"use client";

import { RevealText } from "@/components/RevealText";
import { SectionHeading } from "@/components/SectionHeading";
import { Terminal } from "@/components/ui/terminal";

const steps = [
  {
    num: "01",
    title: "Tell us what is broken",
    body: "A thirty minute call. No deck. No six-week discovery circus.",
  },
  {
    num: "02",
    title: "We build it in days",
    body: "Your tool ships inside a week. You see it working before you sign anything long term.",
  },
  {
    num: "03",
    title: "You own it outright",
    body: "Your code. Your roadmap. No vendor holding you hostage. It is yours.",
  },
];

const commands = [
  "ntstar init restoration_ops",
  "ntstar build --days 7",
  "ntstar ship --owned",
];

const outputs: Record<number, string[]> = {
  0: [
    "Call complete. 3 broken workflows found.",
    "Kickoff deck: declined",
    "Starting build...",
  ],
  1: [
    "Job tracking .............. done",
    "Crew dispatch ............. done",
    "Invoicing ................. done",
    "Shipped in 6 days.",
  ],
  2: [
    "Deployed to production.",
    "Ownership transferred.",
    "The keys are yours.",
  ],
};

export function ProcessSection() {
  return (
    <section id="how" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <RevealText text="How it works" variant="label" className="label-caps" as="p" />
        <SectionHeading
          prefix="Three steps."
          accent="One week."
          className="mt-4 text-3xl sm:text-4xl lg:text-5xl"
          breakBeforeAccent
        />

        <div className="mt-10 grid items-start gap-10 sm:mt-16 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="grid gap-10">
            {steps.map((step) => (
              <div key={step.num} className="border-t border-white/10 pt-8">
                <RevealText
                  text={step.num}
                  variant="lime"
                  className="font-display text-4xl"
                  as="p"
                />
                <RevealText
                  text={step.title}
                  variant="ice"
                  className="mt-4 block text-lg font-medium"
                  as="h3"
                />
                <RevealText
                  text={step.body}
                  variant="body"
                  className="mt-3 block text-sm leading-relaxed"
                  as="p"
                />
              </div>
            ))}
          </div>

          <div className="min-w-0 lg:sticky lg:top-[calc(var(--site-header-height)+1rem)]">
            <Terminal
              commands={commands}
              outputs={outputs}
              username="ntstar"
              enableSound={false}
              typingSpeed={45}
              delayBetweenCommands={1000}
              className="max-w-none overflow-hidden px-0"
            />
            <RevealText
              text="Scroll to watch the build run"
              variant="small"
              className="mt-4 block text-center text-xs"
              as="p"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
