import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { PropertyGrid } from '@/components/PropertyGrid';
import { StorySection } from '@/components/StorySection';
import { EmailCapture } from '@/components/EmailCapture';

/**
 * Home page (/) — assembles the v2 spec §3.1 sections:
 *   1. Hero — Main St Hideaway canal exterior + locked headline + subhead + Find a stay CTA
 *   2. About — editorial Zach-solo first-person About block
 *   3. Properties — 3-up grid + bundle SKU link
 *   4. About the towns — quiet sister-river-towns paragraph
 *   5. Email capture — "Coming back? I'll tell you first."
 *   6. Footer — lives in root layout
 *
 * All copy is locked verbatim in:
 *   /Users/zacharysimmons/The Burgerly/Brand Source of Truth/Outputs/
 *     2026-05-20-TASK-033c-v2-lock-and-lambert-copy-tight.md
 */

export default function HomePage() {
  return (
    <>
      <Hero
        variant="full"
        photoSrc="/photos/brand/home-hero-yard.jpg"
        photoAlt="The Lambert Lane backyard in Lambertville — hydrangeas, fence, and the New Hope-Lambertville Bridge through the trees"
        placeholderCaption="Lambert Lane — the river just past the fence"
        headline={<>A place at the lock. A place on Lambert.</>}
        subhead="Three places to land. Two banks of the Delaware. One bridge between."
        ctaLabel="Find a stay"
        ctaHref="/stay"
        showScrollCue
        priority
      />

      <AboutSection />

      <PropertyGrid />

      <StorySection />

      <EmailCapture source="home_footer" tone="cream" />
    </>
  );
}
