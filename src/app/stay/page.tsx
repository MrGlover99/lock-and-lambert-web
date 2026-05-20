import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { GuestySearchWidget } from '@/components/GuestySearchWidget';
import { EmailCapture } from '@/components/EmailCapture';

/**
 * /stay — find-a-stay page per v2 spec §3.2.
 *
 *   1. Header band hero — bridge-truss-through-trees photo
 *   2. Title: "Find a stay"
 *   3. Subtitle: "Pick your dates below, and we'll take it from there."
 *   4. Guesty Booking Engine search widget (or PropertyGrid fallback)
 *   5. Editorial paragraph echoing the About — keeps brand voice present
 *      even on a transactional page
 *   6. Email capture
 */

export const metadata: Metadata = {
  title: 'Find a stay',
  description:
    'Check dates and book one of three places to stay along the Delaware — in New Hope, Pennsylvania, and Lambertville, New Jersey.',
};

export default function StayPage() {
  return (
    <>
      <Hero
        variant="band"
        photoSrc="/photos/lambert-unit-1/hero-backyard-bridge.jpg"
        photoAlt="The New Hope-Lambertville Bridge truss through trees from the Lambert Lane backyard"
        placeholderCaption="Bridge truss through trees — Lambertville"
        headline={<>Find a stay.</>}
        subhead="Pick your dates below, and we'll take it from there."
      />

      <GuestySearchWidget />

      <section className="bg-cream py-16 sm:py-20" aria-label="Brand framing">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="font-display italic text-stone leading-relaxed"
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}
          >
            Three places to stay, in two river towns the bridge makes one.
          </p>
        </div>
      </section>

      <EmailCapture source="stay_page" tone="ink" />
    </>
  );
}
