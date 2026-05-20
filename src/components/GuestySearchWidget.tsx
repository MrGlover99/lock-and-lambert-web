'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { PropertyGrid } from './PropertyGrid';

/**
 * GuestySearchWidget — embeds the Guesty Booking Engine search widget.
 *
 * Guesty's official snippet is an obfuscated IIFE that injects a CSS link
 * and a script tag, then calls `window.GuestySearchBarWidget.create(config)`
 * once the bundle loads. We do the same thing in clean React:
 *
 *   1. <link rel="stylesheet" href={cssBundleUrl}> in <head>
 *   2. <Script src={jsBundleUrl} strategy="afterInteractive" onLoad={...} />
 *   3. On script load, call window.GuestySearchBarWidget.create(config)
 *
 * Config:
 *   - siteUrl: the Guesty Booking Website domain (lockandlambert.guestybookings.com)
 *   - color:   primary color hex; defaults to L&L River Green (overrides Guesty's blue)
 *
 * Container: <div id="search-widget_IO312PWQ"> — the widget bundle locates
 * itself via this id pattern. The widget ID IO312PWQ is the booking-website-
 * specific id from the Guesty "Connect to your own website" dialog.
 *
 * Fallback: if NEXT_PUBLIC_GUESTY_SEARCH_WIDGET_ID is empty (e.g., in CI
 * preview deploys, or if Guesty config changes), render the on-brand
 * PropertyGrid fallback so the page still ships.
 *
 * Per v2 §5.4: Guesty does not support widget-embed troubleshooting.
 * Verify the widget end-to-end before promoting from soft launch.
 */

declare global {
  interface Window {
    GuestySearchBarWidget?: {
      create: (config: { siteUrl: string; color?: string }) => Promise<unknown>;
    };
  }
}

const DEFAULT_WIDGET_ID = 'IO312PWQ'; // From Guesty Connect dialog for lockandlambert.guestybookings.com
const DEFAULT_SITE_URL = 'lockandlambert.guestybookings.com';
const GUESTY_CSS_URL = 'https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.css';
const GUESTY_JS_URL = 'https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.js';

interface GuestySearchWidgetProps {
  className?: string;
  /** Primary color for the widget — defaults to L&L River Green */
  color?: string;
}

export function GuestySearchWidget({
  className = '',
  color = '#2D4A3C',
}: GuestySearchWidgetProps) {
  const widgetId = process.env.NEXT_PUBLIC_GUESTY_SEARCH_WIDGET_ID || DEFAULT_WIDGET_ID;
  const siteUrl = process.env.NEXT_PUBLIC_GUESTY_SITE_URL || DEFAULT_SITE_URL;
  const enabled =
    typeof widgetId === 'string' && widgetId.length > 0 && widgetId !== 'disabled';

  const [scriptReady, setScriptReady] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (!enabled || !scriptReady) return;
    if (initialized.current) return;
    if (typeof window === 'undefined' || !window.GuestySearchBarWidget) return;
    initialized.current = true;
    window.GuestySearchBarWidget.create({ siteUrl, color }).catch((err: unknown) => {
      // Guesty's own SDK uses console for errors per the snippet pattern.
      console.warn('[L&L] Guesty Search widget init failed:', err);
    });
  }, [enabled, scriptReady, siteUrl, color]);

  if (!enabled) {
    return (
      <div className={className}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 text-center">
          <p className="font-display italic text-stone text-base sm:text-lg leading-relaxed">
            Pick a room below. Or check dates on the{' '}
            <a
              href={`https://${siteUrl}`}
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

  const containerId = `search-widget_${widgetId}`;

  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-cream ${className}`.trim()}>
      {/* Stylesheet — appended to <head> by Next.js when this component mounts.
          Using a non-priority <link> tag inside the component is the lowest-
          friction approach for a client-side third-party widget. */}
      <link rel="stylesheet" href={GUESTY_CSS_URL} />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-cream border border-stone/20 p-6 sm:p-8 lg:p-12 min-h-[180px]">
          <div id={containerId} />
        </div>
      </div>

      <Script
        src={GUESTY_JS_URL}
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
        onError={() => {
          console.warn('[L&L] Guesty bundle failed to load. Check network/CSP.');
        }}
      />
    </section>
  );
}
