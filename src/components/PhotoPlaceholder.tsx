/**
 * PhotoPlaceholder — flat brand-color block shown when a property photo is
 * not yet downloaded from the Airbnb library. Per v2 spec §6.4 + Hard Rule
 * #4/#5: no stock, no AI imagery. Until photos arrive, use a brand-color
 * placeholder. This is intentionally below the bar of the final site —
 * it tells the founder "the slot is ready, drop the photo here."
 *
 * Treatment: Warm Black background with the bare "&" mark centered in copper
 * italic Cormorant. No icons, no patterns — just the brand mark filling the
 * silence. The aspect ratio is the caller's responsibility (wrap in a div
 * with the right aspect-ratio utility, this fills it).
 *
 * Replace strategy: when /public/photos/[slug]/[file].jpg exists, the
 * consuming component should render Image instead of PhotoPlaceholder.
 */

import Image from 'next/image';

interface PhotoPlaceholderProps {
  /** Optional caption shown below the mark (small, copper italic). */
  caption?: string;
  /** Tone — sets the background color */
  tone?: 'ink' | 'river' | 'cream';
  className?: string;
}

const toneClasses: Record<NonNullable<PhotoPlaceholderProps['tone']>, string> = {
  ink: 'bg-ink text-copper',
  river: 'bg-river text-cream',
  cream: 'bg-cream text-copper border border-stone/30',
};

export function PhotoPlaceholder({ caption, tone = 'ink', className = '' }: PhotoPlaceholderProps) {
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center ${toneClasses[tone]} ${className}`}
      role="img"
      aria-label={caption ?? 'Photo placeholder'}
    >
      <span
        className="font-display italic font-normal leading-none"
        style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}
      >
        &amp;
      </span>
      {caption && (
        <span className="font-display italic text-xs mt-4 opacity-70 px-4 text-center">
          {caption}
        </span>
      )}
    </div>
  );
}

/**
 * SmartPhoto — renders <Image> when the photo file exists,
 * falls back to PhotoPlaceholder otherwise. This is the
 * primary photo-rendering primitive across the site.
 *
 * The fallback is silent at runtime: if the photo is missing
 * Next.js Image will 404 the request and the placeholder
 * never appears. So we ALWAYS render PhotoPlaceholder behind
 * Image — Image stacks on top. If Image fails to load
 * (broken path) the placeholder shows through.
 */
interface SmartPhotoProps {
  src: string;
  alt: string;
  /** Aspect ratio: 16/9 default; 4/5 for cards; 1/1 for square */
  aspectRatio?: '16/9' | '4/5' | '1/1' | '3/4' | 'cover';
  className?: string;
  priority?: boolean;
  /** Tone for the underlying placeholder */
  placeholderTone?: 'ink' | 'river' | 'cream';
  /** Caption shown only on the placeholder (e.g., "Main St Hideaway — canal exterior") */
  placeholderCaption?: string;
  /** sizes attribute for responsive loading */
  sizes?: string;
}

export function SmartPhoto({
  src,
  alt,
  aspectRatio = '16/9',
  className = '',
  priority = false,
  placeholderTone = 'ink',
  placeholderCaption,
  sizes = '100vw',
}: SmartPhotoProps) {
  const aspectClass =
    aspectRatio === 'cover'
      ? ''
      : aspectRatio === '16/9'
        ? 'aspect-[16/9]'
        : aspectRatio === '4/5'
          ? 'aspect-[4/5]'
          : aspectRatio === '1/1'
            ? 'aspect-square'
            : 'aspect-[3/4]';

  return (
    <div className={`relative w-full ${aspectClass} overflow-hidden ${className}`}>
      {/* Placeholder layer — always rendered, sits underneath the Image */}
      <div className="absolute inset-0">
        <PhotoPlaceholder tone={placeholderTone} caption={placeholderCaption} />
      </div>
      {/* Image layer — only shows if the file exists; otherwise the
          Image element 404s and the placeholder beneath remains visible. */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
