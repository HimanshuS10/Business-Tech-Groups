import { Container } from "@/components/container";
import { pageMetadata, socialShare } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Team | Business Technologies Guelph",
  description:
    "Meet the student leadership behind Business Technologies Guelph. Our full team is coming soon.",
  path: "/team",
  socialDescription: socialShare.team.description,
  image: socialShare.team,
});

export default function TeamPage() {
  return (
    <section className="bg-cream">
      <Container className="flex flex-col items-center py-24 text-center md:py-28 lg:py-32">
        <p className="text-xs font-medium tracking-[0.16em] text-pine">THE PEOPLE BEHIND BTG</p>
        <h1 className="mt-4 max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.05em] text-ink md:text-5xl">
          Meet the Team.
        </h1>
        <p className="mt-5 max-w-md text-base leading-7 text-pine">
          Our full team is coming soon.
        </p>
      </Container>
    </section>
  );
}
