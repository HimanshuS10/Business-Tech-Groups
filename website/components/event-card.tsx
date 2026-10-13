import Image from "next/image";
import type { EventItem } from "@/data/events";

const tones = ["bg-ink", "bg-pine", "bg-sage"] as const;

export function EventCard({
  event,
  index,
}: {
  event: EventItem;
  index: number;
}) {
  const tone = tones[index % tones.length];

  return (
    <article className="flex h-full flex-col border border-ink/10 bg-paper">
      <div className={`relative min-h-44 ${tone} text-cream`}>
        {event.imageSrc ? (
          <Image
            src={event.imageSrc}
            alt={event.imageAlt ?? ""}
            fill
            sizes="(min-width: 1024px) 360px, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full min-h-44 flex-col justify-between p-5">
            <p className="font-serif text-4xl italic">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div className="h-px w-16 bg-cream/50" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-sm text-pine">{event.dateLabel}</p>
        <h3 className="mt-2 text-2xl leading-tight tracking-[-0.04em]">
          {event.title}
        </h3>
        <p className="mt-3 text-sm text-pine">
          {event.timeLabel ?? "Time to be confirmed"}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-pine">
          {event.summary}
        </p>
      </div>
    </article>
  );
}

export function EventList({
  events,
  emptyLabel = "Confirmed events will appear here.",
}: {
  events: EventItem[];
  emptyLabel?: string;
}) {
  if (events.length === 0) {
    return (
      <p className="border border-ink/10 bg-paper px-6 py-10 text-pine">
        {emptyLabel}
      </p>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event, index) => (
        <EventCard key={event.title} event={event} index={index} />
      ))}
    </div>
  );
}
