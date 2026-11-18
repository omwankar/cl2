export type ShipmentType = 'CT' | 'BL' | 'BK';

export type ShippingStatus =
  | 'PLANNED'
  | 'IN_TRANSIT'
  | 'DELIVERED'
  | 'UNKNOWN'
  | string;

export type TrackPortStop = {
  role: 'prepol' | 'pol' | 'pod' | 'postpod';
  name: string | null;
  country: string | null;
  countryCode: string | null;
  locode: string | null;
  date: string | null;
  actual: boolean | null;
  lat: number | null;
  lng: number | null;
};

export type TrackEvent = {
  id: string;
  description: string;
  eventCode: string | null;
  eventType: string | null;
  date: string | null;
  isActual: boolean;
  locationName: string | null;
  country: string | null;
  locode: string | null;
  vesselName: string | null;
  voyage: string | null;
  facilityName: string | null;
};

export type TrackPosition = {
  lat: number;
  lng: number;
  label: string | null;
};

export type NormalizedShipment = {
  metadata: {
    shipmentType: ShipmentType | string;
    shipmentNumber: string;
    sealine: string | null;
    sealineName: string | null;
    shippingStatus: ShippingStatus;
    updatedAt: string | null;
  };
  eta: string | null;
  route: TrackPortStop[];
  events: TrackEvent[];
  containers: Array<{
    number: string;
    sizeType: string | null;
    status: string | null;
  }>;
  position: TrackPosition | null;
};

export type SealineOption = {
  name: string;
  scac: string;
  active: boolean;
};

export type TrackApiSuccess = {
  ok: true;
  data: NormalizedShipment;
  cached: boolean;
};

export type TrackApiError = {
  ok: false;
  code:
    | 'VALIDATION'
    | 'NOT_FOUND'
    | 'UNAUTHORIZED'
    | 'RATE_LIMIT'
    | 'UPSTREAM'
    | 'CONFIG'
    | 'NETWORK'
    | 'REDIRECT';
  message: string;
  /** Official carrier tracking URL when we cannot show an in-app timeline */
  redirectUrl?: string;
  detectedKind?: string;
};

export type TrackApiResponse = TrackApiSuccess | TrackApiError;
