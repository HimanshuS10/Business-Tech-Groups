import { club, corporateContact, socials } from "../data/site.ts";

export type FaqEntry = {
  question: string;
  answer: { text: string }[];
};

export function organizationNode(origin: string | null) {
  return {
    "@type": "Organization",
    ...(origin ? { "@id": `${origin}/#organization`, url: `${origin}/`, logo: `${origin}/brand/btg-logo.png` } : {}),
    name: club.name,
    alternateName: club.shortName,
    description: club.description,
    sameAs: socials.map((social) => social.href),
    location: {
      "@type": "Place",
      name: club.university,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Guelph",
        addressRegion: "ON",
        addressCountry: "CA",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "corporate relations",
      email: corporateContact.email,
      name: corporateContact.name,
    },
  };
}

export function siteGraph(origin: string | null) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(origin),
      {
        "@type": "WebSite",
        ...(origin ? { "@id": `${origin}/#website`, url: `${origin}/` } : {}),
        name: club.name,
        description: club.description,
        inLanguage: "en-CA",
        publisher: origin
          ? { "@id": `${origin}/#organization` }
          : { "@type": "Organization", name: club.name },
      },
    ],
  };
}

export function faqGraph(origin: string | null, items: readonly FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(origin ? { url: `${origin}/` } : {}),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.map((part) => part.text).join(""),
      },
    })),
  };
}
