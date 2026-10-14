/** Keep false until BTG approves a destination inbox and a delivery service. */
export const contactSubmissionEnabled: boolean = false;

export const contactUnavailableMessage =
  "Message submission will be available soon. For now, please connect with BTG through our official social channels.";

export const inquiryTypes = [
  "General Question",
  "Events & Getting Involved",
  "Partnerships & Sponsorships",
  "Other",
] as const;

export type InquiryType = (typeof inquiryTypes)[number];

export type ContactMessage = {
  name: string;
  email: string;
  inquiry: InquiryType;
  organization: string;
  subject: string;
  message: string;
};

export type FieldErrors = Partial<
  Record<"name" | "email" | "inquiry" | "organization" | "subject" | "message", string>
>;

export type ContactFormState = {
  status: "idle" | "success" | "error" | "unavailable";
  fieldErrors?: FieldErrors;
  message?: string;
};
