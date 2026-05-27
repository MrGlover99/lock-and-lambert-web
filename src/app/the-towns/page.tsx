import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { EmailCapture } from '@/components/EmailCapture';
import { Button } from '@/components/Button';

/**
 * /the-towns — a guide to New Hope, PA and Lambertville, NJ.
 *
 * Founder-directed (TASK-046 SEO follow-on, 2026-05-20), then restructured
 * so each attraction is a clearly titled, scannable entry while keeping the
 * literary voice in the descriptions.
 *
 * Hard Rule #3 holds — no competing inn, hotel, rental or restaurant is
 * named. Cultural attractions, parks and the canal are named freely.
 * Attraction facts verified May 2026 (Visit Bucks County, Delaware Canal
 * State Park, the Bucks County Playhouse, regional press).
 */

export const metadata: Metadata = {
  title: 'Things to do in New Hope & Lambertville',
  description:
    'A guide to New Hope, Pennsylvania and Lambertville, New Jersey — the Delaware Canal towpath, the Bucks County Playhouse, antique shops and galleries, the river, and a walkable weekend between two towns.',
};

interface Attraction {
  name: string;
  body: string;
}

const NEW_HOPE: Attraction[] = [
  {
    name: 'The Bucks County Playhouse',
    body: "Founded in 1939 in an old mill on the riverbank, the Playhouse still stages a full season and is well regarded among the East Coast's regional theatres. Worth seeing what is on before you come.",
  },
  {
    name: 'The Delaware Canal towpath',
    body: 'The towpath that runs behind our Main Street place follows the canal for miles in either direction — level, quiet, and made for a long walk or an easy bike ride.',
  },
  {
    name: 'Main Street, New Hope',
    body: 'The length of the town is galleries, bookshops, antique dealers and places to eat. It is the kind of street that rewards an afternoon with no particular plan.',
  },
  {
    name: 'The New Hope Railroad',
    body: 'Vintage trains run a short, scenic loop out into the Bucks County countryside — an easy hour, and a long-standing favourite with children.',
  },
  {
    name: "Bowman's Hill Wildflower Preserve",
    body: 'A little south of town, the preserve keeps trails through native woods and meadows. It rewards the short drive, especially in spring.',
  },
];

const LAMBERTVILLE: Attraction[] = [
  {
    name: 'Antiques and galleries',
    body: "Lambertville is one of the region's great antiquing towns — more than twenty galleries and shops, including a much-loved emporium that fills four floors of an 1839 building with furniture, art, lighting and old clothes.",
  },
  {
    name: 'Bridge Street',
    body: "The town's main street, and the lanes that run off it, hold galleries, makers and cafés — a smaller, slower browse than New Hope, with fewer people on the pavement.",
  },
  {
    name: 'The riverfront and the canal',
    body: 'The Delaware and the canal give you the same slow water New Hope does, on a quieter bank. Lambert Lane, where two of our places sit, runs right down to it.',
  },
];

function P({ children }: { children: React.ReactNode }) {
  return <p className="prose-editorial text-ink">{children}</p>;
}

function AttractionEntry({ name, body, onInk = false }: Attraction & { onInk?: boolean }) {
  return (
    <div className={`border-t pt-6 ${onInk ? 'border-cream/15' : 'border-stone/20'}`}>
      <h3
        className={`font-display font-medium mb-2 ${onInk ? 'text-cream' : 'text-ink'}`}
        style={{ fontSize: 'clamp(1.25rem, 2vw, 1.6rem)' }}
      >
        {name}
      </h3>
      <p className={`prose-editorial ${onInk ? 'text-cream/90' : 'text-ink'}`}>{body}</p>
    </div>
  );
}

