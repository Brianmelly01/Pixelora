import { NextRequest, NextResponse } from "next/server";
import { notifyNewOrder } from "@/lib/mellyos";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string | undefined;
    const projectType = formData.get("projectType") as string;
    const description = formData.get("description") as string;
    const budget = formData.get("budget") as string | undefined;
    const deadline = formData.get("deadline") as string | undefined;
    const file = formData.get("file") as File | null;

    // Basic validation
    if (!name || !email || !projectType || !description) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, projectType, description" },
        { status: 400 }
      );
    }

    // Notify MellyOS — fire and don't block response
    const mellyResult = await notifyNewOrder({
      name,
      email,
      phone: phone || undefined,
      projectType,
      description,
      budget: budget || undefined,
      deadline: deadline || undefined,
      hasFile: !!file,
    });

    // Log for server-side tracking
    console.log("[Order API] New order received:", {
      name,
      email,
      projectType,
      mellyOsNotified: mellyResult.ok,
    });

    // Here you could also:
    // - Save to a database (e.g., Supabase, Prisma, MongoDB)
    // - Send a confirmation email (e.g., Resend, Nodemailer)
    // - Store the uploaded file (e.g., Cloudinary, S3, Vercel Blob)

    return NextResponse.json(
      {
        success: true,
        message: "Order request received. We'll be in touch within 24 hours.",
        mellyOsNotified: mellyResult.ok,
      },
      { status: 200 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("[Order API] Error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
