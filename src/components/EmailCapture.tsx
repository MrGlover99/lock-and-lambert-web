'use client';

import { useState } from 'react';
import { saveEmailSignup, type EmailSignup } from '@/lib/supabase';

/**
 * EmailCapture — single-field newsletter capture per v2 spec §3.1 Section 5.
 *
 * Copy in the literary boutique voice locked under TASK-046:
 *   Headline: "Coming back? We'll tell you first."
 *   Sub: "An email when something opens up, and another when the season turns. Nothing else."
 *   Button: "Sign me up"
 *   Privacy note: "No spam. Unsubscribe any time."
 *
 * Wired to Supabase via lib/supabase.ts saveEmailSignup. When Supabase is
 * not yet provisioned (env vars empty), the function logs a warning and
 * returns ok=true so the user-facing experience stays friendly.
 */

interface EmailCaptureProps {
  /** Per v2 spec, "source" prop lets us tag captures by surface */
  source?: EmailSignup['source'];
  /** Property slug if this capture lives on a property detail page */
  propertySlug?: string;
  /** Background tone — cream for home, ink for footer-style placement */
  tone?: 'cream' | 'ink';
  className?: string;
}

export function EmailCapture({
  source = 'home_footer',
  propertySlug,
  tone = 'cream',
  className = '',
}: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus('error');
      setErrorMsg('That looks off. Try again?');
      return;
    }
    setStatus('submitting');
    setErrorMsg(null);
    const result = await saveEmailSignup({
      email: trimmed,
      source,
      property_slug: propertySlug,
    });
    if (result.ok) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
      setErrorMsg('Something went sideways. Try again in a sec?');
    }
  }

  const isInk = tone === 'ink';
  const bgClass = isInk ? 'bg-ink text-cream' : 'bg-cream text-ink';
  const inputClass = isInk
    ? 'bg-transparent border-cream/40 text-cream placeholder:text-cream/50 focus:border-copper-bright'
    : 'bg-transparent border-ink/30 text-ink placeholder:text-stone focus:border-river';

  return (
    <section
      className={`${bgClass} py-16 sm:py-20 ${className}`.trim()}
      aria-labelledby="email-capture-heading"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="email-capture-heading"
          className="font-display font-medium mb-4"
          style={{ fontSize: 'clamp(1.625rem, 3vw, 2.25rem)' }}
        >
          Coming back? We&apos;ll tell you first.
        </h2>
        <p
          className={`font-display italic mb-8 max-w-prose mx-auto ${isInk ? 'text-stone' : 'text-stone'}`}
          style={{ fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)' }}
        >
          An email when something opens up, and another when the season turns. Nothing else.
        </p>

        {status === 'success' ? (
          <p className="font-display italic text-copper text-xl">
            Got it. Talk soon.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 max-w-md mx-auto"
            aria-label="Sign up for email updates"
          >
            <label htmlFor="email-input" className="sr-only">
              Your email
            </label>
            <input
              id="email-input"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your email"
              className={`flex-1 px-4 py-3 border-b text-base outline-none transition-colors duration-200 ${inputClass}`}
              disabled={status === 'submitting'}
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-river text-cream px-6 py-3 text-sm uppercase tracking-button hover:bg-ink transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'One sec.' : 'Sign me up'}
            </button>
          </form>
        )}

        {status === 'error' && errorMsg && (
          <p className="mt-4 text-sm text-copper-deep" role="alert">
            {errorMsg}
          </p>
        )}

        {status !== 'success' && (
          <p className={`mt-6 text-xs ${isInk ? 'text-stone' : 'text-stone'}`}>
            No spam. Unsubscribe any time.
          </p>
        )}
      </div>
    </section>
  );
}
