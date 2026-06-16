import Script from 'next/script';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { getAllBlogs, getBlogBySlugIncludingScheduled, isBlogPublished } from '@/lib/blogs.server';
import { absoluteUrl, siteConfig, SEO } from '@/lib/seo';
import {
  INTERNATIONAL_SHIPPING_HOW_TO,
  INTERNATIONAL_SHIPPING_SLUG,
} from '@/lib/blog-how-to';
import { SITE_LAST_UPDATED } from '@/lib/site-faqs';
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import {
  generateSlugFromTitle,
  parseRawBlogText,
} from '@/lib/blog-parser';
import { BlogSection } from '@/components/blog/BlogSection';
import { FAQSection } from '@/components/blog/FAQSection';

export const dynamic = 'force-dynamic';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  const slugs = new Set<string>();
  blogs.forEach((post) => {
    slugs.add(post.slug);
    slugs.add(generateSlugFromTitle(post.title));
  });
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlugIncludingScheduled(slug);

  if (!post || !isBlogPublished(post)) {
    return {
      title: 'Blog Not Found | Clarusto Logistics',
    };
  }

  const rawInput = post.rawText ?? `${post.title}\n\n${post.content.join('\n\n')}`;
  const parsed = parseRawBlogText(rawInput);
  const parsedDescription =
    parsed.sections
      .flatMap((section) => section.content ?? [])
      .find(Boolean)
      ?.slice(0, 180) ?? post.excerpt;

  return SEO({
    title: post.metaTitle ?? `${post.title} | Clarusto Logistics`,
    description: post.metaDescription ?? parsedDescription,
    url: `/blog/${post.slug}`,
    image: post.image,
    keywords: [
      post.category,
      ...post.tags.map((tag) => tag.replace(/^#/, '')),
    ],
    openGraphType: 'article',
    locale: 'en-GB',
    modifiedTime: `${SITE_LAST_UPDATED}T00:00:00.000Z`,
    exactTitle: Boolean(post.metaTitle),
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogBySlugIncludingScheduled(slug);

  if (!post || !isBlogPublished(post)) {
    notFound();
  }

  const blogs = await getAllBlogs();

  const rawInput = post.rawText ?? `${post.title}\n\n${post.content.join('\n\n')}`;
  const parsed = parseRawBlogText(rawInput);
  const parsedDescription =
    parsed.sections
      .flatMap((section) => section.content ?? [])
      .find(Boolean)
      ?.slice(0, 180) ?? post.excerpt;

  const relatedPosts = blogs.filter((item) => item.slug !== post.slug)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (a.category !== post.category && b.category === post.category) return 1;
      return 0;
    })
    .slice(0, 4);

  const postImage = post.image.startsWith('http')
    ? post.image
    : absoluteUrl(post.image);

  const schemaGraph: Record<string, unknown>[] = [
    {
      '@type': 'BlogPosting',
      '@id': absoluteUrl(`/blog/${post.slug}#article`),
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': absoluteUrl(`/blog/${post.slug}`),
      },
      headline: parsed.title,
      image: [postImage],
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
      publisher: {
        '@type': 'Organization',
        name: siteConfig.name,
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl('/clarusto-logo-dark.png'),
        },
      },
      datePublished: new Date(post.date).toISOString(),
      dateModified: `${SITE_LAST_UPDATED}T00:00:00.000Z`,
      description: post.metaDescription ?? parsedDescription,
      keywords: post.tags.map((tag) => tag.replace(/^#/, '')).join(', '),
      inLanguage: 'en-GB',
      url: absoluteUrl(`/blog/${post.slug}`),
    },
  ];

  if (parsed.faqs.length > 0) {
    schemaGraph.push({
      '@type': 'FAQPage',
      '@id': absoluteUrl(`/blog/${post.slug}#faq`),
      mainEntity: parsed.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  if (post.slug === INTERNATIONAL_SHIPPING_SLUG) {
    schemaGraph.push({
      '@type': 'HowTo',
      '@id': absoluteUrl(`/blog/${post.slug}#howto`),
      name: INTERNATIONAL_SHIPPING_HOW_TO.name,
      step: INTERNATIONAL_SHIPPING_HOW_TO.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
      })),
    });
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': schemaGraph,
  };

  return (
    <>
      <Navbar />
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="bg-[#F5F5F0]">
        <BlogHero post={{ ...post, title: parsed.title, excerpt: post.excerpt }} />
        <section className="pt-28 pb-12 md:pb-16">
          <div className="app-container max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
            <div className="space-y-6">
              {parsed.sections.map((section, index) => (
                <BlogSection key={`${section.heading}-${index}`} section={section} />
              ))}
              <FAQSection faqs={parsed.faqs} />
            </div>
            <BlogSidebar post={post} relatedPosts={relatedPosts} />
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
}
