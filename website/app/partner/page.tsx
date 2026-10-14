import Image from "next/image";
import { ButtonLink, buttonClasses } from "@/components/button-link";
import { Container } from "@/components/container";
import { eyebrow, sectionTitle, sectionY } from "@/components/type";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Partner With Us | Business Technologies Guelph",
  description:
    "Explore sponsorships, industry collaborations, and partnership opportunities with Business Technologies Guelph at the University of Guelph.",
  path: "/partner",
});

const partnershipOptions = [
  {
    number: "01",
    title: "Club Sponsorship",
    body: "Support BTG programming throughout the year and build an ongoing relationship with the club.",
    href: "mailto:lsharp03@uoguelph.ca?subject=BTG%20Club%20Sponsorship%20Inquiry",
  },
  {
    number: "02",
    title: "Event Sponsorship",
    body: "Collaborate on a specific BTG event, workshop, or competition.",
    href: "mailto:lsharp03@uoguelph.ca?subject=BTG%20Event%20Sponsorship%20Inquiry",
  },
  {
    number: "03",
    title: "Supporting Sponsorship",
    body: "Contribute to student programming through a more flexible sponsorship arrangement.",
    href: "mailto:lsharp03@uoguelph.ca?subject=BTG%20Supporting%20Sponsorship%20Inquiry",
  },
];

const partnerBenefits = [
  {
    number: "01",
    title: "Connect with students",
    body: "Engage with University of Guelph students interested in business, technology, and emerging career opportunities.",
  },
  {
    number: "02",
    title: "Share industry expertise",
    body: "Bring real-world perspectives into student events, discussions, and technology-focused workshops.",
  },
  {
    number: "03",
    title: "Support practical learning",
    body: "Contribute to experiences where students explore business challenges and develop technology-enabled solutions.",
  },
];

