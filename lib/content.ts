export type IndustryKey = "recruiting" | "msp";

export interface PipelineRow {
  company: string;
  meta: string;
  signal: string;
  person: string;
  role: string;
  email: string;
  confidence: number;
}

export interface Industry {
  key: IndustryKey;
  tabLabel: string;
  shortLabel: string;
  audience: string;
  headline: string;
  sub: string;
  value: string[];
  signalLabel: string;
  contactLabel: string;
  rows: PipelineRow[];
}

export const INDUSTRIES: Record<IndustryKey, Industry> = {
  recruiting: {
    key: "recruiting",
    tabLabel: "Staffing & Recruiting",
    shortLabel: "Recruiters",
    audience: "for staffing & recruiting agencies",
    headline: "Reach the company while the req is still open.",
    sub: "We surface employers who are actively hiring right now — fresh job posts, headcount spikes, new funding — and hand you the hiring decision-maker behind each one.",
    value: [
      "Companies opening roles in your niche and metro, refreshed daily",
      "Matched to the hiring manager or HR lead — not a generic info@",
      "Every contact verified, so your BD outreach actually lands",
    ],
    signalLabel: "Hiring signal",
    contactLabel: "Hiring decision-maker",
    rows: [
      {
        company: "Northwind Robotics",
        meta: "Series B · Austin, TX · 180 staff",
        signal: "Posted 6 engineering roles in 9 days",
        person: "Dana Whitfield",
        role: "VP, Talent",
        email: "d.whitfield@northwind…",
        confidence: 96,
      },
      {
        company: "Calderwood Health",
        meta: "PE-backed · Columbus, OH · 900 staff",
        signal: "New RN + clinical reqs across 3 sites",
        person: "Marcus B**",
        role: "Director, Workforce",
        email: "marcus.b@calderwood…",
        confidence: 93,
      },
      {
        company: "Brightline Logistics",
        meta: "Private · Reno, NV · 320 staff",
        signal: "Opened a new warehouse, 40+ hires",
        person: "Priya Nair",
        role: "Head of People",
        email: "priya@brightlinelog…",
        confidence: 91,
      },
      {
        company: "Halcyon Fintech",
        meta: "Series A · Remote-first · 70 staff",
        signal: "3 senior backend roles reposted",
        person: "Tomás León",
        role: "Co-founder / CTO",
        email: "tomas@halcyon.io",
        confidence: 89,
      },
    ],
  },
  msp: {
    key: "msp",
    tabLabel: "MSPs & IT Firms",
    shortLabel: "MSPs",
    audience: "for MSPs & IT service firms",
    headline: "Catch the business before they sign with someone else.",
    sub: "We track local companies throwing off buying signals for managed IT and cybersecurity — growth, breaches, expansion, an outgrown setup — and match each to the person who owns the decision.",
    value: [
      "Local businesses showing intent for managed IT & security",
      "Matched to the owner, ops lead, or whoever signs the contract",
      "Verified contacts, so your first call beats every competitor",
    ],
    signalLabel: "Buying signal",
    contactLabel: "Decision-maker",
    rows: [
      {
        company: "Sierra Dental Group",
        meta: "Healthcare · Denver, CO · 6 locations",
        signal: "Opening 2 new clinics — evaluating IT vendors",
        person: "Dr. Alan **",
        role: "Managing Partner",
        email: "alan@sierradental…",
        confidence: 95,
      },
      {
        company: "Meridian Law LLP",
        meta: "Legal · Boise, ID · 48 staff",
        signal: "Job post mentions 'replace current IT provider'",
        person: "Karen Voss",
        role: "Firm Administrator",
        email: "k.voss@meridianlaw…",
        confidence: 94,
      },
      {
        company: "Cascade Manufacturing",
        meta: "Industrial · Tacoma, WA · 210 staff",
        signal: "Compliance push — SOC 2 referenced in posts",
        person: "Reggie Park",
        role: "Director of Operations",
        email: "rpark@cascademfg…",
        confidence: 92,
      },
      {
        company: "Lakeshore Credit Union",
        meta: "Finance · Madison, WI · 120 staff",
        signal: "Recent phishing incident reported locally",
        person: "Nadia **",
        role: "VP, Risk & Tech",
        email: "nadia@lakeshorecu…",
        confidence: 90,
      },
    ],
  },
};

export interface Signal {
  industry: IndustryKey;
  text: string;
  tag: string;
}

// The animated proof feed — short, specific, alternating between markets.
export const SIGNAL_FEED: Signal[] = [
  { industry: "recruiting", text: "Acme Robotics just posted 4 engineering roles", tag: "Austin, TX" },
  { industry: "msp", text: "A Denver dental group is evaluating IT vendors", tag: "Denver, CO" },
  { industry: "recruiting", text: "Brightline opened a warehouse — 40+ roles incoming", tag: "Reno, NV" },
  { industry: "msp", text: "A Boise law firm wants to replace its IT provider", tag: "Boise, ID" },
  { industry: "recruiting", text: "Calderwood Health reposted 3 clinical reqs", tag: "Columbus, OH" },
  { industry: "msp", text: "A Tacoma manufacturer is chasing SOC 2 compliance", tag: "Tacoma, WA" },
  { industry: "recruiting", text: "Halcyon Fintech raised a Series A — hiring 12", tag: "Remote" },
  { industry: "msp", text: "A Madison credit union reported a phishing incident", tag: "Madison, WI" },
  { industry: "recruiting", text: "Vantage Studios is staffing a new product team", tag: "Seattle, WA" },
  { industry: "msp", text: "A Phoenix clinic outgrew its break-fix IT setup", tag: "Phoenix, AZ" },
];
