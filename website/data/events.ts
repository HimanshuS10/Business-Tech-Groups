import { aiStudioPrompts } from "@/data/ai-studio-prompts";

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
  /** Files and links attendees need, shown in the detail dialog. */
  resources?: EventResource[];
  /** Copy-and-paste prompts shown in the detail dialog, in order. */
  prompts?: EventPrompt[];
  /** Visible label for the registration link. Defaults to "Register". */
  registrationLabel?: string;
  /** Set once the registration form stops taking responses. Shows "Registration closed" instead of the link. */
  registrationClosed?: boolean;
  /** Extra key facts shown next to Date and Time in the detail dialog, e.g. prizes. */
  facts?: { label: string; value: string; detail?: string }[];
  /** Extra sections under "About this event", e.g. how the competition works. */
  details?: EventSection[];
  /** Key dates before and on the event day, shown in order in the detail dialog. */
  timeline?: EventScheduleItem[];
  /** Run of show for the event day, shown in order in the detail dialog. */
  agenda?: EventScheduleItem[];
  /** Post-event write-up shown in the detail dialog. Add once the event has happened. */
  recap?: EventRecap;
};

/**
 * One row of a timeline or day schedule. `start` and `end` are ISO date-times
 * (Guelph time, -05:00 in November); when both are set the dialog marks the row
 * as done or happening now.
 */
export type EventScheduleItem = {
  when: string;
  title: string;
  detail?: string;
  start?: string;
  end?: string;
};

export type EventSection = {
  heading: string;
  paragraphs?: string[];
  points?: string[];
};

export type EventPrompt = {
  title: string;
  description?: string;
  /** Copied exactly as written. */
  text: string;
};

/**
 * "copy" opens Google's make-a-copy page, "download" saves the file,
 * "open" opens the link in a new tab.
 */
