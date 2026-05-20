# Photo asset library

This folder holds property photography. Each property gets its own subfolder named after its slug:

```
public/photos/
├── main-st-hideaway/
├── lambert-unit-1/
├── lambert-unit-2/
└── lambert-house/      # reuses lambert-unit-1 + lambert-unit-2 photos
```

## Where to get the photos

Per v2 spec §6 — pull from the existing Airbnb host editor. All shots are owned by Zach; no licensing concerns.

1. Log in to the Airbnb host dashboard.
2. Each listing → Photo tour → download source files.
3. Drop into the per-property subfolder using the photo slugs declared in `src/lib/properties.ts`.

## Naming convention

Each property's `photoSlugs` array in `src/lib/properties.ts` is the source of truth for filenames. The first photo slug is the card hero (used on the home page property grid).

For example, `main-st-hideaway/hero-canal-exterior.jpg` is the canal-side white-clapboard shot.

## Format

- JPEG or WebP. Next.js Image component will optimize at build time.
- 16:9 source aspect ratio recommended (carousels use 16:9 desktop / 4:5 mobile crop).
- Minimum 2400px on the long edge for hero images.

## Treatment rules (v2 spec §6.3)

- **No filters that change the color story.**
- **No people in hero photos** except the optional "guest stand-in walking the towpath at golden hour" — and only if it doesn't read as stock.
- **No stock photography. No AI imagery.** L&L Hard Rule (inherited Burgerly #4 + #5).

## Until photos are downloaded

The site renders with brand-color-block placeholders. The build still ships. Photos are a hot-swap.
