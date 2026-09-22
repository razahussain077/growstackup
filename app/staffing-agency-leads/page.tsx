import type { Metadata } from "next";
import Link from "next/link";
const SITE_URL = "https://www.growstackup.com";
export const metadata: Metadata = {
  title: "Staffing Agency Leads | Companies Hiring Now",
  description: "Find companies actively hiring in your staffing niche and geography, matched to the relevant hiring decision-maker. GrowStackUp turns hiring signals into actionable staffing BD prospects.",
  alternates: { canonical: `${SITE_URL}/staffing-agency-leads` },
};
const jsonLd = {"@context":"https://schema.org","@graph":[
  {"@type":"WebPage","@id":`${SITE_URL}/staffing-agency-leads#webpage`,"url":`${SITE_URL}/staffing-agency-leads`,"name":"Staffing Agency Leads | Companies Hiring Now","isPartOf":{"@id":`${SITE_URL}/#website`}},
  {"@type":"Service","name":"Staffing agency lead generation","provider":{"@id":`${SITE_URL}/#organization`},"areaServed":"US","description":"Prospects built from observable hiring activity and matched to relevant hiring decision-makers for staffing business development."}
]};
export default function StaffingAgencyLeadsPage(){
 return <main>
  <section className="py-16 sm:py-24"><div className="shell">
   <Link href="/" className="font-mono text-[0.72rem] uppercase tracking-widest text-muted hover:text-ink">← GrowStackUp</Link>
   <div className="mt-10 max-w-4xl"><span className="eyebrow text-muted">Staffing &amp; recruiting</span>
    <h1 className="display-xl mt-6 text-balance">Staffing agency leads built around <span className="mark">fresh hiring signals</span>.</h1>
    <p className="lead mt-7 max-w-[62ch]">The useful prospect is not simply a company that hires. It is a company hiring for the kind of role you fill, in the market you serve, with a current reason for your team to start a conversation.</p>
    <div className="mt-9 flex flex-wrap gap-3"><a href="/#sample" className="btn btn-primary">Get 25 free prospects ↗</a><Link href="/b2b-buying-signals" className="btn btn-ghost">Read the signal guide</Link></div>
   </div>
  </div></section>
  <section className="border-y border-line bg-paper-2/50 py-16 sm:py-20"><div className="shell grid grid-cols-12 gap-y-10 lg:gap-x-12">
   <div className="col-span-12 lg:col-span-5"><span className="eyebrow text-muted">What makes a staffing lead actionable?</span><h2 className="display-lg mt-4 max-w-[18ch]">Signal + account + person + reason.</h2></div>
   <div className="col-span-12 lg:col-span-6 lg:col-start-7"><div className="grid gap-8">
    {[
      ["Current hiring activity","Look for a meaningful change in job volume, role type, location or hiring pace. A single backfill and a multi-role expansion should not be treated the same."],
      ["Relevant company fit","Match the employer against the staffing niche you sell into: function, industry, geography, size and role family."],
      ["The right hiring contact","A generic company record is not enough. The useful prospect includes the person likely to influence or own the hiring decision."],
      ["A reason to reach out","Turn the signal into sales context: the roles being hired, location, expansion or operating change that makes your staffing offer relevant now."]
    ].map(([t,b],i)=><div key={t} className="border-t border-line pt-6"><div className="font-mono text-[0.7rem] text-clay">0{i+1}</div><h3 className="display-md mt-2">{t}</h3><p className="mt-3 max-w-[55ch] leading-relaxed text-muted">{b}</p></div>)}
   </div></div>
  </div></section>
  <section className="py-16 sm:py-24"><div className="shell"><span className="eyebrow text-muted">Common use cases</span><h2 className="display-lg mt-4 max-w-[22ch]">Build a list around the roles you actually fill.</h2>
   <div className="mt-10 grid gap-5 md:grid-cols-3">{[
    ["Technical staffing","Find employers increasing engineering, IT, data or infrastructure hiring."],
    ["Healthcare staffing","Prioritize organizations opening clinical requisitions, adding locations or increasing workforce demand."],
    ["Industrial & logistics","Track warehouse, manufacturing, field-service and operations hiring in the metros you cover."]
   ].map(([t,b])=><article key={t} className="rounded-lg border border-line bg-paper-2 p-7 shadow-soft"><h3 className="display-md">{t}</h3><p className="mt-3 leading-relaxed text-muted">{b}</p></article>)}</div>
  </div></section>
  <section className="border-t border-line py-16 sm:py-24"><div className="shell max-w-4xl"><span className="eyebrow text-muted">FAQ</span><h2 className="display-lg mt-4">Staffing lead-generation questions.</h2>
   <div className="mt-10 space-y-8">{[
    ["What is a staffing BD lead?","A staffing BD lead is an employer with a relevant current hiring need and a plausible path to an external staffing conversation."],
    ["Is a list of companies actively hiring enough?","No. Hiring activity becomes useful when it is filtered to your niche, matched to the right decision-maker and paired with a reason to contact the account."],
    ["Can I target a specific metro?","Yes. Geography can be part of the targeting definition so the accounts match the market your recruiters and sales team can actually serve."]
   ].map(([q,a])=><div key={q} className="border-t border-line pt-6"><h3 className="font-display text-[1.35rem] tracking-tightest">{q}</h3><p className="mt-3 leading-relaxed text-muted">{a}</p></div>)}</div>
   <div className="mt-12"><a href="/#sample" className="btn btn-accent">Get a free sample ↗</a></div>
  </div></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} />
 </main>
}