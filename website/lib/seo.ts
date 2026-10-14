import type { Metadata } from "next";
import { indexingEnabled, siteOrigin } from "@/lib/site-url";

export const shareImage = {
  path: "/og",
  width: 1200,
  height: 630,
  alt: "Business Technologies Guelph — Where Business Meets Tech",
} as const;

export function pageMetadata(input: { title: string; description: string; path: string }): Metadata {
  const origin = siteOrigin();
  const canonical = origin ? new URL(input.path, origin).toString() : undefined;
  const imageUrl = origin ? new URL(shareImage.path, origin).toString() : undefined;
  const robots = indexingEnabled()
    ? { index: true, follow: true }
    : { index: false, follow: false };

  return {
    title: { absolute: input.title },
    description: input.description,
    alternates: canonical ? { canonical } : undefined,
    robots,
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      siteName: "Business Technologies Guelph",
      locale: "en_CA",
      type: "website",
      images: imageUrl
        ? [{ url: imageUrl, width: shareImage.width, height: shareImage.height, alt: shareImage.alt }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}
