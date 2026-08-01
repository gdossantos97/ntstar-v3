"use client";

import { RevealText } from "@/components/RevealText";
import { SectionHeading } from "@/components/SectionHeading";
import { CodeBlock } from "@/components/ui/code-block";

const serviceTabs = [
  {
    name: "internal-tools.js",
    language: "javascript",
    highlightLines: [7, 8],
    code: `// Job tracking, crew dispatch, invoicing
const internalTool = {
  jobs: "see every open job in one place",
  crews: "dispatch the right team fast",
  invoices: "send when work is done",
  builtFor: "how your ops team works",
  notFor: "how a vendor imagined you",
};

ship(internalTool); // live in days, owned outright`,
  },
  {
    name: "ai-automation.js",
    language: "javascript",
    highlightLines: [6, 7],
    code: `// The busywork dies on Friday
const automation = {
  task: "repeat work your team does daily",
  runsIn: "production",
  notIn: "a slide deck",
  saves: "hours every week",
};

run(automation); // practical AI, not theater`,
  },
  {
    name: "custom-software.js",
    language: "javascript",
    highlightLines: [6, 7, 8],
    code: `// SMB to enterprise, same speed
const yourApp = build({
  size: "your company, not a template",
  timeline: "days, not quarters",
  owned: true,
  seats: null,
  renewals: null,
});

you.keep(yourApp); // no procurement theater`,
  },
  {
    name: "vs-agency.js",
    language: "javascript",
    highlightLines: [3, 4, 5],
    code: `// Your dev agency hates this
const comparison = {
  agencyQuote: "$80,000",
  ntstarBuild: "fraction of that",
  agencyTimeline: "6 months",
  ntstarTimeline: "days",
};

// Good. We ship before their second invoice.`,
  },
];

export function ServicesSection() {
  return (
    <section id="build" className="bg-midnight py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealText text="What we build" variant="label" className="label-caps" as="p" />
        <SectionHeading
          prefix="Software your ops team"
          accent="will actually open"
          className="mt-4 max-w-3xl text-4xl lg:text-6xl"
          breakBeforeAccent
        />

        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 lg:mt-20">
          <CodeBlock
            language="javascript"
            filename="what-we-build"
            tabs={serviceTabs}
            size="lg"
          />
        </div>
      </div>
    </section>
  );
}
