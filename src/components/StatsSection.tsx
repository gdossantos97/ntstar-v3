export function StatsSection() {
  return (
    <section className="border-y border-white/10 bg-midnight py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-6xl text-lime lg:text-7xl">70%</p>
          <p className="mt-2 font-display text-2xl text-ice">cheaper. same tool.</p>
          <p className="mt-4 text-sm text-muted-nt">
            Built in house, not outsourced to a six month retainer.
          </p>
        </div>
        <div>
          <p className="label-caps text-muted-nt">Speed</p>
          <p className="mt-4 font-display text-2xl text-ice">
            Quoted 6 months. Live in <span className="text-lime">9 days.</span>
          </p>
        </div>
        <div>
          <p className="label-caps text-muted-nt">Ownership</p>
          <p className="mt-4 font-display text-2xl text-ice">
            Stop renting your own tools
          </p>
          <p className="mt-4 text-sm text-muted-nt">
            Yours to keep. Cancel the contract.
          </p>
        </div>
      </div>
    </section>
  );
}
