import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// --- env (set these in Vercel → Settings → Environment Variables) ---
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
// optional email alerts (Phase 3)
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const LEAD_NOTIFY_EMAIL = process.env.LEAD_NOTIFY_EMAIL;
const RESEND_FROM = process.env.RESEND_FROM || "GrowStackUp <onboarding@resend.dev>";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (v: unknown, max = 200) => String(v ?? "").trim().slice(0, max);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const email = clean(body.email);
  const market = clean(body.market);
  const region = clean(body.region);
  const source = clean(body.source) || "growstackup.com";

  if (!emailRe.test(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid work email." }, { status: 422 });
  }

  // 1) Store the lead in Supabase (REST API — no SDK needed).
  if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ email, market, region, source }),
      });
      if (!res.ok) {
        const detail = await res.text();
        console.error("Supabase insert failed:", res.status, detail);
        return NextResponse.json({ ok: false, error: "Could not save. Try again." }, { status: 502 });
      }
    } catch (err) {
      console.error("Supabase request error:", err);
      return NextResponse.json({ ok: false, error: "Could not save. Try again." }, { status: 502 });
    }
  } else {
    // Keys not configured yet — don't break the visitor experience; just log.
    console.warn("Lead received but Supabase env not configured:", { email, market, region });
  }

  // 2) Optional instant email alert via Resend.
  if (RESEND_API_KEY && LEAD_NOTIFY_EMAIL) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: RESEND_FROM,
          to: [LEAD_NOTIFY_EMAIL],
          subject: `New GrowStackUp lead — ${email}`,
          text: [
            `New free-sample request from growstackup.com`,
            ``,
            `Email:   ${email}`,
            `Market:  ${market || "—"}`,
            `Region:  ${region || "—"}`,
            `Source:  ${source}`,
            `Time:    ${new Date().toISOString()}`,
          ].join("\n"),
        }),
      });
    } catch (err) {
      // Never fail the request just because the alert email didn't send.
      console.error("Resend alert failed:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
