import { AboutPreview } from "@/components/about-preview";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { UpcomingEvents } from "@/components/upcoming-events";
import { FaqList } from "@/components/faq-list";
import { HeroPhotos } from "@/components/hero-photos";
import { ImpactPreview } from "@/components/impact-preview";
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
      <section className="on-ink bg-ink text-cream">
        <Container className="grid items-center gap-10 py-12 md:py-14 lg:min-h-[calc(86vh-4.5rem)] lg:grid-cols-12 lg:gap-14 lg:py-12">
          <div className="lg:col-span-6">
            <p className="font-serif text-xl italic text-cream/80 md:text-2xl">
              {club.university}
            </p>
            <h1 className="mt-4 text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Where Business
              <span className="mt-1 block font-serif text-[1.05em] font-normal tracking-normal italic">
                Meets Tech
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
            <HeroPhotos
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

      <ImpactPreview />

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
