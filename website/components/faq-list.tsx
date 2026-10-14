"use client";

import Link from "next/link";
import { useState } from "react";
import type { FaqItem, FaqPart } from "@/data/faq";

export function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  if (items.length === 0) {
    return <p className="text-pine">Questions will be added as BTG confirms them.</p>;
  }

  return (
    <div className="border-t border-ink/15">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question} className="border-b border-ink/15">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex min-h-12 w-full cursor-pointer items-center justify-between gap-6 py-4 text-left text-base font-medium tracking-[-0.03em] text-ink"
                onClick={() => setOpen(isOpen ? null : index)}
              >
                {item.question}
                <span
                  aria-hidden
                  className="grid h-8 w-8 shrink-0 place-items-center border border-ink/15 text-xl leading-none text-pine"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p className="max-w-xl pb-5 pr-12 text-base leading-7 text-pine">
                {item.answer.map((part) => (
                  <AnswerPart key={`${item.question}-${part.text}`} part={part} />
                ))}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AnswerPart({ part }: { part: FaqPart }) {
  if (!part.href) return part.text;

  const className =
    "text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink";

  if (part.external) {
    return (
      <a href={part.href} target="_blank" rel="noopener noreferrer" className={className}>
        {part.text}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={part.href} className={className}>
      {part.text}
    </Link>
  );
}
