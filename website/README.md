# Business Technologies Guelph

Public site for the student-led club at the University of Guelph.

## Update content

Edit the files in `data/` instead of hard-coding copy into pages.

- `data/site.ts` — name, navigation, social links, corporate contact, debut figures
- `data/events.ts` — upcoming and past events. Leave time, venue, and registration blank until they are confirmed. Add `imageSrc` only for approved photography.
- `data/faq.ts` — homepage questions
- `data/team.ts` — executive profiles. Keep this empty until portraits are approved after the October 24, 2026 media day. Do not add phone numbers.

## Brand

Colours and type are set in `app/globals.css`. The seal is `public/brand/btg-logo.png`.

- Ink `#263135`
- Pine `#44555A`
- Sage `#627269`
- Cream `#F1EDE2`, sampled from the brand sheet
- Inter for interface and body text
- Instrument Serif Italic for editorial lines

## Local preview

```bash
npm run dev -- --port 3001
```

Use port 3001. Port 3000 is reserved for another local project.

## Before publishing

Do not deploy from this handoff until the executive team approves it.

1. Set `NEXT_PUBLIC_SITE_URL` to the confirmed public origin, including `https://`. Do not use localhost. Canonical links, `sitemap.xml`, and the Open Graph image URL are omitted until this is set, so a build cannot advertise `localhost`.
2. Indexing stays off unless the deploy is production. Vercel preview (`VERCEL_ENV=preview`) is always `noindex` and `robots.txt` disallows `/`. Vercel production is indexed only after the site URL is set. A non-Vercel host must also set `BTG_INDEXING=production` on that host only.
3. The share image is generated at `/og` (1200×630) from the official seal. It is referenced in page metadata only after `NEXT_PUBLIC_SITE_URL` is set.
4. Contact delivery is intentionally off (`contactSubmissionEnabled` in `lib/contact-fields.ts`). To turn it on later: set that flag to `true`, then provide `RESEND_API_KEY`, `BTG_CONTACT_TO_EMAIL`, `BTG_CONTACT_FROM_EMAIL`, `UPSTASH_REDIS_REST_URL`, and `UPSTASH_REDIS_REST_TOKEN`. Do not point the inbox at a personal address until BTG approves it.
5. Upcoming events still need approved graphics for Industry Decoded, the Charity 5K, and Prompt & Pitch. Add `imageSrc` and `imageAlt` on those records in `data/events.ts`. Do not reuse the March panel photos for them.
6. Team portraits stay unpublished until after the October 24, 2026 media day and a separate approval. Replace the Coming Soon page only with approved names and photos.
