import type { Metadata } from "next";
import Link from "next/link";
const SITE_URL = "https://www.growstackup.com";
export const metadata: Metadata = {
 title: "MSP Leads | Managed IT & Cybersecurity Buying Signals",
 description: "Find businesses showing public signals that can create managed IT or cybersecurity demand, then map each signal to the likely decision-maker.",
 alternates: { canonical: `${SITE_URL}/msp-leads` },
};
const jsonLd = {"@context":"https://schema.org","@graph":[
 {"@type":"WebPage","@id":`${SITE_URL}/msp-leads#webpage`,"url":`${SITE_URL}/msp-leads`,"name":"MSP Leads | Managed IT & Cybersecurity Buying Signals","isPartOf":{"@id":`${SITE_URL}/#website`}},
 {"@type":"Service","name":"Managed IT leads for MSPs","provider":{"@id":`${SITE_URL}/#organization`},"areaServed":"US","description":"Prospects built from public technology, growth, security and compliance signals for MSP and IT-service business development."}
]};
export default function MspLeadsPage(){
 return <main>
  <section className="py-16 sm:py-24"><div className="shell"><Link href="/" className="font-mono text-[0.72rem] uppercase tracking-widest text-muted hover:text-ink">← GrowStackUp</Link>
   <div className="mt-10 max-w-4xl"><span className="eyebrow text-muted">MSPs &amp; IT service firms</span><h1 className="display-xl mt-6 text-balance">MSP leads built around <span className="mark">the reason to buy now</span>.</h1>
    <p className="lead mt-7 max-w-[62ch]">Company size is not intent. The useful account is a business whose public activity suggests a new IT, security or operational requirement — and where you can identify the person who owns the decision.</p>
    <div className="mt-9 flex flex-wrap gap-3"><a href="/#sample" className="btn btn-primary">Get 25 free prospects ↗</a><Link href="/b2b-buying-signals" className="btn btn-ghost">See the signal framework</Link></div>
   </div></div></section>
  <section className="border-y border-line bg-paper-2/50 py-16 sm:py-20"><div className="shell grid gap-y-10 lg:grid-cols-12 lg:gap-x-12">
   <div className="lg:col-span-5"><span className="eyebrow text-muted">Signals MSPs can act on</span><h2 className="display-lg mt-4 max-w-[18ch]">A trigger creates the conversation.</h2></div>
   <div className="lg:col-span-6 lg:col-start-7"><div className="grid gap-8">{[
    ["Expansion","New offices, clinics, warehouses or locations can create new endpoints, networking, identity, backup and support requirements."],
    ["Security events","A public security incident can create urgency around remediation, monitoring, backup, endpoint security or provider evaluation."],
    ["Compliance pressure","SOC 2, HIPAA, cyber-insurance requirements and other compliance initiatives can create a new managed-services or security need."],
    ["Provider change","References to replacing, reviewing or outgrowing an incumbent IT setup are stronger than generic firmographic fit."],
    ["Technology change","Cloud, Microsoft 365, ERP, CRM or infrastructure projects can create adjacent managed-service and integration needs."]
   ].map(([t,b])=><div key={t} className="border-t border-line pt-6"><h3 className="display-md">{t}</h3><p className="mt-3 max-w-[56ch] leading-relaxed text-muted">{b}</p></div>)}</div></div>
  </div></section>
  <section className="py-16 sm:py-24"><div className="shell"><span className="eyebrow text-muted">The output</span><h2 className="display-lg mt-4 max-w-[20ch]">What a sales-ready MSP prospect should contain.</h2>
   <div className="mt-10 grid gap-5 md:grid-cols-4">{[
    ["Account","Company, location, industry and relevant context."],["Signal","The observable event that creates a reason to reach out."],["Person","The owner, operator or technology decision-maker to contact."],["Angle","A short hypothesis connecting the signal to your service."]
   ].map(([t,b])=><article key={t} className="rounded-lg border border-line bg-paper-2 p-6 shadow-soft"><h3 className="font-display text-[1.3rem] tracking-tightest">{t}</h3><p className="mt-3 leading-relaxed text-muted">{b}</p></article>)}</div>
  </div></section>
  <section className="border-t border-line py-16 sm:py-24"><div className="shell max-w-4xl"><span className="eyebrow text-muted">FAQ</span><h2 className="display-lg mt-4">Questions MSP operators ask.</h2>
   <div className="mt-10 space-y-8">{[
    ["What are managed IT buying signals?","They are observable company events that can create or increase demand for managed IT or cybersecurity services, such as expansion, compliance pressure, security events or a provider change."],
    ["Should I target every company in my city?","No. A broad company list creates research and timing problems. Signal-first targeting narrows the market to businesses with an observable reason for the conversation."],
    ["Who should MSPs contact?","It depends on the company. Common decision-makers include owners, managing partners, operations leaders, IT leaders and executives responsible for risk or technology."]
   ].map(([q,a])=><div key={q} className="border-t border-line pt-6"><h3 className="font-display text-[1.35rem] tracking-tightest">{q}</h3><p className="mt-3 leading-relaxed text-muted">{a}</p></div>)}</div>
   <div className="mt-12"><a href="/#sample" className="btn btn-accent">Get a free sample ↗</a></div>
  </div></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} />
 </main>
}