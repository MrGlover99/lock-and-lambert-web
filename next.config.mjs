/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Photo origins. Supabase Storage origin to be filled in once the L&L
    // Supabase project is provisioned (per v2 spec §7). Until then, all
    // photos live under /public/photos and are served from the Next.js
    // origin directly.
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // Brand logo assets are CORS-open so they can be pulled into the
        // Guesty Booking Website editor (cross-origin) for the logo slot.
        source: '/logo/:path*',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
      },
    ];
  },
};

export default nextConfig;
