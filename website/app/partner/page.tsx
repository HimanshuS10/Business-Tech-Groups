import Image from "next/image";
import { buttonClasses } from "@/components/button-link";
import { Container } from "@/components/container";
import { eyebrow, sectionTitle, sectionY } from "@/components/type";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Partner With Us | Business Technologies Guelph",
  description:
    "Explore sponsorships, industry collaborations, and partnership opportunities with Business Technologies Guelph at the University of Guelph.",
  path: "/partner",
});

/** The one partnership action on this page. Every button points here. */
const partnerEmail = "mailto:lsharp03@uoguelph.ca?subject=BTG%20Partnership%20Inquiry";

const partnerBenefits = [
  {
    title: "Connect with students",
    body: "Meet University of Guelph students interested in business, technology, and emerging careers.",
  },
  {
    title: "Share your expertise",
    body: "Bring real-world perspective into student events, discussions, and workshops.",
  },
  {
    title: "Support practical learning",
    body: "Help students tackle business problems with technology-enabled solutions.",
  },
];

const waysToPartner = [
  {
    title: "Sponsorship",
    body: "Support BTG for the full year, back a single event, or contribute through a flexible arrangement.",
  },
  {
    title: "Industry Workshops",
    body: "Run a session on the technology and business topics your organization knows best.",
  },
  {
    title: "Prompt & Pitch",
    body: "Our biggest event of the semester. Get involved with BTG's vibe coding case competition.",
    featured: true,
  },
];

function EmailButton({ variant, className }: { variant: "primary" | "inverse"; className?: string }) {
  return (
    <a href={partnerEmail} className={buttonClasses(variant, `gap-2 ${className ?? ""}`)}>
      Email Corporate Relations
      <svg aria-hidden width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path
          d="M4.5 11.5 11.5 4.5M7 4.5h4.5V9"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export default function PartnerPage() {
  return (
    <>
      <section className="on-ink bg-ink text-cream">
        <Container className="grid items-center gap-10 py-14 md:py-16 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)] lg:gap-16 lg:py-20">
          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-cream">PARTNER WITH BTG</p>
            <h1 className="mt-4 max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.05em] text-cream md:text-5xl">
              Connecting industry with
              <span className="mt-1 block font-serif text-[1.08em] font-normal tracking-normal italic">
                tomorrow&apos;s talent.
              </span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-cream md:text-lg md:leading-8">
              Work with BTG to connect with University of Guelph students interested in business,
              technology, and the opportunities emerging where they meet.
            </p>
            <EmailButton variant="inverse" className="mt-8 w-full sm:w-auto" />
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-sm bg-pine">
            <Image
              src="/images/btg/btg-industry-guests.webp"
              alt="Industry guests with BTG at the Smarter Than AI Panel"
              fill
              sizes="(min-width: 1024px) 32rem, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className={sectionY}>
          <div className="max-w-2xl">
            <p className={eyebrow}>Why Partner With BTG?</p>
            <h2 className={sectionTitle}>Partnerships that create opportunities.</h2>
          </div>
          <ul className="mt-8 grid gap-8 border-t border-ink/15 pt-8 md:grid-cols-3 md:gap-10">
            {partnerBenefits.map((benefit) => (
              <li key={benefit.title}>
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-ink">{benefit.title}</h3>
                <p className="mt-2 text-base leading-7 text-pine">{benefit.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className={sectionY}>
          <div className="max-w-2xl">
            <p className={eyebrow}>Ways to Partner</p>
            <h2 className={sectionTitle}>Find the right fit.</h2>
            <p className="mt-4 max-w-md text-base leading-7 text-pine">
              Not sure which option suits your organization? Reach out and we&apos;ll figure it out
              together.
            </p>
          </div>
          <ol className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
            {waysToPartner.map((option, index) => {
              const featured = "featured" in option;
              return (
                <li
                  key={option.title}
                  className={`rounded-sm p-6 lg:p-7 ${
                    featured ? "on-ink bg-ink text-cream" : "border border-ink/10 bg-paper"
                  }`}
                >
                  <div className="flex min-h-7 items-center justify-between gap-3">
                    <p className={`text-sm tracking-[0.08em] ${featured ? "text-cream/70" : "text-sage"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    {featured ? (
                      <span className="rounded-full bg-cream px-2.5 py-1 text-xs font-semibold tracking-[0.04em] text-ink uppercase">
                        Flagship Event
                      </span>
                    ) : null}
                  </div>
                  <h3
                    className={`mt-4 text-xl font-semibold tracking-[-0.04em] ${
                      featured ? "text-cream" : "text-ink"
                    }`}
                  >
                    {option.title}
                  </h3>
                  <p className={`mt-2 text-base leading-7 ${featured ? "text-[#CBD6CD]" : "text-pine"}`}>
                    {option.body}
                  </p>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="flex flex-col gap-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium leading-[1.1] tracking-[-0.05em] text-ink md:text-4xl">
              Let&apos;s work together.
            </h2>
            <p className="mt-3 text-base leading-7 text-pine">
              Email our Corporate Relations team to start the conversation.
            </p>
            <p className="mt-4 text-sm text-pine">Liam Sharpe · Director of Corporate Relations</p>
          </div>
          <EmailButton variant="primary" className="w-full sm:w-auto lg:shrink-0" />
        </Container>
      </section>
    </>
  );
}
