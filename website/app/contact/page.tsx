import type { Metadata } from "next";
import { buttonClasses } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { corporateContact, socials, sponsorshipMailto } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Business Technologies Guelph on Instagram, TikTok, and LinkedIn, or write to Corporate Relations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Official channels, and one corporate inbox."
        lede="Students and guests should follow BTG where the club actually posts. Companies should write to Corporate Relations. A general club email has not been published."
      />

      <section className="bg-cream">
        <Container className="py-20 md:py-28">
          <p className="font-serif text-2xl italic text-pine">Social</p>
          <h2 className="mt-3 text-4xl tracking-[-0.05em]">Where BTG posts</h2>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col justify-between border border-ink/10 bg-paper p-6 transition-colors duration-200 hover:border-ink md:min-h-56"
                >
                  <span className="text-sm text-pine">{social.handle}</span>
                  <span>
                    <span className="block text-3xl tracking-[-0.05em]">{social.name}</span>
                    <span className="mt-3 block text-sm text-pine">
                      Opens in a new tab
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="grid gap-10 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl italic text-pine">Companies</p>
            <h2 className="mt-3 text-4xl tracking-[-0.05em]">Corporate inquiries</h2>
            <p className="mt-5 leading-relaxed text-pine">
              Sponsorship, workshops, and Prompt & Pitch all start with the same
              person. There is no form on this site — write directly.
            </p>
          </div>
          <div className="on-ink bg-ink p-8 text-cream md:p-10 lg:col-span-7">
            <p className="text-sm text-cream/70">{corporateContact.role}</p>
            <p className="mt-2 text-4xl tracking-[-0.05em]">{corporateContact.name}</p>
            <a
              href={sponsorshipMailto()}
              className={buttonClasses("inverse", "mt-8")}
            >
              {corporateContact.email}
            </a>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/70">
              Use this address for partnership questions. It is not a general
              inbox for membership or event registration.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
