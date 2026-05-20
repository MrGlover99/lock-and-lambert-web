'use client';

import Script from 'next/script';
import Link from 'next/link';
import { getGuestyBookingUrl, type Property } from '@/lib/properties';

/**
 * GuestyBookingWidget — per-property booking entry point on the detail page.
 *
 * Per v2 spec §5.1 + founder feedback 2026-05-20: the ideal pattern is an
 * inline per-property booking widget (date picker + book in-page). Guesty
 * Lite does NOT expose per-listing widget snippets — the only widget is the
 * global search widget which doesn't filter to one property. So the practical
 * pattern is a deep-link to the matching property's page on the Guesty
 * Booking Website: same context (same property photos + description +
 * date picker visible immediately), no tab-switch confusion.
 *
 * If/when a per-listing widget snippet is exposed (e.g. Guesty Pro upgrade,
 * or Guesty adds the feature), set the env var
 * NEXT_PUBLIC_GUESTY_LISTING_WIDGET_<PROPERTY> to the script src and we'll
 * embed it inline. Until then, the deep-link is the right fallback.
 */

interface GuestyBookingWidgetProps {
  property: Property;
  className?: string;
}

export function GuestyBookingWidget({ property, className = '' }: GuestyBookingWidgetProps) {
  const widgetSrc = process.env[property.guestyWidgetEnvVar];
  const deepLinkUrl = getGuestyBookingUrl(property);

  if (widgetSrc) {
    // Per-listing widget configured — embed inline (future-proofing).
    const url = new URL(widgetSrc);
    const widgetId = url.searchParams.get('id') ?? 'unknown';
    const containerId = `booking-widget_${widgetId}`;
    return (
      <div className={`bg-cream border border-stone/30 p-6 sm:p-8 ${className}`.trim()}>
        <h3 className="font-display font-medium text-ink text-2xl mb-4">Book this room</h3>
        <div id={containerId} />
        <Script src={widgetSrc} strategy="afterInteractive" />
      </div>
    );
  }

  // Deep-link to the matching Guesty property page — same context, dates
  // immediately available, book in two clicks.
  return (
    <div className={`bg-cream border border-stone/30 p-6 sm:p-8 ${className}`.trim()}>
      <h3 className="font-display font-medium text-ink text-2xl mb-4">Book this room</h3>
      <p className="text-sm text-stone mb-6 leading-relaxed">
        Pick your dates and confirm with me.
      </p>
      <Link
        href={deepLinkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full bg-river text-cream px-6 py-3 text-sm uppercase tracking-button hover:bg-ink transition-colors duration-200"
      >
        Check availability
      </Link>
      <p className="mt-4 text-xs text-stone leading-relaxed">
        Or book on{' '}
        <Link
          href={property.airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-copper-deep border-b border-copper/40 hover:border-copper transition-colors"
        >
          Airbnb
        </Link>
        .
      </p>
    </div>
  );
}
