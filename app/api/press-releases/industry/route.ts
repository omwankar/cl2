import { NextResponse } from 'next/server';
import { fetchIndustryNews } from '@/lib/news-api';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page') ?? '1');
  const pageSize = Number(searchParams.get('pageSize') ?? '12');
  const query = searchParams.get('q') ?? undefined;

  const payload = await fetchIndustryNews({
    page: Number.isFinite(page) ? page : 1,
    pageSize: Number.isFinite(pageSize) ? pageSize : 12,
    query,
  });

  return NextResponse.json(payload, {
    headers: { 'Cache-Control': 'no-store, max-age=0' },
  });
}
