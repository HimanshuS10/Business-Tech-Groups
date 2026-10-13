export const club = {
  name: "Business Technologies Guelph",
  shortName: "BTG",
  university: "University of Guelph",
  tagline: "Where Business Meets Tech",
  description:
    "Business Technologies Guelph is a student-led organization at the University of Guelph focused on the intersection of business and emerging technology.",
};

export const navigation = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
] as const;

export const socials = [
  {
    name: "Instagram",
    handle: "@businesstechguelph",
    href: "https://www.instagram.com/businesstechguelph/",
  },
  {
    name: "TikTok",
    handle: "@businesstechguelph",
    href: "https://www.tiktok.com/@businesstechguelph",
  },
  {
    name: "LinkedIn",
    handle: "Business Technologies Guelph",
    href: "https://www.linkedin.com/company/business-technologies-guelph/home/",
  },
] as const;

export const corporateContact = {
  name: "Liam Sharpe",
  role: "Director of Corporate Relations",
  email: "lsharp03@uoguelph.ca",
};

export function sponsorshipMailto() {
  const subject = encodeURIComponent("BTG sponsorship inquiry");
  return `mailto:${corporateContact.email}?subject=${subject}`;
}

/** Figures confirmed in BTG's sponsorship materials for the March 2026 debut. */
export const verifiedImpact = [
  {
    value: "60+",
    label: "Attendees",
    detail: "Smarter Than AI Panel",
  },
  {
    value: "4",
    label: "Industry panelists",
    detail: "Consulting, communications, applied AI, and consumer psychology",
  },
] as const;
