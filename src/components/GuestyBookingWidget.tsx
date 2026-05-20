'use client';

import Script from 'next/script';
import Link from 'next/link';
import type { Property } from '@/lib/properties';

/**
 * GuestyBookingWidget — wrapper around the Guesty per-property booking
 * widget. Per v2 spec §5: each property has its own widget embed code
 * from the Guesty editor (under each property's settings).
 *
 * The widget script URL is read from a per-property env var declared in
 * src/lib/properties.ts (guestyWidgetEnvVar). When the env var is not
 * set, we fall back to a clean "Check availability" CTA that links to
 * the Guesty Booking Website backup at lockandlambert.guestybookings.com.
 *
 * Per v2 §5.4: Guesty does not support widget-embed troubleshooting —
 * this is a known third-party-script integration posture. Verify each
 * widget end-to-end in browser before launch (note for the founder).
 */

interface GuestyBookingWidgetProps {
  property: Property;
  className?: string;
}

export function GuestyBookingWidget({ property, className = '' }: GuestyBookingWidgetProps) {
  // Read the per-property widget src from the env var named in properties.ts.
  // Note: process.env in Next.js client code is inlined at build time only
  // when the var name starts with NEXT_PUBLIC_. The env var names in
  // properties.ts all start with NEXT_PUBLIC_GUESTY_LISTING_WIDGET_*.
  const widgetSrc = process.env[property.guestyWidgetEnvVar];
  const fallbackUrl =
    process.env.NEXT_PUBLIC_GUESTY_BOOKING_WEBSITE_URL ?? 'https://lockandlambert.guestybookings.com';

  if (!widgetSrc) {
    // Fallback — Guesty widget not yet configured for this property.
    // Surface a clean CTA that links to the Guesty Booking Website backup.
    return (
      <div className={`bg-cream border border-stone/30 p-6 sm:p-8 ${className}`.trim()}>
        <h3 className="font-display font-medium text-ink text-2xl mb-4">Book this room</h3>
        <p className="text-sm text-stone mb-6 leading-relaxed">
          Pick your dates and confirm with me.
        </p>
        <Link
          href={fallbackUrl}
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

  // Extract the widget ID from the script URL. Guesty's script URL pattern is
  //   https://booking.guesty.com/static-content/booking-engine-search-bar/bundle.js?id=XXXX
  // The widget mounts to <div id="search-widget_XXXX"></div>.
  const url = new URL(widgetSrc);
  const widgetId = url.searchParams.get('id') ?? 'unknown';
  const containerId = `search-widget_${widgetId}`;

  return (
    <div className={`bg-cream border border-stone/30 p-6 sm:p-8 ${className}`.trim()}>
      <h3 className="font-display font-medium text-ink text-2xl mb-4">Book this room</h3>
      <div id={containerId} />
      <Script src={widgetSrc} strategy="afterInteractive" />
    </div>
  );
}
