import { NextResponse } from "next/server";

export const runtime = "nodejs";

const recipient = "jass04sangle@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const text = (value) => (typeof value === "string" ? value.trim() : "");

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = text(body.name);
  const email = text(body.email);
  const message = text(body.message);
  if (!name || !email || !message) return NextResponse.json({ error: "Please complete every field." }, { status: 400 });
  if (!emailPattern.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  if (name.length > 100 || email.length > 254 || message.length > 5000) return NextResponse.json({ error: "Your message is too long." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Contact form email environment variables are missing.");
    return NextResponse.json({ error: "The contact form is not configured yet. Please try again later." }, { status: 503 });
  }

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });
    if (!emailResponse.ok) {
      console.error("Resend rejected contact email:", await emailResponse.text());
      return NextResponse.json({ error: "Unable to send your message right now. Please try again later." }, { status: 502 });
    }
  } catch (error) {
    console.error("Contact email request failed:", error);
    return NextResponse.json({ error: "Unable to send your message right now. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
