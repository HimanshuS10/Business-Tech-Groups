import { AboutPreview } from "@/components/about-preview";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { UpcomingEvents } from "@/components/upcoming-events";
import { FaqList } from "@/components/faq-list";
import { HeroMosaic } from "@/components/hero-photos";
import { Spotlight } from "@/components/motion";
import { PartnershipsPreview } from "@/components/partnerships-preview";
import { eyebrow, sectionTitle } from "@/components/type";
import { faqs } from "@/data/faq";
import { upcomingEvents } from "@/data/events";
import { club } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Business Technologies Guelph | Where Business Meets Tech",
  description:
    "Discover Business Technologies Guelph (BTG), a student-led organization connecting University of Guelph students with emerging technology, industry professionals, and practical experiences.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="on-ink relative overflow-hidden bg-ink text-cream">
        <Spotlight />
        <Container className="relative grid items-center gap-10 py-12 md:py-14 lg:min-h-[calc(86vh-4.5rem)] lg:grid-cols-12 lg:gap-14 lg:py-12">
          <div className="lg:col-span-6">
            <p className="hero-rise font-serif text-xl italic text-cream/80 md:text-2xl">
              {club.university}
            </p>
            <h1 className="mt-4 text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              <span className="hero-word [animation-delay:100ms]">Where</span>{" "}
              <span className="hero-word [animation-delay:200ms]">Business</span>
              <span className="mt-1 block font-serif text-[1.05em] font-normal tracking-normal italic">
                <span className="hero-word relative [animation-delay:340ms]">
                  Meets Tech
                  <svg
                    aria-hidden
                    viewBox="0 0 300 24"
                    preserveAspectRatio="none"
                    fill="none"
                    className="pointer-events-none absolute -bottom-[0.2em] -left-[3%] h-[0.32em] w-[106%] text-[#9FC4A8]"
                  >
                    <path
                      className="hero-underline"
                      pathLength={1}
                      d="M4 15C60 6 150 3 296 9"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      className="hero-underline hero-underline-second"
                      pathLength={1}
                      d="M14 21C80 14 170 13 250 17"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </span>
              </span>
            </h1>
            <p className="hero-rise mt-6 max-w-md text-base [animation-delay:500ms] leading-7 text-cream/80 md:text-lg md:leading-8">
              Connecting ambitious students with industry professionals through
              hands-on experiences at the intersection of business and emerging
              technology.
            </p>
            <div className="hero-rise mt-8 flex flex-col gap-3 [animation-delay:620ms] sm:flex-row sm:gap-4">
              <ButtonLink href="/about" variant="inverse">
                Explore BTG
              </ButtonLink>
              <ButtonLink href="/partner" variant="inverseQuiet">
                Partner With Us
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-6">
            <HeroMosaic
              photos={[
                {
                  src: "/images/btg/btg-panel-discussion.webp",
                  alt: "Panelists speaking at the Smarter Than AI Panel",
                  priority: true,
                },
                {
                  src: "/images/btg/btg-networking-candid.webp",
                  alt: "Students talking after the Smarter Than AI Panel",
                  position: "object-[center_28%]",
                },
                {
                  src: "/images/btg/btg-panel-speakers.webp",
                  alt: "Speakers at the Smarter Than AI Panel",
                },
                {
                  src: "/images/btg/btg-student-group-event.webp",
                  alt: "Students at the Smarter Than AI Panel",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      <AboutPreview />

      <UpcomingEvents events={upcomingEvents} />

      <PartnershipsPreview />

      <section className="bg-paper">
        <Container className="grid items-start gap-8 py-14 md:py-16 lg:grid-cols-12 lg:gap-16 lg:py-20">
          <div data-reveal className="lg:col-span-5">
            <p className={eyebrow}>Questions</p>
            <h2 className={sectionTitle}>A few things worth knowing.</h2>
            <p className="mt-4 max-w-sm text-base leading-7 text-pine">
              Find out more about events, getting involved, and connecting with BTG.
            </p>
          </div>
          <div data-reveal className="delay-150 lg:col-span-7">
            <FaqList items={faqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
