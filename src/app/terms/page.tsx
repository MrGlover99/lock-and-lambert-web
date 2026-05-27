import type { Metadata } from 'next';

/**
 * /terms — placeholder per v2 spec §3.4.
 * Real legal text from a lawyer is a v1.1+ task.
 */

export const metadata: Metadata = {
  title: 'Terms',
  description: 'The terms of using lockandlambert.com.',
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="font-display font-medium text-ink mb-2" style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)' }}>
        Terms
      </h1>
      <p className="text-stone text-sm mb-12">Last updated: May 2026</p>

      {/* Phase 1.5 framing (TASK-076, 2026-05-26) -- bookings are handled
          through Airbnb during the Phase 1.5 cutover; Airbnb's policies
          govern the stay. This page covers the L&L website only. */}
      <div className="mb-10 border-l-2 border-copper/50 pl-5 py-1">
        <p className="font-display italic text-stone leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.125rem)' }}>
          Bookings are handled through Airbnb. Airbnb&rsquo;s Terms of Service and Privacy Policy
          govern your stay. These terms cover Lock &amp; Lambert&rsquo;s website only.
        </p>
      </div>

      <div className="prose max-w-prose space-y-6 text-ink leading-relaxed">
        {/* Placeholder text in the brand voice (TASK-046). Real legal copy
            from a lawyer — including the registered operating entity — is
            still required before hard launch. */}
        <h2 className="font-display font-medium text-2xl">The basics</h2>
        <p>
          Lock &amp; Lambert operates three short-term rental properties along the Delaware
          River. By using this site, you agree to these terms. Use the site lawfully, and
          don&apos;t do anything that breaks it or interferes with other people&apos;s use of it.
        </p>

        <h2 className="font-display font-medium text-2xl pt-6">Booking and stays</h2>
        <p>
          Bookings are processed through the embedded Guesty booking engine. Guesty&apos;s
          terms and the property-specific house rules govern the actual stay. Cancellation
          terms, deposit rules, and check-in/check-out times are shown during booking.
        </p>

        <h2 className="font-display font-medium text-2xl pt-6">Liability</h2>
        <p>
          The site is provided as-is. Information about the properties is given in good faith,
          and we keep it as accurate as we can — but we can&apos;t guarantee everything will be
          exactly as described in every moment of every season.
        </p>

        <h2 className="font-display font-medium text-2xl pt-6">Contact</h2>
        <p>
          Questions: email{' '}
          <a
            href="mailto:stay@lockandlambert.com"
            className="text-copper-deep border-b border-copper/40 hover:border-copper transition-colors"
          >
            stay@lockandlambert.com
          </a>
          .
        </p>

        <p className="pt-8 text-sm text-stone italic">
          Placeholder terms. Real legal language from a lawyer is coming.
        </p>
      </div>
    </main>
  );
}
