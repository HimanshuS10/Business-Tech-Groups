import type { MetadataRoute } from "next";
import { indexingEnabled, siteOrigin } from "@/lib/site-url";

const paths = ["/", "/about", "/events", "/team", "/contact", "/partner"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin();
  if (!origin || !indexingEnabled()) return [];

  return paths.map((path) => ({
    url: new URL(path, origin).toString(),
    changeFrequency: path === "/" || path === "/events" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
