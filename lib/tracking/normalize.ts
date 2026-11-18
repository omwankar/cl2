import type {
  NormalizedShipment,
  SealineOption,
  ShipmentType,
  TrackEvent,
  TrackPortStop,
  TrackPosition,
} from './types';

function asRecord(value: unknown): Record<string, unknown> | null {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  return null;
}

function asString(value: unknown): string | null {
  if (typeof value === 'string' && value.trim()) return value.trim();
  if (typeof value === 'number' && Number.isFinite(value)) return String(value);
  return null;
}

function asNumber(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim() && !Number.isNaN(Number(value))) {
    return Number(value);
  }
  return null;
}

function asBoolean(value: unknown): boolean | null {
  if (typeof value === 'boolean') return value;
  return null;
}

function coordsOf(node: unknown): { lat: number | null; lng: number | null } {
  const record = asRecord(node);
  const coordinates = asRecord(record?.coordinates) ?? record;
  return {
    lat: asNumber(coordinates?.lat),
    lng: asNumber(coordinates?.lng),
  };
}

function locationFields(node: unknown) {
  const record = asRecord(node);
  const location = asRecord(record?.location) ?? record;
  const { lat, lng } = coordsOf(location);
  return {
    name: asString(location?.name),
    country: asString(location?.country),
    countryCode: asString(location?.countryCode),
    locode: asString(location?.locode),
    lat,
    lng,
  };
}

function routeStop(
  role: TrackPortStop['role'],
  node: unknown
): TrackPortStop | null {
  const record = asRecord(node);
  if (!record) return null;
  const location = locationFields(record);
  if (!location.name && !location.locode && !location.country) return null;
  return {
    role,
    name: location.name,
    country: location.country,
    countryCode: location.countryCode,
    locode: location.locode,
    date: asString(record.date),
    actual: asBoolean(record.actual),
    lat: location.lat,
    lng: location.lng,
  };
}

function normalizeEvents(containers: unknown): TrackEvent[] {
  const list = Array.isArray(containers) ? containers : [];
  const events: TrackEvent[] = [];

  list.forEach((container, containerIndex) => {
    const c = asRecord(container);
    const containerEvents = Array.isArray(c?.events) ? c.events : [];
    containerEvents.forEach((event, eventIndex) => {
      const e = asRecord(event);
      if (!e) return;
      const location = locationFields(e);
      const vessel = asRecord(e.vessel);
      const facility = asRecord(e.facility);
      events.push({
        id: `${asString(c?.number) ?? containerIndex}-${eventIndex}-${asString(e.eventCode) ?? 'evt'}-${asString(e.date) ?? eventIndex}`,
        description: asString(e.description) ?? 'Shipment update',
        eventCode: asString(e.eventCode),
        eventType: asString(e.eventType),
        date: asString(e.date),
        isActual: asBoolean(e.isActual) ?? false,
        locationName: location.name,
        country: location.country,
        locode: location.locode,
        vesselName: asString(vessel?.name),
        voyage: asString(e.voyage) ?? asString(vessel?.voyage),
        facilityName: asString(facility?.name),
      });
    });
  });

  return events.sort((a, b) => {
    const aTime = a.date ? Date.parse(a.date) : 0;
    const bTime = b.date ? Date.parse(b.date) : 0;
    return bTime - aTime;
  });
}

function normalizePosition(raw: unknown, routeStops: TrackPortStop[]): TrackPosition | null {
  const routeData = asRecord(asRecord(raw)?.routeData);
  const coordinates = asRecord(routeData?.coordinates);
  const lat = asNumber(coordinates?.lat);
  const lng = asNumber(coordinates?.lng);
  if (lat != null && lng != null) {
    return { lat, lng, label: 'Current / last reported position' };
  }

  const withCoords = routeStops.find((s) => s.lat != null && s.lng != null);
  if (withCoords?.lat != null && withCoords.lng != null) {
    return {
      lat: withCoords.lat,
      lng: withCoords.lng,
      label: withCoords.name ? `${withCoords.name} (${withCoords.role.toUpperCase()})` : withCoords.role.toUpperCase(),
    };
  }
  return null;
}

