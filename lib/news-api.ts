import 'server-only';

import type { IndustryNewsResponse, PressRelease } from './press-release-types';

const NEWS_API_BASE = 'https://newsapi.org/v2/everything';

const LOGISTICS_QUERY =
  '("supply chain" OR logistics OR freight OR "freight forwarding" OR shipping OR warehousing OR "customs clearance" OR "international trade")';

type NewsApiArticle = {
  source?: { id?: string | null; name?: string | null };
  author?: string | null;
  title?: string | null;
  description?: string | null;
  url?: string | null;
  urlToImage?: string | null;
  publishedAt?: string | null;
  content?: string | null;
};

type NewsApiResponse = {
  status: string;
  totalResults?: number;
  articles?: NewsApiArticle[];
  message?: string;
  code?: string;
};

function inferCategory(title: string, description: string): string {
  const text = `${title} ${description}`.toLowerCase();
  if (/customs|tariff|trade deal|incoterm|export|import|brexit|cbam/.test(text)) {
    return 'Trade & Compliance';
  }
  if (/port|vessel|ocean|sea freight|container|maritime/.test(text)) {
    return 'Ocean Freight';
  }
  if (/air cargo|airline|aviation/.test(text)) {
    return 'Air Cargo';
  }
  if (/warehouse|fulfil|e-?commerce|last.?mile/.test(text)) {
    return 'Warehousing & Fulfilment';
  }
  if (/ai|automation|digital|technology|visibility/.test(text)) {
    return 'Technology';
  }
  if (/sustainab|carbon|green|emission/.test(text)) {
    return 'Sustainability';
  }
  return 'Industry News';
}

function mapArticle(article: NewsApiArticle, index: number, page: number): PressRelease | null {
  if (!article.title?.trim() || !article.url?.trim()) return null;

  const title = article.title.trim();
  const description = (article.description ?? article.content ?? '').trim();
  const excerpt =
    description.length > 220 ? `${description.slice(0, 217)}...` : description || title;

  return {
    id: `industry-${page}-${index}-${article.url}`,
    title,
    excerpt,
    publishedAt: article.publishedAt ?? new Date().toISOString(),
    category: inferCategory(title, description),
    source: article.source?.name?.trim() || 'Industry Publication',
    sourceType: 'industry',
    url: article.url,
    image: article.urlToImage ?? undefined,
    author: article.author ?? undefined,
  };
}

export async function fetchIndustryNews(options?: {
  page?: number;
  pageSize?: number;
  query?: string;
}): Promise<IndustryNewsResponse> {
  const page = Math.max(1, options?.page ?? 1);
  const pageSize = Math.min(30, Math.max(6, options?.pageSize ?? 12));
  const apiKey = process.env.NEWS_API_KEY?.trim();

  if (!apiKey) {
    return {
      articles: [],
      totalResults: 0,
      page,
      pageSize,
      hasMore: false,
      error: 'Industry news API is not configured.',
    };
  }

  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - 30);
  const from = fromDate.toISOString().slice(0, 10);

  const params = new URLSearchParams({
    q: options?.query?.trim() || LOGISTICS_QUERY,
    from,
    sortBy: 'publishedAt',
    language: 'en',
    pageSize: String(pageSize),
    page: String(page),
    apiKey,
  });

  try {
    const response = await fetch(`${NEWS_API_BASE}?${params.toString()}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return {
        articles: [],
        totalResults: 0,
        page,
        pageSize,
        hasMore: false,
        error: 'Unable to load industry headlines right now.',
      };
    }

    const data = (await response.json()) as NewsApiResponse;

    if (data.status !== 'ok') {
      return {
        articles: [],
        totalResults: 0,
        page,
        pageSize,
        hasMore: false,
        error: data.message ?? 'News API returned an error.',
      };
    }

    const articles = (data.articles ?? [])
      .map((item, index) => mapArticle(item, index, page))
      .filter((item): item is PressRelease => Boolean(item));

    const totalResults = data.totalResults ?? articles.length;

    return {
      articles,
      totalResults,
      page,
      pageSize,
      hasMore: page * pageSize < totalResults,
    };
  } catch {
    return {
      articles: [],
      totalResults: 0,
      page,
      pageSize,
      hasMore: false,
      error: 'Failed to fetch industry news.',
    };
  }
}
