"use client";

import { useState } from "react";
import { INDUSTRIES, type IndustryKey } from "@/lib/content";
import Reveal from "./Reveal";

const ORDER: IndustryKey[] = ["recruiting", "msp"];

export default function IndustryExperience() {
  const [active, setActive] = useState<IndustryKey>("recruiting");
  const ind = INDUSTRIES[active];
  const idx = ORDER.indexOf(active);

  return (
    <section id="pipeline" className="relative py-20 sm:py-28">
      <div className="shell">
        {/* heading + toggle */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal className="max-w-[34ch]">
            <span className="eyebrow text-muted">One engine · Two playbooks</span>
            <h2 className="display-lg mt-4 text-balance">
              Pick your market.<br />Watch the pitch change.
            </h2>
          </Reveal>

          {/* segmented control */}
          <Reveal delay={80}>
            <div
              role="tablist"
              aria-label="Choose your industry"
              className="relative inline-flex rounded-full border border-ink/15 bg-paper-2 p-1.5 shadow-soft"
            >
              <span
                aria-hidden
                className="absolute top-1.5 bottom-1.5 left-1.5 rounded-full bg-ink transition-transform duration-[420ms]"
                style={{
                  width: "calc(50% - 0.375rem)",
                  transform: `translateX(${idx * 100}%)`,
                  transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                }}
              />
              {ORDER.map((key) => {
                const on = key === active;
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActive(key)}
                    className={`relative z-10 rounded-full px-5 py-2.5 text-[0.9rem] font-medium transition-colors duration-300 sm:px-7 ${
                      on ? "text-on-dark" : "text-muted hover:text-ink"
                    }`}
                  >
                    {INDUSTRIES[key].tabLabel}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* swappable body — keyed so it re-animates on change */}
        <div key={active} className="mt-14 grid grid-cols-12 gap-y-12 lg:gap-x-10" style={{ animation: "feed-in 0.5s cubic-bezier(0.16,1,0.3,1)" }}>
          {/* left — tailored value prop */}
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-clay">
              {ind.audience}
            </div>
            <h3 className="display-md mt-4 text-balance">{ind.headline}</h3>
            <p className="lead mt-5">{ind.sub}</p>

            <ul className="mt-8 flex flex-col gap-4">
              {ind.value.map((v, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent text-[0.7rem] font-bold text-ink">
                    {i + 1}
                  </span>
                  <span className="text-[0.98rem] leading-snug text-ink/85">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* right — pipeline preview (the "what you get") */}
          <div className="col-span-12 lg:col-span-8">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-xl bg-paper-2/60 blur-[2px]" aria-hidden />
              <div className="overflow-hidden rounded-lg border border-ink/12 bg-[#fbf8ef] shadow-lift">
                {/* window chrome */}
                <div className="flex items-center justify-between border-b border-line px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-clay/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="ml-3 font-mono text-[0.7rem] text-muted">
                      pipeline · {ind.shortLabel.toLowerCase()}.csv
                    </span>
                  </div>
                  <span className="hidden items-center gap-1.5 font-mono text-[0.68rem] text-muted sm:flex">
                    <span className="live-dot" /> updated 2 min ago
                  </span>
                </div>

                {/* column header — desktop */}
                <div className="hidden grid-cols-12 gap-3 border-b border-line px-4 py-2.5 font-mono text-[0.64rem] uppercase tracking-wider text-muted md:grid">
                  <div className="col-span-3">Company</div>
                  <div className="col-span-4">{ind.signalLabel}</div>
                  <div className="col-span-3">{ind.contactLabel}</div>
                  <div className="col-span-2 text-right">Confidence</div>
                </div>

                {/* rows */}
                <ul>
                  {ind.rows.map((r, i) => (
                    <li
                      key={r.company}
                      className="group border-b border-line/70 px-4 py-4 transition-colors hover:bg-paper-2/50 last:border-b-0"
                      style={{ animation: `feed-in 0.5s cubic-bezier(0.16,1,0.3,1) both`, animationDelay: `${i * 70}ms` }}
                    >
                      <div className="grid grid-cols-12 gap-x-3 gap-y-1.5">
                        <div className="col-span-12 md:col-span-3">
                          <div className="font-display text-[1.08rem] leading-tight tracking-tightest">
                            {r.company}
                          </div>
                          <div className="font-mono text-[0.66rem] text-muted">{r.meta}</div>
                        </div>
                        <div className="col-span-12 flex items-center md:col-span-4">
                          <span className="inline-flex items-start gap-1.5 text-[0.9rem] leading-snug text-ink/80">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-clay" />
                            {r.signal}
                          </span>
                        </div>
                        <div className="col-span-8 md:col-span-3">
                          <div className="text-[0.92rem] font-medium">{r.person}</div>
                          <div className="font-mono text-[0.66rem] text-muted">
                            {r.role} · {r.email}
                          </div>
                        </div>
                        <div className="col-span-4 flex items-center justify-end md:col-span-2">
                          <span className="inline-flex items-center gap-2">
                            <span className="hidden h-1.5 w-12 overflow-hidden rounded-full bg-paper-2 sm:block">
                              <span
                                className="block h-full rounded-full bg-ink"
                                style={{ width: `${r.confidence}%` }}
                              />
                            </span>
                            <span className="font-mono text-[0.8rem] tabular-nums">{r.confidence}%</span>
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* footer */}
                <div className="flex items-center justify-between border-t border-line bg-paper-2/40 px-4 py-3">
                  <span className="font-mono text-[0.68rem] text-muted">
                    + 240 more in your market this week
                  </span>
                  <a href="#sample" className="font-mono text-[0.72rem] font-medium text-ink underline-offset-4 hover:underline">
                    Unlock the full list →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
