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
    'Three rentals on the Delaware. One above 137 S. Main in New Hope. Two at 13 Lambert Lane in Lambertville. Smartlock check-in, stocked kitchens, pets welcome. Run by Zach.',
  openGraph: {
    title: 'Lock & Lambert',
    description: 'Three places to land. Two banks of the Delaware. One bridge between.',
    siteName: 'Lock & Lambert',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lock & Lambert',
    description: 'Three places to land. Two banks of the Delaware. One bridge between.',
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