export default function TheTownsPage() {
  return (
    <>
      <Hero
        variant="band"
        photoSrc="/photos/brand/bridge-delaware.jpg"
        photoAlt="The New Hope-Lambertville Bridge over the Delaware River, joining the two towns"
        placeholderCaption="New Hope and Lambertville, across the river"
        headline={
          <>
            New Hope <span className="brand-italic">&amp;</span> Lambertville
          </>
        }
        subhead="Two towns, one river — and a long weekend's worth of things to do."
      />

      {/* Intro */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
          <P>
            A stay with Lock <span className="brand-italic">&amp;</span> Lambert puts you in two
            towns at once. New Hope sits on the Pennsylvania bank of the Delaware; Lambertville
            faces it from New Jersey; the bridge between them takes about five minutes to walk.
            Park once and you can spend a whole weekend on foot, crossing the water whenever the
            mood takes you.
          </P>
          <P>Here is some of what we would point you toward.</P>
        </div>
      </section>

      {/* New Hope */}
      <section className="bg-cream pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-medium text-ink mb-4"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)' }}
          >
            New Hope
          </h2>
          <p className="prose-editorial text-ink mb-10">
            The busier of the two — a river town that has drawn artists, walkers and weekenders for
            the better part of a century. A few things worth building a day around:
          </p>
          <div className="space-y-7 sm:space-y-8">
            {NEW_HOPE.map((a) => (
              <AttractionEntry key={a.name} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* Lambertville */}
      <section className="bg-ink text-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-medium text-cream mb-4"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)' }}
          >
            Lambertville
          </h2>
          <p className="prose-editorial text-cream/90 mb-10">
            Cross the bridge and Lambertville is the quieter half of the pair — smaller, calmer,
            and, for a town its size, remarkably full of things to look at.
          </p>
          <div className="space-y-7 sm:space-y-8">
            {LAMBERTVILLE.map((a) => (
              <AttractionEntry key={a.name} {...a} onInk />
            ))}
          </div>
        </div>
      </section>

      {/* For dinner -- the one curated dining recommendation. Per file 01
          v1.1 §11 (Burgerly cross-reference, narrowly permitted): The
          Burgerly is the only restaurant named on the L&L site, framed as
          curation rather than ownership, in L&L's literary register (NOT
          Burgerly's punchy fragment-stacked rhythm). Other local
          restaurants stay un-named (Hard Rule #3 holds for them). */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24" aria-labelledby="for-dinner-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            id="for-dinner-heading"
            className="font-display font-medium text-ink mb-6"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)' }}
          >
            For dinner
          </h2>
          <div className="space-y-6">
            <P>
              When guests ask where to eat, we point them downstairs.{' '}
              <a
                href="https://theburgerly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper-deep border-b border-copper/40 hover:border-copper transition-colors"
              >
                The Burgerly
              </a>{' '}
              is the chef-driven burger room directly below Main St Hideaway in New Hope &mdash; a
              brisket-chuck-short-rib blend on a brioche bun, sauces made in-house, a small
              short-list of sides, and a wall of jazz on vinyl behind the counter. One short
              flight of stairs separates the two front doors.
            </P>
            <P>
              Beyond that one recommendation, the river towns are well-stocked with places to
              eat and drink, and we will let you find your own way through them.
            </P>
          </div>
        </div>
      </section>

      {/* A weekend here */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-medium text-ink mb-8"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)' }}
          >
            A weekend here
          </h2>
          <div className="space-y-6">
            <P>
              However you plan it, the towns work best on foot. Leave the car where you parked it,
              walk the bridge once or twice a day, and let the two sides become one trip &mdash;
              coffee on one bank, dinner on the other, the towpath in between.
            </P>
            <P>
              The river towns are also a popular place to get married, and a fine base for the
              weekend if you are here for someone else&apos;s wedding. The Whole House on Lambert
              Lane sleeps eight and keeps a family or a wedding party under one roof; the smaller
              places suit a couple or a pair, close to the bridge and to everything the two towns
              hold.
            </P>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-cream pb-20 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="prose-editorial text-ink max-w-prose mx-auto">
            Three places to stay, two towns to wander, one river between. When you know your dates,
            we can get you a room with a view of all of it.
          </p>
          <div className="flex justify-center">
            <Button href="/stay" variant="primary" size="lg">
              Find a stay
            </Button>
          </div>
        </div>
      </section>

      <EmailCapture source="other" tone="ink" />
    </>
  );
}
