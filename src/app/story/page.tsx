import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { EmailCapture } from '@/components/EmailCapture';
import { Button } from '@/components/Button';

/**
 * /story — the long-form name + place history page.
 *
 * Voice: full travel-magazine register — founder-directed 2026-05-20
 * (a deliberate override of the v2 tight brand voice; see session log).
 *
 * Every historical claim here is fact-checked against published sources
 * (Wikipedia, Friends of the Delaware Canal, PA DCNR, Lambertville
 * Historical Society, DRJTBC, US House history archive). Sources are
 * listed at the foot of the page. Per founder instruction: no wrong
 * history or detail.
 *
 * Corrects the v2 copy's "lockhouse older than the country" line — the
 * Delaware Canal was dug 1827-1832, so the lockhouse is 1830s, not
 * pre-1776.
 */

export const metadata: Metadata = {
  title: 'The story',
  description:
    'Where the name comes from — the Delaware Canal lock, the town of Lambertville, and the bridge between. A short history of New Hope and Lambertville.',
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
        headline={<>The name is a map.</>}
        subhead="A lock, a Lambert, and the bridge between — where Lock & Lambert comes from."
      />

      {/* Intro */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
          <P>
            Some places ask to be explained. The two river towns of New Hope, Pennsylvania and
            Lambertville, New Jersey are not among them. Stand on the bridge between them on a clear
            morning — the Delaware moving slow and bright beneath you, clapboard rooftops and church
            steeples stacked up both green banks, a heron working the shallows — and the appeal
            makes its own case.
          </P>
          <P>
            The name, though, is worth knowing. <span className="brand-italic">Lock &amp; Lambert</span>{' '}
            is not an invented word or a founder&apos;s surname. It is, almost literally, a
            description of where you&apos;ll be staying: a canal lock on the Pennsylvania side, a
            lane in a town called Lambertville on the New Jersey side, and the bridge that has tied
            the two together for more than a century. Three words — a small, honest map.
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
            <P>In the spring of 1827, crews began to dig.</P>
            <P>
              What they were digging was a canal — sixty miles of it, by hand, along the
              Pennsylvania bank of the Delaware. Five years later, in 1832, the Delaware Canal
              opened: a long ribbon of still, shallow water running from Bristol in the south up to
              Easton in the north, laid down to carry anthracite coal out of the mountains and float
              it toward Philadelphia. Mule teams walked a path beside the water — the towpath — and
              hauled the loaded boats along at the pace of a slow walk.
            </P>
            <P>
              A canal, unlike a river, cannot simply run downhill. Over its sixty miles, the
              Delaware Canal has to descend a hundred and sixty-five feet, and to manage that drop
              without spilling its water away, its builders installed twenty-three locks.
            </P>
            <P>
              If you have never watched one work, a lock is best described as an elevator for boats.
              It is a short walled chamber with a heavy wooden gate at each end. A boat floats in;
              the gates close behind it; water is let in or drained out until the level inside the
              chamber matches the stretch of canal ahead; the far gate swings open; the boat
              continues on, now a few feet higher or lower than it was. In the canal&apos;s working
              years a lock-tender lived right beside his lock, in a small house built for the
              purpose — a lockhouse — so that he could rise and work the gates at whatever hour a
              mule-team&apos;s lantern came around the bend.
            </P>
            <P>
              Most of America&apos;s towpath canals are gone now — filled in, paved over, or left to
              the weeds. The Delaware Canal is the exception: it is the only canal of its era still
              continuously intact along its full length, watered and walkable, today a state park
              you can follow for sixty unbroken miles.
            </P>
            <P>
              In New Hope, it runs right through town. Behind the building at 137 South Main Street
              — the one with our Main St Hideaway on the upper floor — the canal still holds water,
              and the lock and its small wooden lockhouse, canal-era and weathered to a soft grey,
              still stand at the back door. That lock is the{' '}
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
              Cross the bridge — five minutes on foot — and you are in Lambertville.
            </p>
            <p className="prose-editorial text-cream/90">
              It did not begin under that name. Like New Hope facing it across the water,
              Lambertville started as a ferry landing; for decades the crossing here was known as
              Coryell&apos;s Ferry, after the family who ran the boats. The town took its present
              name in 1810, the year a post office finally opened on the New Jersey bank. That
              office was secured through the efforts of a local man who had travelled a long way
              from the Amwell farmland where he was born: John Lambert — state legislator, acting
              Governor of New Jersey, and, from 1809, a United States Senator. The grateful
              settlement took his name, and has kept it for more than two centuries.
            </p>
            <p className="prose-editorial text-cream/90">
              Today Lambertville is a town of antique shops and galleries, old stone and clapboard
              houses, and a riverfront that draws people up from Philadelphia and down from New York
              for the weekend. Lambert Lane — the quiet lane our River View Retreat duplex sits on,
              with the Delaware just past the back fence — carries the Senator&apos;s name still.
              That lane, and that town, are the{' '}
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
              There has been a crossing here for a very long time. The first proper bridge — a
              covered wooden one, more than a thousand feet long — was raised in 1814. A flood
              battered it in 1841; its replacement, also covered and wooden, was swept away
              entirely by the great flood of 1903. The bridge you walk or drive across today is the
              one that followed: a six-span steel truss, opened in the summer of 1904, and free of
              tolls since 1919. It is painted a soft green that has, over the decades, become one of
              the most recognizable sights on this stretch of the river.
            </P>
            <P>
              It is also the reason a stay here is never quite a stay in one town. The bridge makes
              New Hope and Lambertville a single destination — two banks, one walkable trip, joined
              by a five-minute walk over moving water. That is the work the ampersand does in our
              name. Lock <span className="brand-italic">&amp;</span> Lambert. The{' '}
              <span className="brand-italic">and</span> is the bridge between.
            </P>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-cream pb-20 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="prose-editorial text-ink max-w-prose mx-auto">
            So there it is, unfolded: a lock on one side, a lane in Lambertville on the other, the
            bridge in the middle. Three places to stay, two towns, one river — and a name that, once
            you know it, tells you exactly where you&apos;re going.
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
            History on this page is drawn from public records: the Friends of the Delaware Canal and
            the Pennsylvania Department of Conservation and Natural Resources (canal construction,
            locks, and towpath); the Greater New Hope Chamber of Commerce and Wikipedia (New
            Hope&apos;s ferry-era names); the Lambertville Historical Society and the U.S. House of
            Representatives history archive (Lambertville&apos;s naming and Senator John Lambert);
            and the Delaware River Joint Toll Bridge Commission (the bridge&apos;s 1814, 1904, and
            1919 milestones). Dates and figures were verified May 2026.
          </p>
        </div>
      </section>

      <EmailCapture source="other" tone="ink" />
    </>
  );
}
