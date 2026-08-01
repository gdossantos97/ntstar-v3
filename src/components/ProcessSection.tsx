"use client";

import { Terminal } from "@/components/ui/terminal";

const steps = [
  {
    num: "01",
    title: "Tell us what is broken",
    body: "A thirty minute call. No deck. No discovery phase that costs more than the build.",
  },
  {
    num: "02",
    title: "We build it in days",
    body: "Your tool ships inside a week. You see it working before you sign anything long term.",
  },
  {
    num: "03",
    title: "You own it outright",
    body: "No seats. No renewals. No vendor holding your roadmap hostage. It is yours.",
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
    "Agency quote on file: $80,000",
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
    "No seats. No renewals.",
    "You own it. Cancel the contract.",
  ],
};

export function ProcessSection() {
  return (
    <section id="how" className="bg-midnight py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="label-caps text-muted-nt">How it works</p>
        <h2 className="mt-4 font-display text-4xl text-ice lg:text-5xl">
          Three steps. One week.
        </h2>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="grid gap-10">
            {steps.map((step) => (
              <div key={step.num} className="border-t border-white/10 pt-8">
                <p className="font-display text-4xl text-lime">{step.num}</p>
                <h3 className="mt-4 text-lg font-medium text-ice">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-nt">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-28">
            <Terminal
              commands={commands}
              outputs={outputs}
              username="ntstar"
              enableSound={false}
              typingSpeed={45}
              delayBetweenCommands={1000}
              className="max-w-none px-0"
            />
            <p className="mt-4 text-center text-xs text-muted-nt">
              Scroll to watch the build run
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
