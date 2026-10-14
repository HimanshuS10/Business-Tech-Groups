import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";

/** Set `src` when an approved Smarter Than AI photograph is ready. Crop uses object-cover. */
function ImpactPhoto({
  src,
  alt,
  position = "object-center",
}: {
  src?: string;
  alt: string;
  position?: string;
}) {
  return (
    <div className="relative aspect-[5/4] overflow-hidden rounded-sm bg-sage/20">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 34rem, 100vw"
          className={`object-cover ${position}`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-pine">
          <svg aria-hidden width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="3.5" y="5.5" width="21" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
            <circle cx="10" cy="11" r="1.6" fill="currentColor" />
            <path d="M6.5 19.5 11.5 14.5 15 17.5 18.5 13.5 21.5 16.5" stroke="currentColor" strokeWidth="1.25" />
          </svg>
          <span className="text-sm tracking-[-0.02em]">BTG event photograph</span>
        </div>
      )}
    </div>
  );
}

export function ImpactPreview() {
  return (
    <section className="border-b border-ink/10 bg-cream">
      <Container className="grid items-center gap-8 py-12 md:py-16 lg:grid-cols-2 lg:gap-14">
        <ImpactPhoto
          src="/images/btg/btg-panel-speakers.webp"
          alt="Industry panelists seated at the Smarter Than AI Panel"
          position="object-[center_32%]"
        />
        <div>
          <p className="text-sm font-medium tracking-[-0.03em] text-pine">BTG in Action</p>
          <h2 className="mt-3 text-3xl font-medium leading-[1.08] tracking-[-0.05em] text-ink md:text-4xl">
            Smarter Than AI Panel
          </h2>
          <p className="mt-3 text-sm text-pine">March 3, 2026</p>
          <p className="mt-4 max-w-md text-base leading-7 text-pine">
            Our first event brought together more than 60 attendees and four industry panelists to
            discuss AI and its role in business.
          </p>
          <Link
            href="/events#smarter-than-ai"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-[-0.03em] text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-200 hover:decoration-ink"
          >
            Explore Past Events
          </Link>
        </div>
      </Container>
    </section>
  );
}
