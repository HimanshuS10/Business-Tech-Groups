export type EventItem = {
  id: string;
  title: string;
  dateLabel: string;
  timeLabel: string | null;
  /** Full description used on the events page and in the detail dialog. */
  summary: string;
  /** Short homepage card copy. */
  preview?: string;
  category?: string;
  /** Short venue shown on cards, e.g. "MAC 313". Omit until confirmed. */
  location?: string;
  /** Fuller address shown under the venue in the detail dialog. */
  address?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Set when BTG publishes a real registration page. Hidden until then. */
  registrationHref?: string;
  /** Post-event write-up shown in the detail dialog. Add once the event has happened. */
  recap?: EventRecap;
};

/**
 * Blog-style event write-up. Each section renders as a heading followed by
 * paragraphs and an optional bullet list, in order.
 */
export type EventRecap = {
  intro?: string;
  takeaways?: string[];
  sections: {
    heading: string;
    paragraphs?: string[];
    points?: string[];
  }[];
};

/**
 * Leave venue, registration URL, and time blank until BTG publishes them.
 * Add imageSrc only for approved photography.
 */
export const upcomingEvents: EventItem[] = [
  {
    id: "industry-decoded",
    title: "Industry Decoded with Western Financial Group",
    dateLabel: "October 20, 2026",
    timeLabel: "6:00–8:00 PM",
    category: "Industry & Networking",
    location: "MAC 313",
    address: "University of Guelph",
    preview:
      "Hear from Western Financial Group about career opportunities, technology in business, and industry networking.",
    summary:
      "An employee from Western Financial Group will discuss the company, co-op opportunities, and how it uses technology. Networking will follow.",
    imageSrc: "/images/events/industry-decoded.png",
    imageAlt: "Poster for Industry Decoded with Western Financial Group on October 20, 2026",
  },
  {
    id: "charity-5k",
    title: "Charity 5K Run",
    dateLabel: "October 25, 2026",
    timeLabel: "10:00 AM–12:00 PM",
    category: "Community",
    location: "The Arboretum",
    address: "University of Guelph, 200 Arboretum Road, Guelph, ON N1G 2W1",
    preview:
      "Join BTG for a 5K run supporting the Canadian Cancer Society. All running abilities are welcome.",
    summary:
      "Join BTG for a 5K run supporting the Canadian Cancer Society. All running abilities are welcome.",
    imageSrc: "/images/events/charity-5k.png",
    imageAlt: "Poster for the Charity 5K Run on October 25, 2026",
  },
  {
    id: "prompt-and-pitch",
    title: "Prompt & Pitch",
    dateLabel: "November 21, 2026",
    timeLabel: null,
    category: "Case Competition",
    preview:
      "A vibe coding case competition: student teams build software with AI, then pitch it to industry judges.",
    summary:
      "Prompt & Pitch is BTG's vibe coding case competition. Student teams use AI to build their own software, then pitch it to a panel of industry judges. More details will be shared closer to the event.",
  },
];

export const pastEvents: EventItem[] = [
  {
    id: "smarter-than-ai",
    title: "Smarter Than AI Panel",
    dateLabel: "March 3, 2026",
    timeLabel: null,
    summary:
      "BTG's debut event brought together more than 60 attendees and four industry panelists to discuss the role of artificial intelligence and emerging technologies in business.",
  },
];

/** Named in BTG's 2026–27 sponsorship package as the debut panel. */
export const debutPanelists = [
  {
    name: "Brent Pattison",
    role: "Founder, 3P Solutions",
  },
  {
    name: "Christina Crowley-Arklie",
    role: "Founder, Crowley + Arklie Strategy & Co.",
  },
  {
    name: "Kevin Matsui",
    role: "Managing Director, CARE-AI, University of Guelph",
  },
  {
    name: "Josh Gonzales",
    role: "PhD Candidate, Consumer Psychology",
  },
] as const;
