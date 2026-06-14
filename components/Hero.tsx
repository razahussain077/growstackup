import { SIGNAL_FEED } from "@/lib/content";

/** Static, server-rendered hero. Holds the page's single <h1> for SEO. */
export default function Hero() {
  const ticker = [...SIGNAL_FEED, ...SIGNAL_FEED];

  return (
    <section id="top" className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-20 lg:pb-28">
      {/* vertical edge ticker — decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[230px] overflow-hidden border-l border-line/70 xl:block"
      >
        <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-paper to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-paper to-transparent" />
        <ul
          className="flex flex-col gap-3 px-5 pt-6 font-mono text-[0.7rem] leading-relaxed text-muted"
          style={{ animation: "scroll-y 38s linear infinite" }}
        >
          {ticker.map((s, i) => (
            <li key={i} className="border-b border-line/60 pb-3">
              <span className="text-clay">●</span>{" "}
              <span className="text-ink/80">{s.tag}</span>
              <br />
              {s.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="shell">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-8">
          {/* left — copy */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow text-muted">B2B Signal Intelligence</span>
              <span className="chip">
                <span className="live-dot" /> Recruiting &amp; MSP
              </span>
            </div>

            <h1 className="display-xl mt-7 max-w-[16ch] text-balance">
              Know who&apos;s <span className="mark">ready to buy</span> — before your competitors do.
            </h1>

            <p className="lead mt-7 max-w-[46ch]">
              GrowStackUp turns live buying signals into a ready-to-act pipeline — companies
              moving <em>right now</em>, each matched to the decision-maker&apos;s verified contact.
              You skip the research and start the conversation.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#sample" className="btn btn-primary">
                Get 25 free prospects
                <span className="arrow" aria-hidden>↗</span>
              </a>
              <a href="#pipeline" className="btn btn-ghost">
                See a live pipeline
              </a>
            </div>

            <p className="mt-7 font-mono text-[0.74rem] uppercase tracking-[0.14em] text-muted">
              No lists to scrub · Contacts verified · Delivered to your inbox
            </p>
          </div>

          {/* right — layered signal cards */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5" aria-hidden>
            <div className="relative mx-auto mt-2 h-[340px] max-w-[420px] sm:h-[400px] lg:mt-0 lg:h-full lg:min-h-[440px]">
              {/* back card */}
              <div
                className="float-soft absolute right-2 top-6 w-[230px] rounded-lg border border-line bg-paper-2 p-4 shadow-soft"
                style={{ ["--rot" as string]: "4deg", animationDelay: "0.6s" }}
              >
                <div className="font-mono text-[0.62rem] uppercase tracking-widest text-muted">
                  Buying signal · Denver, CO
                </div>
                <div className="mt-2 font-display text-[1.15rem] leading-tight">
                  Evaluating IT vendors
                </div>
                <div className="mt-3 h-1.5 w-full rounded-full bg-paper">
                  <div className="h-full w-[88%] rounded-full bg-clay" />
                </div>
                <div className="mt-1 text-right font-mono text-[0.62rem] text-muted">88% intent</div>
              </div>

              {/* front card — the match */}
              <div
                className="float-soft absolute left-0 top-24 w-[290px] rounded-lg border border-ink/15 bg-[#fbf8ef] p-5 shadow-lift sm:top-28"
                style={{ ["--rot" as string]: "-3deg" }}
              >
                <div className="flex items-center justify-between">
                  <span className="chip !bg-accent !border-ink/15 !text-ink">
                    Matched
                  </span>
                  <span className="font-mono text-[0.62rem] text-muted">conf. 96%</span>
                </div>
                <div className="mt-4 font-display text-[1.45rem] leading-none tracking-tightest">
                  Northwind Robotics
                </div>
                <div className="mt-1.5 font-mono text-[0.68rem] text-muted">
                  Posted 6 eng roles · Austin, TX
                </div>
                <div className="my-4 hairline" />
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-display text-sm text-on-dark">
                    DW
                  </div>
                  <div className="leading-tight">
                    <div className="text-[0.92rem] font-medium">Dana Whitfield</div>
                    <div className="font-mono text-[0.68rem] text-muted">VP, Talent — verified ✓</div>
                  </div>
                </div>
              </div>

              {/* floating live tag */}
              <div
                className="float-soft absolute bottom-3 right-6 flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-2 shadow-soft"
                style={{ ["--rot" as string]: "2deg", animationDelay: "1.1s" }}
              >
                <span className="live-dot" />
                <span className="font-mono text-[0.68rem] uppercase tracking-widest">Live now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
