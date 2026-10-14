/**
 * Production origin for canonical URLs, the sitemap, and social preview links.
 *
 * Set NEXT_PUBLIC_SITE_URL to the public https origin before launch.
 * Localhost and missing values are rejected so preview builds cannot publish
 * a localhost canonical URL.
 */
export function siteOrigin(value = process.env.NEXT_PUBLIC_SITE_URL): URL | null {
  const raw = value?.trim();
  if (!raw) return null;

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }

  if (url.protocol !== "https:" && url.protocol !== "http:") return null;

  const host = url.hostname.toLowerCase();
  if (host === "localhost" || host === "127.0.0.1" || host === "[::1]" || host.endsWith(".local")) {
    return null;
  }

  url.hash = "";
  url.search = "";
  url.pathname = "";
  return url;
}

/**
 * Search engines may index the site only for a real production deploy.
 *
 * - Vercel preview and development (VERCEL_ENV=preview|development) stay noindex,
 *   even if NEXT_PUBLIC_SITE_URL is copied into that environment.
 * - Vercel production (VERCEL_ENV=production) is indexed once NEXT_PUBLIC_SITE_URL is set.
 * - A non-Vercel production host must set BTG_INDEXING=production. Leave that unset
 *   on local and preview machines.
 */
export function indexingEnabled(options?: {
  siteUrl?: string;
  vercelEnv?: string;
  indexing?: string;
}): boolean {
  const origin = siteOrigin(options?.siteUrl ?? process.env.NEXT_PUBLIC_SITE_URL);
  if (!origin) return false;

  const vercelEnv = options?.vercelEnv ?? process.env.VERCEL_ENV;
  if (vercelEnv === "preview" || vercelEnv === "development") return false;
  if (vercelEnv === "production") return true;

  return (options?.indexing ?? process.env.BTG_INDEXING) === "production";
}
