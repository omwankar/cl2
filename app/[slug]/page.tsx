import { notFound } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { IndustrySolutionView } from '@/components/industries/industry-solution-view';
import {
  getAllIndustrySolutionSlugs,
  getIndustrySolutionPage,
} from '@/lib/industry-solutions';
import { SEO } from '@/lib/seo';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllIndustrySolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = getIndustrySolutionPage(slug);
  if (!page) return {};

  return SEO({
    title: page.metaTitle,
    description: page.metaDescription,
    url: `/${page.slug}`,
    image: page.heroImage,
  });
}

export default async function IndustrySolutionSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getIndustrySolutionPage(slug);
  if (!page) notFound();

  return (
    <>
      <Navbar />
      <IndustrySolutionView page={page} />
      <Footer />
    </>
  );
}
