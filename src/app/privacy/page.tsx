import type { Metadata } from 'next';

/**
 * /privacy — placeholder per v2 spec §3.4.
 * "Simple long-form page. Inter 400. No design flourishes. Legal text
 * from a real lawyer at some point — placeholder for now."
 *
 * FLAG FOR FOUNDER (per v2 spec §10 "Defer to v1.1+"):
 * Replace this with real legal text from a lawyer before launch is
 * promoted beyond soft-launch.
 */

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How Lock & Lambert handles your information.',
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="font-display font-medium text-ink mb-2" style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)' }}>
        Privacy
      </h1>
      <p className="text-stone text-sm mb-12">Last updated: May 2026</p>

      <div className="prose max-w-prose space-y-6 text-ink leading-relaxed">
        {/* Placeholder text in the brand voice (TASK-046). Real legal copy
            from a lawyer is still required before hard launch. */}
        <p>
          Lock &amp; Lambert runs three short-term rentals along the Delaware. This page explains
          what we do with the information you give us when you visit this site or book a stay.
        </p>

        <h2 className="font-display font-medium text-2xl pt-6">What we collect</h2>
        <p>
          When you sign up for the email list, we collect your email address. When you book a
          stay through the Guesty booking engine, Guesty collects the information needed to
          process the booking — your name, email, phone, and payment details.
        </p>

        <h2 className="font-display font-medium text-2xl pt-6">What we do with it</h2>
        <p>
          The email list is used for occasional updates about openings and seasons. Booking
          information is used to confirm and run your stay. We don&apos;t sell your information,
          and we don&apos;t share it with third parties except the operational services we use to
          run the rentals — Guesty for booking, Stripe for payment, and Klaviyo for email if it is
          set up. Standard infrastructure.
        </p>

        <h2 className="font-display font-medium text-2xl pt-6">Cookies and analytics</h2>
        <p>
          The site uses a lightweight analytics tool to count page views. No personal data is
          tied to those counts. The embedded Guesty booking widget may set its own cookies as
          part of the booking flow.
        </p>

        <h2 className="font-display font-medium text-2xl pt-6">Your choices</h2>
        <p>
          You can unsubscribe from the email list at any time using the link at the bottom of
          any email. To request deletion of any information we hold about you, email{' '}
          <a
            href="mailto:stay@lockandlambert.com"
            className="text-copper-deep border-b border-copper/40 hover:border-copper transition-colors"
          >
            stay@lockandlambert.com
          </a>
          .
        </p>

        <p className="pt-8 text-sm text-stone italic">
          This is a placeholder privacy page. Real legal text from a lawyer is coming. For
          questions, email stay@lockandlambert.com.
        </p>
      </div>
    </main>
  );
}
