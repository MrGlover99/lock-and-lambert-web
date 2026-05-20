'use client';

import Script from 'next/script';
import { PropertyGrid } from './PropertyGrid';

/**
 * GuestySearchWidget — wrapper around the Guesty Booking Engine search
 * widget per v2 spec §5. The widget DOM ID is derived from the script
 * src query parameter (Guesty's pattern is /bundle.js?id=XXXX → mounts
 * to <div id="search-widget_XXXX">).
 *
 * When the env var NEXT_PUBLIC_GUESTY_SEARCH_WIDGET_SRC is not set,
 * we fall back to the on-brand property grid + a link to the Guesty
 * Booking Website backup. The site ships either way.
 *
 * Per v2 §5.3 fallback Option A: "Use the widget for search/availability
 * only, then surface the results as our own property cards that link to
 * /properties/[slug]." The detail page handles the actual booking.
 */

interface GuestySearchWidgetProps {
  className?: string;
}

export function GuestySearchWidget({ className = '' }: GuestySearchWidgetProps) {
  const widgetSrc = process.env.NEXT_PUBLIC_GUESTY_SEARCH_WIDGET_SRC;

  if (!widgetSrc) {
    // Fallback — Guesty search widget not configured yet. Show the
    // property grid (the user can pick a room directly) and link to
    // the Guesty Booking Website backup for the search/dates flow.
    return (
      <div className={className}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 text-center">
          <p className="font-display italic text-stone text-base sm:text-lg leading-relaxed">
            Pick a room below. Or check dates on the{' '}
            <a
              href={
                process.env.NEXT_PUBLIC_GUESTY_BOOKING_WEBSITE_URL ??
                'https://lockandlambert.guestybookings.com'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper-deep border-b border-copper/40 hover:border-copper transition-colors"
            >
              calendar
            </a>
            .
          </p>
        </div>
        <PropertyGrid headline="" />
      </div>
    );
  }

  // Widget is configured — embed it.
  const url = new URL(widgetSrc);
  const widgetId = url.searchParams.get('id') ?? 'unknown';
  const containerId = `search-widget_${widgetId}`;

  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-cream ${className}`.trim()}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-cream border border-stone/20 p-6 sm:p-8 lg:p-12">
          <div id={containerId} />
        </div>
      </div>
      <Script src={widgetSrc} strategy="afterInteractive" />
    </section>
  );
}
