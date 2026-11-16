import Link from "next/link";
import { Container } from "@/components/container";
import { sectionTitle } from "@/components/type";
import { clubEmail } from "@/data/site";
import { pageMetadata, socialShare } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact BTG | Business Technologies Guelph",
  description:
    "Connect with Business Technologies Guelph through our official social media channels and learn how to reach our corporate relations team.",
  path: "/contact",
  socialDescription: socialShare.contact.description,
  image: socialShare.contact,
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
            <h2 className={sectionTitle}>Email us</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-pine">
              Tell us what you&apos;re reaching out about and we&apos;ll get back to you.
            </p>
            <a
              href={`mailto:${clubEmail}`}
              className="mt-6 inline-block text-2xl font-medium tracking-[-0.03em] text-ink underline decoration-ink/30 underline-offset-[6px] transition-colors hover:decoration-ink md:text-3xl"
            >
              {clubEmail}
            </a>
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

