import { ISO_6346_PATTERN, normalizeShipmentNumber } from './validate';
import type { ShipmentType } from './types';

export type DetectedTrackKind = ShipmentType | 'MAWB' | 'UNKNOWN';

export type DetectedTrackNumber = {
  normalized: string;
  kind: DetectedTrackKind;
  /** Suggested Sinay shipmentType when kind is CT/BL/BK */
  shipmentType: ShipmentType | null;
  /** IATA airline numeric prefix when kind is MAWB */
  airlinePrefix: string | null;
  /** Display form, e.g. 020-12345675 for MAWB */
  display: string;
};

/** Master Air Waybill: 3-digit airline prefix + 8-digit serial (check digit included). */
export const MAWB_PATTERN = /^(\d{3})(\d{8})$/;

/**
 * Heuristic detection for paste-any-number UX.
 * Prefer ISO containers, then MAWB, then BL/BK-style alphanumeric refs.
 */
export function detectTrackNumber(raw: string): DetectedTrackNumber {
  const normalized = normalizeShipmentNumber(raw);
  if (!normalized) {
    return {
      normalized: '',
      kind: 'UNKNOWN',
      shipmentType: null,
      airlinePrefix: null,
      display: '',
    };
  }

  if (ISO_6346_PATTERN.test(normalized)) {
    return {
      normalized,
      kind: 'CT',
      shipmentType: 'CT',
      airlinePrefix: null,
      display: normalized,
    };
  }

  const mawb = normalized.match(MAWB_PATTERN);
  if (mawb) {
    const [, prefix, serial] = mawb;
    return {
      normalized,
      kind: 'MAWB',
      shipmentType: null,
      airlinePrefix: prefix,
      display: `${prefix}-${serial}`,
    };
  }

  // Common B/L pattern: 4-letter SCAC + digits (e.g. MAEU12345678)
  if (/^[A-Z]{4}\d{6,}$/.test(normalized)) {
    return {
      normalized,
      kind: 'BL',
      shipmentType: 'BL',
      airlinePrefix: null,
      display: normalized,
    };
  }

  // Booking-ish alphanumeric refs
  if (/^[A-Z0-9]{6,20}$/.test(normalized) && /[A-Z]/.test(normalized) && /\d/.test(normalized)) {
    return {
      normalized,
      kind: 'BK',
      shipmentType: 'BK',
      airlinePrefix: null,
      display: normalized,
    };
  }

  return {
    normalized,
    kind: 'UNKNOWN',
    shipmentType: null,
    airlinePrefix: null,
    display: normalized,
  };
}
