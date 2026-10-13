import type { Metadata } from "next";
import { Container } from "@/components/container";
import { EventList } from "@/components/event-card";
import { PageHero } from "@/components/page-hero";
import { debutPanelists, pastEvents, upcomingEvents } from "@/data/events";
import { verifiedImpact } from "@/data/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming Business Technologies Guelph events, including Industry Decoded, the charity 5K, and Prompt & Pitch.",
};

export default function EventsPage() {
  const debut = pastEvents[0];

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="The confirmed calendar."
        lede="Three dates are set for this term. A time is shown only when BTG has confirmed it. Venue and registration details will be added when the club publishes them."
      />

      <section className="bg-cream">
        <Container className="py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="font-serif text-2xl italic text-pine">Upcoming</p>
            <h2 className="mt-3 text-4xl tracking-[-0.05em]">This term</h2>
          </div>
          <div className="mt-12">
            <EventList events={upcomingEvents} />
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-pine">
            Follow BTG on Instagram, TikTok, and LinkedIn for announcements.
          </p>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 md:py-28">
          <p className="font-serif text-2xl italic text-pine">Past</p>
          <h2 className="mt-3 text-4xl tracking-[-0.05em]">Debut</h2>
          {debut ? (
            <article className="mt-12 grid border border-ink/10 lg:grid-cols-12">
              <div className="on-ink bg-ink p-8 text-cream md:p-10 lg:col-span-5">
                <p className="text-sm text-cream/70">{debut.dateLabel}</p>
                <h3 className="mt-3 text-4xl tracking-[-0.05em]">{debut.title}</h3>
                <p className="mt-5 leading-relaxed text-cream/75">{debut.summary}</p>
                <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-cream/20 pt-6">
                  {verifiedImpact.map((item) => (
                    <div key={item.label}>
                      <dt className="text-xs text-cream/60">{item.label}</dt>
                      <dd className="mt-1 text-4xl tracking-[-0.05em]">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="bg-paper p-8 md:p-10 lg:col-span-7">
                <h3 className="text-lg tracking-[-0.04em]">Four industry panelists</h3>
                <ul className="mt-6 divide-y divide-ink/10">
                  {debutPanelists.map((person) => (
                    <li key={person.name} className="py-4">
                      <p className="tracking-[-0.03em]">{person.name}</p>
                      <p className="mt-1 text-sm text-pine">{person.role}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ) : (
            <p className="mt-10 text-pine">Past events will be recorded here.</p>
          )}
        </Container>
      </section>
    </>
  );
}
