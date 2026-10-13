/**
 * Partnership copy follows BTG's 2026–27 sponsorship materials.
 * Do not add prices. The proposal and the package disagree on the
 * Supporting Sponsor range, so investment figures stay off the site
 * until leadership confirms one set.
 */

export const whyPartner = [
  {
    title: "Be a first mover",
    body: "BTG describes itself as the first club in Canada focused on the intersection of AI and modern business. Partners come in while that community is still being built.",
  },
  {
    title: "Reach a campus network",
    body: "Programming puts a partner in front of business students and the professionals who join BTG events, workshops, and competitions.",
  },
  {
    title: "Champion student growth",
    body: "Sponsorship supports practical experience: industry conversations, mentorship, and students making decisions with emerging technology before they graduate.",
  },
  {
    title: "Be visible where the work happens",
    body: "Partners are present across events, workshops, and the club's digital promotion — not in a single logo drop.",
  },
  {
    title: "Extend the impact past one night",
    body: "The point of a partnership is a relationship students can use: recruitment conversations, mentorship, and a clearer view of how technology actually shows up at work.",
  },
] as const;

export const tiers = [
  {
    name: "Club sponsorship",
    summary:
      "A year-round partnership across BTG programming, for organizations that want a standing role rather than a single date.",
    includes: [
      "Presence across the year of club programming",
      "Branding on club and event materials",
      "A place in flagship events",
      "Early conversations with students",
    ],
  },
  {
    name: "Event sponsorship",
    summary:
      "Support for one event. Pinnacle events, including Prompt & Pitch, and sponsor-led workshops are the two paths.",
    includes: [
      "Pinnacle events include a judging presence, event materials, and recognition in remarks",
      "Workshops are co-designed with BTG around the partner's work",
      "Direct time with students during the session",
    ],
  },
  {
    name: "Supporting sponsorship",
    summary:
      "A lighter way to take part in BTG's year and be recognized alongside the club's programming.",
    includes: [
      "Logo on event signage and digital materials",
      "Group recognition during events",
      "Inclusion in post-event social and recap content",
    ],
  },
] as const;

export const workshopSteps = [
  "Meet with the Corporate Relations team",
  "Co-design a session that fits the company's field",
  "Students learn directly from the partner",
] as const;

export const workshopFormats = [
  {
    name: "Lecture",
    body: "Industry insight from the partner's team.",
  },
  {
    name: "Tool walkthrough",
    body: "A hands-on look at a specific platform the company uses.",
  },
  {
    name: "Guided build",
    body: "Students make something alongside the partner.",
  },
] as const;

export const competitionSteps = [
  {
    step: "01",
    name: "Diagnose",
    body: "Teams take a business problem and decide what is actually worth solving.",
  },
  {
    step: "02",
    name: "Build",
    body: "Using AI-assisted development, teams build a working prototype under time pressure.",
  },
  {
    step: "03",
    name: "Pitch",
    body: "Teams make the business case for that solution to a panel of industry judges.",
  },
] as const;
