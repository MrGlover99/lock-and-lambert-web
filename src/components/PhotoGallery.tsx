'use client';

import { useState } from 'react';
import { Lightbox, type LightboxPhoto } from './Lightbox';

/**
 * PhotoGallery — masonry-style grid of property photos at native aspect ratios.
 * Per Zach's note 2026-05-20: guests need to see the entire photo to book
 * confidently. The hero carousel above shows curated heroes (with crop for
 * visual order); this gallery shows ALL photos uncropped.
 *
 * Implementation:
 *   - CSS columns for masonry layout (1 / 2 / 3 cols responsive)
 *   - Plain <img loading="lazy"> so each photo retains its natural aspect
 *     (Next.js Image would require pre-declared width/height per photo,
 *     and our photos have mixed aspects)
 *   - Click any photo → opens Lightbox with native aspect ratio + arrows
 *
 * The plain-<img> tradeoff: we lose Next.js automatic format conversion
 * (WebP/AVIF) for the gallery layer. Acceptable because (a) source JPEGs
 * already capped at 2400px wide, (b) lightbox uses Next.js Image which
 * IS optimized, (c) the alternative is significantly more build-time
 * complexity for ~30 photos per page.
 */

interface PhotoGalleryProps {
  photos: LightboxPhoto[];
  className?: string;
}

export function PhotoGallery({ photos, className = '' }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className={`bg-cream ${className}`.trim()} aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between mb-8 sm:mb-10">
          <h2
            id="gallery-heading"
            className="font-display font-medium text-ink"
            style={{ fontSize: 'clamp(1.625rem, 2.5vw, 2rem)' }}
          >
            See the whole place
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-button text-stone">
            {photos.length} photos
          </p>
        </div>

        {/* Masonry grid via CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 [column-fill:_balance]">
          {photos.map((photo, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="block w-full mb-4 sm:mb-6 break-inside-avoid focus:outline-none focus:ring-2 focus:ring-river focus:ring-offset-2 focus:ring-offset-cream group"
              aria-label={`View photo ${i + 1}: ${photo.alt}`}
            >
              {/* Plain img — preserves native aspect, no crop */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block group-hover:opacity-95 transition-opacity duration-200 border border-stone/15"
              />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        photos={photos}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onIndexChange={setActiveIndex}
      />
    </section>
  );
}
