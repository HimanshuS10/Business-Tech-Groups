export const socialTitle = "Business Technologies Guelph";

export const shareSize = { width: 1200, height: 630 } as const;

export const socialShare = {
  home: {
    description:
      "Where business meets technology at the University of Guelph. Explore BTG events, opportunities, and our student community.",
    path: "/images/share/home.jpg",
    alt: "Panelists speaking at a Business Technologies Guelph event",
  },
  about: {
    description:
      "Explore our mission to connect business, technology, and student innovation at the University of Guelph.",
    path: "/images/share/about.jpg",
    alt: "Business Technologies Guelph students together at an event",
  },
  events: {
    description:
      "Discover BTG workshops, industry events, networking opportunities, and highlights from past events.",
    path: "/images/share/events.jpg",
    alt: "Students seated at tables during a Business Technologies Guelph event",
  },
  team: {
    description:
      "Meet the students behind Business Technologies Guelph. Executive team profiles are coming soon.",
    path: "/images/share/team.jpg",
    alt: "Business Technologies Guelph seal",
  },
  contact: {
    description: "Connect with Business Technologies Guelph and find the best way to reach our team.",
    path: "/images/share/contact.jpg",
    alt: "Business Technologies Guelph seal",
  },
  partner: {
    description: "Explore partnership and sponsorship opportunities with Business Technologies Guelph.",
    path: "/images/share/partner.jpg",
    alt: "Industry guests with Business Technologies Guelph",
  },
} as const;

export function socialWordCount(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
