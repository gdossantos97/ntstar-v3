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

export function ProcessSection() {
  return (
    <section id="how" className="bg-midnight py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="label-caps text-muted-nt">How it works</p>
        <h2 className="mt-4 font-display text-4xl text-ice lg:text-5xl">
          Three steps. One week.
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="border-t border-white/10 pt-8">
              <p className="font-display text-4xl text-lime">{step.num}</p>
              <h3 className="mt-4 text-lg font-medium text-ice">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-nt">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
