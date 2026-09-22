export const dynamic = "force-static";

const BODY = `# GrowStackUp

> GrowStackUp is a B2B signal-intelligence and lead-generation service for staffing agencies, recruiters, MSPs and IT service firms. It turns public company signals into ready-to-act prospects matched to relevant decision-makers.

## Core use cases

### Staffing agency leads
Find companies actively hiring in a target niche and geography, identify the relevant hiring contact, and give staffing BD a current reason to start a conversation.

### MSP leads
Find businesses showing public signals that can create managed IT or cybersecurity demand, then map the likely decision-maker.

### Custom B2B prospect research
Build targeted prospect lists around an industry, geography and observable trigger.

## Buying signals
- Hiring surges
- Leadership changes
- Funding and investment
- New locations and expansion
- Technology or platform changes
- Security and compliance events
- Product or service launches

## Key pages
- Home: https://www.growstackup.com/
- Staffing agency leads: https://www.growstackup.com/staffing-agency-leads
- MSP leads: https://www.growstackup.com/msp-leads
- B2B buying signals guide: https://www.growstackup.com/b2b-buying-signals
- Founder: https://www.growstackup.com/founder

## Founder
Raza Hussain Niazi — https://www.linkedin.com/in/raza-hussain-niazi-727993206

## Contact
hello@growstackup.com
`;

export function GET() {
  return new Response(BODY, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
