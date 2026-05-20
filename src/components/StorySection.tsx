import Link from 'next/link';

/**
 * StorySection — home-page teaser for the canal/towns history.
 * Replaces the older TownsBlock. Condensed travel-magazine voice;
 * links through to the full /story page.
 *
 * Founder-directed voice (2026-05-20) — richer register than the v2
 * tight voice. All historical claims fact-checked; full sourcing on /story.
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
          Why &ldquo;Lock &amp; Lambert&rdquo;?
        </h2>

        <div className="space-y-6 max-w-prose mx-auto text-cream/90">
          <p className="text-lg leading-relaxed">
            The name is a small map.{' '}
            <span className="font-display italic text-copper-bright">Lock</span> is the canal lock
            behind the New Hope building — a relic of the hand-dug Delaware Canal, the only
            towpath-era canal in America still intact end to end.{' '}
            <span className="font-display italic text-copper-bright">Lambert</span> is Lambertville,
            the New Jersey town across the water, named in 1810 for a hometown United States
            senator. And the{' '}
            <span className="font-display italic text-copper-bright">&amp;</span> is the bridge
            between them — a green steel truss, standing since 1904, free to cross since 1919.
          </p>
          <p className="text-lg leading-relaxed">
            Two banks of the Delaware, joined by a five-minute walk. That&apos;s the short version.
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
