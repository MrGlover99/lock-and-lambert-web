# Lock & Lambert — Web

Short-term rentals on the Delaware. A place at the lock. A place on Lambert.

This is the customer-facing brand site at **lockandlambert.com**. Booking is handled by the embedded Guesty Booking Engine widget; the Guesty Booking Website at `lockandlambert.guestybookings.com` remains live as a backup.

Ownership: Lock & Lambert is owned and operated solely by Zachary Glover. Voice is first-person singular ("I"), not "we." Sister to The Burgerly through the founder, not through corporate structure.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Cormorant Garamond (display) + Inter (body) — bundled via `@fontsource/*`
- **Booking:** Guesty Booking Engine (embedded widget)
- **Data:** Supabase (email signups)
- **Hosting:** Vercel
- **Package manager:** pnpm

## Local dev

```bash
pnpm install
cp .env.example .env.local   # fill in the values
pnpm dev
```

Then open http://localhost:3000.

## Structure

```
lock-and-lambert-web/
├── src/
│   ├── app/                    # App Router routes
│   │   ├── layout.tsx          # root layout — fonts, <Header>, <Footer>
│   │   ├── page.tsx            # /
│   │   ├── stay/page.tsx       # /stay (Guesty search widget)
│   │   ├── properties/
│   │   │   └── [slug]/page.tsx # /properties/main-st-hideaway, etc.
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── not-found.tsx       # "That door's not here."
│   │   └── globals.css
│   ├── components/             # Header, Footer, Hero, PropertyCard, ...
│   └── lib/
│       ├── properties.ts       # property metadata (slug, title, fact strip, photos)
│       └── supabase.ts         # Supabase client
├── public/
│   ├── photos/                 # property photography (download from Airbnb library)
│   └── logo/                   # L&L logo SVGs
└── supabase/
    └── migrations/             # SQL migrations
```

## Brand constitution

This site is built against:

- **L&L Constitution Index** — `/Users/zacharysimmons/The Burgerly/Lock and Lambert/Brand Source of Truth/00 - START HERE - L&L Constitution Index.md`
- **v2 site spec (active)** — `2026-05-20-TASK-033c-v2-lock-and-lambert-custom-site-spec.md`
- **v2 copy (tight)** — `2026-05-20-TASK-033c-v2-lock-and-lambert-copy-tight.md`
- **v1 brand decisions §1** — `2026-05-20-TASK-033c-lock-and-lambert-site-spec.md` (palette, typography, 21 hard rules)

**L&L is not The Burgerly.** Voice, palette, typography, hard rules, and ownership are different. Do not cross-pollinate without explicit founder direction.

## Properties

| Slug | Listing | Sleeps | Building |
|---|---|---|---|
| `main-st-hideaway` | Main St Hideaway w/ Canal Access | 6 | 137 S. Main, New Hope, PA |
| `lambert-unit-1` | River View Retreat: Unit 1 | 4 | 13 Lambert Ln, Lambertville, NJ (ground floor) |
| `lambert-unit-2` | River View Retreat: Unit 2 | 4 | 13 Lambert Ln, Lambertville, NJ (upstairs) |
| `lambert-house` | River View Retreat: Entire House | 8 | 13 Lambert Ln, Lambertville, NJ (both units) |

## Deployment

Push to `main` → Vercel auto-deploys. Production domain `lockandlambert.com` cuts over post-audit (tracked as TASK-033c.3 in Burgerly's master backlog).
