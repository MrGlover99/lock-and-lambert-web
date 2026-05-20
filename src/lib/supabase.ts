import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * Supabase client for L&L. Lazy-initialized — returns null if env vars
 * are not yet provisioned. The EmailCapture component handles the null
 * case gracefully (renders the form but flags it as not-yet-wired).
 *
 * Per v2 spec §7 — new Supabase instance for L&L, do not commingle with
 * Burgerly's. Single table: `email_signups`.
 */

let _client: SupabaseClient | null | undefined;

export function getSupabase(): SupabaseClient | null {
  if (_client !== undefined) return _client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    // Supabase not provisioned yet — surface null so callers can no-op
    // or render a friendly "we'll be in touch" state.
    _client = null;
    return _client;
  }

  _client = createClient(url, anonKey, {
    auth: { persistSession: false },
  });
  return _client;
}

export interface EmailSignup {
  email: string;
  source: 'home_footer' | 'property_detail' | 'stay_page' | 'other';
  property_slug?: string;
}

export async function saveEmailSignup(signup: EmailSignup): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabase();
  if (!supabase) {
    // Supabase not wired yet — log it for follow-up, render success in UI
    // (do not surface the missing backend to the guest).
    console.warn('[L&L] Supabase not configured; email signup not persisted:', signup.email);
    return { ok: true };
  }

  const { error } = await supabase.from('email_signups').insert({
    email: signup.email,
    source: signup.source,
    property_slug: signup.property_slug ?? null,
  });

  if (error) {
    console.error('[L&L] Supabase insert error:', error);
    return { ok: false, error: error.message };
  }
  return { ok: true };
}
