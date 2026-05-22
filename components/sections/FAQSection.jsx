import { faqs } from "@/data/content";

export function FAQSection() {
  return (
    <section id="faq" className="border-t border-slate-100 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          Free Fire tournament FAQ
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
          Quick answers for players searching for an instant tournament join
          system, auto matchmaking, custom rooms, and competitive reward play.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-soft"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}