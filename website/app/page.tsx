import { AboutPreview } from "@/components/about-preview";
import { JsonLd } from "@/components/json-ld";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { UpcomingEvents } from "@/components/upcoming-events";
import { FaqList } from "@/components/faq-list";
import { HeroMosaic } from "@/components/hero-photos";
import { PartnershipsPreview } from "@/components/partnerships-preview";
import { eyebrow, sectionTitle } from "@/components/type";
import { faqs } from "@/data/faq";
import { upcomingEvents } from "@/data/events";
import { club } from "@/data/site";
import { pageMetadata, socialShare } from "@/lib/seo";
import { faqGraph } from "@/lib/structured-data";
import { siteOrigin } from "@/lib/site-url";

export const metadata = pageMetadata({
  title: "Business Technologies Guelph | Where Business Meets Tech",
  description:
    "Discover Business Technologies Guelph (BTG), a student-led organization connecting University of Guelph students with emerging technology, industry professionals, and practical experiences.",
  path: "/",
  socialDescription: socialShare.home.description,
  image: socialShare.home,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqGraph(siteOrigin()?.origin ?? null, faqs)} />
      <section className="on-ink bg-ink text-cream">
        <Container className="grid items-center gap-10 py-12 md:py-14 lg:min-h-[calc(86vh-4.5rem)] lg:grid-cols-12 lg:gap-14 lg:py-12">
          <div className="lg:col-span-6">
            <p className="font-serif text-xl italic text-cream/80 md:text-2xl">
              {club.university}
            </p>
            <h1 className="mt-4 text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Where Business
              <span className="mt-1 block font-serif text-[1.05em] font-normal tracking-normal italic">
                <span className="relative inline-block">
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
            <p className="mt-6 max-w-md text-base leading-7 text-cream/80 md:text-lg md:leading-8">
              Connecting ambitious students with industry professionals through
              hands-on experiences at the intersection of business and emerging
              technology.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
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
          <div className="lg:col-span-5">
            <p className={eyebrow}>Questions</p>
            <h2 className={sectionTitle}>A few things worth knowing.</h2>
            <p className="mt-4 max-w-sm text-base leading-7 text-pine">
              Find out more about events, getting involved, and connecting with BTG.
            </p>
          </div>
          <div className="lg:col-span-7">
            <FaqList items={faqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
