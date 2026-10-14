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
  /** Omit until a venue is confirmed for this BTG event. */
  location?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Set when BTG publishes a real registration page. Hidden until then. */
  registrationHref?: string;
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
    category: "AI & Innovation",
    preview:
      "An AI-assisted business competition where student teams develop solutions and pitch them to industry judges.",
    summary:
      "BTG's upcoming AI-assisted business competition challenges student teams to identify a business problem, develop a working prototype, and pitch their solution to industry judges.",
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
