"use server";

import { headers } from "next/headers";
import { deliverContact, validateContact, type ContactFormState } from "@/lib/contact";
import { contactSubmissionEnabled, contactUnavailableMessage } from "@/lib/contact-fields";

const deliveryError = "We couldn't send your message right now. Please try again later.";

export async function submitContact(_previous: ContactFormState, formData: FormData): Promise<ContactFormState> {
  if (!contactSubmissionEnabled) {
    return { status: "unavailable", message: contactUnavailableMessage };
  }

  const validated = validateContact({
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    inquiry: String(formData.get("inquiry") ?? ""),
    organization: String(formData.get("organization") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
  });

  if (!validated.ok) return { status: "error", fieldErrors: validated.fieldErrors };

  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || headerList.get("x-real-ip") || "unknown";
  const startedAt = Number(formData.get("startedAt"));

  try {
    const result = await deliverContact(validated.value, {
      ip,
      now: Date.now(),
      startedAt,
      honeypot: String(formData.get("company_website") ?? ""),
    });
    if (!result.ok) return { status: "error", message: deliveryError };
    return { status: "success", message: "Thanks for reaching out! Your message has been sent." };
  } catch {
    return { status: "error", message: deliveryError };
  }
}
