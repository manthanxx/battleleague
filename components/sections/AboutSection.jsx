export function AboutSection() {
  return (
    <section id="about" className="border-t border-slate-100 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          About Battle League
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
          Battle League is built to make tournament participation simple for Free
          Fire players. Users can discover active matches, join quickly, receive
          room details, and track outcomes in one place.
        </p>
      </div>
    </section>
  );
}