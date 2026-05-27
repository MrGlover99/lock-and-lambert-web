import Link from 'next/link';
import type { Property } from '@/lib/properties';

/**
 * BookOnAirbnb — per-property booking sidebar.
 *
 * Phase 1.5 (TASK-076, 2026-05-26): direct booking on lockandlambert.com is
 * not yet enabled. Until the Phase 2 gates clear (attorney-final Privacy +
 * Terms, CPA tax sign-off, STR insurance confirmation, trusted-friend live
 * test) the brand site routes every booking CTA to the property's Airbnb
 * listing, where the full transaction is handled.
 *
 * Voice per `Lock and Lambert/Brand Source of Truth/01 - Brand Voice and
 * Copy.md` v1.1 — literary, unhurried, no apology in the framing.
 *
 * Replaces the prior `GuestyBookingWidget` component in the per-property
 * detail layout. That component remains in the file tree (unimported) so
 * the future Phase 2 dispatch can re-enable direct booking with one route
 * edit when the gates clear. See the session log for the re-enable map.
 */

interface BookOnAirbnbProps {
  property: Property;
  className?: string;
}

export function BookOnAirbnb({ property, className = '' }: BookOnAirbnbProps) {
  return (
    <div className={`bg-cream border border-stone/30 p-6 sm:p-8 ${className}`.trim()}>
      <h3 className="font-display font-medium text-ink text-2xl mb-3">Book this place</h3>
      <p className="text-sm text-stone mb-6 leading-relaxed">
        Current dates, full photos and the {property.rating.count} reviews this
        place has earned are all on its Airbnb page. You can hold it from there.
      </p>
      <Link
        href={property.airbnbUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full bg-river text-cream px-6 py-3 text-sm uppercase tracking-button hover:bg-ink transition-colors duration-200"
      >
        Book on Airbnb
      </Link>
      <p className="mt-4 text-xs text-stone leading-relaxed">
        Opens the listing in a new tab.
      </p>
    </div>
  );
}
