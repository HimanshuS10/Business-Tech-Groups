# Business Technologies Guelph

Public site for the student-led club at the University of Guelph.

## Update content

Edit the files in `data/` instead of hard-coding copy into pages.

- `data/site.ts` — name, navigation, social links, corporate contact, debut figures
- `data/events.ts` — upcoming and past events. Leave time, venue, and registration blank until they are confirmed. Add `imageSrc` only for approved photography.
- `data/partnerships.ts` — partnership descriptions. Do not add prices until leadership confirms a single set.
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
