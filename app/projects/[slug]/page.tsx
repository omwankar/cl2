import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ProjectCaseStudyView } from '@/components/projects/project-case-study-view';
import {
  getAllProjectSlugs,
  getProjectCaseStudy,
} from '@/lib/project-case-studies';
import { SEO } from '@/lib/seo';

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

  return SEO({
    title: study.metaTitle,
    description: study.metaDescription,
    url: `/projects/${study.slug}`,
    image: study.ogImage,
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

  return (
    <>
      <Navbar />
      <ProjectCaseStudyView study={study} />
      <Footer />
    </>
  );
}
