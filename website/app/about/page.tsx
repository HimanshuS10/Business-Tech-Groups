import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { eyebrow, sectionTitle } from "@/components/type";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About BTG | Business Technologies Guelph",
  description:
    "Learn about Business Technologies Guelph, our mission, vision, and commitment to connecting business, technology, and student innovation at the University of Guelph.",
  path: "/about",
});

/** Set `src` when an approved event photo is ready. Crop uses object-cover. */
function AboutHeroPhoto({
  src,
  alt,
  position = "object-center",
  className = "aspect-[5/4]",
}: {
  src?: string;
  alt: string;
  position?: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-sm bg-sage/20 ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 36rem, 100vw"
          className={`object-cover ${position}`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-pine">
          <svg aria-hidden width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="3.5" y="5.5" width="21" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
            <circle cx="10" cy="11" r="1.6" fill="currentColor" />
            <path d="M6.5 19.5 11.5 14.5 15 17.5 18.5 13.5 21.5 16.5" stroke="currentColor" strokeWidth="1.25" />
          </svg>
          <span className="text-sm tracking-[-0.02em]">BTG event photo</span>
        </div>
      )}
    </div>
  );
}

/** Set `src` when an approved Smarter Than AI photograph is ready. Crop uses object-cover. */
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
    <div className="relative aspect-[5/4] overflow-hidden rounded-sm bg-sage/20">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 36rem, 100vw"
          className={`object-cover ${position}`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-pine">
          <svg aria-hidden width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="3.5" y="5.5" width="21" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
            <circle cx="10" cy="11" r="1.6" fill="currentColor" />
            <path d="M6.5 19.5 11.5 14.5 15 17.5 18.5 13.5 21.5 16.5" stroke="currentColor" strokeWidth="1.25" />
          </svg>
          <span className="text-sm tracking-[-0.02em]">Smarter Than AI event photo</span>
        </div>
      )}
    </div>
  );
}

const practices = [
  {
    title: "Industry Connections",
    body: "Engage with professionals and companies through networking events, industry discussions, and opportunities to learn how technology is being used in business.",
  },
  {
    title: "Hands-On Learning",
    body: "Develop practical skills through technology-focused workshops, applied learning opportunities, and exposure to tools shaping modern business.",
  },
  {
    title: "Innovation & Collaboration",
    body: "Explore real business challenges, develop technology-enabled solutions, and collaborate with other students.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <Container className="grid items-center gap-10 py-14 md:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <div>
            <p className={eyebrow}>About BTG</p>
            <h1 className="mt-4 max-w-xl text-pretty text-4xl font-medium leading-[1.08] tracking-[-0.05em] text-ink md:text-balance md:text-5xl">
              Built to bridge business and technology.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-pine md:text-lg md:leading-8">
              Business Technologies Guelph is a student-led organization at the University of
              Guelph, connecting students with emerging technologies, industry professionals, and
              opportunities to gain practical experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/events"
                className="inline-flex min-h-11 items-center justify-center bg-ink px-5 text-sm font-medium tracking-[-0.03em] text-paper transition-colors duration-200 hover:bg-pine"
              >
                Explore Events
              </Link>
              <ButtonLink href="/contact" variant="secondary">
                Contact BTG
              </ButtonLink>
            </div>
          </div>
          <AboutHeroPhoto
            src="/images/btg/btg-student-group.webp"
            alt="BTG students together at the Smarter Than AI Panel"
          />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="grid items-stretch gap-4 py-14 md:grid-cols-2 md:gap-5 md:py-16 lg:py-20">
          <article className="flex h-full flex-col rounded-sm bg-ink p-8 text-cream md:p-10">
            <p className="text-xs font-medium tracking-[0.16em] text-cream/80">OUR MISSION</p>
            <h2 className="mt-4 max-w-sm text-3xl font-medium leading-[1.12] tracking-[-0.05em] lg:text-4xl">
              Empowering the next generation.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-cream">
              To educate and unite driven, future-focused students who want to develop practical
              skills with the technologies shaping modern business.
            </p>
          </article>
          <article className="flex h-full flex-col rounded-sm bg-sage/40 p-8 text-ink md:p-10">
            <p className="text-xs font-medium tracking-[0.16em] text-pine">OUR VISION</p>
            <h2 className="mt-4 max-w-sm text-3xl font-medium leading-[1.12] tracking-[-0.05em] lg:text-4xl">
              Innovation with purpose.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7">
              A hub of student innovation at the University of Guelph, where future leaders
              collaborate to drive the ethical and impactful integration of emerging technologies
              in the workplace.
            </p>
          </article>
        </Container>
      </section>

      <section className="on-ink bg-ink text-cream">
        <Container className="py-14 md:py-16 lg:py-[4.5rem]">
          <p className="font-serif text-xl italic leading-none text-cream">What We Do</p>
          <h2 className={`${sectionTitle} max-w-md text-cream`}>Turning ideas into experience.</h2>
          <ol className="mt-6 border-t border-cream/25 md:mt-8">
            {practices.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-3 border-b border-cream/25 py-6 md:grid-cols-12 md:items-baseline md:gap-8 md:py-8"
              >
                <p className="text-sm font-medium tracking-[-0.02em] text-cream/80 md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-2xl font-medium tracking-[-0.04em] text-cream md:col-span-4">
                  {item.title}
                </h3>
                <p className="max-w-xl text-base leading-7 text-[#CBD6CD] md:col-span-6 md:col-start-7">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="grid items-center gap-8 py-12 md:py-14 lg:grid-cols-2 lg:gap-14 lg:py-16">
          <ActionPhoto
            src="/images/btg/btg-panel-audience.webp"
            alt="Audience listening at the Smarter Than AI Panel"
            position="object-[center_38%]"
          />
          <div>
            <p className="text-sm font-medium tracking-[-0.02em] text-sage">BTG in Action</p>
            <h2 className="mt-3 max-w-md text-3xl font-medium leading-[1.08] tracking-[-0.05em] text-ink md:text-4xl">
              Smarter Than AI Panel
            </h2>
            <p className="mt-3 text-sm font-medium tracking-[-0.02em] text-pine">March 3, 2026</p>
            <p className="mt-4 max-w-md text-base leading-7 text-pine">
              BTG&apos;s first event brought together more than 60 attendees and four industry
              panelists to discuss how emerging technologies are influencing business.
            </p>
            <Link
              href="/events#smarter-than-ai"
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium tracking-[-0.03em] text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-200 hover:decoration-ink"
            >
              Explore the Event
              <svg aria-hidden width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center lg:py-[4.5rem]">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium leading-[1.08] tracking-[-0.05em] text-ink md:text-[2.5rem]">
              Be part of what&apos;s next.
            </h2>
            <p className="mt-3 max-w-md text-base leading-7 text-pine">
              Explore upcoming events or connect with BTG to discuss partnership opportunities.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href="/events" variant="primary">
              Explore Events
            </ButtonLink>
            <ButtonLink href="/partner" variant="secondary">
              Partner With Us
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
