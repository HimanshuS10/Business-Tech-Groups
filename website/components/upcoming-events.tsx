import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { eyebrow, sectionTitle } from "@/components/type";
import type { EventItem } from "@/data/events";

export function UpcomingEvents({ events }: { events: EventItem[] }) {
  return (
    <section className="bg-paper">
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className={eyebrow}>What&apos;s Happening</p>
            <h2 className={sectionTitle}>Upcoming Events</h2>
            <p className="mt-4 text-base leading-7 text-pine">
              Connect with industry, build practical skills, and get involved with BTG.
            </p>
          </div>
          <ButtonLink href="/events" variant="secondary">
            View All Events
          </ButtonLink>
        </div>
        <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <li key={event.id} className="h-full">
              <HomeEventCard event={event} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function HomeEventCard({ event }: { event: EventItem }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded border border-ink/10 bg-paper">
      <div className="relative aspect-[3/4] bg-paper">
        {event.imageSrc ? (
          <Image
            src={event.imageSrc}
            alt={event.imageAlt ?? ""}
            fill
            sizes="(min-width: 1024px) 22rem, (min-width: 768px) 46vw, 100vw"
            className="object-contain"
            quality={90}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-pine">
            <PhotoMark />
            <span className="text-sm tracking-[-0.02em]">Event photo</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-sm font-semibold tracking-[0.06em] text-ink uppercase">{event.dateLabel}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-[1.15] tracking-[-0.04em] text-ink">
          {event.title}
        </h3>
        {event.timeLabel ? (
          <p className="mt-2 text-sm font-medium tracking-[-0.02em] text-pine">{event.timeLabel}</p>
        ) : null}
        <p className="mt-3 text-sm leading-relaxed text-pine">{event.preview ?? event.summary}</p>
        <Link
          href={`/events?event=${event.id}`}
          className="mt-auto inline-flex min-h-11 items-center gap-2 pt-6 text-sm font-medium tracking-[-0.03em] text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-200 hover:decoration-ink"
        >
          View Event Details
          <ArrowUpRight />
        </Link>
      </div>
    </article>
  );
}

function ArrowUpRight() {
  return (
    <svg aria-hidden width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path
        d="M4.5 11.5 11.5 4.5M7 4.5h4.5V9"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhotoMark() {
  return (
    <svg aria-hidden width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3.5" y="5.5" width="21" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="10" cy="11" r="1.6" fill="currentColor" />
      <path d="M6.5 19.5 11.5 14.5 15 17.5 18.5 13.5 21.5 16.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}