export function normalizeSinayShipment(raw: unknown): NormalizedShipment | null {
  const root = asRecord(raw);
  if (!root) return null;

  const metadata = asRecord(root.metadata) ?? {};
  const shipmentNumber = asString(metadata.shipmentNumber);
  if (!shipmentNumber) return null;

  const routeNode = asRecord(root.route) ?? {};
  const route = (
    [
      routeStop('prepol', routeNode.prepol),
      routeStop('pol', routeNode.pol),
      routeStop('pod', routeNode.pod),
      routeStop('postpod', routeNode.postpod),
    ] as Array<TrackPortStop | null>
  ).filter(Boolean) as TrackPortStop[];

  const containersRaw = Array.isArray(root.containers) ? root.containers : [];
  const containers = containersRaw.map((item) => {
    const c = asRecord(item);
    return {
      number: asString(c?.number) ?? shipmentNumber,
      sizeType: asString(c?.sizeType) ?? asString(c?.isoCode),
      status: asString(c?.status),
    };
  });

  const pod = route.find((s) => s.role === 'pod');
  const eta = pod?.date ?? null;

  return {
    metadata: {
      shipmentType: (asString(metadata.shipmentType) as ShipmentType | string) ?? 'CT',
      shipmentNumber,
      sealine: asString(metadata.sealine),
      sealineName: asString(metadata.sealineName),
      shippingStatus: asString(metadata.shippingStatus) ?? 'UNKNOWN',
      updatedAt: asString(metadata.updatedAt),
    },
    eta,
    route,
    events: normalizeEvents(containersRaw),
    containers,
    position: normalizePosition(root, route),
  };
}

function airStatusFromMilestones(
  milestones: Array<{ code: string | null }>
): string {
  const codes = milestones
    .map((m) => (m.code ?? '').toUpperCase())
    .filter(Boolean);
  if (codes.some((c) => c === 'DLV' || c === 'NFD' || c === 'AWD')) {
    return 'DELIVERED';
  }
  if (
    codes.some((c) =>
      ['DEP', 'ARR', 'RCF', 'TRX', 'MAN', 'RCS', 'BKD'].includes(c)
    )
  ) {
    return 'IN_TRANSIT';
  }
  if (codes.length) return 'PLANNED';
  return 'UNKNOWN';
}

/**
 * Normalize Broadpath public AWB payloads into Clarusto's shipment shape.
 */
