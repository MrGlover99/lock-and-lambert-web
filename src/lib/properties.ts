/**
 * Property metadata — single source of truth for all 4 listings.
 *
 * Copy is in the literary boutique voice locked under TASK-046:
 *   /Users/zacharysimmons/The Burgerly/Lock and Lambert/Brand Source of
 *     Truth/01 - Brand Voice and Copy.md
 * (This supersedes the retired 2026-05-20-TASK-033c-v2 "tight" copy doc.)
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

export interface GuestReview {
  /** Verbatim guest words (may be a faithful excerpt). */
  body: string;
  author: string;
  /** Where the guest is from, or when they stayed. */
  attribution: string;
}

export interface Property {
  slug: PropertySlug;
  title: string;
  shortTitle: string;
  cardHeadline: string;
  factStrip: string;
  /** One-sentence, brand-voiced SEO meta description */
  seoDescription: string;
  address: string;
  town: 'New Hope, PA' | 'Lambertville, NJ';
  detailBody: string;
  sleeps: number;
  /** Real Airbnb rating, review count and badge — current as of the
   * Phase 0.5 account audit (2026-05-20). */
  rating: { value: number; count: number; badge: string };
  /** Verbatim guest reviews from the Airbnb listings. May be empty until
   * more are pasted in (the River Deck + Whole House await their quotes). */
  reviews: GuestReview[];
  /** Grouped amenities, brand-voiced, pulled from Airbnb 2026-05-20 */
  amenities: AmenityGroup[];
  whereYoullBe: string;
  airbnbListingId: string;
  airbnbUrl: string;
  /** Guesty internal listing id — used to deep-link to the Guesty Booking
   * Website's per-property page. Captured from
   * lockandlambert.guestybookings.com 2026-05-20. */
  guestyListingId: string;
  guestyWidgetEnvVar: string;
  photoSlugs: string[];
  showInHomeGrid: boolean;
  isBundle: boolean;
}

/** Construct the Guesty Booking Website deep-link for a property.
 * Lands the guest on the matching property page (photos + description + date
 * picker + Book Now), preserving context vs. dumping them on the generic
 * search page.
 */
export function getGuestyBookingUrl(property: Property): string {
  const base =
    process.env.NEXT_PUBLIC_GUESTY_BOOKING_WEBSITE_URL ??
    'https://lockandlambert.guestybookings.com';
  return `${base}/en/properties/${property.guestyListingId}?minOccupancy=1`;
}

