/**
 * Property metadata — single source of truth for all 4 listings.
 *
 * Copy is locked in v2 copy doc:
 *   /Users/zacharysimmons/The Burgerly/Brand Source of Truth/Outputs/
 *     2026-05-20-TASK-033c-v2-lock-and-lambert-copy-tight.md
 *
 * Airbnb listing IDs from Phase 0.5 inventory:
 *   /Users/zacharysimmons/The Burgerly/Brand Source of Truth/Outputs/
 *     2026-05-20-TASK-033-phase-0.5-airbnb-guesty-inventory.md
 *
 * Guesty widget IDs are read from environment variables at render time
 * (see .env.example NEXT_PUBLIC_GUESTY_LISTING_WIDGET_*).
 */

export type PropertySlug =
  | 'main-st-hideaway'
  | 'lambert-unit-1'
  | 'lambert-unit-2'
  | 'lambert-house';

export interface Property {
  slug: PropertySlug;
  /** Public-facing title (matches Airbnb listing) */
  title: string;
  /** Short title used in nav, breadcrumbs, cards */
  shortTitle: string;
  /** Card headline — v2 copy doc Property cards */
  cardHeadline: string;
  /** Fact strip — v2 copy doc, separator: " · " */
  factStrip: string;
  /** Address shown on the property detail page + footer of card */
  address: string;
  /** Town label for tagging / cross-link */
  town: 'New Hope, PA' | 'Lambertville, NJ';
  /** Detail body — the editorial paragraph, v2 copy doc Property detail pages */
  detailBody: string;
  /** Sleeps */
  sleeps: number;
  /** Amenity callouts — sparse text strip per v2 spec §3.3 §4 */
  amenities: string[];
  /** "Where you'll be" prose per v2 spec §3.3 §5 */
  whereYoullBe: string;
  /** Airbnb listing ID */
  airbnbListingId: string;
  /** Airbnb public URL */
  airbnbUrl: string;
  /**
   * Env var name carrying the Guesty per-property widget script src
   * (per .env.example). Pulled lazily on the detail page.
   */
  guestyWidgetEnvVar: string;
  /**
   * Photo slugs — file basenames inside /public/photos/[slug]/.
   * Photos are placeholder-flagged until Zach downloads from the Airbnb library.
   * Carousel iterates this array in order; first photo is also the card hero.
   */
  photoSlugs: string[];
  /** Whether this property appears in the home-page 3-up grid */
  showInHomeGrid: boolean;
  /** Whether this is a bundle SKU (RVR Entire House) */
  isBundle: boolean;
}

