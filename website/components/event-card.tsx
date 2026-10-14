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

function EventListing({ event }: { event: EventItem }) {
  return (
    <Link
      id={event.id}
      href={`/events?event=${event.id}`}
      className="grid scroll-mt-28 overflow-hidden rounded-sm border border-ink/10 bg-paper transition-colors duration-200 hover:border-ink/25 hover:bg-cream/40 md:grid-cols-12"
    >
      <div className="relative aspect-[3/4] bg-paper md:col-span-5">
        {event.imageSrc ? (
          <Image
            src={event.imageSrc}
            alt={event.imageAlt ?? ""}
            fill
            sizes="(min-width: 768px) 28rem, 100vw"
            className="object-contain"
            quality={90}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-pine">
            <svg aria-hidden width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="3.5" y="5.5" width="21" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
              <circle cx="10" cy="11" r="1.6" fill="currentColor" />
              <path
                d="M6.5 19.5 11.5 14.5 15 17.5 18.5 13.5 21.5 16.5"
                stroke="currentColor"
                strokeWidth="1.25"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center p-6 md:col-span-7 md:p-8 lg:p-10">
        <p className="text-sm font-semibold tracking-[0.06em] text-ink uppercase">{event.dateLabel}</p>
        <h3 className="mt-2 text-2xl font-semibold leading-[1.15] tracking-[-0.045em] text-ink md:text-3xl">
          {event.title}
        </h3>
        {event.timeLabel ? (
          <p className="mt-3 text-sm font-medium tracking-[-0.02em] text-pine">{event.timeLabel}</p>
        ) : null}
        <p className="mt-4 max-w-xl text-base leading-7 text-pine">{event.preview ?? event.summary}</p>
      </div>
    </Link>
  );
}
