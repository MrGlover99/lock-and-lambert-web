import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { EmailCapture } from '@/components/EmailCapture';
import { Button } from '@/components/Button';

/**
 * /the-towns — a guide to New Hope, PA and Lambertville, NJ.
 *
 * Founder-directed (TASK-046 SEO follow-on, 2026-05-20): a things-to-do
 * guide, both to help guests and to be found by travellers searching for
 * the area. Voice: the literary boutique register locked under TASK-046.
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

function P({ children }: { children: React.ReactNode }) {
  return <p className="prose-editorial text-ink">{children}</p>;
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
            Park once and you can spend a whole weekend on foot &mdash; galleries and antique shops,
            the canal towpath, the riverfront, a theatre that has been running since 1939 &mdash;
            crossing the water whenever the mood takes you.
          </P>
          <P>Here is some of what we would point you toward.</P>
        </div>
      </section>

      {/* New Hope */}
      <section className="bg-cream pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-medium text-ink mb-8"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)' }}
          >
            New Hope
          </h2>
          <div className="space-y-6">
            <P>
              New Hope is the busier of the two &mdash; a river town that has drawn artists,
              walkers and weekenders for the better part of a century. Main Street runs the length
              of it, lined with galleries, bookshops, antique dealers and places to eat, and it is
              the kind of street that rewards an afternoon with no particular plan.
            </P>
            <P>
              A few things worth building a day around. The Bucks County Playhouse, founded in 1939
              in an old mill on the riverbank, still stages a full season and is well regarded among
              the East Coast&apos;s regional theatres. The Delaware Canal towpath &mdash; the same
              towpath that runs behind our Main Street place &mdash; follows the canal for miles in
              either direction, level and quiet, made for a long walk or a slow bike ride. The New
              Hope Railroad runs vintage trains out into the Bucks County countryside on a short,
              scenic loop. And a little south of town, the Bowman&apos;s Hill Wildflower Preserve
              keeps trails through native woods and meadows that reward the short drive, especially
              in spring.
            </P>
          </div>
        </div>
      </section>

      {/* Lambertville */}
      <section className="bg-ink text-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-medium text-cream mb-8"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)' }}
          >
            Lambertville
          </h2>
          <div className="space-y-6">
            <p className="prose-editorial text-cream/90">
              Cross the bridge and Lambertville is the quieter half of the pair &mdash; smaller,
              calmer, and, for a town its size, remarkably full of things to look at. It is one of
              the region&apos;s great antiquing towns: more than twenty galleries and shops,
              including a much-loved emporium that fills four floors of an 1839 building with
              furniture, art, lighting and old clothes.
            </p>
            <p className="prose-editorial text-cream/90">
              Bridge Street and the lanes off it hold more galleries, makers and cafés, and the
              riverfront and the canal give you the same slow water New Hope does, with fewer people
              on it. Lambert Lane, where two of our places sit, runs down to the Delaware at the
              quiet edge of all this &mdash; close enough to walk into town in a few minutes, far
              enough to hear the river instead of the street.
            </p>
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
              Lane sleeps eight and keeps a family or a wedding party under one roof; the individual
              places suit a couple or a small group, close to the bridge and to everything the two
              towns hold. Whatever brings you, you will not be far from any of it.
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
