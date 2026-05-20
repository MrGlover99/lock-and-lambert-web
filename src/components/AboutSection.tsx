import { SmartPhoto } from './PhotoPlaceholder';

/**
 * AboutSection — the editorial About block per v2 spec §3.1 Section 2.
 * Cream background, plenty of breathing room, editorial typography.
 *
 * Copy enriched 2026-05-20 (founder-directed) into a warmer, more
 * descriptive first-person register — still Zach's own voice, the
 * operator present. The name breakdown (Lock / Lambert / &) now lives
 * on the StorySection and the /story page.
 *
 * Right side breakout: small framed photo (Main St Hideaway stained-glass
 * interior detail). Below ~lg breakpoint it stacks under the text.
 */

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-cream py-20 sm:py-24 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Text — takes 3/5 on desktop */}
          <div className="lg:col-span-3">
            <h2
              id="about-heading"
              className="font-display font-medium text-ink mb-10"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.5rem)' }}
            >
              About Lock <span className="brand-italic">&amp;</span> Lambert
            </h2>

            <div className="prose-editorial text-ink max-w-prose space-y-6">
              <p>I&apos;m Zach, and I run all three of these places myself.</p>

              <p>
                There are two buildings. One sits on Main Street in New Hope, Pennsylvania, with the
                old Delaware Canal and a weathered wooden lockhouse out the back door — and a
                chef-driven burger room, The Burgerly, which I co-own with chef Mark McLean,
                directly downstairs. The other is a duplex on Lambert Lane in Lambertville, New
                Jersey, a quiet street with the river just past the fence. Between the two: the
                bridge, and a five-minute walk across it.
              </p>

              <p>
                What you&apos;ll find inside is the same in all of them. Smartlock check-in, so you
                arrive on your own time. Kitchens stocked the way you&apos;d stock your own. Beds
                made up properly, fast Wi-Fi, room to spread out. Pets welcome. And a host who
                actually answers — usually within the hour — because I live a block away and
                I&apos;d rather you have a good weekend than not.
              </p>

              <p>
                Park once. Cross the bridge on foot. Let the two towns be one long, slow trip.
              </p>

              <p className="text-right font-display italic text-copper pt-4">— Zach</p>
            </div>
          </div>

          {/* Photo breakout — takes 2/5 on desktop */}
          <div className="lg:col-span-2 lg:pt-16">
            <div className="aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto border border-stone/20">
              <SmartPhoto
                src="/photos/main-st-hideaway/living-stained-glass.jpg"
                alt="Stained-glass interior detail at Main St Hideaway"
                aspectRatio="4/5"
                placeholderTone="ink"
                placeholderCaption="Main St — stained-glass interior detail"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
