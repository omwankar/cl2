export type PressReleaseSourceType = 'company' | 'industry';

export type PressRelease = {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  source: string;
  sourceType: PressReleaseSourceType;
  url?: string;
  image?: string;
  featured?: boolean;
  author?: string;
};

export type IndustryNewsResponse = {
  articles: PressRelease[];
  totalResults: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
  error?: string;
};
