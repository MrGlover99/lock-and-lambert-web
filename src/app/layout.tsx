import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lockandlambert.com'),
  title: {
    default: 'Lock & Lambert — A place at the lock. A place on Lambert.',
    template: '%s — Lock & Lambert',
  },
  description:
    'Three places to stay along the Delaware River — an apartment above 137 South Main in New Hope, Pennsylvania, and a riverside duplex on Lambert Lane in Lambertville, New Jersey. Smartlock check-in, stocked kitchens, pets welcome.',
  openGraph: {
    title: 'Lock & Lambert',
    description:
      'Three places to stay along the Delaware, in two old river towns joined by a single bridge.',
    siteName: 'Lock & Lambert',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lock & Lambert',
    description:
      'Three places to stay along the Delaware, in two old river towns joined by a single bridge.',
  },
  icons: {
    icon: [
      { url: '/logo/favicon-ampersand.svg', type: 'image/svg+xml' },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream text-ink antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
