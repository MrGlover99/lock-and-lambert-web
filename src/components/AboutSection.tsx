import { SmartPhoto } from './PhotoPlaceholder';

/**
 * AboutSection — the editorial About block per v2 spec §3.1 Section 2.
 * Cream background, plenty of breathing room, editorial typography.
 *
 * Copy is locked verbatim in v2 copy doc "About" section.
 * The italic Lock / Lambert / & rendering uses the brand-italic utility
 * class (Cormorant italic copper) — the signature rhythm move.
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
              <p>
                I&apos;m Zach. Three rental units. Two buildings. One bridge between.
              </p>

              <p>
                <span className="brand-italic">Lock</span> — the canal lock behind 137 S. Main in
                New Hope. The wooden lockhouse out back is older than the country.
              </p>

              <p>
                <span className="brand-italic">Lambert</span> — 13 Lambert Lane in Lambertville.
                Across the bridge.
              </p>

              <p>
                <span className="brand-italic">&amp;</span> — the bridge.
              </p>

              <p>
                Smartlock check-in. Stocked kitchens. Pets welcome. A host who answers within the
                hour because he lives a block away.
              </p>

              <p>
                Downstairs from the New Hope unit is The Burgerly. I co-own it with chef Mark
                McLean. Worth the walk down the stairs.
              </p>

              <p>Park once. Walk the towns.</p>

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
