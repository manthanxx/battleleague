export function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-8 md:py-24">
      <div>
        <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
          Launching Soon
        </span>

        <h1 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
          A new way to join Free Fire tournaments
        </h1>

        <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
          Battle League is an upcoming platform where players can join custom
          matches and compete for rewards.
        </p>

        <div className="mt-8">
          <a
            href="#testing"
            className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-orange-600"
          >
            Join Testing
          </a>
        </div>
      </div>

      <div className="hidden md:block" aria-hidden="true">
        <div className="h-72 rounded-2xl border border-slate-200 bg-slate-50 shadow-soft" />
      </div>
    </section>
  );
}