export const PROPERTIES: Record<PropertySlug, Property> = {
  'main-st-hideaway': {
    slug: 'main-st-hideaway',
    title: 'Main St Hideaway',
    shortTitle: 'Main St Hideaway',
    cardHeadline: 'Main Street, New Hope — the towpath at the back door',
    factStrip: '2 bedrooms · 3 queen beds · sleeps 6 · canal-side patio · smartlock · pets welcome',
    seoDescription:
      'A two-bedroom home on the upper floor of a building on Main Street in New Hope, Pennsylvania — dark walls, warm light, three queen beds, a canal-side patio, and the towpath out the back door. Sleeps six.',
    address: '137 S. Main Street (Rear), New Hope, PA 18938',
    town: 'New Hope, PA',
    detailBody:
      'Main Street, New Hope — the middle of everything, with the Delaware Canal and its towpath just out the back. The whole upper floor of the building is yours: dark walls, a low copper light, floors with the gentle unevenness of a place that has stood a long time, a leather couch and a wall of books and a panel of stained glass that catches the afternoon. It sleeps six across three queen beds, and the kitchen is stocked well enough that you could cook here all weekend and want to.\n\nOut the front door, New Hope is yours to walk — the shops and galleries, the riverfront, the Bucks County Playhouse, dinner wherever you like. Out the back, the patio opens straight onto the canal towpath, a weathered lockhouse a few steps along — the lock that gave the brand half its name. The middle of town and the quiet of the canal, ten steps apart.',
    sleeps: 6,
    rating: { value: 5.0, count: 65, badge: 'Guest Favorite' },
    reviews: [
      {
        body: 'Walking distance to everything in town... beds were very comfortable. The decor was beautiful.',
        author: 'Tristin',
        attribution: 'March 2026',
      },
      {
        body: 'The place is just like the pictures. Clean and stocked, just perfect.',
        author: 'Jeneen',
        attribution: 'March 2026',
      },
      {
        body: 'Charming, comfortable, and in such a beautiful setting. Everything felt thoughtfully prepared.',
        author: 'Dominika',
        attribution: 'March 2026',
      },
    ],
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
      'You are on South Main Street in New Hope — its shops, its galleries, and the Delaware all a short walk away. The back door opens straight onto the canal towpath, with a lock and its weathered lockhouse a few steps along.',
    airbnbListingId: '1424556113810378284',
    airbnbUrl: 'https://www.airbnb.com/rooms/1424556113810378284',
    guestyListingId: '682b4b80ed3fbf0010d99ac8',
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
    title: 'The Garden Level on Lambert Lane',
    shortTitle: 'The Garden Level',
    cardHeadline: 'The Garden Level — the river just past the fence',
    factStrip: '1 bedroom · queen + sofa bed · sleeps 4 · fenced river garden · smartlock · pets welcome',
    seoDescription:
      'The garden level of a house on Lambert Lane in Lambertville, New Jersey — a fenced lawn down to the Delaware, a fire pit, one bedroom, single-level, pets welcome. Sleeps four.',
    address: '13 Lambert Lane, Apt 1, Lambertville, NJ 08530',
    town: 'Lambertville, NJ',
    detailBody:
      "Lambert Lane runs down to the Delaware, and so does the garden level: a fully fenced lawn, a fire pit, a couple of chairs, and the river right there, just past the rails. Through the trees stands the green truss of the bridge to New Hope, a few minutes away on foot — and the antique shops, galleries and restaurants of Lambertville are closer still.\n\nInside, it is light and easy — pale walls, soft blush and green, a single level with no stairs to manage. One bedroom holds a queen, and the living room has a full pullout, so it sleeps four without anyone feeling sent to the couch. The kitchen is stocked to cook in, with a proper table to gather around.\n\nIt is a calm, uncomplicated place for a weekend — and an easy one to arrive at with a dog, or a small child, or both. We keep it ready for exactly that.",
    sleeps: 4,
    rating: { value: 4.98, count: 112, badge: 'Guest Favorite' },
    reviews: [
      {
        body: 'Warm, welcoming, and comfortable... beautifully decorated.',
        author: 'Rachel',
        attribution: 'April 2026',
      },
      {
        body: "I immediately put on yacht rock as soon as I walked in the door. The setting and location in Lambertville couldn't be more perfect.",
        author: 'Pamela',
        attribution: 'New York City',
      },
    ],
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
      'Lambert Lane is a quiet street in Lambertville that runs down to the Delaware. The fenced garden ends at the river, and the bridge across to New Hope is a few minutes on foot from the door.',
    airbnbListingId: '1112719828551581049',
    airbnbUrl: 'https://www.airbnb.com/rooms/1112719828551581049',
    guestyListingId: '677530f0999ee70012ff9be5',
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
    title: 'The River Deck on Lambert Lane',
    shortTitle: 'The River Deck',
    cardHeadline: 'The River Deck — the upper floor, over the Delaware',
    factStrip: '2 bedrooms · king + queen · sleeps 4 · deck over the Delaware · smartlock · pets welcome',
    seoDescription:
      'The upper floor of a house on Lambert Lane in Lambertville, New Jersey — two bedrooms, two baths, and a wide deck set above the Delaware, steps from the bridge to New Hope. Sleeps four.',
    address: '13 Lambert Lane, Apt 2, Lambertville, NJ 08530',
    town: 'Lambertville, NJ',
    detailBody:
      "From the upper floor of the house on Lambert Lane, the Delaware fills nearly every window — a real river view, not a distant glimpse of one. The deck is the heart of it: a wide one, set just above the water, with the green truss of the bridge to New Hope standing a short way downriver. The walk across takes five minutes, and the shops and restaurants of Lambertville sit at the end of the lane — close to everything, weddings in the river towns included.\n\nTwo bedrooms, a king and a queen, each with its own bathroom — easy for two couples, or for a family that wants a little distance at the end of the day. A long sectional fills the living room, angled, like everything up here, toward the water. The deck is the place you will keep going back to: a coffee in the early light, the river going by, the town gone quiet after dark.\n\nThe kitchen is stocked to cook in and the table seats everyone. Bring a dog if you have one — they are welcome up here too.",
    sleeps: 4,
    rating: { value: 4.99, count: 103, badge: 'Guest Favorite' },
    reviews: [],
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
          'Second-floor deck over the Delaware',
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
      'Lambert Lane is a quiet Lambertville street that ends at the river. From the upstairs deck the Delaware is right below you, and the bridge over to New Hope is a five-minute walk away.',
    airbnbListingId: '1169355149577601589',
    airbnbUrl: 'https://www.airbnb.com/rooms/1169355149577601589',
    guestyListingId: '677530f1ec75700012a49d9f',
    guestyWidgetEnvVar: 'NEXT_PUBLIC_GUESTY_LISTING_WIDGET_LAMBERT_UNIT_2',
    photoSlugs: [
      // Hero leads with the river-deck shot (file: porch-river.jpg) — the
      // River Deck's wide deck over the Delaware is the marquee feature,
      // not the interior. Place-anchor faster.
      'porch-river',
      'living-sectional-river',
      'living-alt',
      'exterior-rear',
      'bedroom-king',
      'bedroom-king-alt',
      'bedroom-queen',
      'kitchen',
      'kitchen-alt',
      'bathroom-master',
      'dining-area',
      'bedroom-queen-alt',
    ],
    showInHomeGrid: true,
    isBundle: false,
  },
  'lambert-house': {
    slug: 'lambert-house',
    title: 'The Whole House on Lambert Lane',
    shortTitle: 'The Whole House',
    cardHeadline: 'The whole house on Lambert Lane',
    factStrip: '3 bedrooms · 3 baths · sleeps 8 · both floors · garden + river deck · pets welcome',
    seoDescription:
      'Both floors of the house on Lambert Lane in Lambertville, booked together — three bedrooms, three baths, a fenced river garden, and a wide deck above the water. Sleeps eight.',
    address: '13 Lambert Lane, Lambertville, NJ 08530',
    town: 'Lambertville, NJ',
    detailBody:
      "Book both floors together and the whole house on Lambert Lane is yours — three bedrooms, three bathrooms, room for eight, with the garden and the river to share between you.\n\nIt is the house for the trip where one household is not quite the whole party: two families travelling together, a group of old friends, a small reunion, a wedding weekend that wants to stay under one roof. Everyone gets a real bed and a door that closes, and nobody is negotiating over a bathroom. The garden level opens flat onto the lawn and the fire pit; the river deck sits above the water upstairs. You can gather on one floor and slip away to the other.\n\nTwo kitchens, both stocked, the Delaware just past the back fence, and the bridge to New Hope five minutes away on foot.",
    sleeps: 8,
    rating: { value: 5.0, count: 25, badge: 'Guest Favorite' },
    reviews: [],
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
          'Second-floor deck over the Delaware',
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
      'Lambert Lane is a quiet street in Lambertville that runs down to the Delaware. The whole house is yours — the garden, the deck above the water, and the river just past the back fence. New Hope is a five-minute walk across the bridge.',
    airbnbListingId: '1171507131547148743',
    airbnbUrl: 'https://www.airbnb.com/rooms/1171507131547148743',
    guestyListingId: '677530f016c6d400123fb70e',
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
