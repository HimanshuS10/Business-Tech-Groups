import { Container } from "@/components/container";

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="on-ink bg-ink text-cream">
      <Container className="py-16 md:py-24">
        <p className="font-serif text-2xl italic text-cream/85">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl leading-[1.02] tracking-[-0.05em] md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
          {lede}
        </p>
      </Container>
    </section>
  );
}
