export type EventItem = {
  title: string;
  dateLabel: string;
  timeLabel: string | null;
  summary: string;
  imageSrc?: string;
  imageAlt?: string;
};

/**
 * Leave venue, registration URL, and time blank until BTG publishes them.
 * Add imageSrc only for approved photography.
 */
export const upcomingEvents: EventItem[] = [
  {
    title: "Industry Decoded with Western Financial Group",
    dateLabel: "October 20, 2026",
    timeLabel: "6:00–8:00 PM",
    summary:
      "An employee from Western Financial Group will discuss the company, co-op opportunities, and how it uses technology. Networking will follow.",
  },
  {
    title: "Charity 5K Run",
    dateLabel: "October 25, 2026",
    timeLabel: "10:00 AM–12:00 PM",
    summary:
      "A 5K run supporting the Canadian Cancer Society. Participants of all running abilities are welcome.",
  },
  {
    title: "Prompt & Pitch",
    dateLabel: "November 21, 2026",
    timeLabel: null,
    summary:
      "BTG's flagship AI-assisted development case competition. Student teams identify a business problem, build a working prototype, and pitch their solution to industry judges.",
  },
];

export const pastEvents: EventItem[] = [
  {
    title: "Smarter Than AI Panel",
    dateLabel: "March 3, 2026",
    timeLabel: null,
    summary:
      "BTG's debut event brought together 60+ attendees and four industry panelists spanning consulting, digital communications, applied AI, and consumer psychology.",
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
