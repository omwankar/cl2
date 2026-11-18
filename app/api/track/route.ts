import { NextResponse } from 'next/server';
import { fetchBroadpathAwb } from '@/lib/tracking/broadpath';
import {
  carrierTrackUrl,
  guessScacFromNumber,
} from '@/lib/tracking/carriers';
import { cacheKey, getCached, setCached } from '@/lib/tracking/cache';
import { detectTrackNumber } from '@/lib/tracking/detect';
import {
  normalizeBroadpathAwb,
  normalizeSinayShipment,
} from '@/lib/tracking/normalize';
import { checkRateLimit, getClientIp } from '@/lib/tracking/rate-limit';
import { fetchSinayShipment, getSinayApiKey } from '@/lib/tracking/sinay';
import type { NormalizedShipment, TrackApiResponse } from '@/lib/tracking/types';
import { validateTrackInput } from '@/lib/tracking/validate';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function json(body: TrackApiResponse, init?: ResponseInit) {
  return NextResponse.json(body, init);
}

export async function GET(request: Request) {
  const ip = getClientIp(request);
  const limit = checkRateLimit(`track:${ip}`, 20, 60_000);
  if (!limit.allowed) {
    return json(
      {
        ok: false,
        code: 'RATE_LIMIT',
        message: `Too many tracking requests. Please wait about ${limit.retryAfterSec} seconds and try again.`,
      },
      {
        status: 429,
        headers: { 'Retry-After': String(limit.retryAfterSec) },
      }
    );
  }

  const { searchParams } = new URL(request.url);
  const rawNumber =
    searchParams.get('number') ?? searchParams.get('shipmentNumber') ?? '';
  const rawType =
    searchParams.get('type') ?? searchParams.get('shipmentType') ?? '';
  const detected = detectTrackNumber(rawNumber);

  // Air waybills: in-page timeline via Broadpath (no third-party redirect).
  if (detected.kind === 'MAWB' || rawType.toUpperCase() === 'MAWB') {
    const awbDisplay = detected.display || detected.normalized || rawNumber;
    const airKey = cacheKey(['MAWB', awbDisplay]);
    const airCached = getCached<NormalizedShipment>(airKey);
    if (airCached) {
      return json({ ok: true, data: airCached, cached: true });
    }

    const upstream = await fetchBroadpathAwb(awbDisplay);
    if (!upstream.ok) {
      if (upstream.kind === 'invalid') {
        return json(
          {
            ok: false,
            code: 'VALIDATION',
            message:
              upstream.detail ??
              'That air waybill number looks invalid. Use the format 020-12345675.',
            detectedKind: 'MAWB',
          },
          { status: 400 }
        );
      }
      if (upstream.kind === 'not_found') {
        return json(
          {
            ok: false,
            code: 'NOT_FOUND',
            message:
              'No air cargo tracking was found for that waybill yet. Check the number and try again.',
            detectedKind: 'MAWB',
          },
          { status: 404 }
        );
      }
      if (upstream.kind === 'network') {
        return json(
          {
            ok: false,
            code: 'NETWORK',
            message:
              'Could not reach the air tracking provider. Please try again shortly.',
            detectedKind: 'MAWB',
          },
          { status: 504 }
        );
      }
      return json(
        {
          ok: false,
          code: 'UPSTREAM',
          message:
            'Air tracking returned an unexpected error. Please try again.',
          detectedKind: 'MAWB',
        },
        { status: 502 }
      );
    }

    const normalized = normalizeBroadpathAwb(upstream.data);
    if (!normalized) {
      return json(
        {
          ok: false,
          code: 'UPSTREAM',
          message: 'Air tracking data could not be read. Please try again.',
          detectedKind: 'MAWB',
        },
        { status: 502 }
      );
    }

    // Still show the Clarusto timeline card even when the airline has no events yet.
    setCached(airKey, normalized);
    return json({ ok: true, data: normalized, cached: false });
  }

  if (!getSinayApiKey()) {
    const scac =
      searchParams.get('sealine')?.toUpperCase() ||
      guessScacFromNumber(detected.normalized);
    const redirectUrl = carrierTrackUrl({
      sealineScac: scac,
      shipmentNumber: detected.normalized,
    });
    return json(
      {
        ok: false,
        code: redirectUrl ? 'REDIRECT' : 'CONFIG',
        message: redirectUrl
          ? 'Live timeline is unavailable. Open the carrier’s official tracking page instead.'
          : 'Tracking is temporarily unavailable. Please try again later.',
        redirectUrl: redirectUrl ?? undefined,
        detectedKind: detected.kind,
      },
      { status: redirectUrl ? 200 : 503 }
    );
  }

  const validated = validateTrackInput({
    shipmentNumber: detected.normalized || rawNumber,
    shipmentType:
      rawType && ['CT', 'BL', 'BK'].includes(rawType.toUpperCase())
        ? rawType
        : detected.shipmentType ?? 'CT',
    sealine: searchParams.get('sealine'),
  });

  if (!validated.ok) {
    return json(
      { ok: false, code: 'VALIDATION', message: validated.message },
      { status: 400 }
    );
  }

  const key = cacheKey([
    validated.shipmentNumber,
    validated.shipmentType,
    validated.sealine,
  ]);
  const cached = getCached<NormalizedShipment>(key);
  if (cached) {
    return json({ ok: true, data: cached, cached: true });
  }

  const upstream = await fetchSinayShipment({
    shipmentNumber: validated.shipmentNumber,
    shipmentType: validated.shipmentType,
    sealine: validated.sealine,
  });

  if (!upstream.ok) {
    if (upstream.kind === 'unauthorized') {
      return json(
        {
          ok: false,
          code: 'UNAUTHORIZED',
          message:
            'Tracking service authentication failed. Please contact support.',
        },
        { status: 502 }
      );
    }
    if (upstream.kind === 'rate_limit') {
      return json(
        {
          ok: false,
          code: 'RATE_LIMIT',
          message:
            'The tracking provider is busy. Please wait a moment and try again.',
        },
        { status: 429 }
      );
    }
    if (upstream.kind === 'not_found') {
      const scac =
        validated.sealine || guessScacFromNumber(validated.shipmentNumber);
      const redirectUrl = carrierTrackUrl({
        sealineScac: scac,
        shipmentNumber: validated.shipmentNumber,
      });
      return json(
        {
          ok: false,
          code: redirectUrl ? 'REDIRECT' : 'NOT_FOUND',
          message: redirectUrl
            ? 'No live timeline from the carrier feed yet. You can open the official tracking page instead.'
            : 'No shipment was found for that number. Check the number, type, or try selecting the carrier.',
          redirectUrl: redirectUrl ?? undefined,
          detectedKind: validated.shipmentType,
        },
        { status: redirectUrl ? 200 : 404 }
      );
    }
    if (upstream.kind === 'network') {
      return json(
        {
          ok: false,
          code: 'NETWORK',
          message:
            'Could not reach the tracking provider. Please try again shortly.',
        },
        { status: 504 }
      );
    }
    return json(
      {
        ok: false,
        code: 'UPSTREAM',
        message:
          'The tracking provider returned an unexpected error. Please try again.',
      },
      { status: 502 }
    );
  }

  const normalized = normalizeSinayShipment(upstream.data);
  if (!normalized) {
    return json(
      {
        ok: false,
        code: 'UPSTREAM',
        message: 'Tracking data could not be read. Please try again.',
      },
      { status: 502 }
    );
  }

  setCached(key, normalized);
  return json({ ok: true, data: normalized, cached: false });
}
