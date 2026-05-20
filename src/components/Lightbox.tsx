'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';

/**
 * Lightbox — fullscreen photo viewer. Per v2 spec photo-quality discussion:
 * each photo renders at native aspect ratio with object-contain, so guests
 * see the entire photo without crop. Standard pattern (Airbnb, Booking.com).
 *
 * Interaction:
 *   - Esc            → close
 *   - Left arrow     → previous photo
 *   - Right arrow    → next photo
 *   - Click backdrop → close
 *   - Click photo    → does nothing (so close is intentional)
 *   - Click X        → close
 *   - Click ◀ / ▶    → prev / next
 */

export interface LightboxPhoto {
  src: string;
  alt: string;
}

interface LightboxProps {
  photos: LightboxPhoto[];
  /** Index of currently-shown photo; null = closed */
  activeIndex: number | null;
  onClose: () => void;
  onIndexChange: (idx: number) => void;
}

export function Lightbox({ photos, activeIndex, onClose, onIndexChange }: LightboxProps) {
  const isOpen = activeIndex !== null;
  const total = photos.length;

  const prev = useCallback(() => {
    if (activeIndex === null) return;
    onIndexChange((activeIndex - 1 + total) % total);
  }, [activeIndex, total, onIndexChange]);

  const next = useCallback(() => {
    if (activeIndex === null) return;
    onIndexChange((activeIndex + 1) % total);
  }, [activeIndex, total, onIndexChange]);

  // Keyboard nav + scroll lock
  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    }
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose, prev, next]);

  if (!isOpen || activeIndex === null) return null;
  const photo = photos[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${activeIndex + 1} of ${total}`}
      onClick={onClose}
    >
      {/* Close button — top right */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center text-cream/80 hover:text-cream text-2xl bg-ink/60 hover:bg-ink rounded-full transition-colors duration-200"
        aria-label="Close lightbox"
      >
        ×
      </button>

      {/* Counter — top left */}
      <div className="absolute top-4 left-4 z-10 text-cream/70 text-xs uppercase tracking-button">
        {activeIndex + 1} / {total}
      </div>

      {/* Prev button */}
      {total > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-cream/80 hover:text-cream text-3xl bg-ink/60 hover:bg-ink rounded-full transition-colors duration-200"
          aria-label="Previous photo"
        >
          ‹
        </button>
      )}

      {/* Next button */}
      {total > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-cream/80 hover:text-cream text-3xl bg-ink/60 hover:bg-ink rounded-full transition-colors duration-200"
          aria-label="Next photo"
        >
          ›
        </button>
      )}

      {/* The photo — clicking does nothing (close is on backdrop) */}
      <div
        className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4 sm:mx-12"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
