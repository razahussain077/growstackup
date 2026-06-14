import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "We watch the signals.",
    body: "Job posts, headcount spikes, fresh funding, new locations, breach reports, tech changes, compliance pushes — we monitor the moves that mean a company is about to spend.",
    snippet: ["scan ▸ job_boards, filings, news, tech_stack", "→ 12,480 signals surfaced today"],
  },
  {
    n: "02",
    title: "We match the decision-maker.",
    body: "Every signal is tied to the actual person who owns the decision — the hiring manager, the firm administrator, the ops lead — then their email is verified before it ever reaches you.",
    snippet: ["match ▸ signal → decision_maker", "→ verify(email) ✓  bounce_risk: low"],
  },
  {
    n: "03",
    title: "You get a ready-to-act list.",
    body: "It lands in your inbox or CRM as a clean, deduped pipeline — company, signal, contact, confidence. No scrubbing, no guessing. Just open it and start the conversation.",
    snippet: ["deliver ▸ pipeline.csv → inbox / crm", "→ 0 rows to clean. start outreach."],
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative border-y border-line bg-paper-2/50 py-20 sm:py-28">
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-6">
          <Reveal className="col-span-12 lg:col-span-5">
            <span className="eyebrow text-muted">How it works</span>
            <h2 className="display-lg mt-4 max-w-[14ch] text-balance">
              Three steps from noise to a named contact.
            </h2>
          </Reveal>
          <Reveal as="p" delay={80} className="col-span-12 self-end lg:col-span-6 lg:col-start-7">
            <span className="lead">
              No tool to learn, no data to enrich, no SDR to babysit. We do the watching and the
              matching — you do the closing.
            </span>
          </Reveal>
        </div>

        <ol className="mt-16 flex flex-col">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 90} className="group relative border-t border-line py-8 sm:py-10">
              <div className="grid grid-cols-12 items-start gap-y-5 gap-x-4">
                {/* big index */}
                <div className="col-span-12 sm:col-span-2">
                  <span className="font-display text-[3.4rem] leading-none tracking-tightest text-ink/15 transition-colors duration-500 group-hover:text-ink">
                    {s.n}
                  </span>
                </div>

                {/* title + body, intentionally offset */}
                <div className="col-span-12 sm:col-span-6 sm:col-start-3">
                  <h3 className="display-md">{s.title}</h3>
                  <p className="mt-3 max-w-[44ch] text-[1rem] leading-relaxed text-muted">{s.body}</p>
                </div>

                {/* terminal snippet */}
                <div className="col-span-12 sm:col-span-3 sm:col-start-10">
                  <div className="rounded-sm border border-line bg-forest p-3.5 font-mono text-[0.7rem] leading-relaxed text-on-dark/90 shadow-soft">
                    {s.snippet.map((line, j) => (
                      <div key={j} className={j === 1 ? "mt-1.5 text-accent" : "text-on-dark-muted"}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
