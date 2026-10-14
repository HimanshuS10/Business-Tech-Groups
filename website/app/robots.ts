import type { MetadataRoute } from "next";
import { indexingEnabled, siteOrigin } from "@/lib/site-url";

/**
 * Preview and local builds disallow every crawler.
 * Production allows crawling only after indexingEnabled() is true
 * (a public NEXT_PUBLIC_SITE_URL plus a production deploy).
 */
export default function robots(): MetadataRoute.Robots {
  const origin = siteOrigin();
  if (!indexingEnabled() || !origin) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", origin).toString(),
    host: origin.origin,
  };
}