export function normalizeBroadpathAwb(raw: unknown): NormalizedShipment | null {
  const root = asRecord(raw);
  if (!root) return null;

  const awb =
    asString(root.awb) ??
    (() => {
      const airline = asString(root.airlineCode);
      const serial = asString(root.serialNumber);
      return airline && serial ? `${airline}-${serial}` : null;
    })();
  if (!awb) return null;

  const shipment = asRecord(root.shipment);
  const origin = asString(shipment?.origin);
  const destination = asString(shipment?.destination);
  const carrier = asString(root.carrier);
  const airlineCode = asString(root.airlineCode);

  const flightsRaw = Array.isArray(root.flights) ? root.flights : [];
  const milestonesRaw = Array.isArray(root.milestones) ? root.milestones : [];

  const route: TrackPortStop[] = [];
  if (origin) {
    const firstFlight = asRecord(flightsRaw[0]);
    route.push({
      role: 'pol',
      name: origin,
      country: null,
      countryCode: null,
      locode: origin,
      date:
        asString(firstFlight?.actualDeparture) ??
        asString(firstFlight?.scheduledDeparture),
      actual: Boolean(asString(firstFlight?.actualDeparture)),
      lat: null,
      lng: null,
    });
  }
  if (destination) {
    const lastFlight = asRecord(flightsRaw[flightsRaw.length - 1]);
    route.push({
      role: 'pod',
      name: destination,
      country: null,
      countryCode: null,
      locode: destination,
      date:
        asString(lastFlight?.actualArrival) ??
        asString(lastFlight?.scheduledArrival),
      actual: Boolean(asString(lastFlight?.actualArrival)),
      lat: null,
      lng: null,
    });
  }

  const events: TrackEvent[] = milestonesRaw
    .map((item, index) => {
      const m = asRecord(item);
      if (!m) return null;
      const code = asString(m.code);
      const station = asString(m.station);
      const at = asString(m.at);
      const description =
        asString(m.description) ??
        (code ? `Milestone ${code}` : 'Shipment update');
      return {
        id: `mawb-${awb}-${code ?? 'evt'}-${index}-${at ?? index}`,
        description,
        eventCode: code,
        eventType: 'AIR',
        date: at,
        isActual: Boolean(at),
        locationName: station,
        country: null,
        locode: station && station.length === 3 ? station : null,
        vesselName: null,
        voyage: null,
        facilityName: null,
      } satisfies TrackEvent;
    })
    .filter(Boolean) as TrackEvent[];

  // Supplement timeline with flight legs when milestones are sparse.
  if (!events.length && flightsRaw.length) {
    flightsRaw.forEach((item, index) => {
      const f = asRecord(item);
      if (!f) return;
      const flightNumber =
        [asString(f.carrierCode), asString(f.flightNumber)]
          .filter(Boolean)
          .join('') || null;
      const dep =
        asString(f.actualDeparture) ?? asString(f.scheduledDeparture);
      const arr = asString(f.actualArrival) ?? asString(f.scheduledArrival);
      const from = asString(f.origin);
      const to = asString(f.destination);
      if (dep) {
        events.push({
          id: `mawb-flight-dep-${index}-${dep}`,
          description: flightNumber
            ? `Flight ${flightNumber} departed`
            : 'Flight departed',
          eventCode: 'DEP',
          eventType: 'AIR',
          date: dep,
          isActual: Boolean(asString(f.actualDeparture)),
          locationName: from,
          country: null,
          locode: from,
          vesselName: flightNumber,
          voyage: flightNumber,
          facilityName: null,
        });
      }
      if (arr) {
        events.push({
          id: `mawb-flight-arr-${index}-${arr}`,
          description: flightNumber
            ? `Flight ${flightNumber} arrived`
            : 'Flight arrived',
          eventCode: 'ARR',
          eventType: 'AIR',
          date: arr,
          isActual: Boolean(asString(f.actualArrival)),
          locationName: to,
          country: null,
          locode: to,
          vesselName: flightNumber,
          voyage: flightNumber,
          facilityName: null,
        });
      }
    });
  }

  events.sort((a, b) => {
    const aTime = a.date ? Date.parse(a.date) : 0;
    const bTime = b.date ? Date.parse(b.date) : 0;
    return bTime - aTime;
  });

  const pieces = asNumber(shipment?.pieces);
  const weightKg = asNumber(shipment?.weightKg);
  const commodity = asString(shipment?.commodity);
  const containerBits = [
    pieces != null ? `${pieces} pcs` : null,
    weightKg != null ? `${weightKg} kg` : null,
    commodity,
  ].filter(Boolean);

  const pod = route.find((s) => s.role === 'pod');
  const isAvailable = asBoolean(root.isAvailable) ?? events.length > 0;

  return {
    metadata: {
      shipmentType: 'MAWB',
      shipmentNumber: awb,
      sealine: airlineCode,
      sealineName: carrier,
      shippingStatus: isAvailable
        ? airStatusFromMilestones(events.map((e) => ({ code: e.eventCode })))
        : 'UNKNOWN',
      updatedAt: events[0]?.date ?? null,
    },
    eta: pod?.date ?? null,
    route,
    events,
    containers: containerBits.length
      ? [
          {
            number: awb,
            sizeType: containerBits.join(' · '),
            status: isAvailable ? 'TRACKING' : 'NO_DATA',
          },
        ]
      : [],
    position: null,
  };
}

export function normalizeSealines(raw: unknown): SealineOption[] {
  const root = asRecord(raw);
  const list = Array.isArray(root?.sealines)
    ? root.sealines
    : Array.isArray(raw)
      ? raw
      : [];

  const options: SealineOption[] = [];

  for (const item of list) {
    const sealine = asRecord(item);
    if (!sealine) continue;
    const name = asString(sealine.name) ?? 'Unknown carrier';
    const active = asBoolean(sealine.active) ?? true;
    const scacCodes = Array.isArray(sealine.scacCodes) ? sealine.scacCodes : [];
    for (const code of scacCodes) {
      const scac = asString(code);
      if (!scac) continue;
      options.push({ name, scac: scac.toUpperCase(), active });
    }
  }

  return options
    .filter((o) => o.active)
    .sort((a, b) => a.name.localeCompare(b.name) || a.scac.localeCompare(b.scac));
}
