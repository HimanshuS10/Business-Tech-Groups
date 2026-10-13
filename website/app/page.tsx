import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { EventList } from "@/components/event-card";
import { FaqList } from "@/components/faq-list";
import { faqs } from "@/data/faq";
import { upcomingEvents } from "@/data/events";
import { club, verifiedImpact } from "@/data/site";

export const metadata: Metadata = {
  title: club.name,
  description:
    "Where business meets tech. A student-led organization at the University of Guelph.",
};

const highlights = [
  {
    title: "Practical exposure",
    body: "Students work with the tools and questions shaping modern business and technology, not only the theory around them.",
  },
  {
    title: "Industry in the room",
    body: "Programming is built to put students with professionals and organizations that are already using this technology.",
  },
  {
    title: "Responsible adoption",
    body: "The club treats emerging technology as something to use carefully, with an eye on its impact at work and beyond campus.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="on-ink bg-ink text-cream">
        <Container className="grid items-end gap-12 py-16 md:py-24 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <p className="font-serif text-2xl italic text-cream/80 md:text-3xl">
              {club.university}
            </p>
            <h1 className="mt-5 text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Where Business
              <span className="mt-1 block font-serif text-[1.05em] italic font-normal tracking-normal">
                Meets Tech
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75">
              Business Technologies Guelph is a student-led organization at the
              University of Guelph. The club is focused on the place where
              business decisions and emerging technology meet — and on giving
              students a practical way into that work.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/about" variant="inverse">
                Explore BTG
              </ButtonLink>
              <ButtonLink href="/partner" variant="inverseQuiet">
                Partner With Us
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[5/4] w-full max-w-md bg-pine lg:aspect-[4/5] lg:max-w-none">
              <div className="absolute inset-5 flex flex-col justify-between bg-cream p-6 text-ink md:inset-7 md:p-8">
                <Image
                  src="/brand/btg-logo.png"
                  alt="Business Technologies Guelph seal"
                  width={220}
                  height={220}
                  className="h-28 w-28 md:h-36 md:w-36"
                />
                <div>
                  <p className="font-serif text-4xl italic leading-none">Student-led</p>
                  <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-pine">
                    Business and emerging technology, on the University of Guelph campus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-serif text-2xl italic text-pine">About</p>
            <h2 className="mt-3 text-4xl tracking-[-0.05em] md:text-5xl">
              A club built between two fields
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="max-w-2xl text-lg leading-relaxed text-pine">
              BTG helps students gain practical exposure to emerging technologies,
              meet the people who use them, and think about how that technology
              should be adopted. It is organized by students, for a campus that
              wants both the business case and the technical one.
            </p>
            <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {highlights.map((item) => (
                <li key={item.title} className="grid gap-2 py-5 md:grid-cols-12">
                  <h3 className="text-lg tracking-[-0.04em] md:col-span-4">{item.title}</h3>
                  <p className="leading-relaxed text-pine md:col-span-8">{item.body}</p>
                </li>
              ))}
            </ul>
            <ButtonLink href="/about" variant="secondary" className="mt-8">
              About BTG
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-serif text-2xl italic text-pine">Events</p>
              <h2 className="mt-3 max-w-xl text-4xl tracking-[-0.05em] md:text-5xl">
                What is on the calendar
              </h2>
            </div>
            <ButtonLink href="/events" variant="secondary">
              View all events
            </ButtonLink>
          </div>
          <div className="mt-12">
            <EventList events={upcomingEvents} />
          </div>
        </Container>
      </section>

      <section className="on-ink bg-ink text-cream">
        <Container className="py-20 md:py-28">
          <p className="font-serif text-2xl italic text-cream/80">Debut event</p>
          <h2 className="mt-3 max-w-2xl text-4xl tracking-[-0.05em] md:text-5xl">
            Smarter Than AI Panel
          </h2>
          <p className="mt-4 text-cream/70">March 3, 2026</p>
          <dl className="mt-12 grid gap-10 border-t border-cream/20 pt-10 sm:grid-cols-2">
            {verifiedImpact.map((item) => (
              <div key={item.label}>
                <dt className="text-sm text-cream/70">{item.label}</dt>
                <dd className="mt-2 text-6xl tracking-[-0.05em] md:text-7xl">{item.value}</dd>
                <dd className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="grid gap-5 py-20 md:grid-cols-2 md:py-28">
          <article className="flex flex-col border border-ink/10 bg-paper p-8 md:p-10">
            <p className="font-serif text-2xl italic text-pine">Team</p>
            <h2 className="mt-3 text-4xl tracking-[-0.05em]">Student leadership</h2>
            <p className="mt-5 flex-1 leading-relaxed text-pine">
              BTG is run by students. Portraits stay off the site until after the
              October 24, 2026 media day, when executive profiles can be published
              with approved photography.
            </p>
            <ButtonLink href="/team" variant="secondary" className="mt-8 self-start">
              Meet the team
            </ButtonLink>
          </article>
          <article className="flex flex-col bg-pine p-8 text-cream md:p-10">
            <p className="font-serif text-2xl italic text-cream/80">Partnerships</p>
            <h2 className="mt-3 text-4xl tracking-[-0.05em]">Work with the club</h2>
            <p className="mt-5 flex-1 leading-relaxed text-cream/80">
              Companies collaborate through club sponsorship, event sponsorship,
              supporting sponsorship, and workshops shaped with the partner —
              including Prompt & Pitch, the flagship competition.
            </p>
            <ButtonLink href="/partner" variant="inverse" className="mt-8 self-start">
              Partner With Us
            </ButtonLink>
          </article>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="grid gap-10 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-serif text-2xl italic text-pine">Questions</p>
            <h2 className="mt-3 text-4xl tracking-[-0.05em]">Before you write</h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={faqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
