-- Lock & Lambert — email signups table
-- Per v2 spec §7: separate Supabase instance for L&L, single table.
-- Run against the new L&L Supabase project once provisioned.

create table if not exists public.email_signups (
  id bigserial primary key,
  email text not null,
  source text not null check (source in ('home_footer', 'property_detail', 'stay_page', 'other')),
  property_slug text,
  created_at timestamptz not null default now()
);

create unique index if not exists email_signups_email_idx on public.email_signups (lower(email));
create index if not exists email_signups_created_at_idx on public.email_signups (created_at desc);

-- RLS — only the anon key can insert; reading requires the service role key.
alter table public.email_signups enable row level security;

create policy "anyone can sign up"
  on public.email_signups
  for insert
  to anon, authenticated
  with check (true);

-- No public select policy. The service role key bypasses RLS for back-office reads.
