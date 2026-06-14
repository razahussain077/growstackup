import Reveal from "./Reveal";
import EmailForm from "./EmailForm";

export default function FreeSampleCTA() {
  return (
    <section id="sample" className="relative py-20 sm:py-28">
      <div className="shell">
        <div className="relative overflow-hidden rounded-xl border border-ink/15 bg-ink text-on-dark shadow-deep">
          {/* accent slab + grid */}
          <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(238,231,214,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(238,231,214,0.045) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(100% 100% at 100% 0%, #000, transparent 70%)",
              WebkitMaskImage: "radial-gradient(100% 100% at 100% 0%, #000, transparent 70%)",
            }}
          />

          <div className="relative grid grid-cols-12 gap-y-10 p-7 sm:p-10 lg:gap-x-10 lg:p-14">
            <Reveal className="col-span-12 lg:col-span-6 lg:self-center">
              <span className="eyebrow text-accent">Free sample · no strings</span>
              <h2 className="display-lg mt-5 text-balance text-on-dark">
                Get 25 ready-to-act prospects in your market — <span className="text-accent">free.</span>
              </h2>
              <p className="mt-6 max-w-[44ch] text-[1.05rem] leading-relaxed text-on-dark-muted">
                Tell us your niche and metro. We&apos;ll hand-build a sample pipeline — real companies
                with live buying signals, each matched to a verified decision-maker — so you can judge
                the quality before you ever talk pricing.
              </p>

              <ul className="mt-8 flex flex-col gap-2.5 font-mono text-[0.8rem] text-on-dark/85">
                {[
                  "25 companies with active signals, not a cold database",
                  "A verified decision-maker contact on every row",
                  "Yours to keep and work — whether or not we ever talk",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <span className="text-accent">✓</span> {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="col-span-12 lg:col-span-5 lg:col-start-8">
              <EmailForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
