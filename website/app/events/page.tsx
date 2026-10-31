import Image from "next/image";
import { Suspense } from "react";
import { ButtonLink, buttonClasses } from "@/components/button-link";
import { Container } from "@/components/container";
import { EventDetailModal } from "@/components/event-detail-modal";
import { EventList } from "@/components/event-card";
import { PanelistList } from "@/components/panelist-list";
import { eyebrow, sectionTitle, sectionY } from "@/components/type";
import { debutPanelists, pastEvents, upcomingEvents } from "@/data/events";
import { socials, verifiedImpact } from "@/data/site";
import { pageMetadata, socialShare } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Events | Business Technologies Guelph",
  description:
    "Explore events, networking opportunities, industry discussions, and technology-focused experiences organized by Business Technologies Guelph.",
  path: "/events",
  socialDescription: socialShare.events.description,
  image: socialShare.events,
});

/** Set `src` when an approved event photograph is ready. Crop uses object-cover. */
function EventsHeroPhoto({
  src,
  alt,
  position = "object-center",
}: {
  src?: string;
  alt: string;
  position?: string;
}) {
  return (
    <div className="relative aspect-[5/4] overflow-hidden rounded-sm bg-sage/20">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 34rem, 100vw"
          className={`object-cover ${position}`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-pine">
          <svg aria-hidden width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="3.5" y="5.5" width="21" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
            <circle cx="10" cy="11" r="1.6" fill="currentColor" />
            <path d="M6.5 19.5 11.5 14.5 15 17.5 18.5 13.5 21.5 16.5" stroke="currentColor" strokeWidth="1.25" />
          </svg>
          <span className="text-sm tracking-[-0.02em]">BTG event photograph</span>
        </div>
      )}
    </div>
  );
}

export default function EventsPage() {
  const debut = pastEvents.find((event) => event.id === "smarter-than-ai");
  const recentPastEvents = pastEvents.filter((event) => event !== debut);

  return (
    <>
      <section className="bg-cream">
        <Container className="grid items-center gap-8 py-12 md:py-14 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <div>
            <p className={eyebrow}>BTG Events</p>
            <h1 className="mt-4 max-w-lg text-pretty text-[1.9rem] font-medium leading-[1.05] tracking-[-0.05em] text-ink min-[480px]:text-4xl sm:text-balance sm:text-5xl">
              Where ideas and people connect.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-pine md:text-lg md:leading-8">
              Explore events that bring students and industry professionals together through
              conversations, practical experiences, and emerging technologies.
            </p>
            <div className="mt-8">
              <ButtonLink href="#upcoming-events">Explore Upcoming Events</ButtonLink>
            </div>
          </div>
          <EventsHeroPhoto
            src="/images/btg/btg-event-photo-audience.webp"
            alt="Students seated at tables during a BTG event"
            position="object-[center_58%]"
          />
        </Container>
      </section>

      <section id="upcoming-events" className="scroll-mt-28 bg-paper">
        <Container className={sectionY}>
          <div data-reveal className="max-w-2xl">
            <p className={eyebrow}>What&apos;s Coming Up</p>
            <h2 className={sectionTitle}>Upcoming Events</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-pine">
              Explore upcoming opportunities to learn, connect, and get involved with BTG.
            </p>
          </div>
          <div className="mt-10 md:mt-12">
            <EventList events={upcomingEvents} />
            <p className="mt-8 text-center text-sm tracking-[-0.02em] text-pine md:mt-10">
              More events coming soon.
            </p>
          </div>
          {recentPastEvents.length ? (
            <div className="mt-14 md:mt-16">
              <h2 data-reveal className={sectionTitle}>Past Events</h2>
              <div className="mt-8 md:mt-10">
                <EventList events={recentPastEvents} />
              </div>
            </div>
          ) : null}
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="py-14 md:py-16 lg:py-[4.5rem]">
          <p className={eyebrow}>Where It Started</p>
          <h2 className={`${sectionTitle} max-w-md`}>A look back at BTG.</h2>
          {debut ? (
            <article
              id={debut.id}
              className="mt-8 grid scroll-mt-28 items-start gap-8 lg:grid-cols-2 lg:gap-12"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-sm bg-sage/20">
                <Image
                  src="/images/btg/btg-panel-speakers.webp"
                  alt="Industry panelists seated at the Smarter Than AI Panel"
                  fill
                  sizes="(min-width: 1024px) 36rem, 100vw"
                  className="object-cover object-[center_32%]"
                />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.06em] text-ink uppercase">{debut.dateLabel}</p>
                <h3 className="mt-2 text-2xl font-semibold leading-[1.15] tracking-[-0.045em] text-ink md:text-3xl">
                  {debut.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-7 text-pine">
                  BTG&apos;s first event brought together more than 60 attendees and four industry
                  panelists to discuss AI and emerging technologies in business.
                </p>
                <dl className="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <dt className="text-2xl font-medium tracking-[-0.04em] text-ink">{verifiedImpact[0].value}</dt>
                    <dd className="mt-1 text-sm text-pine">{verifiedImpact[0].label}</dd>
                  </div>
                  <div>
                    <dt className="text-2xl font-medium tracking-[-0.04em] text-ink">{verifiedImpact[1].value}</dt>
                    <dd className="mt-1 text-sm text-pine">{verifiedImpact[1].label}</dd>
                  </div>
                </dl>
                <PanelistList people={debutPanelists} />
              </div>
            </article>
          ) : (
            <p className="mt-8 text-pine">Past events will be recorded here.</p>
          )}
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="flex flex-col items-start justify-between gap-5 py-12 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium leading-[1.08] tracking-[-0.05em] text-ink">
              Stay in the loop.
            </h2>
            <p className="mt-2 max-w-md text-base leading-6 text-pine">
              Follow BTG on Instagram for event announcements and opportunities to get involved.
            </p>
          </div>
          <a
            href={socials.find((item) => item.name === "Instagram")?.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClasses("primary")} gap-2`}
          >
            <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
              <circle cx="12" cy="12" r="3.75" />
              <circle cx="17.25" cy="6.75" r="0.9" fill="currentColor" stroke="none" />
            </svg>
            Follow on Instagram
            <svg aria-hidden width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Container>
      </section>
      <Suspense fallback={null}>
        <EventDetailModal events={[...upcomingEvents, ...pastEvents]} />
      </Suspense>
    </>
  );
}
