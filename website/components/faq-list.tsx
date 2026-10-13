import type { FaqItem } from "@/data/faq";

export function FaqList({ items }: { items: FaqItem[] }) {
  if (items.length === 0) {
    return <p className="text-pine">Questions will be added as BTG confirms them.</p>;
  }

  return (
    <div className="border-y border-ink/15">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-ink/15 last:border-b-0">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-lg tracking-[-0.04em]">
            {item.question}
            <span
              aria-hidden
              className="grid h-8 w-8 shrink-0 place-items-center border border-ink/15 text-xl leading-none text-pine group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-6 pr-12 leading-relaxed text-pine">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
