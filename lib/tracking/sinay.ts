import type { ShipmentType } from './types';

const SINAY_BASE = 'https://api.sinay.ai/container-tracking/api/v2';

const NOT_FOUND_CODES = new Set([
  'SEALINE_HASNT_PROVIDE_INFO',
  'NO_CONTAINERS',
  'NO_EVENTS',
  'WRONG_PARAMETERS',
  'WRONG_NUMBER',
  'WRONG_SEALINE',
  'NOT_FOUND',
]);

export function getSinayApiKey(): string | null {
  const key = process.env.SINAY_API_KEY?.trim();
  return key || null;
}

export type SinayFetchResult =
  | { ok: true; data: unknown; status: number }
  | {
      ok: false;
      status: number;
      kind: 'unauthorized' | 'rate_limit' | 'not_found' | 'upstream' | 'network';
      detail?: string;
      errorCode?: string;
    };

function extractErrorCode(data: unknown): string | null {
  if (!data || typeof data !== 'object') return null;
  const record = data as Record<string, unknown>;
  const code =
    record.errorCode ??
    record.code ??
    record.error_code ??
    (typeof record.error === 'object' && record.error
      ? (record.error as Record<string, unknown>).code
      : null);
  return typeof code === 'string' ? code.toUpperCase() : null;
}

async function sinayGet(
  path: string,
  searchParams: Record<string, string>
): Promise<SinayFetchResult> {
  const apiKey = getSinayApiKey();
  if (!apiKey) {
    return { ok: false, status: 500, kind: 'upstream', detail: 'missing_key' };
  }

  const url = new URL(`${SINAY_BASE}${path}`);
  for (const [key, value] of Object.entries(searchParams)) {
    if (value) url.searchParams.set(key, value);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25_000);

  try {
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        API_KEY: apiKey,
        Accept: 'application/json',
      },
      signal: controller.signal,
      cache: 'no-store',
    });

    if (response.status === 401 || response.status === 403) {
      return { ok: false, status: response.status, kind: 'unauthorized' };
    }
    if (response.status === 429) {
      return { ok: false, status: 429, kind: 'rate_limit' };
    }
    if (response.status === 404) {
      return { ok: false, status: 404, kind: 'not_found' };
    }

    let data: unknown = null;
    const text = await response.text();
    if (text) {
      try {
        data = JSON.parse(text);
      } catch {
        data = { message: text };
      }
    }

    const errorCode = extractErrorCode(data);
    if (!response.ok) {
      const kind =
        response.status === 400 || (errorCode && NOT_FOUND_CODES.has(errorCode))
          ? 'not_found'
          : 'upstream';
      return {
        ok: false,
        status: response.status,
        kind,
        detail:
          typeof data === 'object' && data && 'message' in data
            ? String((data as { message: unknown }).message)
            : undefined,
        errorCode: errorCode ?? undefined,
      };
    }

    // Some Sinay payloads return HTTP 200 with a business error code.
    if (errorCode && NOT_FOUND_CODES.has(errorCode)) {
      return {
        ok: false,
        status: 404,
        kind: 'not_found',
        errorCode,
        detail: errorCode,
      };
    }

    return { ok: true, data, status: response.status };
  } catch (error) {
    const aborted = error instanceof Error && error.name === 'AbortError';
    return {
      ok: false,
      status: 504,
      kind: 'network',
      detail: aborted ? 'timeout' : 'network',
    };
  } finally {
    clearTimeout(timeout);
  }
}

export function fetchSinayShipment(params: {
  shipmentNumber: string;
  shipmentType: ShipmentType;
  sealine?: string | null;
}) {
  const search: Record<string, string> = {
    shipmentNumber: params.shipmentNumber,
    shipmentType: params.shipmentType,
    route: 'true',
    ais: 'true',
  };
  if (params.sealine) search.sealine = params.sealine;
  return sinayGet('/shipment', search);
}

export function fetchSinaySealines() {
  return sinayGet('/sealines', {});
}
