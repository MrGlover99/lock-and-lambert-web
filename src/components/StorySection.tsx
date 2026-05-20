import Link from 'next/link';

/**
 * StorySection — home-page teaser for the canal/towns history.
 * Replaces the older TownsBlock. A short, well-written paragraph that
 * opens the name and links through to the full /story page.
 *
 * Voice reset under TASK-046 (literary boutique register). All
 * historical claims fact-checked; full sourcing on /story.
 */

export function StorySection() {
  return (
    <section className="bg-ink text-cream py-20 sm:py-24" aria-labelledby="story-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="story-heading"
          className="font-display italic font-normal text-copper-bright mb-8"
          style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
        >
          Where the name comes from
        </h2>

        <div className="space-y-6 max-w-prose mx-auto text-cream/90">
          <p className="text-lg leading-relaxed">
            The name is, almost literally, a map.{' '}
            <span className="font-display italic text-copper-bright">Lock</span> is a lock on the
            Delaware Canal — the hand-dug 1830s waterway that still runs, and still holds water,
            behind the New Hope building.{' '}
            <span className="font-display italic text-copper-bright">Lambert</span> is Lambertville,
            the New Jersey town across the river, named in 1810 for a local man who went on to the
            United States Senate. And the{' '}
            <span className="font-display italic text-copper-bright">&amp;</span> is the bridge
            between them — a green steel truss that has carried people over the water since 1904.
          </p>
          <p className="text-lg leading-relaxed">
            Two old river towns, joined by a five-minute walk across the bridge. That is the short
            version.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/story"
            className="inline-flex items-center text-sm uppercase tracking-button text-copper-bright hover:text-cream transition-colors duration-200 border-b border-copper-bright/40 hover:border-cream pb-1"
          >
            Read the longer story
          </Link>
        </div>
      </div>
    </section>
  );
}
