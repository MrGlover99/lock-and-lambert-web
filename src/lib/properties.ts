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
    cardHeadline: 'Above 137 South Main, the towpath at the back door',
    factStrip: '2 bedrooms · 3 queen beds · sleeps 6 · canal-side patio · smartlock · pets welcome',
    seoDescription:
      'A two-bedroom apartment above 137 South Main in New Hope, Pennsylvania — dark walls, warm light, three queen beds, and a canal-side patio that opens onto the Delaware Canal towpath. Sleeps six.',
    address: '137 S. Main Street (Rear), New Hope, PA 18938',
    town: 'New Hope, PA',
    detailBody:
      'Up a private stair at the back of 137 South Main is a two-bedroom apartment that feels older and warmer than the street below it. The walls are dark, the lamps throw a low copper light, and the floors carry the gentle unevenness of a building that has stood a long time. There is a leather couch, a wall of books, a panel of stained glass that catches the afternoon. It sleeps six across three queen beds, and the kitchen is stocked well enough that you could cook here all weekend and want to.\n\nThe two doors are the pleasure of the place. Step out the front and you are on Main Street, New Hope, with the shops, the galleries, and the Delaware all a short walk in either direction. Step out the back and you are on the canal towpath — the water moving quietly past, a weathered lockhouse a few steps along, the lock that gave the brand half its name. Carry a coffee out to the canal-side patio, and the morning is yours.',
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
    title: 'The Ground-Floor Apartment on Lambert Lane',
    shortTitle: 'Lambert Lane — Ground Floor',
    cardHeadline: 'The ground-floor apartment on Lambert Lane',
    factStrip: '1 bedroom · queen + sofa bed · sleeps 4 · fenced river yard · smartlock · pets welcome',
    seoDescription:
      'The light-filled ground-floor apartment of a duplex on Lambert Lane in Lambertville, New Jersey — one bedroom, a fenced yard down to the Delaware with a fire pit, single-level, pets welcome. Sleeps four.',
    address: '13 Lambert Lane, Apt 1, Lambertville, NJ 08530',
    town: 'Lambertville, NJ',
    detailBody:
      "The ground floor of a two-apartment house on Lambert Lane, a quiet street that ends at the river. Inside, it is light where the New Hope place is dark — pale walls, soft blush and green, everything on one level with no stairs to manage. One bedroom holds a queen; the living room has a full pullout, so the apartment sleeps four without anyone feeling sent to the couch. The kitchen is stocked to cook in, and there is a proper table to gather around.\n\nThe back of the house is the reason to book it. A fully fenced yard runs down toward the Delaware — patio chairs, a fire pit, a grill, a couple of bikes leaning by the fence — and the river is right there, just past the rails. Through the trees you can see the green truss of the bridge to New Hope, five minutes away on foot.\n\nIt is an easy place to arrive with a dog, or a small child, or both — and we keep it ready for exactly that.",
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
      'Lambert Lane is a quiet street in Lambertville that runs down to the Delaware. The river is just past the back fence, and the bridge across to New Hope is a five-minute walk from the door.',
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
    title: 'The Upstairs Apartment on Lambert Lane',
    shortTitle: 'Lambert Lane — Upstairs',
    cardHeadline: 'The upstairs apartment, with the porch over the river',
    factStrip: '2 bedrooms · king + queen · sleeps 4 · porch over the Delaware · smartlock · pets welcome',
    seoDescription:
      'The upstairs apartment on Lambert Lane in Lambertville, New Jersey — two bedrooms, two baths, and a second-floor porch set above the Delaware. Sleeps four.',
    address: '13 Lambert Lane, Apt 2, Lambertville, NJ 08530',
    town: 'Lambertville, NJ',
    detailBody:
      "The whole upper floor of the Lambert Lane house, with the river in nearly every window. There are two bedrooms — one with a king, one with a queen — and each has its own bathroom, which makes it an easy place for two couples, or for a family that wants a little distance from one another at the end of the day. A long sectional fills the living room, angled, like everything up here, toward the water.\n\nThe porch is what people remember. It runs the length of the second floor above the Delaware, close enough to hear the water, and it is the right place to be — with a coffee in the early light, or after dark once the town has gone quiet. The bridge to New Hope stands just downriver; the walk across takes five minutes.\n\nThe kitchen is stocked to cook in and the table seats everyone. Bring a dog if you have one — they are welcome up here too.",
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
      'Lambert Lane is a quiet Lambertville street that ends at the river. From the upstairs porch the Delaware is right below you, and the bridge over to New Hope is a five-minute walk away.',
    airbnbListingId: '1169355149577601589',
    airbnbUrl: 'https://www.airbnb.com/rooms/1169355149577601589',
    guestyListingId: '677530f1ec75700012a49d9f',
    guestyWidgetEnvVar: 'NEXT_PUBLIC_GUESTY_LISTING_WIDGET_LAMBERT_UNIT_2',
    photoSlugs: [
      // Hero swapped to porch-river per founder direction 2026-05-20 —
      // Unit 2's marquee feature is the second-floor porch over the Delaware,
      // not the interior. Place-anchor faster.
      'porch-river',
      'living-sectional-river',
      'living-alt',
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
    title: 'The Whole House on Lambert Lane',
    shortTitle: 'The Whole House',
    cardHeadline: 'The whole house on Lambert Lane',
    factStrip: '3 bedrooms · 3 baths · sleeps 8 · both apartments · fenced river yard · pets welcome',
    seoDescription:
      'Both apartments of the Lambert Lane duplex in Lambertville, booked together — three bedrooms, three baths, a fenced yard down to the Delaware, and a porch over the water. Sleeps eight.',
    address: '13 Lambert Lane, Lambertville, NJ 08530',
    town: 'Lambertville, NJ',
    detailBody:
      "Book both apartments together and the whole house on Lambert Lane is yours — three bedrooms, three bathrooms, and room for eight, with the fenced yard and the river to share between you.\n\nIt is the right call for the kind of trip where one household is not quite the whole party: two families travelling together, a group of old friends, a small reunion. Everyone gets a real bed and a door that closes, and nobody is negotiating over a bathroom. The downstairs apartment opens flat onto the yard and the fire pit; the upstairs one has the porch above the water. You can gather on one floor and slip away to the other.\n\nIt is the same house, simply taken whole — two kitchens, both stocked, and the bridge to New Hope five minutes away on foot.",
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
      'Lambert Lane is a quiet street in Lambertville that runs down to the Delaware. The whole house is yours — the fenced yard, the porch above the water, and the river just past the back fence. New Hope is a five-minute walk across the bridge.',
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
