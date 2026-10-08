import { NextResponse } from "next/server";
import { validate, type ContactInput } from "@/lib/contact";

export const runtime = "nodejs";

// Public Formspree form URL (not a secret). Override with FORM_ENDPOINT.
const FORMSPREE_DEFAULT = "https://formspree.io/f/mqpepyry";

export async function POST(req: Request) {
  let body: Partial<ContactInput> & { website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Respond 200 without forwarding.
  if (body.website) return NextResponse.json({ ok: true });

  const input: ContactInput = {
    name: String(body.name ?? ""), email: String(body.email ?? ""), role: String(body.role ?? ""),
    message: String(body.message ?? ""), consent: body.consent === true,
  };
  const errors = validate(input);
  if (Object.keys(errors).length) return NextResponse.json({ error: "Please check the form.", errors }, { status: 422 });

  const endpoint = process.env.FORM_ENDPOINT || FORMSPREE_DEFAULT;
  if (!endpoint) {
    return NextResponse.json({ error: "The form isn't connected to a backend yet. Please try again later." }, { status: 503 });
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", Accept: "application/json",
        ...(process.env.FORM_ENDPOINT_TOKEN ? { Authorization: `Bearer ${process.env.FORM_ENDPOINT_TOKEN}` } : {}),
      },
      body: JSON.stringify({ ...input, name: input.name.trim(), email: input.email.trim(), submittedAt: new Date().toISOString(), source: "frontier-edtech-site" }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return NextResponse.json({ error: "We couldn't save your message. Please try again." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We couldn't reach the server. Please try again." }, { status: 502 });
  }
}
