import { SmartPhoto } from './PhotoPlaceholder';

/**
 * AboutSection — the editorial About block per v2 spec §3.1 Section 2.
 * Cream background, plenty of breathing room, editorial typography.
 *
 * Copy reset 2026-05-20 (TASK-046) into the literary boutique voice.
 * Brand voice — "we" / Lock & Lambert, no individual host figure and no
 * on-site presence claims (founder direction). The name breakdown
 * (Lock / Lambert / &) lives on the StorySection and the /story page.
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
                New Hope, on the Pennsylvania bank of the Delaware, and Lambertville, on the New
                Jersey one, are two river towns a single steel bridge joins. Lock{' '}
                <span className="brand-italic">&amp;</span> Lambert is three places to stay between
                them.
              </p>

              <p>
                One is on South Main Street, in the middle of New Hope — the old Delaware Canal and
                a weathered lockhouse just out the back door, the shops and the Bucks County
                Playhouse a short walk the other way. The other two share a house on Lambert Lane
                in Lambertville, a quiet street that runs down to the river.
              </p>

              <p>
                What you find inside is the same in all three. Rooms we furnished with a real eye
                and keep with care. Kitchens stocked to cook in. Beds made up properly, fast Wi-Fi,
                room to spread out, and a smartlock at the door so you arrive on your own time. Send
                a message and it gets answered. Pets are welcome — and so are you.
              </p>

              <p>
                Park once, cross the bridge on foot, and let the two towns be one long, unhurried
                trip.
              </p>
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
