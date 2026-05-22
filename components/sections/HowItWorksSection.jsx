import { steps } from "@/data/content";

export function HowItWorksSection() {
  return (
    <section className="border-t border-slate-100 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          How instant matchmaking works
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
          Enter a tournament in a few taps, get auto matched into the right
          duo or squad, and move straight into the room with live updates.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-orange-600">
                Step {index + 1}
              </span>
              <p className="mt-2 text-sm font-medium text-slate-800">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}