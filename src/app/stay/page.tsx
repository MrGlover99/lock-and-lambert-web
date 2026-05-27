import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { EmailCapture } from '@/components/EmailCapture';
import { SmartPhoto } from '@/components/PhotoPlaceholder';
import { PROPERTIES } from '@/lib/properties';

/**
 * /stay — the four places, with booking via Airbnb.
 *
 * Phase 1.5 (TASK-076, 2026-05-26): the Guesty Search Widget has been
 * replaced by an Airbnb-redirect funnel. Direct booking on
 * lockandlambert.com is gated on attorney-final Privacy + Terms, CPA
 * tax sign-off, STR insurance confirmation, and a trusted-friend live
 * test (TASK-053f/g/h/i + 053d/e/j/k). Until those clear, the brand
 * site lives publicly and routes every booking CTA to Airbnb.
 *
 * Voice per `Lock and Lambert/Brand Source of Truth/01 - Brand Voice and
 * Copy.md` v1.1 — literary, unhurried, calm framing rather than apology.
 *
 * The prior `<GuestySearchWidget />` component remains in the file tree
 * (unimported) so the future Phase 2 dispatch can re-enable the widget
 * with one route edit when the gates clear. See the session log for the
 * re-enable map.
 */

export const metadata: Metadata = {
  title: 'Find a stay',
  description:
    'Three places to stay in New Hope, Pennsylvania, and Lambertville, New Jersey — bookable on Airbnb, with one bundle for the whole house on Lambert Lane.',
};

// The order the places appear on /stay — Main St first (the New Hope
// anchor), then the two Lambertville floors, then the whole-house bundle.
const STAY_ORDER = [
  'main-st-hideaway',
  'lambert-unit-1',
  'lambert-unit-2',
  'lambert-house',
] as const;

const STAY_PLACES = STAY_ORDER.map((slug) => PROPERTIES[slug]);

export default function StayPage() {
  return (
    <>
      <Hero
        variant="band"
        photoSrc="/photos/lambert-unit-1/hero-backyard-bridge.jpg"
        photoAlt="The New Hope-Lambertville Bridge truss through trees from the Lambert Lane backyard"
        placeholderCaption="Bridge truss through trees — Lambertville"
        headline={<>Find a stay.</>}
        subhead="Pick the place, and we&rsquo;ll meet you on Airbnb to hold the dates."
      />

      {/* Calm framing — Phase 1.5 cutover note, in L&L voice. Sets up
          the Airbnb funnel as forward motion, not apology. */}
      <section className="bg-cream pt-16 sm:pt-20" aria-label="How booking works for now">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p
            className="font-display italic text-stone leading-relaxed text-center"
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}
          >
            Booking runs through Airbnb for now &mdash; the simplest way to hold a place
            while we finish the rest of this site. Direct booking on lockandlambert.com
            follows soon.
          </p>
        </div>
      </section>

      {/* The four places — each linked to its detail page, with the
          Airbnb CTA living alongside the read-more link. */}
      <section
        className="bg-cream py-12 sm:py-16 lg:py-20"
        aria-labelledby="places-heading"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 id="places-heading" className="sr-only">
            The places
          </h2>
          <ul className="space-y-12 sm:space-y-16">
            {STAY_PLACES.map((property) => {
              const detailHref = `/properties/${property.slug}`;
              const heroSlug = property.photoSlugs[0];
              const photoSrc = `/photos/${property.slug}/${heroSlug}.jpg`;
              return (
                <li
                  key={property.slug}
                  className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-10 items-start border-t border-stone/20 pt-12 sm:pt-16 first:border-t-0 first:pt-0"
                >
                  <Link
                    href={detailHref}
                    aria-label={`See ${property.shortTitle}`}
                    className="md:col-span-2 block group"
                  >
                    <div className="overflow-hidden">
                      <SmartPhoto
                        src={photoSrc}
                        alt={`${property.shortTitle} — ${property.town}`}
                        aspectRatio="4/5"
                        placeholderTone="ink"
                        placeholderCaption={`${property.shortTitle} — photo coming`}
                        className="group-hover:opacity-95 transition-opacity duration-200"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                  </Link>

                  <div className="md:col-span-3 flex flex-col gap-4">
                    <p className="font-display italic text-stone text-base">
                      {property.town}
                      {property.isBundle && (
                        <>
                          <span aria-hidden="true"> &middot; </span>
                          <span>Both floors, together</span>
                        </>
                      )}
                    </p>
                    <Link href={detailHref} className="group/title">
                      <h3
                        className="font-display font-medium text-ink leading-tight group-hover/title:text-copper-deep transition-colors duration-200"
                        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
                      >
                        {property.cardHeadline}
                      </h3>
                    </Link>
                    <p className="prose-editorial text-ink max-w-prose">
                      {property.seoDescription}
                    </p>
                    <p className="font-sans italic text-stone text-sm leading-snug">
                      {property.factStrip}
                    </p>
                    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-stone">
                      <span className="text-copper" aria-hidden="true">★</span>
                      <span className="font-sans font-medium text-ink">
                        {property.rating.value.toFixed(
                          property.rating.value % 1 === 0 ? 1 : 2,
                        )}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{property.rating.count} stays on Airbnb</span>
                    </p>

                    <div className="mt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
                      <Link
                        href={property.airbnbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-river text-cream px-6 py-3 text-sm uppercase tracking-button hover:bg-ink transition-colors duration-200"
                      >
                        Book on Airbnb
                      </Link>
                      <Link
                        href={detailHref}
                        className="inline-flex items-center justify-center text-sm uppercase tracking-button text-river hover:text-ink transition-colors duration-200 border-b border-river/40 hover:border-ink/60 pb-1 self-start sm:self-auto"
                      >
                        See the place
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <EmailCapture source="stay_page" tone="ink" />
    </>
  );
}
