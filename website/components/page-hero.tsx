import { Container } from "@/components/container";
import { eyebrowOnInk, sectionY } from "@/components/type";

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
      <Container className={sectionY}>
        <p className={eyebrowOnInk}>{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.05em] md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-cream/80 md:text-lg">
          {lede}
        </p>
      </Container>
    </section>
  );
}
