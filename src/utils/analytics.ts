/**
 * Central conversion & engagement event tracking utility.
 * Safe for Google Analytics 4 (gtag), Google Tag Manager (dataLayer), and Meta Pixel (fbq).
 */

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export type ConversionEventName =
  | 'call_dispatch'
  | 'whatsapp_click'
  | 'booking_modal_open'
  | 'booking_modal_submit'
  | 'commercial_inquiry_submit'
  | 'contact_inquiry_submit';

export interface TrackingParams {
  source?: string;
  phone?: string;
  category?: string;
  service?: string;
  city?: string;
  label?: string;
  [key: string]: unknown;
}

/**
 * Dispatches conversion events to connected analytics platforms (GA4, GTM, Meta Pixel).
 * In local development, logs event payloads to console for easy verification.
 */
export function trackConversion(
  eventName: ConversionEventName,
  params: TrackingParams = {}
): void {
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...params,
  };

  // Google Tag Manager (dataLayer)
  if (typeof window !== 'undefined') {
    if (!Array.isArray(window.dataLayer)) {
      window.dataLayer = [];
    }
    window.dataLayer.push(payload);
  }

  // Google Analytics 4 (gtag.js)
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Meta (Facebook) Pixel (fbq)
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    if (eventName === 'whatsapp_click' || eventName === 'booking_modal_submit') {
      window.fbq('track', 'Lead', params);
    } else if (eventName === 'call_dispatch') {
      window.fbq('track', 'Contact', params);
    } else {
      window.fbq('trackCustom', eventName, params);
    }
  }

  // Safe developer inspection in development mode
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug(`[Analytics] Tracked: ${eventName}`, params);
  }
}
