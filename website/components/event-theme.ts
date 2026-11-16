/**
 * Look of the newer event dialog parts: the timeline, the day schedule and the
 * "How it works" style sections. Change this one word to switch the look:
 *
 * - "cream": warm cream bands with white rows (closest to the event recap)
 * - "ink":   a dark ink band like the home hero and footer, mint highlights
 * - "sage":  a soft sage panel with a step line and dots
 */
export const eventTheme: EventTheme = "cream";

export type EventTheme = "cream" | "ink" | "sage";

type ScheduleLook = {
  /** Section band behind the list. */
  section: string;
  heading: string;
  intro: string;
  list: string;
  row: string;
  when: string;
  whenDone: string;
  title: string;
  titleDone: string;
  detail: string;
  now: string;
  nowDot: string;
  done: string;
  /** Step dots; only the "sage" look draws them (its list draws the line). */
  dot?: string;
  dotNow?: string;
  dotDone?: string;
};

type DetailsLook = {
  box: string;
  heading: string;
  text: string;
  list: string;
};

export const scheduleLooks: Record<EventTheme, ScheduleLook> = {
  cream: {
    section: "border-t border-ink/10 bg-cream/60 px-5 py-8 md:px-8 md:py-10",
    heading: "text-sm font-semibold tracking-[0.06em] text-ink uppercase",
    intro: "mt-2 text-base leading-7 text-pine",
    list: "mt-5 grid gap-2",
    row: "grid gap-1 rounded-sm border border-ink/10 bg-paper px-4 py-3 sm:grid-cols-[9.5rem_1fr] sm:gap-5",
    when: "text-sm font-semibold tracking-[-0.02em] text-ink sm:pt-0.5",
    whenDone: "text-sm font-semibold tracking-[-0.02em] text-pine/70 sm:pt-0.5",
    title: "text-base font-medium tracking-[-0.03em] text-ink",
    titleDone: "text-base font-medium tracking-[-0.03em] text-pine",
    detail: "mt-0.5 text-sm leading-6 text-pine",
    now: "inline-flex items-center gap-1.5 rounded-full bg-ink px-2.5 py-0.5 text-xs font-medium tracking-[-0.01em] text-cream",
    nowDot: "h-1.5 w-1.5 rounded-full bg-[#9FC4A8]",
    done: "rounded-full border border-ink/15 bg-cream px-2.5 py-0.5 text-xs font-medium tracking-[-0.01em] text-pine",
  },
  ink: {
    section: "on-ink border-t border-ink bg-ink px-5 py-8 text-cream md:px-8 md:py-10",
    heading: "text-sm font-semibold tracking-[0.06em] text-cream uppercase",
    intro: "mt-2 text-base leading-7 text-[#CBD6CD]",
    list: "mt-5 grid border-t border-[#4A5C58]",
    row: "grid gap-1 border-b border-[#4A5C58] py-4 sm:grid-cols-[10rem_1fr] sm:gap-6",
    when: "font-serif text-2xl leading-none italic text-[#9FC4A8]",
    whenDone: "font-serif text-2xl leading-none italic text-cream/40",
    title: "text-base font-medium tracking-[-0.03em] text-cream",
    titleDone: "text-base font-medium tracking-[-0.03em] text-cream/55",
    detail: "mt-0.5 text-sm leading-6 text-[#CBD6CD]",
    now: "inline-flex items-center gap-1.5 rounded-full bg-[#9FC4A8] px-2.5 py-0.5 text-xs font-semibold tracking-[-0.01em] text-ink",
    nowDot: "h-1.5 w-1.5 rounded-full bg-ink",
    done: "rounded-full border border-cream/25 px-2.5 py-0.5 text-xs font-medium tracking-[-0.01em] text-cream/60",
  },
  sage: {
    section: "border-t border-ink/10 bg-[#E4E7E2] px-5 py-8 md:px-8 md:py-10",
    heading: "text-sm font-semibold tracking-[0.06em] text-ink uppercase",
    intro: "mt-2 text-base leading-7 text-pine",
    list: "relative mt-6 grid gap-6 pl-8 before:absolute before:top-2 before:bottom-2 before:left-[0.6875rem] before:w-px before:bg-sage/40",
    row: "relative grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-5",
    when: "text-xs font-semibold tracking-[0.08em] text-sage uppercase sm:pt-1",
    whenDone: "text-xs font-semibold tracking-[0.08em] text-sage/60 uppercase sm:pt-1",
    title: "text-base font-semibold tracking-[-0.03em] text-ink",
    titleDone: "text-base font-medium tracking-[-0.03em] text-pine/80",
    detail: "mt-0.5 text-sm leading-6 text-pine",
    now: "inline-flex items-center gap-1.5 rounded-full bg-sage px-2.5 py-0.5 text-xs font-medium tracking-[-0.01em] text-cream",
    nowDot: "h-1.5 w-1.5 rounded-full bg-[#9FC4A8]",
    done: "rounded-full bg-paper/70 px-2.5 py-0.5 text-xs font-medium tracking-[-0.01em] text-sage",
    dot: "absolute top-1 -left-8 flex h-[1.375rem] w-[1.375rem] items-center justify-center rounded-full border-2 border-sage/50 bg-[#E4E7E2]",
    dotNow: "absolute top-1 -left-8 flex h-[1.375rem] w-[1.375rem] items-center justify-center rounded-full border-2 border-ink bg-[#9FC4A8]",
    dotDone: "absolute top-1 -left-8 flex h-[1.375rem] w-[1.375rem] items-center justify-center rounded-full bg-sage text-cream",
  },
};

export const detailsLooks: Record<EventTheme, DetailsLook> = {
  cream: {
    box: "mt-6 rounded-sm bg-cream/70 p-5",
    heading: "text-lg font-semibold tracking-[-0.035em] text-ink",
    text: "mt-2 text-base leading-7 text-pine",
    list: "mt-2 grid list-disc gap-2 pl-5 text-base leading-7 text-pine marker:text-sage",
  },
  ink: {
    box: "on-ink mt-6 rounded-sm bg-ink p-5 text-cream",
    heading: "text-lg font-semibold tracking-[-0.035em] text-cream",
    text: "mt-2 text-base leading-7 text-[#CBD6CD]",
    list: "mt-2 grid list-disc gap-2 pl-5 text-base leading-7 text-[#CBD6CD] marker:text-[#9FC4A8]",
  },
  sage: {
    box: "mt-6 rounded-sm border border-sage/25 bg-[#E4E7E2] p-5",
    heading: "text-lg font-semibold tracking-[-0.035em] text-ink",
    text: "mt-2 text-base leading-7 text-pine",
    list: "mt-2 grid list-disc gap-2 pl-5 text-base leading-7 text-pine marker:text-sage",
  },
};
