/**
 * MellyOS Integration
 * Sends notifications to the MellyOS platform for new design requests and contacts.
 */

const MELLYOS_API_URL = process.env.MELLYOS_API_URL ?? "https://your-mellyos-instance.com/api";
const MELLYOS_API_KEY = process.env.MELLYOS_API_KEY ?? "";
const MELLYOS_SITE_ID = process.env.MELLYOS_SITE_ID ?? "pixelora";

export interface MellyOSOrderPayload {
  type: "new_design_request";
  siteId: string;
  customer: {
    name: string;
    email: string;
    phone?: string;
  };
  project: {
    type: string;
    description: string;
    budget?: string;
    deadline?: string;
    hasFile: boolean;
  };
  meta: {
    timestamp: string;
    source: string;
  };
}

export interface MellyOSContactPayload {
  type: "contact_message";
  siteId: string;
  from: {
    name: string;
    email: string;
  };
  message: {
    subject: string;
    body: string;
  };
  meta: {
    timestamp: string;
    source: string;
  };
}

type MellyOSPayload = MellyOSOrderPayload | MellyOSContactPayload;

async function sendToMellyOS(payload: MellyOSPayload): Promise<{ ok: boolean; error?: string }> {
  // If no key is configured, log and skip gracefully
  if (!MELLYOS_API_KEY) {
    console.warn("[MellyOS] MELLYOS_API_KEY not set — skipping notification.");
    console.info("[MellyOS] Payload:", JSON.stringify(payload, null, 2));
    return { ok: true };
  }

  try {
    const response = await fetch(`${MELLYOS_API_URL}/notifications/ingest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": MELLYOS_API_KEY,
        "x-site-id": MELLYOS_SITE_ID,
      },
      body: JSON.stringify(payload),
      // Short timeout to avoid blocking user
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("[MellyOS] Error response:", response.status, text);
      return { ok: false, error: `HTTP ${response.status}: ${text}` };
    }

    console.info("[MellyOS] Notification sent successfully:", payload.type);
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[MellyOS] Failed to send notification:", message);
    return { ok: false, error: message };
  }
}

/**
 * Notify MellyOS of a new design / print request
 */
export async function notifyNewOrder(data: {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  description: string;
  budget?: string;
  deadline?: string;
  hasFile: boolean;
}) {
  const payload: MellyOSOrderPayload = {
    type: "new_design_request",
    siteId: MELLYOS_SITE_ID,
    customer: {
      name: data.name,
      email: data.email,
      phone: data.phone,
    },
    project: {
      type: data.projectType,
      description: data.description,
      budget: data.budget,
      deadline: data.deadline,
      hasFile: data.hasFile,
    },
    meta: {
      timestamp: new Date().toISOString(),
      source: "pixelora-website",
    },
  };

  return sendToMellyOS(payload);
}

/**
 * Notify MellyOS of a new contact message
 */
export async function notifyContactMessage(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const payload: MellyOSContactPayload = {
    type: "contact_message",
    siteId: MELLYOS_SITE_ID,
    from: {
      name: data.name,
      email: data.email,
    },
    message: {
      subject: data.subject,
      body: data.message,
    },
    meta: {
      timestamp: new Date().toISOString(),
      source: "pixelora-website",
    },
  };

  return sendToMellyOS(payload);
}
