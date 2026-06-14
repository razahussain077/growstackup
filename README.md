# GrowStackUp

Marketing site for **GrowStackUp** — a ready-to-act B2B sales pipeline.

> Know who's ready to buy — before your competitors do.

Built for two markets: **staffing & recruiting agencies** (companies actively
hiring, matched to the hiring decision-maker) and **MSPs / IT firms** (local
businesses showing buying signals for managed IT/cybersecurity, matched to the
decision-maker). We also build custom B2B prospect lists on request.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **Tailwind CSS** with a bespoke design system in CSS variables
- Type pairing: **Fraunces** (display) · **Inter Tight** (sans) · **JetBrains Mono** (data)
- No heavy animation libraries — IntersectionObserver + CSS only
- Fully static export-friendly; ~109 kB first-load JS

## Design system

Defined in `app/globals.css`:

- **Surfaces** — warm paper `#f3eee2`, ink `#15130d`, deep forest `#10211a`
- **Accent** — electric lime `#d2f24a` (the "live signal" highlight) + clay `#e2502a` for live/alert
- Deliberate type scale, spacing rhythm, radii, and warm layered shadows

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Configure the lead form

The free-sample form POSTs JSON to a webhook you control. Set it in `.env.local`:

```bash
NEXT_PUBLIC_LEAD_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/XXXX/YYYY/
```

Any endpoint that accepts a JSON `POST` works (Zapier, Make, n8n, your own API).
Payload: `{ email, market, region, source, ts }`.

## SEO

- Single semantic `<h1>`, full metadata (title/description/canonical)
- Open Graph + Twitter cards with a static branded image
- `sitemap.xml` and `robots.txt` generated at `app/sitemap.ts` / `app/robots.ts`
- Organization JSON-LD in the document head

## Deploy to Vercel + connect growstackup.com

```bash
# 1. Push this repo to GitHub (already on your feature branch)
git push -u origin <your-branch>

# 2. Install the Vercel CLI and log in
npm i -g vercel
vercel login

# 3. From the project root, link & deploy a preview
vercel

# 4. Add your lead webhook as an env var (production)
vercel env add NEXT_PUBLIC_LEAD_WEBHOOK_URL production

# 5. Ship to production
vercel --prod

# 6. Attach your domain
vercel domains add growstackup.com
vercel domains add www.growstackup.com
```

Then point DNS at Vercel (at your registrar):

- **A** record `@` → `76.76.21.21`
- **CNAME** record `www` → `cname.vercel-dns.com`

Vercel issues the SSL certificate automatically once DNS propagates.
