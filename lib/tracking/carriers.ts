/**
 * Official / public tracking entry points used when Sinay has no timeline
 * or when the number is an air waybill (MAWB).
 */

const SCAC_TRACK_URLS: Record<string, (number: string) => string> = {
  MAEU: (n) =>
    `https://www.maersk.com/tracking/${encodeURIComponent(n)}`,
  MSCU: (n) =>
    `https://www.msc.com/en/track-a-shipment?query=${encodeURIComponent(n)}`,
  CMDU: (n) =>
    `https://www.cma-cgm.com/ebusiness/tracking/search?SearchBy=Container&Reference=${encodeURIComponent(n)}`,
  HLCU: (n) =>
    `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${encodeURIComponent(n)}`,
  COSU: (n) =>
    `https://elines.coscoshipping.com/ebusiness/cargoTracking?trackingType=CONTAINER&number=${encodeURIComponent(n)}`,
  ONEY: (n) =>
    `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?cntrNo=${encodeURIComponent(n)}`,
  EGLV: (n) =>
    `https://www.evergreen-line.com/empp/jsp/EMP10A.jsp?BL=${encodeURIComponent(n)}`,
};

/** Popular IATA numeric airline prefixes → cargo tracking search pages */
const AIRLINE_PREFIX_TRACK_URLS: Record<string, (mawbDisplay: string) => string> = {
  '001': (n) =>
    `https://www.aa.com/i18n/customer-service/support/cargo-tracking.jsp?trackingNumber=${encodeURIComponent(n)}`,
  '006': (n) =>
    `https://www.delta.com/flight-status/search?flightNumber=${encodeURIComponent(n)}`,
  '014': (n) =>
    `https://www.aircanada.com/cargo/en/track/?awb=${encodeURIComponent(n)}`,
  '020': (n) =>
    `https://www.lufthansa-cargo.com/eservices/tracenet?awb=${encodeURIComponent(n)}`,
  '057': (n) =>
    `https://www.afklcargo.com/WW/en/local/app/index.jsp#/tracking/${encodeURIComponent(n)}`,
  '074': (n) =>
    `https://www.klm.com/cargo/en/track-and-trace?awb=${encodeURIComponent(n)}`,
  '125': (n) =>
    `https://www.britishairways.com/en-gb/information/shipping/cargo`,
  '180': (n) =>
    `https://www.koreanair.com/cargo/track`,
  '297': (n) =>
    `https://www.cathaypacificcargo.com/en-us/TrackYourShipment.aspx`,
  '406': (n) =>
    `https://www.ups.com/track?tracknum=${encodeURIComponent(n)}`,
  '618': (n) =>
    `https://www.singaporeair.com/en_UK/sg/cargo/track/`,
  '988': (n) =>
    `https://www.asiana.com/en-US/cargo`,
};

export function carrierTrackUrl(params: {
  sealineScac?: string | null;
  shipmentNumber: string;
}): string | null {
  const scac = (params.sealineScac ?? '').trim().toUpperCase();
  if (!scac) return null;
  const builder = SCAC_TRACK_URLS[scac];
  if (!builder) return null;
  return builder(params.shipmentNumber);
}

export function mawbTrackUrl(airlinePrefix: string, mawbDisplay: string): string | null {
  const prefix = airlinePrefix.padStart(3, '0');
  const builder = AIRLINE_PREFIX_TRACK_URLS[prefix];
  if (!builder) {
    // Generic fallback: Google search for the AWB on official airline cargo pages
    return `https://www.google.com/search?q=${encodeURIComponent(`${mawbDisplay} air cargo tracking`)}`;
  }
  return builder(mawbDisplay);
}

export function guessScacFromNumber(number: string): string | null {
  const n = number.trim().toUpperCase();
  if (/^[A-Z]{4}\d+/.test(n)) return n.slice(0, 4);
  return null;
}
