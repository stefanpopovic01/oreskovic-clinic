const STORAGE_KEY = 'hbc_cookie_consent';

export const defaultPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function getStoredConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

// Pushes the user's choice into Google Consent Mode v2. Requires the
// default-denied gtag('consent', 'default', ...) snippet to already be
// running in index.html (before gtag.js/GA/Ads scripts load) - this
// function only updates it afterwards based on the real choice.
export function applyConsentToGtag(consent) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('consent', 'update', {
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    ad_storage: consent.marketing ? 'granted' : 'denied',
    ad_user_data: consent.marketing ? 'granted' : 'denied',
    ad_personalization: consent.marketing ? 'granted' : 'denied',
  });
}

export function saveConsent(consent) {
  const payload = {
    necessary: true,
    analytics: !!consent.analytics,
    marketing: !!consent.marketing,
    timestamp: new Date().toISOString(),
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // localStorage unavailable (private browsing etc.) - consent still
    // gets applied for this session via gtag, just won't persist.
  }

  applyConsentToGtag(payload);
  window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: payload }));
  return payload;
}

// Call this from anywhere (e.g. the footer's "Postavke kolačića" button)
// to reopen the preferences panel.
export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent('open-cookie-settings'));
}