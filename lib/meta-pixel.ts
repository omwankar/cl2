declare global {
  interface Window {
    fbq?: (
      action: string,
      event: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export function trackMetaEvent(
  event: string,
  params?: Record<string, unknown>
) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') {
    return;
  }
  window.fbq('track', event, params);
}

/** Form / quote inquiry submission */
export function trackMetaLead(params?: Record<string, unknown>) {
  trackMetaEvent('Lead', params);
}

/** Phone, email, SMS, or chat contact intent */
export function trackMetaContact(params?: Record<string, unknown>) {
  trackMetaEvent('Contact', params);
}

/** Important content pages (services, projects, etc.) */
export function trackMetaViewContent(params?: Record<string, unknown>) {
  trackMetaEvent('ViewContent', params);
}
