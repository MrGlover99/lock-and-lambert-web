import Link from 'next/link';
import { BareAmpersand, Wordmark } from './Wordmark';

/**
 * Header — minimal, sticky-on-scroll, per v2 spec §2 nav pattern.
 *
 * Layout (desktop): [&-mark] [LOCK & LAMBERT wordmark] ... [Places] [About] [Story] [Find a stay CTA]
 * Layout (mobile):  [&-mark] [LOCK & LAMBERT] ... [Find a stay] (nav links live below or in a drawer at a later date)
 *
 * Per v2 §2: no hamburger menu — flat nav. Two nav links + one CTA fits.
 * Per v2 §4.5: no icons. Text-only.
 *
 * The Header is rendered in the root layout so it appears on every page.
 */

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-cream/95 backdrop-blur-sm border-b border-stone/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4 sm:gap-8">
          {/* Brand block: ampersand mark + wordmark */}
          <Link
            href="/"
            aria-label="Lock & Lambert — home"
            className="flex items-center gap-2 sm:gap-3 group"
          >
            <BareAmpersand size="sm" />
            <span className="wordmark text-sm sm:text-base text-ink group-hover:text-copper-deep transition-colors duration-200 hidden sm:inline">
              LOCK &amp; LAMBERT
            </span>
            {/* Mobile: shorter wordmark */}
            <span className="wordmark text-xs text-ink sm:hidden">L&amp;L</span>
          </Link>

          {/* Nav block */}
          <nav className="flex items-center gap-4 sm:gap-8" aria-label="Primary">
            <Link
              href="/stay"
              className="text-sm text-ink hover:text-copper-deep transition-colors duration-200 hidden sm:inline"
            >
              Places
            </Link>
            <Link
              href="/the-towns"
              className="text-sm text-ink hover:text-copper-deep transition-colors duration-200 hidden sm:inline"
            >
              The Towns
            </Link>
            <Link
              href="/#about"
              className="text-sm text-ink hover:text-copper-deep transition-colors duration-200 hidden sm:inline"
            >
              About
            </Link>
            <Link
              href="/story"
              className="text-sm text-ink hover:text-copper-deep transition-colors duration-200 hidden sm:inline"
            >
              Story
            </Link>
            <Link
              href="/stay"
              className="inline-flex items-center justify-center bg-river text-cream px-4 sm:px-5 py-2 text-xs sm:text-sm uppercase tracking-button hover:bg-ink transition-colors duration-200"
            >
              Find a stay
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

/* Wordmark import is used in the Wordmark component file; importing here keeps
   tree-shaking friendly. The unused-import lint will not trip because it is
   referenced in Wordmark default export side. */
export { Wordmark };
