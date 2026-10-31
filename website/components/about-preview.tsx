import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CountUp } from "@/components/motion";
import { pastEvents } from "@/data/events";
import { verifiedImpact } from "@/data/site";

const pillars = [
  {
    index: "01",
    title: "Learn",
    body: "Build practical skills through hands-on experiences with emerging technologies.",
    surface: "bg-ink text-cream",
  },
  {
    index: "02",
    title: "Connect",
    body: "Build meaningful relationships with industry professionals, companies, and peers.",
    surface: "bg-pine text-cream",
  },
  {
    index: "03",
    title: "Innovate",
    body: "Apply business thinking and new technologies to solve real-world challenges.",
    surface: "bg-sage text-paper",
  },
] as const;

const stats = [
  { value: "150+", label: "People at our events" },
  { value: verifiedImpact[1].value, label: verifiedImpact[1].label },
  { value: String(pastEvents.length), label: "Events hosted" },
];

export function AboutPreview() {
  return (
    <section className="bg-cream">
      <Container className="py-14 md:py-16">
        <div data-reveal>
          <p className="text-sm font-medium tracking-[-0.03em] text-pine">About BTG</p>
          <h2 className="mt-3 max-w-md text-3xl font-medium leading-[1.08] tracking-[-0.05em] text-ink md:text-[2.75rem]">
            Where ideas meet{" "}
            <span className="font-serif font-normal tracking-normal italic">opportunity.</span>
          </h2>
        </div>

        <ul className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <li key={pillar.title} data-reveal style={{ transitionDelay: `${index * 110}ms` }}>
              <article
                className={`flex flex-col justify-between rounded-md p-5 md:h-[240px] md:p-6 lg:h-[260px] ${pillar.surface}`}
              >
                <p className="text-sm tracking-[-0.02em]">{pillar.index}</p>
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed">{pillar.body}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <dl data-reveal className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/15 pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-4xl font-semibold tracking-[-0.05em] text-ink md:text-6xl">
                <CountUp value={stat.value} />
              </dd>
              <dd className="mt-2 text-sm leading-snug text-pine">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <ButtonLink href="/about" className="mt-8 gap-2">
          Learn More About BTG
          <svg aria-hidden width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M4.5 11.5 11.5 4.5M7 4.5h4.5V9"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonLink>
      </Container>
    </section>
  );
}
