"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { PhotoRing } from "@/components/photo-ring";
import type { EventItem, EventPrompt, EventRecap, EventResource } from "@/data/events";

export function EventDetailModal({ events }: { events: EventItem[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closedByUrl = useRef(false);
  const slug = params.get("event");
  const event = slug ? events.find((item) => item.id === slug) : undefined;
  const poster = event?.posterSrc ?? event?.imageSrc;

  const clearEventParam = useCallback(() => {
    const next = new URLSearchParams(params.toString());
    if (!next.has("event")) return;
    next.delete("event");
    const query = next.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [params, pathname, router]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (slug && !event) {
      clearEventParam();
      return;
    }

    if (event) {
      if (!dialog.open) dialog.showModal();
      return;
    }

    if (dialog.open) {
      closedByUrl.current = true;
      dialog.close();
    }
  }, [clearEventParam, event, slug]);

  useEffect(() => {
    if (!event) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(keyEvent: KeyboardEvent) {
      if (keyEvent.key === "Escape") dialogRef.current?.close();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [event]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="event-dialog-title"
      className="event-dialog m-auto max-h-[min(92vh,52rem)] w-[min(60rem,calc(100%-1.5rem))] overflow-hidden rounded-md border border-ink/10 bg-paper p-0 text-ink shadow-[0_32px_80px_-24px_rgb(38_49_53/0.45)] backdrop:bg-ink/55 backdrop:backdrop-blur-[2px]"
      onClose={() => {
        if (closedByUrl.current) {
          closedByUrl.current = false;
          return;
        }
        clearEventParam();
      }}
      onClick={(click) => {
        if (click.target === click.currentTarget) dialogRef.current?.close();
      }}
    >
      {event ? (
        <div className="flex max-h-[min(92vh,52rem)] flex-col">
          <header className="flex items-center justify-between gap-4 border-b border-ink/10 px-5 py-3 md:px-8">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium tracking-[-0.01em] ${
                  event.recap ? "bg-ink text-cream" : "bg-cream text-ink"
                }`}
              >
                {event.recap ? null : <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sage" />}
                {event.recap ? "Event Recap" : "Upcoming"}
              </span>
              {event.category ? (
                <span className="rounded-full border border-ink/15 px-2.5 py-1 text-xs font-medium tracking-[-0.01em] text-pine">
                  {event.category}
                </span>
              ) : null}
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-cream"
              aria-label="Close"
              onClick={() => dialogRef.current?.close()}
            >
              <svg aria-hidden width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3.5 3.5 12.5 12.5M12.5 3.5 3.5 12.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </header>

          <div className="overflow-y-auto overscroll-contain">
            <div className="grid gap-6 p-5 md:grid-cols-[17rem_1fr] md:gap-10 md:p-8">
              {poster ? (
                <div
                  className={`relative mx-auto aspect-[3/4] w-full max-w-[15rem] overflow-hidden rounded-sm md:mx-0 md:max-w-none md:self-start ${
                    event.imageOnWhite ? "bg-white" : "bg-cream"
                  }`}
                >
                  <Image
                    src={poster}
                    alt={event.imageAlt ?? ""}
                    fill
                    sizes="(min-width: 768px) 17rem, 15rem"
                    className="object-contain"
                    quality={90}
                  />
                </div>
              ) : null}
              <div className={poster ? undefined : "md:col-span-2"}>
                <h2
                  id="event-dialog-title"
                  className="text-pretty text-3xl font-semibold leading-[1.1] tracking-[-0.045em] text-ink md:text-4xl"
                >
                  {event.title}
                </h2>
                <dl className="mt-5 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-2">
                  <Fact label="Date" value={event.dateLabel} />
                  <Fact label="Time" value={event.timeLabel ?? "To be announced"} />
                  {event.location ? (
                    <Fact label="Location" value={event.location} detail={event.address} wide />
                  ) : null}
                </dl>
                <h3 className="mt-7 text-sm font-semibold tracking-[0.06em] text-ink uppercase">
                  About this event
                </h3>
                <p className="mt-2 text-base leading-7 text-pine">{event.summary}</p>
                {event.registrationHref ? (
                  <a
                    href={event.registrationHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center bg-ink px-5 text-sm font-medium tracking-[-0.03em] text-cream"
                  >
                    Register
                  </a>
                ) : null}
              </div>
            </div>

            {event.resources?.length ? <Resources resources={event.resources} /> : null}
            {event.prompts?.length ? <Prompts key={event.id} prompts={event.prompts} /> : null}

            <section
              aria-labelledby="event-recap-title"
              className="border-t border-ink/10 bg-cream/50 px-5 py-8 md:px-8 md:py-10"
            >
              <div className="mx-auto max-w-2xl">
                <p className="font-serif text-xl italic leading-none text-pine">Event Recap</p>
                <h3
                  id="event-recap-title"
                  className="mt-2 text-2xl font-semibold leading-[1.15] tracking-[-0.04em] text-ink"
                >
                  {event.recap ? "What happened" : "Recap coming soon"}
                </h3>
                {event.recap ? (
                  <Recap key={event.id} recap={event.recap} />
                ) : (
                  <p className="mt-3 text-base leading-7 text-pine">
                    After the event, we&apos;ll post a full write-up here: the key takeaways, what
                    our speakers shared, and highlights from the conversation.
                  </p>
                )}
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}

function Fact({
  label,
  value,
  detail,
  wide = false,
}: {
  label: string;
  value: string;
  detail?: string;
  wide?: boolean;
}) {
  return (
    <div className={`bg-paper px-4 py-3 ${wide ? "sm:col-span-2" : ""}`}>
      <dt className="text-xs font-medium tracking-[0.06em] text-pine uppercase">{label}</dt>
      <dd className="mt-1 text-base font-medium tracking-[-0.03em] text-ink">{value}</dd>
      {detail ? <dd className="mt-0.5 text-sm text-pine">{detail}</dd> : null}
    </div>
  );
}

const resourceLabels: Record<EventResource["action"], string> = {
  copy: "Make a copy",
  download: "Download",
  open: "Open",
};

function Resources({ resources }: { resources: EventResource[] }) {
  return (
    <section
      aria-labelledby="event-resources-title"
      className="border-t border-ink/10 px-5 py-8 md:px-8 md:py-10"
    >
      <div className="mx-auto max-w-2xl">
        <h3
          id="event-resources-title"
          className="text-sm font-semibold tracking-[0.06em] text-ink uppercase"
        >
          Workshop resources
        </h3>
        <p className="mt-2 text-base leading-7 text-pine">
          Grab these before the event so you&apos;re ready to build.
        </p>
        <ul className="mt-5 grid gap-3">
          {resources.map((resource) => {
            const external = resource.href.startsWith("http");
            return (
              <li
                key={resource.href}
                className="flex flex-col gap-4 rounded-sm border border-ink/10 bg-paper p-4 sm:flex-row sm:items-center"
              >
                {resource.previewSrc ? (
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm border border-ink/10 bg-white">
                    <Image
                      src={resource.previewSrc}
                      alt=""
                      fill
                      sizes="4rem"
                      className="object-contain"
                    />
                  </div>
                ) : null}
                <div className="min-w-0 flex-1">
                  <p className="text-base font-medium tracking-[-0.03em] text-ink">{resource.title}</p>
                  {resource.description ? (
                    <p className="mt-0.5 text-sm leading-6 text-pine">{resource.description}</p>
                  ) : null}
                </div>
                <a
                  href={resource.href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : resource.action === "download"
                      ? { download: "" }
                      : {})}
                  className="inline-flex min-h-11 shrink-0 items-center justify-center bg-ink px-5 text-sm font-medium tracking-[-0.03em] text-cream"
                >
                  {resourceLabels[resource.action]}
                  <span className="sr-only">: {resource.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Prompts({ prompts }: { prompts: EventPrompt[] }) {
  return (
    <section
      aria-labelledby="event-prompts-title"
      className="border-t border-ink/10 px-5 py-8 md:px-8 md:py-10"
    >
      <div className="mx-auto max-w-2xl">
        <h3
          id="event-prompts-title"
          className="text-sm font-semibold tracking-[0.06em] text-ink uppercase"
        >
          Build prompts
        </h3>
        <p className="mt-2 text-base leading-7 text-pine">
          Copy each prompt into Google AI Studio in order. Paste it exactly as written.
        </p>
        <ol className="mt-5 grid gap-3">
          {prompts.map((prompt, index) => (
            <PromptCard
              key={prompt.title}
              prompt={prompt}
              label={`Prompt ${index + 1} of ${prompts.length}`}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function PromptCard({ prompt, label }: { prompt: EventPrompt; label: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = window.setTimeout(() => setStatus("idle"), 2000);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(prompt.text);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <li className="rounded-sm border border-ink/10 bg-paper p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium tracking-[0.06em] text-pine uppercase">{label}</p>
          <p className="mt-1 text-base font-medium tracking-[-0.03em] text-ink">{prompt.title}</p>
          {prompt.description ? (
            <p className="mt-0.5 text-sm leading-6 text-pine">{prompt.description}</p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={copy}
          className="inline-flex min-h-11 shrink-0 cursor-pointer items-center justify-center bg-ink px-5 text-sm font-medium tracking-[-0.03em] text-cream"
        >
          {status === "copied" ? "Copied!" : status === "failed" ? "Copy failed" : "Copy prompt"}
          <span className="sr-only">: {prompt.title}</span>
        </button>
      </div>
      <span aria-live="polite" className="sr-only">
        {status === "copied" ? `${prompt.title} prompt copied` : ""}
      </span>
      <details className="group mt-3">
        <summary className="cursor-pointer text-sm font-medium text-ink underline-offset-4 hover:underline">
          View prompt
        </summary>
        <pre className="mt-3 max-h-80 overflow-auto whitespace-pre-wrap wrap-break-word rounded-sm border border-ink/10 bg-cream/50 p-4 font-mono text-xs leading-5 text-ink">
          {prompt.text}
        </pre>
      </details>
    </li>
  );
}

function Recap({ recap }: { recap: EventRecap }) {
  return (
    <div className="mt-4">
      {recap.intro ? <p className="text-lg leading-8 text-ink">{recap.intro}</p> : null}
      {recap.photos?.length ? <PhotoRing photos={recap.photos} /> : null}
      {recap.takeaways?.length ? (
        <div className="mt-6 rounded-sm border border-ink/10 bg-paper p-5">
          <h4 className="text-sm font-semibold tracking-[0.06em] text-ink uppercase">Key takeaways</h4>
          <ol className="mt-3 grid gap-3">
            {recap.takeaways.map((item, index) => (
              <li key={item} className="flex gap-3 text-base leading-7 text-pine">
                <span className="font-serif text-lg italic leading-7 text-ink">{index + 1}.</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      ) : null}
      {recap.sections.map((section) => (
        <div key={section.heading} className="mt-8">
          <h4 className="text-xl font-semibold tracking-[-0.035em] text-ink">{section.heading}</h4>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-base leading-7 text-pine">
              {paragraph}
            </p>
          ))}
          {section.points?.length ? (
            <ul className="mt-3 grid list-disc gap-2 pl-5 text-base leading-7 text-pine marker:text-sage">
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}
