"use client";

import { useEffect, useRef, useState } from "react";
import { SIGNAL_FEED } from "@/lib/content";
import Counter from "./Counter";

interface FeedItem {
  id: number;
  text: string;
  tag: string;
  industry: string;
  time: string;
}

const WINDOW = 6;

function clock(offsetSec: number) {
  const d = new Date(Date.now() - offsetSec * 1000);
  return d.toLocaleTimeString("en-US", { hour12: false });
}

export default function LiveSignalFeed() {
  const [items, setItems] = useState<FeedItem[]>(() =>
    Array.from({ length: WINDOW }, (_, i) => {
      const s = SIGNAL_FEED[i % SIGNAL_FEED.length];
      return { id: i, text: s.text, tag: s.tag, industry: s.industry, time: clock((i + 1) * 7) };
    })
  );
  const cursor = useRef(WINDOW);
  const uid = useRef(WINDOW);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      const s = SIGNAL_FEED[cursor.current % SIGNAL_FEED.length];
      cursor.current += 1;
      uid.current += 1;
      setItems((prev) => [
        { id: uid.current, text: s.text, tag: s.tag, industry: s.industry, time: clock(0) },
        ...prev.slice(0, WINDOW - 1),
      ]);
    }, 2600);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section id="signals" className="relative overflow-hidden bg-forest py-20 text-on-dark sm:py-28">
      {/* faint grid on dark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(238,231,214,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(238,231,214,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(120% 80% at 20% 0%, #000 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(120% 80% at 20% 0%, #000 40%, transparent 80%)",
        }}
      />
      <div className="shell relative">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12">
          {/* left — claim + counters */}
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="live-dot" />
              <span className="eyebrow text-accent">The signal room — live</span>
            </div>
            <h2 className="display-lg mt-5 text-balance text-on-dark">
              Right now, deals are <span className="italic text-accent">forming</span> in your market.
            </h2>
            <p className="mt-5 max-w-[42ch] text-[1.02rem] leading-relaxed text-on-dark-muted">
              These are the kinds of moves we catch every day — the moment a company tips its hand,
              long before it shows up on anyone&apos;s radar.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
              <Stat value={<Counter to={12480} suffix="" />} label="signals detected today" />
              <Stat value={<Counter to={94} suffix="%" />} label="contact verify rate" />
              <Stat value={<Counter to={310} suffix="+" />} label="metros covered" />
              <Stat value={<Counter to={48} suffix="h" />} label="from signal to inbox" />
            </div>
          </div>

          {/* right — the feed */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <div
              className="rounded-lg border border-on-dark/12 bg-[#0b1813] shadow-deep"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="flex items-center justify-between border-b border-on-dark/10 px-4 py-3">
                <span className="font-mono text-[0.7rem] uppercase tracking-widest text-on-dark-muted">
                  ~/growstackup/feed
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[0.68rem] text-accent">
                  <span className="live-dot" /> streaming
                </span>
              </div>
              <ul className="divide-y divide-on-dark/8 px-1.5 py-1.5" aria-live="polite">
                {items.map((it, i) => (
                  <li
                    key={it.id}
                    className="flex items-start gap-3 px-3 py-3.5"
                    style={{
                      animation: i === 0 ? "feed-in 0.45s ease both" : undefined,
                      opacity: 1 - i * 0.085,
                    }}
                  >
                    <span className="mt-[3px] font-mono text-[0.64rem] text-on-dark-muted tabular-nums">
                      {it.time}
                    </span>
                    <span
                      className={`mt-[5px] h-1.5 w-1.5 flex-none rounded-full ${
                        it.industry === "msp" ? "bg-accent" : "bg-clay"
                      }`}
                    />
                    <span className="flex-1 font-mono text-[0.82rem] leading-snug text-on-dark/90">
                      {it.text}
                      <span className="ml-1.5 text-on-dark-muted">· {it.tag}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between border-t border-on-dark/10 px-4 py-2.5 font-mono text-[0.66rem] text-on-dark-muted">
                <span>
                  <span className="text-clay">●</span> recruiting &nbsp;
                  <span className="text-accent">●</span> MSP / IT
                </span>
                <span>hover to pause</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="font-display text-[2.6rem] leading-none tracking-tightest text-on-dark">
        {value}
      </div>
      <div className="mt-2 font-mono text-[0.68rem] uppercase tracking-wider text-on-dark-muted">
        {label}
      </div>
    </div>
  );
}
