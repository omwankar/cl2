import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ProjectCaseStudyView } from '@/components/projects/project-case-study-view';
import {
  getAllProjectSlugs,
  getProjectCaseStudy,
  resolveCaseStudyImages,
} from '@/lib/project-case-studies';
import { SEO, absoluteUrl, siteConfig } from '@/lib/seo';

type ProjectCaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getProjectCaseStudy(slug);

  if (!study) {
    return { title: 'Project Not Found | Clarusto Logistics' };
  }

  const images = resolveCaseStudyImages(study);
  const ogImage = images[0]?.src || study.ogImage;

  return SEO({
    title: study.metaTitle,
    description: study.metaDescription,
    url: `/projects/${study.slug}`,
    image: ogImage,
    keywords: [
      'Clarusto Logistics project',
      study.category,
      study.location,
      'logistics case study',
    ],
    openGraphType: 'article',
    modifiedTime: `${study.publishedAt}T09:00:00.000Z`,
  });
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const study = getProjectCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const images = resolveCaseStudyImages(study);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.metaDescription,
    image: images.map((image) => absoluteUrl(image.src)),
    datePublished: study.publishedAt,
    dateModified: study.publishedAt,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.domain,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/clarusto-logo-dark.png'),
      },
    },
    mainEntityOfPage: absoluteUrl(`/projects/${study.slug}`),
    about: {
      '@type': 'Thing',
      name: study.category,
      description: study.excerpt,
    },
    locationCreated: study.location,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ProjectCaseStudyView study={study} />
      <Footer />
    </>
  );
}
