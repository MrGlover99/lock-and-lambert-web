'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { PhotoPlaceholder } from './PhotoPlaceholder';

/**
 * PhotoCarousel — horizontal scroll-snap carousel for property detail.
 * Per v2 spec §3.3 §1: full-bleed 16:9 desktop / 4:5 mobile, 6-8 photos,
 * dot indicators, swipe/arrow navigation, no autoplay.
 *
 * Implementation: CSS scroll-snap (no JS deps). Arrow buttons + dot
 * indicators driven by useState. Touch swipe is native scroll on mobile.
 *
 * Per v2 spec §4.5: no drop shadows, no rounded corners on hero photos.
 */

export interface CarouselPhoto {
  src: string;
  alt: string;
  /** Caption shown only on the placeholder layer */
  placeholderCaption?: string;
}

interface PhotoCarouselProps {
  photos: CarouselPhoto[];
  /** Property short title — used for the placeholder caption prefix */
  propertyName: string;
  className?: string;
}

export function PhotoCarousel({ photos, propertyName, className = '' }: PhotoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Track scroll position to update active dot
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let raf = 0;
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (!scroller) {
          raf = 0;
          return;
        }
        const width = scroller.clientWidth;
        const idx = Math.round(scroller.scrollLeft / width);
        setActiveIndex(Math.min(idx, photos.length - 1));
        raf = 0;
      });
    }
    scroller.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      scroller.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [photos.length]);

  function scrollTo(idx: number) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const target = Math.max(0, Math.min(idx, photos.length - 1));
    scroller.scrollTo({ left: target * scroller.clientWidth, behavior: 'smooth' });
  }

  if (photos.length === 0) {
    return (
      <div className={`relative w-full aspect-[4/5] md:aspect-[16/9] ${className}`}>
        <PhotoPlaceholder tone="ink" caption={`${propertyName} — photos coming`} />
      </div>
    );
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Scroller — full-bleed photos with scroll-snap */}
      <div
        ref={scrollerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
        aria-label={`${propertyName} photo carousel`}
      >
        {photos.map((photo, i) => (
          <div key={i} className="relative w-full flex-shrink-0 snap-start aspect-[4/5] md:aspect-[16/9]">
            <PhotoPlaceholder
              tone="ink"
              caption={photo.placeholderCaption ?? `${propertyName} — ${photo.alt}`}
            />
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Arrow buttons — hidden on mobile (touch-swipe is native), shown md+ */}
      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-12 h-12 bg-cream/85 hover:bg-cream text-ink border border-stone/30 transition-opacity duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous photo"
          >
            <span className="text-2xl leading-none">&larr;</span>
          </button>
          <button
            type="button"
            onClick={() => scrollTo(activeIndex + 1)}
            disabled={activeIndex === photos.length - 1}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-12 h-12 bg-cream/85 hover:bg-cream text-ink border border-stone/30 transition-opacity duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next photo"
          >
            <span className="text-2xl leading-none">&rarr;</span>
          </button>
        </>
      )}

      {/* Dot indicators */}
      {photos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-4 py-2 bg-ink/40">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              className={`block w-2 h-2 rounded-full transition-colors duration-200 ${
                i === activeIndex ? 'bg-cream' : 'bg-cream/40 hover:bg-cream/70'
              }`}
              aria-label={`Go to photo ${i + 1} of ${photos.length}`}
              aria-current={i === activeIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      )}
    </div>
  );
}