/** Set `src` when an approved event photograph is ready. Crop uses object-cover. */
function PartnerHeroPhoto({
  src,
  alt,
  position = "object-center",
}: {
  src?: string;
  alt: string;
  position?: string;
}) {
  return (
    <div className="relative aspect-[5/4] overflow-hidden rounded-sm bg-pine">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 32rem, 100vw"
          className={`object-cover ${position}`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-cream">
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

/** Set `src` when an approved event photograph is ready. Crop uses object-cover. */
function ActionPhoto({
  src,
  alt,
  position = "object-center",
}: {
  src?: string;
  alt: string;
  position?: string;
}) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sage/20">
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

export default function PartnerPage() {
  return (
    <>
      <section className="on-ink bg-ink text-cream">
        <Container className="grid items-center gap-10 py-14 md:py-16 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)] lg:gap-16 lg:py-20">
          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-cream">Partner With BTG</p>
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
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#partnership-opportunities" variant="inverse" className="w-full sm:w-auto">
                Explore Opportunities
              </ButtonLink>
              <a
                href="mailto:lsharp03@uoguelph.ca?subject=BTG%20Partnership%20Inquiry"
                className={buttonClasses("inverseQuiet", "w-full sm:w-auto")}
              >
                Get in Touch
              </a>
            </div>
          </div>
          <PartnerHeroPhoto
            src="/images/btg/btg-industry-guests.webp"
            alt="Industry guests with BTG at the Smarter Than AI Panel"
          />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className={sectionY}>
          <div className="max-w-2xl">
            <p className={eyebrow}>Why Partner With BTG?</p>
            <h2 className={sectionTitle}>Partnerships that create opportunities.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-pine">
              Work with BTG to engage students, contribute industry knowledge, and support practical
              experiences at the intersection of business and technology.
            </p>
          </div>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {partnerBenefits.map((benefit, index) => (
              <li
                key={benefit.title}
                className={`on-ink flex flex-col rounded-md p-7 text-cream lg:min-h-[18rem] lg:justify-between lg:p-8 ${
                  ["bg-ink", "bg-pine", "bg-sage"][index]
                }`}
              >
                <p className="text-sm tracking-[0.08em] text-white">{benefit.number}</p>
                <div className="mt-8 lg:mt-0">
                  <h3 className="text-xl font-semibold leading-[1.2] tracking-[-0.04em] text-cream">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white">{benefit.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="partnership-opportunities" className="scroll-mt-28 bg-cream">
        <Container className="py-14 md:py-16 lg:py-[4.5rem]">
          <div className="max-w-2xl">
            <p className={eyebrow}>Partnership Opportunities</p>
            <h2 className={sectionTitle}>Find the right way to collaborate.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-pine">
              Explore different ways to support BTG and engage with students at the University of
              Guelph.
            </p>
          </div>
          <ul className="mt-8 flex flex-col gap-4">
            {partnershipOptions.map((option) => (
              <li key={option.title}>
                <a
                  href={option.href}
                  className="group grid cursor-pointer grid-cols-[2.25rem_minmax(0,1fr)_auto] items-start gap-x-4 rounded-sm border border-ink/10 bg-paper px-6 py-6 text-ink transition-colors hover:border-ink/20 hover:bg-ink/[0.03] md:gap-x-6 md:px-8 lg:grid-cols-[2.5rem_14rem_minmax(0,1fr)_auto] lg:items-center lg:py-7"
                >
                  <span className="mt-1 text-sm tracking-[0.08em] text-sage lg:mt-0">{option.number}</span>
                  <span className="min-w-0 lg:contents">
                    <h3 className="text-lg font-semibold leading-snug tracking-[-0.04em] text-ink">
                      {option.title}
                    </h3>
                    <span className="mt-1 block text-sm leading-6 text-pine lg:mt-0">{option.body}</span>
                  </span>
                  <svg
                    aria-hidden
                    className="mt-1.5 text-sage motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-focus-visible:translate-x-0.5 motion-safe:group-focus-visible:-translate-y-0.5 lg:mt-0"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4.5 11.5 11.5 4.5M7 4.5h4.5V9"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${sectionY}`}>
          <ActionPhoto
            src="/images/btg/btg-networking-candid.webp"
            alt="Students talking at the Smarter Than AI Panel"
            position="object-[center_30%]"
          />
          <div>
            <p className={eyebrow}>Partnerships in Action</p>
            <h2 className={sectionTitle}>Beyond sponsorship.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-pine">
              Companies can contribute more than financial support. BTG welcomes opportunities for
              industry professionals to share their experience, participate in student programming,
              and collaborate on practical learning activities.
            </p>
            <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              <article className="py-6">
                <h3 className="text-xl font-medium tracking-[-0.04em] text-ink">Industry-led workshops</h3>
                <p className="mt-3 text-base leading-7 text-pine">
                  Explore technology and business topics through sessions shaped around an
                  organization&apos;s expertise.
                </p>
              </article>
              <article className="py-6">
                <h3 className="text-xl font-medium tracking-[-0.04em] text-ink">Prompt & Pitch</h3>
                <p className="mt-2 text-sm text-sage">November 21, 2026</p>
                <p className="mt-3 text-base leading-7 text-pine">
                  An upcoming AI-assisted business competition where students develop solutions and
                  present them to industry judges.
                </p>
              </article>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="flex flex-col gap-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium leading-[1.1] tracking-[-0.05em] text-ink md:text-4xl">
              Let&apos;s work together.
            </h2>
            <p className="mt-3 text-base leading-7 text-pine">
              Interested in partnering with BTG? Get in touch to discuss opportunities for your
              organization.
            </p>
            <p className="mt-4 text-sm text-pine">Liam Sharpe · Director of Corporate Relations</p>
          </div>
          <a
            href="mailto:lsharp03@uoguelph.ca?subject=BTG%20Partnership%20Inquiry"
            className={buttonClasses("primary", "w-full gap-2 sm:w-auto lg:shrink-0")}
          >
            Start a Conversation
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
        </Container>
      </section>
    </>
  );
}
