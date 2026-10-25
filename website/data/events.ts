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
  /** Short venue shown on cards, e.g. "McKinnon 313". Omit until confirmed. */
  location?: string;
  /** Fuller address shown under the venue in the detail dialog. */
  address?: string;
  /** Homepage card image, 16:9 (e.g. 1920x1080). */
  imageSrc?: string;
  /**
   * Events page card image, roughly square (e.g. 1200x1200). The box changes
   * shape with screen width and crops to fill, so keep content centred with
   * margin. Falls back to imageSrc.
   */
  listImageSrc?: string;
  /** Vertical poster for the detail dialog, 3:4 (e.g. 1080x1440). Falls back to imageSrc. */
  posterSrc?: string;
  imageAlt?: string;
  /** For logos on a white background: fills the image box with white instead of cream. */
  imageOnWhite?: boolean;
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
  /** Slideshow shown under the intro, in order. Landscape (3:2) photos work best. */
  photos?: { src: string; alt: string }[];
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
    id: "google-ai-studio-workshop",
    title: "Google AI Studio Workshop",
    dateLabel: "Date to be announced",
    timeLabel: null,
    category: "Workshop",
    preview:
      "Build a real app with Google AI Studio, no coding needed. Learn prompt engineering by solving a real business problem as a room.",
    summary:
      "A hands-on, project-based workshop where we'll build a project together in Google AI Studio. You'll learn how prompt engineering works, brainstorm and present ideas for a real business problem, and narrow it down into key use cases to build out. No coding experience needed: bring a charged laptop and create a free Google AI Studio account at aistudio.google.com before the event so we can start building right away.",
    imageSrc: "/images/events/google-ai-studio.png",
    listImageSrc: "/images/events/google-ai-studio-square.png",
    posterSrc: "/images/events/google-ai-studio-poster.png",
    imageAlt: "Google AI Studio logo",
    imageOnWhite: true,
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

/** Most recent first. The Smarter Than AI Panel stays last; the events page features it separately. */
export const pastEvents: EventItem[] = [
  {
    id: "charity-5k",
    title: "Charity 5K Run",
    dateLabel: "October 25, 2026",
    timeLabel: "10:00 AM–12:00 PM",
    category: "Community",
    location: "The Arboretum",
    address: "University of Guelph, 200 Arboretum Road, Guelph, ON N1G 2W1",
    preview:
      "BTG ran a 5K through the Arboretum in support of the Canadian Cancer Society.",
    summary:
      "BTG ran a 5K through the Arboretum in support of the Canadian Cancer Society. All running abilities were welcome.",
    imageSrc: "/images/events/charity-5k-card.jpg",
    listImageSrc: "/images/events/charity-5k-square.jpg",
    posterSrc: "/images/events/charity-5k-poster.jpg",
    imageAlt: "5K for Charity",
    recap: {
      intro:
        "BTG members and friends laced up for a 5K through the Arboretum in support of the Canadian Cancer Society. Runners and walkers of every pace came out to cross the finish line together. Thank you to everyone who registered, ran, and donated!",
      sections: [],
    },
  },
  {
    id: "industry-decoded",
    title: "Industry Decoded with Western Financial Group",
    dateLabel: "October 20, 2026",
    timeLabel: "6:00–8:00 PM",
    category: "Industry & Networking",
    location: "McKinnon 313",
    address: "University of Guelph",
    preview:
      "Western Financial Group's commercial sales leaders shared how their business runs, the realities of a sales career, and the tech behind their team.",
    summary:
      "Connor and Chloe from Western Financial Group's commercial sales team talked through how the company works, the risks of a career in sales, and the software they use, followed by networking.",
    imageSrc: "/images/events/western-financial-card.jpg",
    listImageSrc: "/images/events/western-financial-square.jpg",
    posterSrc: "/images/events/western-financial-poster.jpg",
    imageAlt: "Industry Decoded with Western Financial Group",
    recap: {
      intro:
        "BTG's first Industry Decoded of the year packed McKinnon 313. Connor, Commercial Sales Manager, and Chloe, Team Lead in Commercial Sales at Western Financial Group, sat down with students for an honest conversation about what their job actually looks like: how the business works, the risks that come with a career in sales, and the software that keeps their pipeline moving.",
      photos: [
        {
          src: "/images/events/westernfinancialpanel/DSC_0039.JPG",
          alt: "Two BTG members smiling behind the check-in table, decorated with green balloons and a BTG tablecloth",
        },
        {
          src: "/images/events/westernfinancialpanel/DSC_0058.JPG",
          alt: "Two BTG members posing in front of the BTG banner",
        },
        {
          src: "/images/events/westernfinancialpanel/DSC_0090.JPG",
          alt: "BTG members introducing the evening at the front of the classroom",
        },
        {
          src: "/images/events/westernfinancialpanel/DSC_0114.JPG",
          alt: "Chloe and Connor from Western Financial Group presenting to seated students",
        },
        {
          src: "/images/events/westernfinancialpanel/DSC_0158.JPG",
          alt: "Chloe presenting beside a projected demo of Western Financial Group's sales platform",
        },
        {
          src: "/images/events/westernfinancialpanel/DSC_0125.JPG",
          alt: "Students seated at tables listening to the presentation",
        },
        {
          src: "/images/events/westernfinancialpanel/DSC_0135.JPG",
          alt: "Students in the audience listening during the presentation",
        },
        {
          src: "/images/events/westernfinancialpanel/DSC_0195.JPG",
          alt: "Wide view of the full classroom of students listening to the speakers",
        },
        {
          src: "/images/events/westernfinancialpanel/245ECF1C-9807-4792-90A4-AA7D34ECC458_1_102_o.jpeg",
          alt: "Group photo of BTG members with Chloe and Connor in front of the BTG banner",
        },
      ],
      takeaways: [
        "Insurance brokerage runs on sales: Chloe and Connor broke down how Western Financial Group's business works from inside the commercial sales team.",
        "A career in sales comes with real risks, and it pays to understand them before you start.",
        "Technology does the heavy lifting: Western's sales team uses software to find leads and track every customer and prospect they reach out to.",
      ],
      sections: [
        {
          heading: "How the business works",
          paragraphs: [
            "Chloe and Connor walked through Western Financial Group's business end to end, from how a broker finds and wins clients to what their day-to-day looks like leading a commercial sales team. They were also upfront about the risks of working in sales and what it takes to succeed in the role.",
          ],
        },
        {
          heading: "The tech behind the sales team",
          paragraphs: [
            "They then went deeper into the software Western uses to improve lead scraping and to track every customer and potential customer outreach, showing students how technology shapes sales in a business most people don't think of as \"tech.\"",
          ],
        },
        {
          heading: "Networking",
          paragraphs: [
            "The night wrapped up with a 30 to 40 minute networking session. Students connected with Chloe and Connor one-on-one, asked their own questions, and got advice on breaking into sales and tech. We closed with a group photo in front of the BTG banner.",
          ],
        },
      ],
    },
  },
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
