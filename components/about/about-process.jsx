const processSteps = ["Discover", "Design", "Develop", "Launch"];

export default function AboutProcess() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
      <div className="mb-10 w-full text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Our process
        </p>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Simple process, focused delivery
        </h2>
      </div>

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <div
            key={step}
            className="rounded-2xl border bg-background p-6 shadow-sm transition-all hover:shadow-md"
          >
            <p className="text-sm text-muted-foreground">0{index + 1}</p>
            <h3 className="mt-2 text-xl font-semibold">{step}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}