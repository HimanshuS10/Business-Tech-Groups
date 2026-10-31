import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

const opportunities = [
  "Club Sponsorship",
  "Event Sponsorship",
  "Industry-Led Workshops",
] as const;

export function PartnershipsPreview() {
  return (
    <section className="bg-cream">
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <p className="text-sm font-medium tracking-[-0.03em] text-pine">Partner With BTG</p>
            <h2 className="mt-3 max-w-lg text-3xl font-medium leading-[1.08] tracking-[-0.05em] text-ink md:text-[2.75rem]">
              Connect with the next generation of{" "}
              <span className="font-serif font-normal tracking-normal italic">
                business and tech leaders.
              </span>
            </h2>
            <ButtonLink href="/partner" className="mt-8">
              Explore Partnerships
            </ButtonLink>
          </div>
          <div data-reveal className="delay-150">
            <p className="max-w-md text-base leading-7 text-pine">
              Work with BTG to connect with ambitious University of Guelph students
              through industry events, hands-on workshops, and meaningful collaborations.
            </p>
            <ul className="mt-8 border-t border-ink/15">
              {opportunities.map((item) => (
                <li
                  key={item}
                  className="border-b border-ink/15 py-4 text-lg tracking-[-0.03em] text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
