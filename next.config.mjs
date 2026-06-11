/** @type {import('next').NextConfig} */
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/axial-metal-expansion-joint-logistics',
        destination: '/projects/axial-metal-expansion-joint-logistics',
        permanent: true,
      },
      {
        source: '/live-apple-plants-shipment-italy-india',
        destination: '/projects/live-apple-plants-shipment-italy-india',
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: __dirname,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    domains: ['img.logo.dev'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'www.dafont.com' },
      { protocol: 'https', hostname: 'yjrconstrade.com' },
      { protocol: 'https', hostname: 'www.gwclogistics.com' },
      { protocol: 'https', hostname: 'www.sabic.com' },
      { protocol: 'https', hostname: 'd1yjjnpx0p53s8.cloudfront.net' },
      { protocol: 'https', hostname: 'd2pi0n2fm836iz.cloudfront.net' },
      { protocol: 'https', hostname: 'plantsolutionscoltd.com' },
      { protocol: 'https', hostname: 'logodix.com' },
      { protocol: 'https', hostname: 'lmg.a.bigcontent.io' },
      { protocol: 'https', hostname: 'images.crunchbase.com' },
      { protocol: 'https', hostname: 'madhyamamonline.com' },
      { protocol: 'https', hostname: 'alchetron.com' },
      { protocol: 'https', hostname: '1000logos.net' },
      { protocol: 'https', hostname: 'www.dpd.com' },
      { protocol: 'https', hostname: 'www.ups.com' },
      { protocol: 'https', hostname: 'www.dhl.com' },
      { protocol: 'https', hostname: 'www.dxdelivery.com' },
      { protocol: 'https', hostname: 'img.logo.dev' },
    ],
  },
}

export default nextConfig
