export function TestingSection() {
  return (
    <section id="join-now" className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className="max-w-3xl rounded-2xl border border-slate-200 bg-white p-7 shadow-soft md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Fast Tournament Entry
          </h2>

          <ul className="mt-5 space-y-2 text-sm leading-relaxed text-slate-600 md:text-base">
            <li>Join Free Fire tournaments instantly with one tap.</li>
            <li>Auto matchmaking builds the right duo or squad for each room.</li>
            <li>Live updates keep players informed from entry to rewards.</li>
          </ul>

          <a
            href="https://forms.gle/ttCbviCyvZiVRuQHA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-orange-600"
          >
            Join Instant Match
          </a>
        </div>
      </div>
    </section>
  );
}