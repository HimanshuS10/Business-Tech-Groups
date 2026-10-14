"use client";

import { useActionState, useState } from "react";
import { submitContact } from "@/app/contact/actions";
import { buttonClasses } from "@/components/button-link";
import {
  contactSubmissionEnabled,
  contactUnavailableMessage,
  inquiryTypes,
  type ContactFormState,
} from "@/lib/contact-fields";

const initialState: ContactFormState = { status: "idle" };

const emptyFields = {
  name: "",
  email: "",
  inquiry: "",
  organization: "",
  subject: "",
  message: "",
};

const fieldClass =
  "mt-2 w-full min-h-11 border border-ink/20 bg-paper px-3 py-2.5 text-base text-ink";

export function ContactForm({ startedAt }: { startedAt: number }) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const [fields, setFields] = useState(emptyFields);
  const [clearedState, setClearedState] = useState<ContactFormState | null>(null);

  if (state.status === "success" && state !== clearedState) {
    setClearedState(state);
    setFields(emptyFields);
  }

  function update(name: keyof typeof emptyFields, value: string) {
    setFields((current) => ({ ...current, [name]: value }));
  }

  return (
    <form
      action={contactSubmissionEnabled ? formAction : undefined}
      noValidate
      className="mx-auto max-w-[720px] border border-ink/10 p-6 md:p-8"
      onSubmit={(event) => {
        if (!contactSubmissionEnabled) event.preventDefault();
      }}
    >
      <div aria-live="polite">
        {state.status === "success" ? <p className="mb-6 text-base text-ink">{state.message}</p> : null}
        {state.status === "error" && state.message ? (
          <p className="mb-6 text-base text-ink">{state.message}</p>
        ) : null}
        {!contactSubmissionEnabled ? (
          <p id="contact-unavailable" className="mb-6 text-base leading-7 text-ink">
            {contactUnavailableMessage}
          </p>
        ) : null}
      </div>

      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Full Name"
          name="name"
          value={fields.name}
          onChange={update}
          error={state.fieldErrors?.name}
          autoComplete="name"
          required
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          value={fields.email}
          onChange={update}
          error={state.fieldErrors?.email}
          autoComplete="email"
          required
        />
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="inquiry" className="text-sm font-medium text-ink">
            Inquiry Type
          </label>
          <select
            id="inquiry"
            name="inquiry"
            required
            value={fields.inquiry}
            onChange={(event) => update("inquiry", event.target.value)}
            aria-invalid={state.fieldErrors?.inquiry ? true : undefined}
            aria-describedby={state.fieldErrors?.inquiry ? "inquiry-error" : undefined}
            className={fieldClass}
          >
            <option value="" disabled>
              Select an inquiry
            </option>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <FieldError id="inquiry-error" message={state.fieldErrors?.inquiry} />
        </div>
        <Field
          label="Organization / Company"
          name="organization"
          value={fields.organization}
          onChange={update}
          error={state.fieldErrors?.organization}
          autoComplete="organization"
        />
      </div>

      <div className="mt-5">
        <Field
          label="Subject"
          name="subject"
          value={fields.subject}
          onChange={update}
          error={state.fieldErrors?.subject}
          required
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          rows={6}
          maxLength={4000}
          aria-invalid={state.fieldErrors?.message ? true : undefined}
          aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
          className={`${fieldClass} min-h-36 resize-y`}
        />
        <FieldError id="message-error" message={state.fieldErrors?.message} />
      </div>

      <button
        type={contactSubmissionEnabled ? "submit" : "button"}
        disabled={contactSubmissionEnabled ? pending : false}
        aria-describedby={contactSubmissionEnabled ? undefined : "contact-unavailable"}
        className={buttonClasses("primary", "mt-6 w-full disabled:opacity-60 sm:w-auto")}
      >
        {contactSubmissionEnabled && pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required,
  autoComplete,
}: {
  label: string;
  name: keyof typeof emptyFields;
  type?: string;
  value: string;
  onChange: (name: keyof typeof emptyFields, value: string) => void;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        autoComplete={autoComplete}
        maxLength={name === "email" ? 254 : name === "organization" ? 120 : name === "subject" ? 120 : 80}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={fieldClass}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm font-medium text-ink">
      {message}
    </p>
  );
}
