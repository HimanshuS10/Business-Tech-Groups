import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { sectionTitle } from "@/components/type";
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
          <p className="mx-auto mt-8 max-w-[720px] text-center text-sm leading-6 text-pine">
            Reaching out on behalf of a company?{" "}
            <Link
              href="/partner"
              className="font-medium text-ink underline decoration-ink/30 underline-offset-4"
            >
              See partnership opportunities
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}