export type EventResource = {
  title: string;
  description?: string;
  href: string;
  action: "copy" | "download" | "open";
  /** Shown as a thumbnail for image resources. */
  previewSrc?: string;
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
 * Leave venue and time blank until BTG publishes them.
 * Add imageSrc only for approved photography.
 */
export const upcomingEvents: EventItem[] = [
  {
    id: "prompt-and-pitch",
    title: "Prompt & Pitch",
    dateLabel: "November 21, 2026",
    timeLabel: "9:00 AM–4:00 PM",
    category: "Case Competition",
    location: "Macdonald Hall",
    address: "University of Guelph, 74 Macdonald Street, Guelph, ON N1G 2W1",
    preview:
      "BTG's AI-powered case competition: teams build a working solution with AI, then pitch it to industry judges for $3,000 in prizes.",
    summary:
      "Prompt & Pitch is BTG's AI-powered case competition, open to students of all experience levels. Teams analyze a real business case, then use AI tools such as vibe coding and prompt engineering to build a practical solution. After a five-day building period, they pitch it to a panel of industry judges, and the top three teams share $3,000 in prizes. No coding or technical experience is needed.",
    imageSrc: "/images/events/prompt-to-pitch.png",
    imageAlt: "Prompt to Pitch: BTG Case Competition",
    imageOnWhite: true,
    facts: [{ label: "Prizes", value: "$3,000 in prizes", detail: "1st $1,500 · 2nd $1,000 · 3rd $500" }],
    agenda: [
      { when: "9:00 AM", title: "Check-in and networking", detail: "Meet the other teams, BTG members, and the judges." },
      { when: "9:45 AM", title: "Welcome and kickoff", detail: "An overview of the day from the BTG team." },
      { when: "9:55 AM", title: "Industry panel", detail: "Modern AI use cases in business and emerging tech trends." },
      { when: "10:50 AM", title: "Breakfast and snack break", detail: "Teams get ready for their pitches." },
      { when: "11:35 AM", title: "First-round pitches", detail: "10-minute pitch, 4 minutes of questions, 3 minutes of judges' feedback. Lunch is served from 12:30 PM." },
      { when: "2:00 PM", title: "Final four pitches", detail: "The top four teams pitch again in front of everyone." },
      { when: "3:40 PM", title: "Finalists announced" },
      { when: "3:50 PM", title: "Closing remarks", detail: "Words from BTG and comments from the judges." },
      { when: "4:00 PM", title: "Awards, photos, and networking" },
    ],
    timeline: [
      {
        when: "November 13",
        title: "Registration closes",
        detail: "11:59 PM",
        end: "2026-11-13T23:59:00-05:00",
      },
      {
        when: "November 15",
        title: "Case release",
        detail: "1:00 PM",
        start: "2026-11-15T13:00:00-05:00",
        end: "2026-11-15T13:00:00-05:00",
      },
      {
        when: "November 15–19",
        title: "Building period",
        detail: "Ends November 19 at 11:59 PM",
        start: "2026-11-15T13:00:00-05:00",
        end: "2026-11-19T23:59:00-05:00",
      },
      {
        when: "November 21",
        title: "Presentation Day",
        detail: "9:00 AM–4:00 PM at Macdonald Hall",
        start: "2026-11-21T09:00:00-05:00",
        end: "2026-11-21T16:00:00-05:00",
      },
    ],
    registrationHref:
      "https://docs.google.com/forms/d/e/1FAIpQLSfBBHlR2HVUW_d50XUcUy2SpoQdaRVhRPKxJ79QRcZ_XieKgQ/viewform",
    registrationLabel: "Register for Prompt To Pitch",
    registrationClosed: true,
  },
];

/** Most recent first. The Smarter Than AI Panel stays last; the events page features it separately. */
export const pastEvents: EventItem[] = [
  {
    id: "google-ai-studio-workshop",
    title: "Tools Decoded: Google AI Studio Workshop",
    dateLabel: "November 11, 2026",
    timeLabel: "7:30–9:30 PM",
    category: "Workshop",
    location: "Rozanski Hall 105",
    address: "University of Guelph",
    preview:
      "Students built a working café app in Google AI Studio using plain-English prompts, with no coding needed.",
    summary:
      "Tools Decoded was BTG's hands-on workshop on Google AI Studio. Students learned how a strong prompt is built, then used Gemini to turn a real business problem into a working app, with no coding experience needed. The prompts and files are still below if you want to build it yourself.",
    imageSrc: "/images/events/google-ai-studio.png",
    listImageSrc: "/images/events/google-ai-studio-square.png",
    posterSrc: "/images/events/google-ai-studio-poster.png",
    imageAlt: "Google AI Studio logo",
    imageOnWhite: true,
    resources: [
      {
        title: "Customer reviews (Google Sheet)",
        description:
          "Make your own copy, set sharing to \"Anyone with the link can view\", and paste its link into your app.",
        href: "https://docs.google.com/spreadsheets/d/1S5BThtvcX0TKGaigUlZpx-SJ4lv22k2_vCSGzp2ibwI/copy",
        action: "copy",
      },
      {
        title: "Inventory data (CSV)",
        description: "Download the inventory as a CSV file to upload on your app's Inventory page.",
        href: "https://docs.google.com/spreadsheets/d/1F0sae31e0Iqad-PP6PwYf4SQxyvpUOKT4bZTDYjXvRo/export?format=csv",
        action: "download",
      },
      {
        title: "GryphCafe logo",
        description: "Brand logo for the GryphCafe Coffee & Co. case.",
        href: "/images/events/google-ai-studio/gryphcafe-logo.png",
        action: "download",
        previewSrc: "/images/events/google-ai-studio/gryphcafe-logo.png",
      },
      {
        title: "Dashboard reference",
        description: "Example product dashboard layout to use as design inspiration.",
        href: "/images/events/google-ai-studio/dashboard-reference.png",
        action: "download",
        previewSrc: "/images/events/google-ai-studio/dashboard-reference.png",
      },
    ],
    prompts: aiStudioPrompts,
    recap: {
      intro:
        "BTG's second workshop of the year brought students and their laptops to Rozanski Hall 105 for a night of building, not just talking about AI. Together we built a management app for GryphCafe, a campus café whose owner has customer reviews and stock levels spread across too many places, using nothing but plain-English prompts in Google AI Studio.",
      // Add workshop photos here once they are approved: { src, alt } in /public/images/events/google-ai-studio/.
      takeaways: [
        "A strong prompt has structure: role, context, input, task, output, colours, and constraints.",
        "Specific beats vague. Telling the AI exactly what to build, and what to leave out, gives a much better first version.",
        "AI app builders are made for prototypes. Google AI Studio's Build mode turned plain English into a working app connected to a live Google Sheet.",
      ],
      sections: [
        {
          heading: "The case: GryphCafe",
          paragraphs: [
            "The room started by brainstorming what a café owner actually needs from a simple CRM, then narrowed the ideas down to three use cases: understanding customer reviews, tracking inventory, and seeing the whole business on one screen.",
          ],
        },
        {
          heading: "Building the app, one prompt at a time",
          paragraphs: [
            "Each prompt adds a new page to the same app, so attendees pasted them in order and waited for each build to finish before moving on.",
          ],
          points: [
            "Customer Reviews: the app reads reviews from a Google Sheet, refreshes every 10 seconds, and uses Gemini to write an AI Action Plan with three things customers love, three complaints, and three actions for the week.",
            "Inventory: upload a stock spreadsheet, change counts with + and − buttons, and see low items flagged in red.",
            "Dashboard: the key numbers, low-stock alerts, and this week's actions together on one screen.",
          ],
        },
        {
          heading: "Try it yourself",
          paragraphs: [
            "Missed the workshop? Every file and prompt we used is below. Paste the prompts into Google AI Studio in order, and let each build finish before you paste the next one.",
          ],
        },
      ],
    },
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
