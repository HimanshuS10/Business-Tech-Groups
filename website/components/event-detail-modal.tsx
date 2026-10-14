"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import type { EventItem } from "@/data/events";

export function EventDetailModal({ events }: { events: EventItem[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closedByUrl = useRef(false);
  const slug = params.get("event");
  const event = slug ? events.find((item) => item.id === slug) : undefined;

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
      className="m-auto max-h-[min(90vh,40rem)] w-[min(44rem,calc(100%-2rem))] rounded-sm border border-ink/10 bg-paper p-0 text-ink backdrop:bg-ink/50"
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
        <div className="max-h-[min(90vh,40rem)] overflow-y-auto p-6 md:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-semibold tracking-[0.06em] text-ink uppercase">{event.dateLabel}</p>
              <h2
                id="event-dialog-title"
                className="mt-3 text-3xl font-semibold leading-[1.12] tracking-[-0.045em] text-ink"
              >
                {event.title}
              </h2>
              {event.timeLabel ? (
                <p className="mt-3 text-sm font-medium tracking-[-0.02em] text-pine">{event.timeLabel}</p>
              ) : null}
              {event.location ? <p className="mt-1 text-sm text-pine">{event.location}</p> : null}
            </div>
            <button
              type="button"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-ink/15 text-ink"
              aria-label="Close"
              onClick={() => dialogRef.current?.close()}
            >
              <svg aria-hidden width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3.5 3.5 12.5 12.5M12.5 3.5 3.5 12.5" stroke="currentColor" strokeWidth="1.25" />
              </svg>
            </button>
          </div>
          {event.imageSrc ? (
            <div className="relative mx-auto mt-6 aspect-[3/4] w-full max-w-xs bg-paper">
              <Image
                src={event.imageSrc}
                alt={event.imageAlt ?? ""}
                fill
                sizes="20rem"
                className="object-contain"
                quality={90}
              />
            </div>
          ) : null}
          <p className="mt-6 text-base leading-7 text-pine">{event.summary}</p>
          {event.registrationHref ? (
            <a
              href={event.registrationHref}
              className="mt-6 inline-flex min-h-11 items-center bg-ink px-5 text-sm font-medium tracking-[-0.03em] text-cream"
            >
              Register
            </a>
          ) : null}
        </div>
      ) : null}
    </dialog>
  );
}
