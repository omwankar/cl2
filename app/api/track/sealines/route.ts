import { NextResponse } from 'next/server';
import { cacheKey, getCached, setCached } from '@/lib/tracking/cache';
import { normalizeSealines } from '@/lib/tracking/normalize';
import { checkRateLimit, getClientIp } from '@/lib/tracking/rate-limit';
import { fetchSinaySealines, getSinayApiKey } from '@/lib/tracking/sinay';
import type { SealineOption } from '@/lib/tracking/types';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(request: Request) {
  if (!getSinayApiKey()) {
    return NextResponse.json(
      { ok: false, message: 'Tracking is temporarily unavailable.' },
      { status: 503 }
    );
  }

  const ip = getClientIp(request);
  const limit = checkRateLimit(`sealines:${ip}`, 30, 60_000);
  if (!limit.allowed) {
    return NextResponse.json(
      { ok: false, message: 'Too many requests. Please wait a moment.' },
      { status: 429 }
    );
  }

  const key = cacheKey(['sealines']);
  const cached = getCached<SealineOption[]>(key);
  if (cached) {
    return NextResponse.json({ ok: true, data: cached, cached: true });
  }

  const upstream = await fetchSinaySealines();
  if (!upstream.ok) {
    return NextResponse.json(
      { ok: false, message: 'Carrier list is unavailable right now.' },
      { status: upstream.status >= 400 ? upstream.status : 502 }
    );
  }

  const data = normalizeSealines(upstream.data);
  setCached(key, data, 60 * 60 * 1000);
  return NextResponse.json({ ok: true, data, cached: false });
}
