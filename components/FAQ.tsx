import { FAQS } from "@/lib/content";
import Reveal from "./Reveal";

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="relative border-t border-line py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-12">
          {/* left — sticky heading */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow text-muted">Questions, answered</span>
              <h2 className="display-lg mt-4 text-balance">
                The short version.
              </h2>
              <p className="lead mt-5 max-w-[34ch]">
                What GrowStackUp is, who it&apos;s for, and how the pipeline
                actually reaches your inbox.
              </p>
              <a href="#sample" className="btn btn-accent mt-7">
                Get 25 free prospects ↗
              </a>
            </div>
          </div>

          {/* right — accordion list */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <dl className="border-t border-line">
              {FAQS.map((f, i) => (
                <Reveal as="div" key={f.q} delay={i * 40}>
                  <details className="group border-b border-line py-2">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-4">
                      <dt className="font-display text-[1.3rem] leading-snug tracking-tightest sm:text-[1.5rem]">
                        {f.q}
                      </dt>
                      <span
                        aria-hidden
                        className="mt-1.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-line text-ink transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <dd className="max-w-[58ch] pb-5 pr-10 text-[1rem] leading-relaxed text-muted">
                      {f.a}
                    </dd>
                  </details>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
