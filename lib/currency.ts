const LOCALE_CURRENCY_MAP: Record<string, string> = {
  "fr": "EUR",
  "en": "EUR",
  "es": "EUR",
  "pt": "EUR",
  "en-CA": "CAD",
  "fr-CA": "CAD"
};

export function getCurrencyByLocale(locale: string): string {
  return (
    LOCALE_CURRENCY_MAP[locale] ||
    LOCALE_CURRENCY_MAP[locale.split("-")[0]] ||  // fallback langue pure
    "EUR"
  );
}
