import 'server-only';
import type { BlogPost } from './blogs';
import { BLOG_POSTS } from './blogs';
import { readBlogData } from './blog-storage';
import { filterPublishedBlogs, isBlogPublished } from './blog-publish';
import { generateSlugFromTitle } from './blog-parser';

function getPostTimestamp(date: string): number {
  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  const uploaded = await readBlogData();
  const bySlug = new Map<string, BlogPost>();
  for (const post of BLOG_POSTS) {
    bySlug.set(post.slug, post);
  }
  for (const post of uploaded) {
    if (!post?.slug) continue;
    const existing = bySlug.get(post.slug);
    bySlug.set(post.slug, {
      ...post,
      publishAt: post.publishAt ?? existing?.publishAt,
    });
  }
  return filterPublishedBlogs(Array.from(bySlug.values()));
}

export async function getBlogBySlug(slug: string) {
  const blogs = await getAllBlogs();
  return blogs.find((post) => post.slug === slug);
}

export async function getBlogBySlugIncludingScheduled(slug: string) {
  const uploaded = await readBlogData();
  const bySlug = new Map<string, BlogPost>();
  for (const post of BLOG_POSTS) {
    bySlug.set(post.slug, post);
  }
  for (const post of uploaded) {
    if (!post?.slug) continue;
    const existing = bySlug.get(post.slug);
    bySlug.set(post.slug, {
      ...post,
      publishAt: post.publishAt ?? existing?.publishAt,
    });
  }
  const all = Array.from(bySlug.values());
  return (
    bySlug.get(slug) ??
    all.find((item) => generateSlugFromTitle(item.title) === slug)
  );
}

export { isBlogPublished };

export async function getBlogsNewestFirst() {
  const blogs = await getAllBlogs();
  return [...blogs].sort(
    (a, b) => getPostTimestamp(b.date) - getPostTimestamp(a.date)
  );
}
