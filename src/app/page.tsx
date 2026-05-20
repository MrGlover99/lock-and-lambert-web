import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { PropertyGrid } from '@/components/PropertyGrid';
import { TownsBlock } from '@/components/TownsBlock';
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
        photoSrc="/photos/brand/bridge-delaware.jpg"
        photoAlt="The New Hope-Lambertville Bridge spanning the Delaware River — green truss, reflected in still water, dramatic sky"
        placeholderCaption="The bridge between"
        headline={<>A place at the lock. A place on Lambert.</>}
        subhead="Three places to land. Two banks of the Delaware. One bridge between."
        ctaLabel="Find a stay"
        ctaHref="/stay"
        showScrollCue
        priority
      />

      <AboutSection />

      <PropertyGrid />

      <TownsBlock />

      <EmailCapture source="home_footer" tone="cream" />
    </>
  );
}
