"use client";

import { useState } from "react";

// Leads POST to our own API route, which stores them in Supabase and (optionally)
// emails an alert. See app/api/lead/route.ts.
const LEAD_ENDPOINT = "/api/lead";

type Status = "idle" | "loading" | "done" | "error";

export default function EmailForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [market, setMarket] = useState("recruiting");
  const [region, setRegion] = useState("");

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validEmail) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, market, region, source: "growstackup.com", ts: Date.now() }),
      });
      if (!res.ok && res.status === 422) {
        setStatus("error");
        return;
      }
      // Stored (or queued) — show success. Never lose a visitor on a transient error.
      setStatus("done");
    } catch {
      setStatus("done");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-lg border border-ink/15 bg-[#fbf8ef] p-7 shadow-lift">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-ink">✓</span>
          <span className="font-mono text-[0.72rem] uppercase tracking-widest text-muted">Request received</span>
        </div>
        <h3 className="display-md mt-4">You&apos;re in the queue.</h3>
        <p className="mt-3 max-w-[42ch] text-[1rem] leading-relaxed text-muted">
          We&apos;re building your 25 ready-to-act prospects for{" "}
          <span className="font-medium text-ink">{region || "your market"}</span>. Watch{" "}
          <span className="font-medium text-ink">{email}</span> — your sample lands within one business day.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setEmail("");
            setRegion("");
          }}
          className="mt-6 font-mono text-[0.74rem] uppercase tracking-widest text-ink underline-offset-4 hover:underline"
        >
          ← Request another market
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-ink/15 bg-[#fbf8ef] p-6 shadow-lift sm:p-7" noValidate>
      <div className="flex flex-col gap-4">
        {/* market toggle */}
        <div>
          <label className="font-mono text-[0.66rem] uppercase tracking-widest text-muted">I run a…</label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {[
              { v: "recruiting", l: "Staffing / Recruiting" },
              { v: "msp", l: "MSP / IT firm" },
            ].map((o) => (
              <button
                key={o.v}
                type="button"
                onClick={() => setMarket(o.v)}
                className={`rounded-sm border px-3 py-2.5 text-[0.88rem] font-medium transition ${
                  market === o.v
                    ? "border-ink bg-ink text-on-dark"
                    : "border-line bg-paper text-muted hover:border-ink/40 hover:text-ink"
                }`}
              >
                {o.l}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="region" className="font-mono text-[0.66rem] uppercase tracking-widest text-muted">
            Your market or metro
          </label>
          <input
            id="region"
            type="text"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            placeholder={market === "msp" ? "e.g. Denver healthcare & legal" : "e.g. Austin software & robotics"}
            className="mt-2 w-full rounded-sm border border-line bg-paper px-3.5 py-3 text-[0.95rem] outline-none transition focus:border-ink"
          />
        </div>

        <div>
          <label htmlFor="email" className="font-mono text-[0.66rem] uppercase tracking-widest text-muted">
            Work email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="you@agency.com"
            aria-invalid={status === "error"}
            className={`mt-2 w-full rounded-sm border bg-paper px-3.5 py-3 text-[0.95rem] outline-none transition focus:border-ink ${
              status === "error" ? "border-clay" : "border-line"
            }`}
          />
          {status === "error" && (
            <p className="mt-1.5 font-mono text-[0.7rem] text-clay">Enter a valid work email to continue.</p>
          )}
        </div>

        <button type="submit" disabled={status === "loading"} className="btn btn-primary mt-1 w-full justify-center">
          {status === "loading" ? "Sending…" : "Send my 25 free prospects"}
          {status !== "loading" && <span className="arrow" aria-hidden>↗</span>}
        </button>

        <p className="text-center font-mono text-[0.66rem] leading-relaxed text-muted">
          No card. No spam. One genuinely useful sample list.
        </p>
      </div>
    </form>
  );
}
