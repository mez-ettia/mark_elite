import { NextResponse } from "next/server";

/**
 * Chat proxy. The browser only ever talks to this route; keys stay server-side.
 *
 * When AGENT_ENDPOINT is set, messages are forwarded to the managed agent
 * (which handles GoHighLevel contacts, opportunities and bookings).
 * Expected agent response shape: { reply: string } — adjust mapReply() if it differs.
 *
 * When AGENT_ENDPOINT is not set, a mock reply is returned so the UI can be tested.
 */

type Msg = { role: "user" | "assistant"; content: string };
type Body = { sessionId?: string; messages?: Msg[] };

function mapReply(data: unknown): string | undefined {
  if (data && typeof data === "object" && "reply" in data && typeof (data as { reply: unknown }).reply === "string") {
    return (data as { reply: string }).reply;
  }
  return undefined;
}

function mockReply(last: string): string {
  const t = last.toLowerCase();
  if (t.includes("rent roll")) return "[Mock] Great — how many properties are on your rent roll, and which suburbs?";
  if (t.includes("book")) return "[Mock] Happy to book you in. What's the property address and your preferred date?";
  if (t.includes("quote")) return "[Mock] Let's get you a quote. Is it interior, exterior, or both — and roughly how many rooms?";
  return "[Mock] Thanks! The live agent isn't connected yet — this is a test reply.";
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const messages = Array.isArray(body.messages) ? body.messages.slice(-30) : [];
  const last = messages.at(-1);
  if (!last || last.role !== "user" || typeof last.content !== "string" || last.content.length > 4000) {
    return NextResponse.json({ error: "Invalid message" }, { status: 400 });
  }

  const endpoint = process.env.AGENT_ENDPOINT;
  if (!endpoint) return NextResponse.json({ reply: mockReply(last.content) });

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.AGENT_API_KEY ? { Authorization: `Bearer ${process.env.AGENT_API_KEY}` } : {}),
      },
      body: JSON.stringify({ sessionId: body.sessionId, messages }),
      signal: AbortSignal.timeout(30_000),
    });
    if (!res.ok) throw new Error(`Agent responded ${res.status}`);
    const reply = mapReply(await res.json());
    return NextResponse.json({ reply: reply ?? "Sorry, I didn't catch that. Could you rephrase?" });
  } catch (err) {
    console.error("chat proxy error", err);
    return NextResponse.json({ reply: "Sorry, I'm having trouble right now. Please call us instead." }, { status: 502 });
  }
}
