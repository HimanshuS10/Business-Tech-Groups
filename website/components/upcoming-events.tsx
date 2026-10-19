import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { eyebrow, sectionTitle } from "@/components/type";
import {
  EventCardCta,
  EventMeta,
  PhotoMark,
  eventCardImage,
  eventCardSurface,
  eventCtaLabel,
} from "@/components/event-card";
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
    <article className={`${eventCardSurface} relative flex h-full flex-col`}>
      <div className="relative aspect-video overflow-hidden bg-cream">
        {event.imageSrc ? (
          <Image
            src={event.imageSrc}
            alt={event.imageAlt ?? ""}
            fill
            sizes="(min-width: 1024px) 22rem, (min-width: 768px) 46vw, 100vw"
            className={eventCardImage}
            quality={90}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-pine">
            <PhotoMark />
            <span className="text-sm tracking-[-0.02em]">Coming soon</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-2xl font-semibold leading-[1.15] tracking-[-0.04em] text-ink">
          {event.title}
        </h3>
        <EventMeta event={event} className="mt-2" />
        <p className="mt-3 text-sm leading-relaxed text-pine">{event.preview ?? event.summary}</p>
        <div className="mt-auto pt-6">
          <div
            className={`flex items-center gap-4 border-t border-ink/10 pt-4 ${
              event.registrationHref ? "justify-between" : "justify-end"
            }`}
          >
            {event.registrationHref ? (
              // Sits above the stretched card link so it stays separately clickable.
              <a
                href={event.registrationHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Register: ${event.title}`}
                className="relative z-10 inline-flex min-h-9 items-center bg-ink px-4 text-sm font-medium tracking-[-0.03em] text-cream"
              >
                Register
              </a>
            ) : null}
            <Link
              href={`/events?event=${event.id}`}
              aria-label={`${eventCtaLabel(event)}: ${event.title}`}
              className="after:absolute after:inset-0"
            >
              <EventCardCta event={event} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
