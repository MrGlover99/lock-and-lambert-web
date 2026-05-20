/**
 * TownsBlock — quiet about-the-towns block per v2 spec §3.1 Section 4.
 * Small horizontal band. Cream-on-Warm-Black variant used here for visual
 * rhythm (the home page already has Cream + Cream sections above; this
 * gives a quiet beat of contrast before the email capture).
 *
 * Copy is locked verbatim in v2 spec §3.1 Section 4.
 */

export function TownsBlock() {
  return (
    <section className="bg-ink text-cream py-20 sm:py-24" aria-labelledby="towns-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="towns-heading"
          className="font-display italic font-normal text-copper mb-10"
          style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)' }}
        >
          About the towns
        </h2>

        <div className="space-y-6 max-w-prose mx-auto text-cream/90">
          <p className="text-lg leading-relaxed">
            New Hope and Lambertville are sister river towns. The Delaware separates them; the New
            Hope-Lambertville Bridge connects them. The Delaware Canal towpath runs the New Hope
            side &mdash; the last towpath in America. Both towns are walkable. Together they&apos;re
            walkable as one trip.
          </p>

          <p className="text-lg leading-relaxed">
            What you&apos;ll find: antique shops, art galleries, the canal, theater at Bucks County
            Playhouse, a few good restaurants &mdash; one of them is downstairs from Main St
            Hideaway.
          </p>
        </div>
      </div>
    </section>
  );
}
