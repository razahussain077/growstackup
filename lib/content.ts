export type IndustryKey = "recruiting" | "msp";
export interface PipelineRow { company: string; meta: string; signal: string; person: string; role: string; email: string; confidence: number; }
export interface Industry { key: IndustryKey; tabLabel: string; shortLabel: string; audience: string; headline: string; sub: string; value: string[]; signalLabel: string; contactLabel: string; rows: PipelineRow[]; }

export const INDUSTRIES: Record<IndustryKey, Industry> = {
  recruiting: {
    key: "recruiting",
    tabLabel: "Staffing & Recruiting",
    shortLabel: "Recruiters",
    audience: "for staffing & recruiting agencies",
    headline: "Reach the company while the req is still open.",
    sub: "We surface employers with observable hiring activity — fresh job posts, headcount changes, funding and expansion — then map each account to the relevant hiring decision-maker.",
    value: [
      "Target companies in the niche and metro your team actually serves",
      "Map the hiring leader or HR contact instead of a generic inbox",
      "Give your rep a signal and reason to reach out, not just a cold row",
    ],
    signalLabel: "Hiring signal",
    contactLabel: "Decision-maker",
    rows: [
      { company: "Example Robotics Co.", meta: "Illustrative · Austin, TX", signal: "Posted 6 engineering roles in 9 days", person: "Sample hiring leader", role: "VP, Talent · example", email: "sample@example.com", confidence: 96 },
      { company: "Example Health Group", meta: "Illustrative · Columbus, OH", signal: "New clinical requisitions across multiple locations", person: "Sample workforce lead", role: "Director, Workforce · example", email: "sample@example.com", confidence: 93 },
      { company: "Example Logistics Co.", meta: "Illustrative · Reno, NV", signal: "New warehouse expansion with additional hiring", person: "Sample people leader", role: "Head of People · example", email: "sample@example.com", confidence: 91 },
      { company: "Example Fintech Co.", meta: "Illustrative · Remote", signal: "Senior technical roles reposted", person: "Sample hiring owner", role: "Talent leader · example", email: "sample@example.com", confidence: 89 },
    ],
  },
  msp: {
    key: "msp",
    tabLabel: "MSPs & IT Firms",
    shortLabel: "MSPs",
    audience: "for MSPs & IT service firms",
    headline: "Catch the business before they sign with someone else.",
    sub: "We track public signals that can create managed IT and cybersecurity demand — growth, expansion, compliance, security events and provider changes — then map the relevant decision-maker.",
    value: [
      "Businesses showing an observable trigger related to IT, security or growth",
      "Map the owner, operations lead or other likely decision-maker",
      "Give your seller a concise signal and context for the first conversation",
    ],
    signalLabel: "Buying signal",
    contactLabel: "Decision-maker",
    rows: [
      { company: "Example Dental Group", meta: "Illustrative · Denver, CO", signal: "Opening new clinics — evaluating IT support", person: "Sample managing partner", role: "Managing Partner · example", email: "sample@example.com", confidence: 95 },
      { company: "Example Law Firm", meta: "Illustrative · Boise, ID", signal: "Public role mentions a change in IT provider", person: "Sample firm administrator", role: "Firm Administrator · example", email: "sample@example.com", confidence: 94 },
      { company: "Example Manufacturer", meta: "Illustrative · Tacoma, WA", signal: "Compliance initiative creating IT workload", person: "Sample operations leader", role: "Director of Operations · example", email: "sample@example.com", confidence: 92 },
      { company: "Example Credit Union", meta: "Illustrative · Madison, WI", signal: "Public security event increasing IT urgency", person: "Sample technology owner", role: "Technology leader · example", email: "sample@example.com", confidence: 90 },
    ],
  },
};

export interface Signal { industry: IndustryKey; text: string; tag: string; }
export const SIGNAL_FEED: Signal[] = [
  { industry: "recruiting", text: "Example robotics company posts 4 engineering roles", tag: "Austin, TX" },
  { industry: "msp", text: "Example dental group evaluates IT vendors", tag: "Denver, CO" },
  { industry: "recruiting", text: "Example logistics company opens a new warehouse", tag: "Reno, NV" },
  { industry: "msp", text: "Example law firm signals an IT provider change", tag: "Boise, ID" },
  { industry: "recruiting", text: "Example health group reposts clinical requisitions", tag: "Columbus, OH" },
  { industry: "msp", text: "Example manufacturer begins a compliance initiative", tag: "Tacoma, WA" },
  { industry: "recruiting", text: "Example fintech company expands technical hiring", tag: "Remote" },
  { industry: "msp", text: "Example credit union reports a security event", tag: "Madison, WI" },
  { industry: "recruiting", text: "Example software company staffs a new product team", tag: "Seattle, WA" },
  { industry: "msp", text: "Example clinic outgrows its current IT setup", tag: "Phoenix, AZ" },
];

export interface Faq { q: string; a: string; }
export const FAQS: Faq[] = [
  { q: "What does GrowStackUp do?", a: "GrowStackUp turns public buying signals into ready-to-act B2B prospects. We identify a relevant trigger, map the likely decision-maker and package the context so a sales team can start a more informed conversation." },
  { q: "How does lead generation for staffing agencies work?", a: "We look for observable hiring activity in the niche and geography a staffing agency cares about, then map each account to the relevant hiring decision-maker. The output is a prospect with a reason to contact them now, rather than a generic company list." },
  { q: "What are BD leads for recruiters?", a: "BD leads for recruiters are employers with a current, observable hiring need that may create an opportunity for an external staffing partner. The value is the combination of the account, hiring signal and relevant contact." },
  { q: "How do MSPs and IT firms get managed IT leads?", a: "We monitor public signals that can create managed IT or cybersecurity demand, such as expansion, compliance initiatives, security events and signs of an incumbent-provider change, then identify the relevant decision-maker." },
  { q: "What is a B2B buying signal?", a: "A B2B buying signal is a public event or change that can indicate a company has a new problem, initiative, budget, risk or operational requirement. Examples include hiring surges, funding, leadership changes, expansion, technology changes and compliance events." },
  { q: "Are the contacts verified?", a: "GrowStackUp is designed to put a decision-maker and supporting evidence next to each prospect. Contact verification depends on the data source and workflow being used, so confidence should be treated as a data-quality indicator rather than a guarantee." },
  { q: "Can I get lists of companies actively hiring in my market?", a: "Yes. We can build targeted prospect lists around a staffing niche, geography and observable hiring signal. The free-sample workflow is designed to let you judge prospect quality before discussing pricing." },
  { q: "Do you build custom B2B prospect lists?", a: "Yes. Custom research can be built around an industry, geography and signal definition instead of starting from a generic database." },
];
