import Link from 'next/link';
import { PropertyCard } from './PropertyCard';
import { HOME_GRID_PROPERTIES } from '@/lib/properties';

/**
 * PropertyGrid — 3-up desktop, stacked mobile. Per v2 spec §3.1 Section 3.
 * Used on the home page. The "Booking both Lambert units? See the whole house"
 * link below the grid points to the bundle SKU detail page.
 */

interface PropertyGridProps {
  className?: string;
  /** Title shown above the grid — defaults to the v2-locked headline */
  headline?: string;
}

export function PropertyGrid({
  className = '',
  headline = 'Three places, one river',
}: PropertyGridProps) {
  return (
    <section
      className={`py-16 sm:py-20 lg:py-24 ${className}`.trim()}
      aria-labelledby="properties-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <h2
            id="properties-heading"
            className="font-display font-medium text-ink text-center"
            style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}
          >
            {headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {HOME_GRID_PROPERTIES.map((property) => (
            <PropertyCard key={property.slug} property={property} cropAspect="4/5" />
          ))}
        </div>

        {/* Bundle SKU secondary link — Per v2 spec §3.1 */}
        <div className="mt-12 text-center">
          <Link
            href="/properties/lambert-house"
            className="font-display italic text-stone hover:text-copper-deep transition-colors duration-200 text-lg"
          >
            Travelling as a larger group? The whole house on Lambert Lane sleeps eight.
          </Link>
        </div>
      </div>
    </section>
  );
}