export const PROPERTIES: Record<PropertySlug, Property> = {
  'main-st-hideaway': {
    slug: 'main-st-hideaway',
    title: 'Main St Hideaway w/ Canal Access',
    shortTitle: 'Main St Hideaway',
    cardHeadline: 'Above 137 S. Main. The towpath out back.',
    factStrip: '2 bedrooms · 3 queens · sleeps 6 · canal-side patio · smartlock · pets',
    address: '137 S. Main Street (Rear), New Hope, PA 18938',
    town: 'New Hope, PA',
    detailBody:
      'Two bedrooms upstairs at the back of the building. Three queens. The back door opens onto the canal and the towpath. The front door opens onto Main Street. The wooden lockhouse is right there.\n\nDownstairs, the same building: The Burgerly.',
    sleeps: 6,
    amenities: [
      'Smartlock',
      'Stocked kitchen',
      'Fast Wi-Fi',
      'Pets welcome',
      '3 queen beds',
      '1 bath',
      'Driveway parking',
    ],
    whereYoullBe:
      "137 S. Main, New Hope. The back door opens onto the towpath. The Burgerly is downstairs.",
    airbnbListingId: '1424556113810378284',
    airbnbUrl: 'https://www.airbnb.com/rooms/1424556113810378284',
    guestyWidgetEnvVar: 'NEXT_PUBLIC_GUESTY_LISTING_WIDGET_MAIN_ST_HIDEAWAY',
    photoSlugs: [
      'hero-canal-exterior',
      'living-stained-glass',
      'living-wide',
      'living-leather-couch',
      'kitchen',
      'dining-nook',
      'bedroom-one',
      'patio-towpath',
    ],
    showInHomeGrid: true,
    isBundle: false,
  },
  'lambert-unit-1': {
    slug: 'lambert-unit-1',
    title: 'River View Retreat: Unit 1',
    shortTitle: 'Lambert Unit 1',
    cardHeadline: 'Ground floor. 13 Lambert Lane.',
    factStrip: '1 bedroom · queen + sofa bed · sleeps 4 · river view · smartlock · pets',
    address: '13 Lambert Lane, Apt 1, Lambertville, NJ 08530',
    town: 'Lambertville, NJ',
    detailBody:
      'Ground-floor unit in a duplex on Lambert Lane. One bedroom with a queen. Living room with a full pullout. Stocked kitchen. Private backyard, river just past the fence. The New Hope-Lambertville bridge is five minutes on foot.',
    sleeps: 4,
    amenities: [
      'Smartlock',
      'Stocked kitchen',
      'Fast Wi-Fi',
      'Pets welcome',
      'Queen bed',
      'Sofa pullout',
      'Private backyard',
      'Metered street parking',
    ],
    whereYoullBe:
      '13 Lambert Lane, Lambertville. The river is just past the fence. The bridge to New Hope is five minutes on foot.',
    airbnbListingId: '1112719828551581049',
    airbnbUrl: 'https://www.airbnb.com/rooms/1112719828551581049',
    guestyWidgetEnvVar: 'NEXT_PUBLIC_GUESTY_LISTING_WIDGET_LAMBERT_UNIT_1',
    photoSlugs: [
      'hero-backyard-bridge',
      'exterior-front',
      'living-room',
      'kitchen',
      'bedroom-queen',
      'bathroom',
      'sofa-pullout',
    ],
    showInHomeGrid: true,
    isBundle: false,
  },
  'lambert-unit-2': {
    slug: 'lambert-unit-2',
    title: 'River View Retreat: Unit 2',
    shortTitle: 'Lambert Unit 2',
    cardHeadline: 'Upstairs. 13 Lambert Lane.',
    factStrip: '2 bedrooms · king + queen · sleeps 4 · river-view porch · smartlock · pets',
    address: '13 Lambert Lane, Apt 2, Lambertville, NJ 08530',
    town: 'Lambertville, NJ',
    detailBody:
      'Upstairs unit at 13 Lambert Lane. Two bedrooms — a king, a queen — each with its own bath. Big sectional in the living room. A second-floor porch that opens to the Delaware.',
    sleeps: 4,
    amenities: [
      'Smartlock',
      'Stocked kitchen',
      'Fast Wi-Fi',
      'Pets welcome',
      'King + queen beds',
      '2 baths',
      'River-view porch',
      'Metered street parking',
    ],
    whereYoullBe:
      '13 Lambert Lane, upstairs. The porch opens to the Delaware. The bridge to New Hope is five minutes on foot.',
    airbnbListingId: '1169355149577601589',
    airbnbUrl: 'https://www.airbnb.com/rooms/1169355149577601589',
    guestyWidgetEnvVar: 'NEXT_PUBLIC_GUESTY_LISTING_WIDGET_LAMBERT_UNIT_2',
    photoSlugs: [
      'living-sectional-river',
      'porch-river',
      'exterior-front',
      'bedroom-king',
      'bedroom-queen',
      'kitchen',
      'bathroom-master',
    ],
    showInHomeGrid: true,
    isBundle: false,
  },
  'lambert-house': {
    slug: 'lambert-house',
    title: 'River View Retreat: Entire House',
    shortTitle: 'The Whole House',
    cardHeadline: 'The whole house. 13 Lambert Lane.',
    factStrip: '3 bedrooms · sleeps 8 · both units · river · pets',
    address: '13 Lambert Lane, Lambertville, NJ 08530',
    town: 'Lambertville, NJ',
    detailBody:
      'Book both Lambert units together. The whole duplex. Three bedrooms, three baths, sleeps eight. Private backyard. Same river. Same bridge.',
    sleeps: 8,
    amenities: [
      'Smartlock',
      'Two stocked kitchens',
      'Fast Wi-Fi',
      'Pets welcome',
      'Both units combined',
      '3 bedrooms / 3 baths',
      'Private backyard',
      'Metered street parking',
    ],
    whereYoullBe:
      '13 Lambert Lane — the whole house. Private backyard. River just past the fence.',
    airbnbListingId: '1171507131547148743',
    airbnbUrl: 'https://www.airbnb.com/rooms/1171507131547148743',
    guestyWidgetEnvVar: 'NEXT_PUBLIC_GUESTY_LISTING_WIDGET_LAMBERT_HOUSE',
    photoSlugs: [
      'hero-backyard-bridge',
      'exterior-front',
      'living-sectional-river',
      'porch-river',
      'kitchen',
      'bedroom-king',
    ],
    // Per v2 spec §3 — bundle does not appear in the home grid, but is reachable
    // via the secondary text link "Booking both Lambert units? See the whole house."
    showInHomeGrid: false,
    isBundle: true,
  },
};

export const HOME_GRID_PROPERTIES: Property[] = Object.values(PROPERTIES).filter(
  (p) => p.showInHomeGrid,
);

export function getProperty(slug: string): Property | undefined {
  return PROPERTIES[slug as PropertySlug];
}

export const ALL_SLUGS: PropertySlug[] = Object.keys(PROPERTIES) as PropertySlug[];
