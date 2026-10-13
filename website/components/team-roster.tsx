import Image from "next/image";
import type { ExecutiveProfile } from "@/data/team";
import { mediaDay } from "@/data/team";

export function TeamRoster({ people }: { people: ExecutiveProfile[] }) {
  if (people.length === 0) {
    return (
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="font-serif text-5xl italic leading-none text-ink md:text-7xl">
            Coming soon
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pine">
            Leadership is holding team photography until after the{" "}
            <time dateTime={mediaDay.iso}>{mediaDay.label}</time> media day.
            Executive profiles will be published here once portraits are approved.
          </p>
        </div>
        <div className="border border-ink/10 bg-paper p-6 lg:col-span-5">
          <p className="text-sm text-pine">A published profile will include</p>
          <ul className="mt-4 space-y-3 text-lg tracking-[-0.04em]">
            <li className="border-b border-ink/10 pb-3">Name</li>
            <li className="border-b border-ink/10 pb-3">Role</li>
            <li>A short note on their focus</li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-pine">
            Personal phone numbers will not be published. Biographies stay off
            this page until the executive has approved them.
          </p>
        </div>
      </div>
    );
  }

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <li key={`${person.name}-${person.role}`} className="border border-ink/10 bg-paper">
          <div className="relative aspect-[4/5] bg-cream">
            {person.imageSrc ? (
              <Image
                src={person.imageSrc}
                alt={person.imageAlt ?? ""}
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-end p-5">
                <p className="font-serif text-3xl italic text-pine">Portrait forthcoming</p>
              </div>
            )}
          </div>
          <div className="p-5">
            <h2 className="text-2xl tracking-[-0.04em]">{person.name}</h2>
            <p className="mt-1 text-sm text-pine">{person.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-pine">{person.focus}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
