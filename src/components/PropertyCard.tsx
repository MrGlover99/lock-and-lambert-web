import Link from 'next/link';
import { SmartPhoto } from './PhotoPlaceholder';
import type { Property } from '@/lib/properties';

/**
 * PropertyCard — used on the home grid (`/`) and the property detail
 * cross-link strip (`/properties/[slug]` → "Other rooms").
 *
 * Per v2 spec §3.1 Section 3:
 *   - Hero photo (4:5 crop on cards)
 *   - Headline in Cormorant Garamond 500
 *   - Fact strip in Inter 400, smaller, lowercase italic, Stone color
 *   - Bottom CTA: "See the room" → /properties/[slug]
 *
 * Per v2 §4.5: no drop shadows, 0.5px borders for separation.
 */

interface PropertyCardProps {
  property: Property;
  /** Use 4:5 crop (home grid) vs 16:9 (cross-link strip on detail page) */
  cropAspect?: '4/5' | '16/9';
  /** Show fact strip below headline */
  showFactStrip?: boolean;
  className?: string;
}

export function PropertyCard({
  property,
  cropAspect = '4/5',
  showFactStrip = true,
  className = '',
}: PropertyCardProps) {
  const detailHref = `/properties/${property.slug}`;
  const heroSlug = property.photoSlugs[0];
  const photoSrc = `/photos/${property.slug}/${heroSlug}.jpg`;

  return (
    <article
      className={`group flex flex-col bg-cream border border-stone/20 hover:border-stone/50 transition-colors duration-200 ${className}`.trim()}
    >
      {/* Photo — links to detail */}
      <Link href={detailHref} aria-label={`See ${property.shortTitle}`} className="block">
        <div className="overflow-hidden">
          <SmartPhoto
            src={photoSrc}
            alt={`${property.shortTitle} — ${property.town}`}
            aspectRatio={cropAspect}
            placeholderTone="ink"
            placeholderCaption={`${property.shortTitle} — photo coming`}
            className="group-hover:opacity-95 transition-opacity duration-200"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 sm:p-8 gap-4">
        <Link href={detailHref} className="group/link">
          <h3 className="font-display font-medium text-ink text-2xl sm:text-3xl leading-tight group-hover/link:text-copper-deep transition-colors duration-200">
            {property.cardHeadline}
          </h3>
        </Link>
        {showFactStrip && (
          <p className="font-sans italic text-stone text-sm leading-snug">{property.factStrip}</p>
        )}
        <div className="mt-auto pt-2">
          <Link
            href={detailHref}
            className="inline-flex items-center text-sm uppercase tracking-button text-river hover:text-ink transition-colors duration-200 border-b border-river/40 hover:border-ink/60 pb-1"
          >
            See the room
          </Link>
        </div>
      </div>
    </article>
  );
}
