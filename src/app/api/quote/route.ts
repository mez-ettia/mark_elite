import { NextResponse } from "next/server";

/**
 * Quote form endpoint.
 * When GHL_WEBHOOK_URL is set (a GoHighLevel inbound webhook), the lead is forwarded there
 * so it lands in the CRM next to chat-widget leads. Without it, the lead is logged and the
 * request succeeds so the form can be tested.
 */

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden "company" field.
  if (str(body.company, 200)) return NextResponse.json({ ok: true });

  const lead = {
    firstName: str(body.firstName, 100),
    lastName: str(body.lastName, 100),
    email: str(body.email, 200),
    phone: str(body.phone, 50),
    projectType: str(body.projectType, 100),
    address: str(body.address, 300),
    message: str(body.message, 5000),
    source: "website-quote-form",
  };

  if (!lead.firstName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) || !lead.message) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const hook = process.env.GHL_WEBHOOK_URL;
  if (!hook) {
    console.info("[quote] GHL_WEBHOOK_URL not set — lead not forwarded", { projectType: lead.projectType });
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(15_000),
    });
    if (!res.ok) throw new Error(`GHL responded ${res.status}`);
    return NextResponse.json({ ok: true, forwarded: true });
  } catch (err) {
    console.error("[quote] forward failed", err);
    return NextResponse.json({ error: "Could not send" }, { status: 502 });
  }
}
