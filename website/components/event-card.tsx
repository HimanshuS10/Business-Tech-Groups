import Image from "next/image";
import Link from "next/link";
import type { EventItem } from "@/data/events";

export function EventList({
  events,
  emptyLabel = "Confirmed events will appear here.",
}: {
  events: EventItem[];
  emptyLabel?: string;
}) {
  if (events.length === 0) {
    return <p className="text-base leading-7 text-pine">{emptyLabel}</p>;
  }

  return (
    <div className="flex flex-col gap-5">
      {events.map((event) => (
        <EventListing key={event.id} event={event} />
      ))}
    </div>
  );
}

/** Shared card surface for event cards on the home and events pages. */
export const eventCardSurface =
  "overflow-hidden rounded-sm border border-ink/10 bg-paper";

export const eventCardImage =
  "object-contain";

export function eventCtaLabel(event: EventItem) {
  return event.recap ? "Read the recap" : "View details";
}

export function EventBadges({ event }: { event: EventItem }) {
  const hasRecap = Boolean(event.recap);
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium tracking-[-0.01em] ${
          hasRecap ? "bg-ink text-cream" : "bg-cream text-ink"
        }`}
      >
        {hasRecap ? null : <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sage" />}
        {hasRecap ? "Event Recap" : "Upcoming"}
      </span>
      {event.category ? (
        <span className="rounded-full border border-ink/15 px-2.5 py-1 text-xs font-medium tracking-[-0.01em] text-pine">
          {event.category}
        </span>
      ) : null}
    </div>
  );
}

/** Quiet meta under the title: date · time, with the venue on its own line. */
export function EventMeta({ event, className = "" }: { event: EventItem; className?: string }) {
  return (
    <div className={`text-sm font-medium tracking-[-0.02em] text-pine ${className}`}>
      <p>
        {event.dateLabel}
        {event.timeLabel ? (
          <>
            <span aria-hidden className="mx-2 text-ink/30">
              ·
            </span>
            {event.timeLabel}
          </>
        ) : null}
      </p>
      {event.location ? <p className="mt-0.5">{event.location}</p> : null}
    </div>
  );
}

/** Underlined call to action shown at the foot of each event card. */
export function EventCardCta({ event }: { event: EventItem }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium tracking-[-0.03em] text-ink">
      <span className="underline decoration-ink/30 underline-offset-4">
        {eventCtaLabel(event)}
      </span>
      <svg
        aria-hidden
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </span>
  );
}

function EventListing({ event }: { event: EventItem }) {
  return (
    <Link
      id={event.id}
      href={`/events?event=${event.id}`}
      scroll={false}
      aria-label={`${eventCtaLabel(event)}: ${event.title}`}
      className={`${eventCardSurface} grid scroll-mt-28 md:grid-cols-12`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-cream md:col-span-5 md:aspect-auto md:h-full md:min-h-64">
        {event.listImageSrc || event.imageSrc ? (
          <Image
            src={(event.listImageSrc ?? event.imageSrc)!}
            alt={event.imageAlt ?? ""}
            fill
            sizes="(min-width: 768px) 28rem, 100vw"
            className={event.listImageSrc ? "object-cover" : eventCardImage}
            quality={90}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-pine">
            <PhotoMark />
            <span className="text-sm tracking-[-0.02em]">Coming soon</span>
          </div>
        )}
      </div>
      <div className="flex flex-col p-6 md:col-span-7 md:p-8 lg:p-10">
        <EventBadges event={event} />
        <h3 className="mt-5 text-2xl font-semibold leading-[1.15] tracking-[-0.045em] text-ink md:text-3xl">
          {event.title}
        </h3>
        <EventMeta event={event} className="mt-3" />
        <p className="mt-4 max-w-xl text-base leading-7 text-pine">{event.preview ?? event.summary}</p>
        <div className="mt-auto pt-8">
          <div className="flex items-center justify-between gap-4 border-t border-ink/10 pt-5">
            <span className="text-sm text-pine">
              {event.recap ? "Takeaways, highlights, and what we discussed" : "Recap posted after the event"}
            </span>
            <EventCardCta event={event} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function PhotoMark() {
  return (
    <svg aria-hidden width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3.5" y="5.5" width="21" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="10" cy="11" r="1.6" fill="currentColor" />
      <path d="M6.5 19.5 11.5 14.5 15 17.5 18.5 13.5 21.5 16.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}
