import type { Metadata } from "next";
import Link from "next/link";
import { buttonClasses } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import {
  competitionSteps,
  tiers,
  whyPartner,
  workshopFormats,
  workshopSteps,
} from "@/data/partnerships";
import { corporateContact, sponsorshipMailto } from "@/data/site";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Sponsor Business Technologies Guelph through club, event, or supporting partnerships, or co-design a workshop.",
};

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        title="A serious audience, still early enough to shape."
        lede="BTG invites companies into student programming at the University of Guelph: year-round sponsorship, single events, and workshops designed with the partner rather than handed to them."
      />

      <section className="bg-cream">
        <Container className="py-20 md:py-28">
          <p className="font-serif text-2xl italic text-pine">Why partner with BTG</p>
          <h2 className="mt-3 max-w-2xl text-4xl tracking-[-0.05em]">
            Five reasons companies are being asked in
          </h2>
          <ol className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {whyPartner.map((item, index) => (
              <li key={item.title} className="grid gap-3 py-6 md:grid-cols-12 md:gap-8">
                <p className="font-serif text-3xl italic text-sage md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-2xl tracking-[-0.04em] md:col-span-4">{item.title}</h3>
                <p className="leading-relaxed text-pine md:col-span-7">{item.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="font-serif text-2xl italic text-pine">Collaboration</p>
            <h2 className="mt-3 text-4xl tracking-[-0.05em]">Three ways to take part</h2>
            <p className="mt-5 leading-relaxed text-pine">
              Investment levels are confirmed with Corporate Relations. Published
              ranges are not listed here until one set of figures is approved.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article key={tier.name} className="flex flex-col border border-ink/10 bg-cream p-6 md:p-8">
                <h3 className="text-2xl tracking-[-0.04em]">{tier.name}</h3>
                <p className="mt-4 leading-relaxed text-pine">{tier.summary}</p>
                <ul className="mt-6 flex-1 space-y-3 text-sm leading-relaxed text-pine">
                  {tier.includes.map((item) => (
                    <li key={item} className="border-t border-ink/10 pt-3">
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={sponsorshipMailto()} className={buttonClasses("primary", "mt-8")}>
                  Request sponsorship information
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl italic text-pine">Workshops</p>
            <h2 className="mt-3 text-4xl tracking-[-0.05em]">Sponsor-led, by design</h2>
            <p className="mt-5 leading-relaxed text-pine">
              BTG does not hand a partner a finished session. Each workshop is
              shaped around the company and the club&apos;s mission, so the hour
              is a teaching and mentorship opportunity.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ol className="space-y-4">
              {workshopSteps.map((step, index) => (
                <li key={step} className="flex gap-4 border-b border-ink/10 pb-4">
                  <span className="font-serif text-2xl italic text-sage">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1 tracking-[-0.03em]">{step}</span>
                </li>
              ))}
            </ol>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {workshopFormats.map((format) => (
                <li key={format.name} className="bg-paper p-5">
                  <h3 className="tracking-[-0.03em]">{format.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-pine">{format.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="on-ink bg-ink text-cream">
        <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl italic text-cream/80">Flagship</p>
            <h2 className="mt-3 text-4xl tracking-[-0.05em]">Prompt & Pitch</h2>
            <p className="mt-3 text-cream/70">November 21, 2026 · Time to be confirmed</p>
            <p className="mt-6 leading-relaxed text-cream/75">
              Student teams identify a business problem, build a working prototype
              with AI-assisted development, and pitch the business case to industry
              judges. It is the headline opportunity for an event sponsor.
            </p>
            <Link
              href="/events"
              className="mt-8 inline-block text-sm underline decoration-cream/40 underline-offset-4 hover:decoration-cream"
            >
              See it on the events calendar
            </Link>
          </div>
          <ol className="grid gap-4 lg:col-span-7">
            {competitionSteps.map((step) => (
              <li key={step.step} className="border border-cream/20 p-6">
                <p className="font-serif text-2xl italic text-cream/70">{step.step}</p>
                <h3 className="mt-2 text-2xl tracking-[-0.04em]">{step.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="grid gap-8 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <p className="font-serif text-2xl italic text-pine">Corporate contact</p>
            <h2 className="mt-3 text-4xl tracking-[-0.05em]">{corporateContact.name}</h2>
            <p className="mt-2 text-pine">{corporateContact.role}</p>
            <p className="mt-6 max-w-lg leading-relaxed text-pine">
              Write with the partnership you have in mind. Sponsorship information,
              including investment, is sent in reply rather than posted here.
            </p>
            <a href={sponsorshipMailto()} className={buttonClasses("primary", "mt-8")}>
              Request sponsorship information
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
