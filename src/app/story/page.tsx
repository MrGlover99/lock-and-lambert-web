import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { EmailCapture } from '@/components/EmailCapture';
import { Button } from '@/components/Button';

/**
 * /story — the long-form name + place history page.
 *
 * Voice: the literary boutique register locked under TASK-046
 *   (Lock and Lambert/Brand Source of Truth/01 - Brand Voice and Copy.md).
 *
 * Every historical claim here is fact-checked against published sources
 * (Friends of the Delaware Canal, PA DCNR, the Lambertville Historical
 * Society, the U.S. House history archive, the DRJTBC). Sources are
 * listed at the foot of the page — per founder instruction, no wrong
 * history.
 *
 * The Delaware Canal was dug 1827-1832, so the lockhouse is an 1830s
 * structure — never "older than the country" (that earlier claim was
 * false and is permanently retired).
 */

export const metadata: Metadata = {
  title: 'The story',
  description:
    'Where the name comes from: a lock on the Delaware Canal, the town of Lambertville, and the bridge between — a short history of New Hope and Lambertville.',
};

function P({ children }: { children: React.ReactNode }) {
  return <p className="prose-editorial text-ink">{children}</p>;
}

export default function StoryPage() {
  return (
    <>
      <Hero
        variant="band"
        photoSrc="/photos/brand/bridge-delaware.jpg"
        photoAlt="The New Hope-Lambertville Bridge spanning the Delaware River"
        placeholderCaption="The bridge between"
        headline={<>The name is a small map.</>}
        subhead="A lock on one bank, a lane on the other, and the bridge between."
      />

      {/* Intro */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
          <P>
            Some places have to be explained. The two river towns of New Hope, Pennsylvania and
            Lambertville, New Jersey are not among them &mdash; stand on the bridge between them on a
            bright morning, with the Delaware moving slow beneath you and clapboard rooftops stacked
            up both green banks, and the place makes its own argument.
          </P>
          <P>
            The name, though, is worth a few minutes.{' '}
            <span className="brand-italic">Lock &amp; Lambert</span> is not a founder&apos;s surname
            or an invented word. It is, almost literally, a description of where you&apos;ll be
            staying: a lock on the Pennsylvania side, a lane in a town called Lambertville on the
            New Jersey side, and the bridge that has tied the two together for more than a century.
          </P>
        </div>
      </section>

      {/* The Lock */}
      <section className="bg-cream pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-medium text-ink mb-8" style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)' }}>
            <span className="brand-italic">Lock</span>
          </h2>
          <div className="space-y-6">
            <P>
              In the spring of 1827, crews began to dig. What they were digging was a canal &mdash;
              nearly sixty miles of it, by hand, along the Pennsylvania bank of the Delaware. Five
              years later the Delaware Canal opened: a long ribbon of still, shallow water running
              from Bristol in the south up to Easton in the north, laid down to carry anthracite
              coal out of the mountains toward Philadelphia. Mule teams walked a path beside the
              water &mdash; the towpath &mdash; and hauled the loaded boats along at the pace of a
              slow walk.
            </P>
            <P>
              A canal, unlike a river, cannot simply run downhill. Over its length the Delaware
              Canal has to fall a hundred and sixty-five feet, and to manage that drop without
              losing its water, its builders set twenty-three locks into it. A lock is best thought
              of as an elevator for boats: a short walled chamber with a heavy wooden gate at each
              end. A boat floats in, the gates close behind it, water is let in or drained away
              until the level inside matches the canal ahead, and the far gate swings open &mdash;
              and the boat goes on, a few feet higher or lower than it was. In the working years a
              lock-tender lived right beside his lock, in a small house built for the purpose, a
              lockhouse, so that he could rise and work the gates at whatever hour a mule
              team&apos;s lantern came around the bend.
            </P>
            <P>
              Most of America&apos;s towpath canals are gone now &mdash; filled in, paved over, or
              left to the weeds. The Delaware Canal is the one that survived. It is the only
              towpath canal of its era still intact along its entire length: watered, walkable, and
              today a state park you can follow for nearly sixty unbroken miles.
            </P>
            <P>
              In New Hope, the canal runs straight through town. Behind 137 South Main Street
              &mdash; the building with our Main St Hideaway on the upper floor &mdash; the canal
              still holds water, and a lock and its small weathered lockhouse, grey with age, still
              stand at the back door. That lock is the{' '}
              <span className="brand-italic">Lock</span> in Lock &amp; Lambert. You can watch it
              from the patio.
            </P>
          </div>
        </div>
      </section>

      {/* Lambert */}
      <section className="bg-ink text-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-medium text-cream mb-8" style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)' }}>
            <span className="font-display italic font-normal text-copper-bright">Lambert</span>
          </h2>
          <div className="space-y-6">
            <p className="prose-editorial text-cream/90">
              Cross the bridge &mdash; five minutes on foot &mdash; and you are in Lambertville.
            </p>
            <p className="prose-editorial text-cream/90">
              It did not begin under that name. Like New Hope facing it across the water,
              Lambertville started as a ferry landing; for most of the eighteenth century the
              crossing here was Coryell&apos;s Ferry, after the family who ran the boats and kept
              an inn for travelers breaking the journey between Philadelphia and New York. The town
              took its present name in 1810, the year a post office opened on the New Jersey bank
              &mdash; an office secured through the efforts of John Lambert, a farmer&apos;s son
              from the Amwell country nearby who had risen to become a state legislator, acting
              Governor of New Jersey, and, from 1809, a United States Senator. The grateful
              settlement took his name, and has kept it for more than two centuries.
            </p>
            <p className="prose-editorial text-cream/90">
              Today Lambertville is a town of antique shops and galleries, of old stone and
              clapboard houses, with a riverfront that has drawn people up from Philadelphia and
              down from New York for generations. Lambert Lane &mdash; the quiet street our house
              sits on, with the Delaware just past the back fence &mdash; still carries the
              Senator&apos;s name. That lane, and that town, are the{' '}
              <span className="font-display italic font-normal text-copper-bright">Lambert</span> in
              Lock &amp; Lambert.
            </p>
          </div>
        </div>
      </section>

      {/* The & */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-medium text-ink mb-8" style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)' }}>
            <span className="brand-ampersand" style={{ fontSize: '1.2em' }}>
              &amp;
            </span>
          </h2>
          <div className="space-y-6">
            <P>Which leaves the ampersand.</P>
            <P>
              The <span className="brand-italic">&amp;</span> is the bridge.
            </P>
            <P>
              There has been a crossing here for a very long time. The first true bridge &mdash; a
              covered wooden one, more than a thousand feet long &mdash; was raised in 1814, the
              work of Lewis Wernwag, a bridge-builder known up and down the region. A flood damaged
              it in 1841; the covered bridge that replaced it was swept away entirely by the great
              flood of 1903. The bridge you walk or drive across today is the one that followed: a
              six-span steel truss, opened in the summer of 1904, and free of tolls since 1919. It
              is painted a soft green that has, over the decades, become one of the most familiar
              sights on this stretch of the river.
            </P>
            <P>
              It is also the reason a stay here is never quite a stay in one town. The bridge makes
              New Hope and Lambertville a single place &mdash; two banks, one walkable trip, joined
              by a five-minute walk over moving water. That is the work the ampersand does in the
              name. Lock <span className="brand-italic">&amp;</span> Lambert: the{' '}
              <span className="brand-italic">and</span> is the bridge between.
            </P>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-cream pb-20 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="prose-editorial text-ink max-w-prose mx-auto">
            So there it is, unfolded &mdash; a lock on one bank, a lane in Lambertville on the
            other, and the bridge in the middle. Three places to stay, two towns, one river, and a
            name that, once you know it, tells you exactly where you are going.
          </p>
          <div className="flex justify-center">
            <Button href="/stay" variant="primary" size="lg">
              Find a stay
            </Button>
          </div>
        </div>
      </section>

      {/* Sources — fact-check trail, per founder instruction */}
      <section className="bg-cream border-t border-stone/20 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xs uppercase tracking-button text-stone mb-4">Sources</h3>
          <p className="font-sans text-sm text-stone leading-relaxed">
            The history on this page is drawn from public records and reputable local sources: the
            Friends of the Delaware Canal and the Pennsylvania Department of Conservation and
            Natural Resources, for the canal&apos;s construction, its locks, and the towpath; the
            Lambertville Historical Society and the U.S. House of Representatives history archive,
            for the town&apos;s naming and for Senator John Lambert; and the Delaware River Joint
            Toll Bridge Commission, for the bridge and its 1814, 1904, and 1919 milestones. Dates
            and figures were verified in May 2026.
          </p>
        </div>
      </section>

      <EmailCapture source="other" tone="ink" />
    </>
  );
}
