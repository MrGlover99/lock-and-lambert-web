import type { Config } from 'tailwindcss';

// Lock & Lambert brand palette per v2 spec §4.1 and v1 spec §1.4.
// No 'white' or 'black' aliases — force a deliberate choice toward cream / ink.
//
// Brand tokens:
//   cream  #F4EFE6 — default background, cards
//   ink    #1A1816 — primary text (Warm Black), footer bg
//   copper #B8703A — the "&", italic Lock/Lambert/& treatments, link underlines
//   river  #2D4A3C — primary CTAs, hero text on Cream, L&L-distinguishing accent
//   stone  #8C8579 — tertiary text, captions, fact strips, fine print
//
// Note: Burgerly Navy (#232E3E) is intentionally absent — keeps L&L a half-step
// distinct from the Burgerly system while still feeling like the same operator's taste.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4EFE6',
        ink: '#1A1816', // "Warm Black"
        copper: '#B8703A',
        // copper-deep: Brand copper on cream lands at ~3.4:1 (WCAG AA fail
        // for normal text). This darker variant lands at ~5.5:1 with headroom.
        // Use for body-text-sized copper on cream surfaces (links, fact strips
        // where copper is required by the brand).
        'copper-deep': '#8E5126',
        river: '#2D4A3C', // "River Green" — L&L-distinguishing accent
        stone: '#8C8579',
      },
      fontFamily: {
        // Cormorant Garamond (display) + Inter (body) per v2 spec §4.2
        display: ['var(--font-display)', 'Georgia', 'Cambria', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        prose: '65ch',
      },
      letterSpacing: {
        // "LOCK & LAMBERT" wordmark — 0.12em per v2 spec §4.2
        wordmark: '0.12em',
        // Inter button caps — 0.04em
        button: '0.04em',
      },
      fontSize: {
        // Editorial body register — Cormorant 20-22px / 1.6 line-height
        // (About section, property detail body)
        editorial: ['1.375rem', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
};

export default config;
