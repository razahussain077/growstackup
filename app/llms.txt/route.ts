// /llms.txt — a concise, machine-readable summary for AI answer engines (AEO).
export const dynamic = "force-static";

const BODY = `# GrowStackUp

> GrowStackUp delivers a ready-to-act B2B sales pipeline. We detect companies showing live buying signals and match each to the decision-maker's verified contact. Core promise: "Know who's ready to buy — before your competitors do."

## What we do
- Lead generation for staffing agencies: companies actively hiring right now, matched to the hiring decision-maker's verified contact (also called BD leads for recruiters).
- Managed IT leads for MSPs: local businesses showing buying signals for managed IT and cybersecurity, matched to the decision-maker's verified contact.
- Custom B2B prospect lists on request: targeted lists by industry, geography and signal, with verified contacts.

## How it works
1. We watch the signals — job posts, headcount spikes, funding, new locations, breach reports, compliance pushes and tech changes.
2. We match the decision-maker — each signal is tied to the person who owns the decision, with a verified email.
3. You get a ready-to-act list — company, signal, contact and confidence, delivered to your inbox or CRM with nothing to scrub.

## Who it's for
- Staffing and recruiting agencies doing business development.
- MSPs and IT service firms selling managed IT and cybersecurity.

## Offer
- Free sample: 25 ready-to-act prospects in your market.

## Key pages
- Home: https://growstackup.com/
- How it works: https://growstackup.com/#how
- Live signals: https://growstackup.com/#signals
- What you get: https://growstackup.com/#pipeline
- FAQ: https://growstackup.com/#faq
- Get a free sample: https://growstackup.com/#sample

## Contact
- Email: hello@growstackup.com
`;

export function GET() {
  return new Response(BODY, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
