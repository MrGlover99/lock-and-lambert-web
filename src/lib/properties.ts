/**
 * Property metadata — single source of truth for all 4 listings.
 *
 * Copy is locked in v2 copy doc:
 *   /Users/zacharysimmons/The Burgerly/Brand Source of Truth/Outputs/
 *     2026-05-20-TASK-033c-v2-lock-and-lambert-copy-tight.md
 *
 * Airbnb listing IDs from Phase 0.5 inventory.
 * Amenities pulled from each Airbnb listing's "Show all amenities" modal
 * 2026-05-20 via Chrome navigation, then curated for L&L voice (no
 * generic-Airbnb adjectives, ingredient-list rhythm, group-by-category).
 *
 * Guesty widget IDs read from env at render time
 * (see .env.example NEXT_PUBLIC_GUESTY_LISTING_WIDGET_*).
 */

export type PropertySlug =
  | 'main-st-hideaway'
  | 'lambert-unit-1'
  | 'lambert-unit-2'
  | 'lambert-house';

export interface AmenityGroup {
  group: string;
  items: string[];
}

export interface Property {
  slug: PropertySlug;
  title: string;
  shortTitle: string;
  cardHeadline: string;
  factStrip: string;
  address: string;
  town: 'New Hope, PA' | 'Lambertville, NJ';
  detailBody: string;
  sleeps: number;
  /** Grouped amenities, brand-voiced, pulled from Airbnb 2026-05-20 */
  amenities: AmenityGroup[];
  whereYoullBe: string;
  airbnbListingId: string;
  airbnbUrl: string;
  guestyWidgetEnvVar: string;
  photoSlugs: string[];
  showInHomeGrid: boolean;
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
      {
        group: 'Check-in & access',
        items: ['Smartlock self check-in', 'Free driveway parking', 'Pets welcome'],
      },
      {
        group: 'Kitchen',
        items: [
          'Full kitchen, stocked to cook',
          'Stove, oven, microwave, dishwasher',
          'Fridge + freezer',
          'Coffee, kettle, toaster, blender',
          'Wine glasses, dishes, cooking basics',
          'Dining table',
        ],
      },
      {
        group: 'Beds & laundry',
        items: ['3 queen beds', '1 bath', 'Washer (in unit)', 'Linens, extra pillows + blankets', 'Iron + hangers'],
      },
      {
        group: 'Bath',
        items: ['Bathtub', 'Hot water', 'Shampoo, conditioner, body soap, shower gel', 'Hair dryer'],
      },
      {
        group: 'Work & rest',
        items: ['Fast Wi-Fi', 'Dedicated workspace', 'TV + sound system', 'Books and reading material'],
      },
      {
        group: 'Comfort',
        items: ['Air conditioning', 'Heating'],
      },
      {
        group: 'Outside',
        items: ['Private canal-side patio', 'Towpath access out the back door'],
      },
      {
        group: 'Safety',
        items: ['Smoke + CO alarms', 'Fire extinguisher', 'First aid kit', 'Exterior security cameras', 'Ring doorbell'],
      },
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
      'bedroom-two',
      'bathroom',
      'patio-towpath',
      'canal-detail',
      'exterior-front',
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
      {
        group: 'Check-in & access',
        items: [
          'Smartlock self check-in',
          'Single-level — no stairs inside',
          'Private street entrance',
          'Metered street parking',
          'Pets welcome',
        ],
      },
      {
        group: 'Kitchen',
        items: [
          'Full kitchen, stocked to cook',
          'Stainless stove, oven, microwave, dishwasher',
          'Keurig coffee, kettle, toaster, blender',
          'Wine glasses, dishes, cooking basics',
          'BBQ utensils',
          'Dining table',
        ],
      },
      {
        group: 'Beds & laundry',
        items: [
          'Queen bed + full sofa pullout',
          '1 bath',
          'Washer + dryer (in unit, free)',
          'Linens, extra pillows + blankets',
          'Room-darkening shades',
          'Iron + hangers + closet',
        ],
      },
      {
        group: 'Bath',
        items: ['Hot water', 'Shampoo, conditioner, body soap, shower gel', 'Hair dryer'],
      },
      {
        group: 'Work & rest',
        items: [
          'Fast Wi-Fi',
          'Dedicated workspace (in a room with a door)',
          'TV',
          'Books and reading material',
        ],
      },
      {
        group: 'Comfort',
        items: ['Air conditioning', 'Radiant heating', 'Baby safety gates'],
      },
      {
        group: 'Outside',
        items: [
          'Private fully-fenced backyard',
          'Patio + outdoor furniture',
          'Outdoor dining area',
          'Fire pit',
          'BBQ grill',
          'Bikes',
          'Waterfront — river right past the fence',
        ],
      },
      {
        group: 'Safety',
        items: [
          'Smoke + CO alarms',
          'Fire extinguisher',
          'First aid kit',
          'Exterior security cameras (backyard, side yard, front porch)',
        ],
      },
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
      'living-room-alt',
      'kitchen',
      'kitchen-alt',
      'bedroom-queen',
      'bedroom-alt',
      'bathroom',
      'sofa-pullout',
      'backyard-river',
      'side-garden',
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
      {
        group: 'Check-in & access',
        items: [
          'Smartlock self check-in',
          'Private street entrance',
          'Metered street parking',
          'Pets welcome',
        ],
      },
      {
        group: 'Kitchen',
        items: [
          'Full kitchen, stocked to cook',
          'Stove, oven, microwave, dishwasher',
          'Keurig coffee, toaster, blender',
          'Wine glasses, dishes, cooking basics',
          'Dining table',
        ],
      },
      {
        group: 'Beds & laundry',
        items: [
          'King + queen — each bedroom has its own bath',
          '2 baths',
          'Washer + dryer (in unit)',
          'Linens, extra pillows + blankets',
          'Room-darkening shades',
          'Iron + hangers',
        ],
      },
      {
        group: 'Bath',
        items: ['Hot water', 'Shampoo, conditioner, body soap, shower gel', 'Hair dryer'],
      },
      {
        group: 'Work & rest',
        items: ['Fast Wi-Fi', 'Dedicated workspace', 'TV', 'Books and reading material'],
      },
      {
        group: 'Comfort',
        items: ['Air conditioning', 'Heating', 'Baby safety gates'],
      },
      {
        group: 'Outside',
        items: [
          'Second-floor porch over the Delaware',
          'Backyard with outdoor dining',
          'Bikes',
        ],
      },
      {
        group: 'Safety',
        items: [
          'Smoke + CO alarms',
          'Fire extinguisher',
          'First aid kit',
          'Exterior security cameras (all sides)',
          'Noise decibel monitors (no audio recording)',
        ],
      },
    ],
    whereYoullBe:
      '13 Lambert Lane, upstairs. The porch opens to the Delaware. The bridge to New Hope is five minutes on foot.',
    airbnbListingId: '1169355149577601589',
    airbnbUrl: 'https://www.airbnb.com/rooms/1169355149577601589',
    guestyWidgetEnvVar: 'NEXT_PUBLIC_GUESTY_LISTING_WIDGET_LAMBERT_UNIT_2',
    photoSlugs: [
      'living-sectional-river',
      'living-alt',
      'porch-river',
      'exterior-front',
      'bedroom-king',
      'bedroom-king-alt',
      'bedroom-queen',
      'kitchen',
      'kitchen-alt',
      'bathroom-master',
      'dining-area',
      'staircase',
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
      {
        group: 'Check-in & access',
        items: [
          'Smartlock self check-in',
          'Private street entrance',
          'Metered street parking',
          'Pets welcome',
          'Both units, all yours',
        ],
      },
      {
        group: 'Kitchens',
        items: [
          'Two full kitchens, both stocked',
          'Stove, oven, microwave, dishwasher in each',
          'Keurig coffee, toaster, blender',
          'Wine glasses, dishes, cooking basics',
          'BBQ utensils + outdoor grill',
          'Dining tables in both units',
        ],
      },
      {
        group: 'Beds & laundry',
        items: [
          'King + queen + queen + full sofa pullout',
          '3 baths',
          'Washer + dryer (in unit)',
          'Linens, extra pillows + blankets',
          'Room-darkening shades',
          'Iron + hangers',
        ],
      },
      {
        group: 'Bath',
        items: ['Bathtub (Unit 2)', 'Hot water', 'Shampoo, conditioner, body soap, shower gel', 'Hair dryer'],
      },
      {
        group: 'Work & rest',
        items: ['Fast Wi-Fi', 'Dedicated workspace', 'TVs in both units', 'Books and reading material'],
      },
      {
        group: 'Comfort',
        items: ['Air conditioning', 'Heating', 'Baby safety gates'],
      },
      {
        group: 'Outside',
        items: [
          'Private fully-fenced backyard',
          'Second-floor porch over the Delaware',
          'Patio + outdoor dining + outdoor furniture',
          'Fire pit',
          'BBQ grill',
          'Bikes',
          'Waterfront — river right past the fence',
        ],
      },
      {
        group: 'Safety',
        items: [
          'Smoke + CO alarms',
          'Fire extinguisher',
          'First aid kit',
          'Exterior security cameras (all sides)',
          'Noise decibel monitors (no audio recording)',
        ],
      },
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
      'bedroom-queen',
      'backyard-river',
    ],
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
