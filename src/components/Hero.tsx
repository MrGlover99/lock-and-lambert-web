import { Button } from './Button';
import { SmartPhoto } from './PhotoPlaceholder';
import type { ReactNode } from 'react';

/**
 * Hero — image background + headline + sub + optional CTA.
 * Three size variants per v2 spec §4.4:
 *   - full: ~85vh mobile / 100vh desktop. Home page hero.
 *   - band: ~50vh. /stay header.
 *   - slim: ~35vh. /properties/[slug] header alternative (when not using carousel).
 *
 * Hero text overlays the photo with a soft scrim. Per v2 spec §3.1:
 * "Lightly darkened for text overlay readability." We use a gradient from
 * ink/40 at the bottom to ink/15 at the top so the photo still reads.
 *
 * Text alignment is centered on full (home), left on band/slim (paged context).
 *
 * Per v2 §4.5: no rounded corners on hero images, square or full-bleed.
 */

type Variant = 'full' | 'band' | 'slim';

const heightClasses: Record<Variant, string> = {
  // Use min-h so content (esp. on mobile with stacked headlines) can grow if needed
  full: 'min-h-[85vh] md:min-h-screen',
  band: 'min-h-[55vh] md:min-h-[60vh]',
  slim: 'min-h-[35vh] md:min-h-[40vh]',
};

const alignmentClasses: Record<Variant, string> = {
  full: 'items-center justify-center text-center',
  band: 'items-end justify-start text-left pb-12 sm:pb-16',
  slim: 'items-end justify-start text-left pb-8 sm:pb-12',
};

interface HeroProps {
  variant?: Variant;
  /** Photo file path under /public — passed through to SmartPhoto */
  photoSrc?: string;
  /** Alt text for accessibility */
  photoAlt: string;
  /** Caption shown ONLY on placeholder (until real photo arrives) */
  placeholderCaption?: string;
  /** Display headline — Cormorant 500, clamp 40-88px */
  headline: ReactNode;
  /** Subhead — Inter 18-22px */
  subhead?: ReactNode;
  /** Optional CTA — only the primary action button */
  ctaLabel?: string;
  ctaHref?: string;
  /** Optional scroll cue */
  showScrollCue?: boolean;
  /** Priority hint for the image — first paint on the home page */
  priority?: boolean;
}

export function Hero({
  variant = 'full',
  photoSrc,
  photoAlt,
  placeholderCaption,
  headline,
  subhead,
  ctaLabel,
  ctaHref,
  showScrollCue = false,
  priority = false,
}: HeroProps) {
  return (
    <section
      className={`relative w-full ${heightClasses[variant]} flex ${alignmentClasses[variant]} overflow-hidden`}
      aria-label="Page hero"
    >
      {/* Photo layer — covers the full hero. If photoSrc is missing or the
          file 404s, the SmartPhoto's placeholder layer shows through. */}
      <div className="absolute inset-0">
        {photoSrc ? (
          <SmartPhoto
            src={photoSrc}
            alt={photoAlt}
            aspectRatio="cover"
            className="!aspect-auto h-full"
            priority={priority}
            placeholderTone="ink"
            placeholderCaption={placeholderCaption}
            sizes="100vw"
          />
        ) : (
          // No source provided — render the placeholder directly at full size
          <div className="absolute inset-0">
            <div className="w-full h-full bg-ink flex items-center justify-center">
              <span className="font-display italic text-copper" style={{ fontSize: 'clamp(64px, 12vw, 144px)' }}>
                &amp;
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Scrim — gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/15 via-ink/25 to-ink/55 pointer-events-none" />

      {/* Text overlay */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <div className={variant === 'full' ? 'max-w-3xl mx-auto' : 'max-w-2xl'}>
          <h1
            className="font-display font-medium text-cream leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
          >
            {headline}
          </h1>
          {subhead && (
            <p
              className="mt-4 sm:mt-6 text-cream/85 font-sans leading-relaxed"
              style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.375rem)' }}
            >
              {subhead}
            </p>
          )}
          {ctaLabel && ctaHref && (
            <div className={`mt-8 ${variant === 'full' ? 'flex justify-center' : ''}`}>
              <Button href={ctaHref} variant="primary" size="lg">
                {ctaLabel}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Scroll cue — subtle, full variant only */}
      {showScrollCue && variant === 'full' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream/70 text-xs uppercase tracking-button animate-pulse">
          Scroll
        </div>
      )}
    </section>
  );
}
