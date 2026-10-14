import Image from "next/image";
import type { ExecutiveProfile } from "@/data/team";

const placeholderCount = 6;

const gridClass =
  "grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-11 lg:grid-cols-3";

function PersonMark() {
  return (
    <svg aria-hidden width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-sage">
      <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.5 32.5c1.6-6.2 5.8-9 11.5-9s9.9 2.8 11.5 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Portrait({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-[#E4E7E2]">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <PersonMark />
        </div>
      )}
    </div>
  );
}

function PlaceholderGrid() {
  return (
    <>
      <ul aria-hidden="true" className={gridClass}>
        {Array.from({ length: placeholderCount }, (_, index) => (
          <li key={index}>
            <Portrait alt="" />
            <div className="mt-4">
              <div className="h-3 w-2/3 rounded-sm bg-sage/35" />
              <div className="mt-2 h-2.5 w-2/5 rounded-sm bg-sage/20" />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-center text-sm tracking-[-0.02em] text-pine">
        2026–27 executive profiles coming soon.
      </p>
    </>
  );
}

export function TeamRoster({ people }: { people: readonly ExecutiveProfile[] }) {
  if (people.length === 0) return <PlaceholderGrid />;

  return (
    <ul className={gridClass}>
      {people.map((person) => (
        <li key={`${person.name}-${person.role}`}>
          <Portrait src={person.imageSrc} alt={person.imageAlt ?? person.name} />
          <h3 className="mt-4 text-xl font-medium tracking-[-0.04em] text-ink">{person.name}</h3>
          <p className="mt-1 text-sm text-pine">{person.role}</p>
          {person.biography ? (
            <p className="mt-3 text-sm leading-relaxed text-pine">{person.biography}</p>
          ) : null}
          {person.linkedIn ? (
            <a
              href={person.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
            >
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
