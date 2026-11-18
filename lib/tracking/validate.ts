import type { ShipmentType } from './types';

/** ISO 6346 container number: 4 letters + 7 digits (check digit included). */
export const ISO_6346_PATTERN = /^[A-Z]{4}\d{7}$/;

export const SHIPMENT_TYPES: ShipmentType[] = ['CT', 'BL', 'BK'];

export function normalizeShipmentNumber(value: string): string {
  return value.trim().toUpperCase().replace(/[\s-]/g, '');
}

export function isValidShipmentType(value: string): value is ShipmentType {
  return SHIPMENT_TYPES.includes(value as ShipmentType);
}

export function validateTrackInput(input: {
  shipmentNumber: string;
  shipmentType: string;
  sealine?: string | null;
}): { ok: true; shipmentNumber: string; shipmentType: ShipmentType; sealine: string | null } | { ok: false; message: string } {
  const shipmentNumber = normalizeShipmentNumber(input.shipmentNumber ?? '');
  const shipmentType = (input.shipmentType ?? 'CT').trim().toUpperCase();
  const sealineRaw = (input.sealine ?? '').trim().toUpperCase();
  const sealine = sealineRaw && sealineRaw !== 'AUTO' ? sealineRaw : null;

  if (!shipmentNumber) {
    return { ok: false, message: 'Enter a container, bill of lading, or booking number.' };
  }

  if (!isValidShipmentType(shipmentType)) {
    return { ok: false, message: 'Shipment type must be Container (CT), Bill of Lading (BL), or Booking (BK).' };
  }

  if (shipmentType === 'CT' && !ISO_6346_PATTERN.test(shipmentNumber)) {
    return {
      ok: false,
      message:
        'Container numbers should look like ABCD1234567 (4 letters followed by 7 digits).',
    };
  }

  if (shipmentNumber.length < 5 || shipmentNumber.length > 30) {
    return { ok: false, message: 'That shipment number looks too short or too long. Please check and try again.' };
  }

  if (sealine && !/^[A-Z0-9]{2,4}$/.test(sealine)) {
    return { ok: false, message: 'Carrier SCAC codes are usually 2–4 letters (for example MAEU).' };
  }

  return { ok: true, shipmentNumber, shipmentType, sealine };
}
