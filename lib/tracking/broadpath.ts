/**
 * Public air waybill lookup via Broadpath (no API key required).
 * GET https://broadpath.app/api/awb/:awb
 */

const BROADPATH_BASE = 'https://broadpath.app/api/awb';

export type BroadpathFetchResult =
  | { ok: true; data: unknown; status: number }
  | {
      ok: false;
      status: number;
      kind: 'not_found' | 'invalid' | 'upstream' | 'network';
      detail?: string;
    };

function formatAwbPath(displayOrNormalized: string): string {
  const digits = displayOrNormalized.replace(/\D/g, '');
  if (digits.length === 11) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }
  return displayOrNormalized.trim();
}

export async function fetchBroadpathAwb(
  awb: string
): Promise<BroadpathFetchResult> {
  const path = formatAwbPath(awb);
  const url = `${BROADPATH_BASE}/${encodeURIComponent(path)}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25_000);

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      signal: controller.signal,
      cache: 'no-store',
    });

    let data: unknown = null;
    const text = await response.text();
    if (text) {
      try {
        data = JSON.parse(text);
      } catch {
        data = { message: text };
      }
    }

    if (response.status === 404) {
      return { ok: false, status: 404, kind: 'not_found' };
    }

    if (!response.ok) {
      const record =
        data && typeof data === 'object'
          ? (data as Record<string, unknown>)
          : null;
      const error =
        record?.error && typeof record.error === 'object'
          ? (record.error as Record<string, unknown>)
          : null;
      const code =
        typeof error?.code === 'string' ? error.code.toUpperCase() : '';
      if (code === 'INVALID_AWB' || response.status === 400) {
        return {
          ok: false,
          status: response.status,
          kind: 'invalid',
          detail:
            typeof error?.message === 'string' ? error.message : undefined,
        };
      }
      return {
        ok: false,
        status: response.status,
        kind: 'upstream',
        detail:
          typeof error?.message === 'string' ? error.message : undefined,
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
