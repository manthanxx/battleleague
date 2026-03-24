import { features } from "@/data/content";

export function FeaturesSection() {
  return (
    <section id="features" className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          Features
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft"
            >
              <div className="mb-4 h-7 w-7 rounded-md bg-orange-100" />
              <h3 className="text-base font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}