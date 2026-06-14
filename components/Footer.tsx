const SOLUTIONS = [
  { label: "Lead generation for staffing agencies", href: "#pipeline" },
  { label: "BD leads for recruiters", href: "#pipeline" },
  { label: "Managed IT leads for MSPs", href: "#pipeline" },
  { label: "Lists of companies actively hiring", href: "#signals" },
];

const COMPANY = [
  { label: "How it works", href: "#how" },
  { label: "Live signals", href: "#signals" },
  { label: "What you get", href: "#pipeline" },
  { label: "Get a free sample", href: "#sample" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line pt-16">
      <div className="shell">
        {/* soft line: custom lists */}
        <div className="grid grid-cols-12 gap-y-10 pb-14">
          <div className="col-span-12 lg:col-span-5">
            <a href="#top" className="flex items-center gap-2.5" aria-label="GrowStackUp home">
              <span className="relative flex h-7 w-7 items-center justify-center rounded-sm bg-ink">
                <span className="block h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-display text-[1.4rem] tracking-tightest">GrowStackUp</span>
            </a>
            <p className="mt-5 max-w-[40ch] text-[0.98rem] leading-relaxed text-muted">
              Know who&apos;s ready to buy — before your competitors do. Ready-to-act sales pipeline
              for recruiters and MSPs. Need something specific? We also build{" "}
              <span className="text-ink">custom B2B prospect lists on request.</span>
            </p>
            <a href="#sample" className="btn btn-accent mt-7">
              Get 25 free prospects ↗
            </a>
          </div>

          <nav className="col-span-6 sm:col-span-4 lg:col-span-4 lg:col-start-7" aria-label="Solutions">
            <h2 className="font-mono text-[0.68rem] uppercase tracking-widest text-muted">What we deliver</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {SOLUTIONS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[0.95rem] text-ink/80 transition-colors hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="col-span-6 sm:col-span-4 lg:col-span-2" aria-label="Explore">
            <h2 className="font-mono text-[0.68rem] uppercase tracking-widest text-muted">Explore</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {COMPANY.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[0.95rem] text-ink/80 transition-colors hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* oversized wordmark */}
        <div aria-hidden className="select-none overflow-hidden border-t border-line pt-8">
          <div className="font-display leading-none tracking-tightest text-ink/[0.07]" style={{ fontSize: "clamp(3.5rem, 15vw, 13rem)" }}>
            Ready to buy.
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line py-7 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.72rem] text-muted">
            © {new Date().getFullYear()} GrowStackUp · growstackup.com
          </p>
          <div className="flex items-center gap-5 font-mono text-[0.72rem] text-muted">
            <a href="mailto:hello@growstackup.com" className="transition-colors hover:text-ink">
              hello@growstackup.com
            </a>
            <span className="flex items-center gap-1.5">
              <span className="live-dot" /> signals updating now
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
