import Link from 'next/link';

/**
 * Wordmark — LOCK & LAMBERT in Cormorant Garamond 500, letter-spaced 0.12em,
 * ALL CAPS. The "&" stays inline; on Header it's plain (no copper styling),
 * on Footer it can be enriched. Use the brand-italic ampersand only in
 * body copy contexts (About, taglines) where the "&" is the bridge mark.
 *
 * Three sizes: sm (header), md (default), lg (hero alternate).
 */

type Size = 'sm' | 'md' | 'lg';

const sizeClasses: Record<Size, string> = {
  sm: 'text-base md:text-lg',
  md: 'text-2xl md:text-3xl',
  lg: 'text-4xl md:text-5xl',
};

interface WordmarkProps {
  size?: Size;
  /** When true, render as <Link href="/"> — for Header usage */
  asLink?: boolean;
  /** Tone — controls color */
  tone?: 'ink' | 'cream';
  /** When true, ampersand uses brand-italic copper treatment (footer flourish) */
  italicAmp?: boolean;
  className?: string;
}

export function Wordmark({
  size = 'md',
  asLink = false,
  tone = 'ink',
  italicAmp = false,
  className = '',
}: WordmarkProps) {
  const toneClass = tone === 'ink' ? 'text-ink' : 'text-cream';
  const content = (
    <span className={`wordmark ${sizeClasses[size]} ${toneClass} ${className}`.trim()}>
      LOCK{' '}
      {italicAmp ? <span className="brand-italic normal-case tracking-normal">&amp;</span> : '&'}{' '}
      LAMBERT
    </span>
  );

  if (asLink) {
    return (
      <Link href="/" aria-label="Lock & Lambert — home" className="inline-block">
        {content}
      </Link>
    );
  }
  return content;
}

/**
 * BareAmpersand — the standalone "&" mark in italic Cormorant copper,
 * used as a brand glyph (header brand mark left of the wordmark, social
 * avatars, anywhere small). Per v1 spec §1.6 — "the mark stands alone."
 */
interface BareAmpersandProps {
  size?: 'sm' | 'md' | 'lg';
  tone?: 'copper' | 'cream' | 'ink';
  className?: string;
}

export function BareAmpersand({ size = 'md', tone = 'copper', className = '' }: BareAmpersandProps) {
  const sizeClass =
    size === 'sm' ? 'text-2xl' : size === 'lg' ? 'text-6xl md:text-7xl' : 'text-4xl';
  const toneClass = tone === 'copper' ? 'text-copper' : tone === 'cream' ? 'text-cream' : 'text-ink';
  return (
    <span
      className={`font-display italic font-normal leading-none ${sizeClass} ${toneClass} ${className}`.trim()}
      aria-hidden="true"
    >
      &amp;
    </span>
  );
}
