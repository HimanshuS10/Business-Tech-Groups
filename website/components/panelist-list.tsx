"use client";

import { useState } from "react";

export function PanelistList({
  people,
}: {
  people: readonly { name: string; role: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6 border-t border-ink/15">
      <h3>
        <button
          id="panelists-button"
          type="button"
          aria-expanded={open}
          aria-controls="panelists-panel"
          className="flex min-h-12 w-full cursor-pointer items-center justify-between gap-6 py-4 text-left text-base font-medium tracking-[-0.03em] text-ink"
          onClick={() => setOpen((current) => !current)}
        >
          Meet the panelists
          <span
            aria-hidden
            className="grid h-8 w-8 shrink-0 place-items-center border border-ink/15 text-xl leading-none text-pine"
          >
            {open ? "−" : "+"}
          </span>
        </button>
      </h3>
      <div id="panelists-panel" role="region" aria-labelledby="panelists-button" hidden={!open}>
        <ul className="grid gap-6 pb-2 sm:grid-cols-2">
          {people.map((person) => (
            <li key={person.name}>
              <p className="font-medium tracking-[-0.03em] text-ink">{person.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-pine">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
