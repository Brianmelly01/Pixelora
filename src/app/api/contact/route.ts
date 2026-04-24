import { NextRequest, NextResponse } from "next/server";
import { notifyContactMessage } from "@/lib/mellyos";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, subject, message" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Notify MellyOS
    const mellyResult = await notifyContactMessage({ name, email, subject, message });

    console.log("[Contact API] New message received:", {
      name,
      email,
      subject,
      mellyOsNotified: mellyResult.ok,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message received. We'll reply within 24 hours.",
        mellyOsNotified: mellyResult.ok,
      },
      { status: 200 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("[Contact API] Error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
