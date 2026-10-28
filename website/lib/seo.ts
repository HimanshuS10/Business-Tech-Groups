import type { Metadata } from "next";
import { shareSize, socialTitle } from "@/lib/social";
import { indexingEnabled, siteOrigin } from "@/lib/site-url";

export { socialShare, socialTitle, socialWordCount } from "@/lib/social";

export const shareImage = {
  path: "/og",
  width: 1200,
  height: 630,
  alt: "Business Technologies Guelph — Where Business Meets Tech",
} as const;

export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
  socialDescription: string;
  image: { path: string; alt: string };
}): Metadata {
  const origin = siteOrigin();
  const canonical = origin ? new URL(input.path, origin).toString() : undefined;
  const imageUrl = origin ? new URL(input.image.path, origin).toString() : undefined;
  const robots = indexingEnabled()
    ? { index: true, follow: true }
    : { index: false, follow: false };

  return {
    title: { absolute: input.title },
    description: input.description,
    alternates: canonical ? { canonical } : undefined,
    robots,
    openGraph: {
      title: socialTitle,
      description: input.socialDescription,
      url: canonical,
      siteName: socialTitle,
      locale: "en_CA",
      type: "website",
      images: imageUrl
        ? [{ url: imageUrl, width: shareSize.width, height: shareSize.height, alt: input.image.alt }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: input.socialDescription,
      images: imageUrl ? [{ url: imageUrl, alt: input.image.alt }] : undefined,
    },
  };
}
