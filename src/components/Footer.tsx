import Link from 'next/link';

/**
 * Footer — Warm Black background, Cream text. Three columns desktop,
 * stacked mobile. Per v2 spec §3.1 Section 6.
 *
 * Columns:
 * 1. Brand block — wordmark + italic tagline ("Two banks of the Delaware. One bridge between.")
 * 2. Address block — 137 South Main Street · New Hope, PA 18938 · stay@lockandlambert.com
 * 3. Legal/utility — © 2026 · Privacy · Terms
 *
 * Copy in the literary boutique voice locked under TASK-046.
 */

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand block */}
          <div>
            <div className="wordmark text-lg md:text-xl text-cream mb-4">
              LOCK <span className="brand-italic normal-case tracking-normal">&amp;</span> LAMBERT
            </div>
            <p className="font-display italic text-stone text-base leading-snug">
              Two banks of the Delaware. One bridge between.
            </p>
          </div>

          {/* Address block */}
          <div>
            <h4 className="text-xs uppercase tracking-button text-stone mb-4">Get in touch</h4>
            <address className="not-italic text-sm leading-relaxed text-cream/90 space-y-1">
              <div>137 South Main Street</div>
              <div>New Hope, PA 18938</div>
              <div className="pt-2">
                <Link
                  href="mailto:stay@lockandlambert.com"
                  className="text-copper-bright hover:text-copper transition-colors border-b border-copper/30 hover:border-copper"
                >
                  stay@lockandlambert.com
                </Link>
              </div>
            </address>
          </div>

          {/* Legal / utility */}
          <div>
            <h4 className="text-xs uppercase tracking-button text-stone mb-4">Fine print</h4>
            <ul className="text-sm text-cream/90 space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-copper-bright transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-copper-bright transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li className="pt-4 text-stone text-xs">© 2026 Lock &amp; Lambert</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
