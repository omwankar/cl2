import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { TrackSkeleton } from '@/components/tracking/track-skeleton';
import { SEO } from '@/lib/seo';
import { TrackPageClient } from './track-page-client';

export const metadata: Metadata = SEO({
  title: 'Track Shipment | Container, B/L & Air Waybill',
  description:
    'Track Clarusto Logistics shipments by container, bill of lading, booking, or air waybill. View carrier status, route progress, and event timelines.',
  url: '/track',
  image: '/container/hero.png',
  keywords: [
    'track shipment',
    'container tracking',
    'bill of lading tracking',
    'air waybill tracking',
    'MAWB tracking',
    'Clarusto Logistics tracking',
    'freight tracking UK',
  ],
});

export default function TrackPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="app-container py-14">
              <TrackSkeleton />
            </div>
          }
        >
          <TrackPageClient />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
