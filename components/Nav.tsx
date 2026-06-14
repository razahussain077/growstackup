"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#signals", label: "Live signals" },
  { href: "#pipeline", label: "What you get" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[rgba(243,238,226,0.82)] border-b border-line"
          : "border-b border-transparent"
      }`}
    >
      <nav className="shell flex items-center justify-between py-3.5" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2.5 group" aria-label="GrowStackUp home">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-sm bg-ink">
            <span className="block h-2 w-2 rounded-full bg-accent transition-transform group-hover:scale-125" />
          </span>
          <span className="font-display text-[1.32rem] leading-none tracking-tightest">
            GrowStackUp
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 text-[0.92rem] text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <a href="#sample" className="btn btn-accent hidden sm:inline-flex !py-2.5 !px-4 text-[0.9rem]">
            Get free sample
          </a>
          <button
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-sm border border-line"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex flex-col gap-[5px]">
              <span className={`block h-[1.5px] w-5 bg-ink transition ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
              <span className={`block h-[1.5px] w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] w-5 bg-ink transition ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden shell pb-5 pt-1">
          <div className="flex flex-col rounded-lg border border-line bg-paper-2 p-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-3 text-ink hover:bg-paper transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href="#sample" onClick={() => setOpen(false)} className="btn btn-accent mt-1 justify-center">
              Get free sample
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
