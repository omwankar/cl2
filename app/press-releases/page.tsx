import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PressReleasesHero } from '@/components/press-releases/press-releases-hero';
import { PressReleasesPageClient } from '@/components/press-releases/press-releases-page-client';
import { COMPANY_PRESS_RELEASES } from '@/lib/press-releases-data';
import { fetchIndustryNews } from '@/lib/news-api';
import { SEO } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export const metadata = SEO({
  title: 'Press Releases & Industry News | Clarusto Logistics',
  description:
    'Official Clarusto Logistics press releases and curated global supply chain, freight, and logistics industry headlines. Search, filter, and share the latest news.',
  url: '/press-releases',
  keywords: [
    'Clarusto Logistics press releases',
    'logistics industry news',
    'supply chain news UK',
    'freight forwarding announcements',
    'international trade headlines',
  ],
});

export default async function PressReleasesPage() {
  const initialIndustry = await fetchIndustryNews({ page: 1, pageSize: 12 });

  return (
    <>
      <Navbar />
      <PressReleasesHero companyCount={COMPANY_PRESS_RELEASES.length} />
      <PressReleasesPageClient
        companyReleases={COMPANY_PRESS_RELEASES}
        initialIndustry={initialIndustry}
      />
      <Footer />
    </>
  );
}
