import type { Metadata, Viewport } from 'next'
import {
  Bebas_Neue,
  DM_Sans,
  DM_Mono,
  Playfair_Display,
} from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { OrganizationJsonLd } from '@/components/organization-json-ld'
import { FloatingCallButton } from '@/components/floating-call-button'
import { MetaPixelRouteTracker } from '@/components/meta-pixel-route-tracker'
import { PAGE_SEO } from '@/lib/page-seo'
import { SEO } from '@/lib/seo'
import './globals.css'
import './homepage.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F6F1' },
    { media: '(prefers-color-scheme: dark)', color: '#0F1923' },
  ],
  colorScheme: 'light dark',
}

export const metadata: Metadata = {
  ...SEO({
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    url: '/',
    image: '/clarusto-logo-dark.png',
    locale: 'en-GB',
    exactTitle: true,
    modifiedTime: '2026-05-22T00:00:00.000Z',
    keywords: [
      'UK logistics',
      'freight forwarding UK',
      'customs brokerage UK',
      'sea freight UK',
      'supply chain management UK',
      'last mile delivery UK',
      'logistics Scotland',
      'Clarusto Logistics',
    ],
  }),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  appleWebApp: {
    capable: true,
    title: 'Clarusto Logistics',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en-GB"
      className={`scroll-smooth overflow-x-clip ${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BFFNSCEP6B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BFFNSCEP6B', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Meta Pixel — inline in <head> so Meta’s crawler can detect it in HTML */}
        <script
          id="meta-pixel"
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '517991158551582');
fbq('track', 'PageView');
            `.trim(),
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=517991158551582&ev=PageView&noscript=1" alt="" />',
          }}
        />
      </head>

      <body className="font-sans antialiased bg-background text-foreground min-h-[100dvh] overflow-x-clip text-base leading-relaxed md:leading-normal">
        {/* Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
        >
          Skip to main content
        </a>

        {/* Structured Data */}
        <OrganizationJsonLd />
        <MetaPixelRouteTracker />

        {/* Main Content */}
        <main id="main-content">{children}</main>

        {/* Floating CTA */}
        <FloatingCallButton />

        {/* Optional: Keep ONLY if you really need it */}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}