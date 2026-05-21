import type { GuestReview } from '@/lib/properties';

/**
 * ReviewSection — verbatim guest reviews on a property detail page.
 * Per v2 spec §3.3 §7: quotes in Cormorant Garamond italic, soft Cream
 * background, attribution beneath.
 *
 * Renders nothing when there are no reviews on file (the River Deck and
 * the Whole House await their quotes — added under the TASK-046 SEO
 * follow-on). The rating line itself lives in the property page header
 * and shows for every property.
 */

interface ReviewSectionProps {
  reviews: GuestReview[];
  className?: string;
}

export function ReviewSection({ reviews, className = '' }: ReviewSectionProps) {
  if (reviews.length === 0) return null;

  return (
    <section
      className={`bg-cream py-16 sm:py-20 border-t border-stone/20 ${className}`.trim()}
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2
          id="reviews-heading"
          className="font-display font-medium text-ink mb-10 text-center"
          style={{ fontSize: 'clamp(1.625rem, 2.5vw, 2rem)' }}
        >
          What guests say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {reviews.map((review, i) => (
            <figure key={i} className="border-t border-stone/25 pt-6">
              <blockquote
                className="font-display italic text-ink leading-relaxed"
                style={{ fontSize: 'clamp(1.125rem, 1.6vw, 1.4rem)' }}
              >
                &ldquo;{review.body}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-xs sm:text-sm uppercase tracking-button text-stone">
                {review.author} · {review.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-12 text-center font-sans text-xs uppercase tracking-button text-stone">
          Guest reviews from our Airbnb stays
        </p>
      </div>
    </section>
  );
}
