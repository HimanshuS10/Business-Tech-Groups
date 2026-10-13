import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { TeamRoster } from "@/components/team-roster";
import { socials } from "@/data/site";
import { executives, mediaDay } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "BTG executive profiles will be published after the October 24, 2026 media day.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="The people leading BTG."
        lede={`Executive portraits will be published after the ${mediaDay.label} media day, once photography is approved.`}
      />
      <section className="bg-cream">
        <Container className="py-20 md:py-28">
          <TeamRoster people={executives} />
          <div className="mt-16 border-t border-ink/10 pt-10">
            <p className="font-serif text-2xl italic text-pine">Until then</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-pine">
              Club news is on the official channels. Corporate questions go to
              the contact page, not to personal numbers.
            </p>
            <ul className="mt-6 flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
                  >
                    {social.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
              <li>
                <Link href="/contact" className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
