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
import { SEO, absoluteUrl } from '@/lib/seo'
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
    title: 'Global Freight & Supply Chain Services',
    description:
      'Clarusto Logistics delivers global freight forwarding, customs brokerage, and supply chain services for every shipment. Get a quote today.',
    url: '/',
    image: '/clarusto-logo-dark.png',
    locale: 'en-GB',
    alternateLanguages: {
      'en-GB': absoluteUrl('/'),
    },
  }),
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
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
      lang="en"
      className={`scroll-smooth overflow-x-clip ${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* ✅ Google Analytics (gtag.js) */}
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