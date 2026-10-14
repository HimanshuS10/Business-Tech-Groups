import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { sectionTitle } from "@/components/type";
import { socials } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact BTG | Business Technologies Guelph",
  description:
    "Connect with Business Technologies Guelph through our official social media channels and learn how to reach our corporate relations team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream">
        <Container className="py-14 text-center md:py-16">
          <p className="text-xs font-medium tracking-[0.16em] text-pine">CONTACT</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.05em] text-ink md:text-5xl">
            Let&apos;s connect.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-pine md:text-lg md:leading-8">
            Have a question, want to get involved, or interested in working with BTG? We&apos;d love
            to hear from you.
          </p>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-14 md:py-16">
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className={sectionTitle}>Send us a message</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-pine">
              Tell us what you&apos;re reaching out about. Sending is turned off until BTG confirms
              where messages should go.
            </p>
          </div>
          <div className="mt-8">
            <ContactForm startedAt={0} />
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 lg:py-20">
          <h2 className="text-3xl font-medium leading-[1.08] tracking-[-0.05em] text-ink md:text-[2.5rem]">
            Looking for something specific?
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-9 lg:gap-5">
            <NavCard
              href="/partner"
              title="Partnerships"
              description="Interested in sponsorships or collaborating with BTG?"
              className="on-ink bg-ink text-cream hover:bg-[#314044]"
            />
            <NavCard
              href="/events"
              title="Upcoming Events"
              description="Explore upcoming events and opportunities to get involved."
              className="on-ink bg-pine text-cream hover:bg-[#4d6166]"
            />
            <NavCard
              href="/team"
              title="Meet the Team"
              description="Learn more about the students behind BTG."
              className="on-ink bg-sage text-white hover:bg-[#6d7d74]"
            />
            <NavCard
              href={socials.find((item) => item.name === "Instagram")?.href ?? ""}
              title="Stay Connected"
              description="Follow BTG for event updates and announcements."
              external
              className="bg-[#E2E8E1] text-ink hover:bg-[#d5ddd4]"
            />
          </ul>
        </Container>
      </section>
    </>
  );
}

function NavCard({
  href,
  title,
  description,
  className,
  external = false,
}: {
  href: string;
  title: string;
  description: string;
  className: string;
  external?: boolean;
}) {
  const classes = `group flex min-h-48 flex-col rounded-sm p-6 transition-colors duration-200 sm:min-h-52 lg:min-h-56 lg:p-8 ${className}`;
  const content = (
    <>
      <h3 className="text-2xl font-medium tracking-[-0.04em]">{title}</h3>
      <p className="mt-2 max-w-sm text-base leading-6">{description}</p>
      <svg
        aria-hidden
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="mt-auto pt-6 motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
      >
        <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );

  if (external) {
    return (
      <li>
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link href={href} className={classes}>
        {content}
      </Link>
    </li>
  );
}
