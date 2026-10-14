import { socials } from "@/data/site";

const instagram = socials.find((item) => item.name === "Instagram")?.href;

export type FaqPart = {
  text: string;
  href?: string;
  external?: boolean;
};

export type FaqItem = {
  question: string;
  answer: FaqPart[];
};

export const faqs: FaqItem[] = [
  {
    question: "What kinds of events does BTG organize?",
    answer: [
      {
        text: "BTG brings students and industry professionals together through events, networking opportunities, practical workshops, and AI-focused competitions. Explore our ",
      },
      { text: "Events page", href: "/events" },
      { text: " to see confirmed upcoming programming." },
    ],
  },
  {
    question: "How can I stay updated on upcoming events?",
    answer: [
      { text: "Follow BTG on " },
      { text: "Instagram", href: instagram, external: true },
      { text: " for club updates, and check our " },
      { text: "Events page", href: "/events" },
      { text: " for upcoming programming." },
    ],
  },
  {
    question: "How can companies partner with BTG?",
    answer: [
      {
        text: "Companies can get involved through club sponsorships, event partnerships, and industry-led workshops. Visit our ",
      },
      { text: "Partner With Us", href: "/partner" },
      {
        text: " page to explore the opportunities and connect with our Corporate Relations team.",
      },
    ],
  },
];
