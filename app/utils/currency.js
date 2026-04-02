import getSymbolFromCurrency from 'currency-symbol-map';
import { getCurrency } from 'country-currency-map';

/**
 * Get the currency symbol for a given currency code
 * @param {string} currencyCode - ISO 4217 currency code (e.g., 'USD', 'EUR')
 * @returns {string} Currency symbol (e.g., '$', '€')
 */
export function getCurrencySymbol(currencyCode) {
  return getSymbolFromCurrency(currencyCode) || currencyCode;
}

/**
 * Format a price with proper locale and currency symbol
 * @param {number} amount - The price amount
 * @param {string} currencyCode - ISO 4217 currency code
 * @param {string} locale - Optional locale (defaults to 'en-US')
 * @returns {string} Formatted price string
 */
export function formatPrice(amount, currencyCode, locale = 'en-US') {
  try {
    // Special handling for certain currencies
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: getCurrencyDecimals(currencyCode),
      maximumFractionDigits: getCurrencyDecimals(currencyCode),
    });
    
    return formatter.format(amount);
  } catch (error) {
    // Fallback if Intl formatting fails
    const symbol = getCurrencySymbol(currencyCode);
    return `${symbol}${amount.toFixed(getCurrencyDecimals(currencyCode))}`;
  }
}

/**
 * Get the number of decimal places for a currency
 * @param {string} currencyCode - ISO 4217 currency code
 * @returns {number} Number of decimal places
 */
export function getCurrencyDecimals(currencyCode) {
  // Currencies with no decimal places
  const zeroDecimalCurrencies = ['JPY', 'KRW', 'VND', 'CLP', 'TWD', 'ISK', 'HUF'];
  
  // Currencies with 3 decimal places
  const threeDecimalCurrencies = ['BHD', 'IQD', 'JOD', 'KWD', 'OMR', 'TND'];
  
  if (zeroDecimalCurrencies.includes(currencyCode)) {
    return 0;
  } else if (threeDecimalCurrencies.includes(currencyCode)) {
    return 3;
  }
  
  return 2; // Default for most currencies
}

/**
 * Get all supported currencies with their details
 * @returns {Array} Array of currency objects
 */
export function getAllSupportedCurrencies() {
  // Major and commonly used currencies
  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
    { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
    { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
    { code: 'SEK', name: 'Swedish Krona', symbol: 'kr' },
    { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$' },
    { code: 'MXN', name: 'Mexican Peso', symbol: 'MX$' },
    { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
    { code: 'ZAR', name: 'South African Rand', symbol: 'R' },
    { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$' },
    { code: 'KRW', name: 'South Korean Won', symbol: '₩' },
    { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr' },
    { code: 'DKK', name: 'Danish Krone', symbol: 'kr' },
    { code: 'PLN', name: 'Polish Zloty', symbol: 'zł' },
    { code: 'THB', name: 'Thai Baht', symbol: '฿' },
    { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp' },
    { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM' },
    { code: 'PHP', name: 'Philippine Peso', symbol: '₱' },
    { code: 'CZK', name: 'Czech Koruna', symbol: 'Kč' },
    { code: 'ILS', name: 'Israeli Shekel', symbol: '₪' },
    { code: 'TRY', name: 'Turkish Lira', symbol: '₺' },
    { code: 'RUB', name: 'Russian Ruble', symbol: '₽' },
    { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft' },
    { code: 'RON', name: 'Romanian Leu', symbol: 'lei' },
    { code: 'BGN', name: 'Bulgarian Lev', symbol: 'лв' },
    { code: 'HRK', name: 'Croatian Kuna', symbol: 'kn' },
    { code: 'SAR', name: 'Saudi Riyal', symbol: 'SR' },
    { code: 'QAR', name: 'Qatari Riyal', symbol: 'QR' },
    { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'KD' },
    { code: 'BHD', name: 'Bahraini Dinar', symbol: 'BD' },
    { code: 'OMR', name: 'Omani Rial', symbol: 'OMR' },
    { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£' },
    { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨' },
    { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳' },
    { code: 'LKR', name: 'Sri Lankan Rupee', symbol: 'Rs' },
    { code: 'NPR', name: 'Nepalese Rupee', symbol: 'Rs' },
    { code: 'VND', name: 'Vietnamese Dong', symbol: '₫' },
    { code: 'NGN', name: 'Nigerian Naira', symbol: '₦' },
    { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh' },
    { code: 'GHS', name: 'Ghanaian Cedi', symbol: 'GH₵' },
    { code: 'ARS', name: 'Argentine Peso', symbol: '$' },
    { code: 'CLP', name: 'Chilean Peso', symbol: '$' },
    { code: 'COP', name: 'Colombian Peso', symbol: '$' },
    { code: 'PEN', name: 'Peruvian Sol', symbol: 'S/' },
  ];
  
  return currencies.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Get the currency code for a country
 * @param {string} countryCode - ISO 3166-1 alpha-2 country code (e.g., 'US', 'GB')
 * @returns {string|null} Currency code or null if not found
 */
export function getCurrencyForCountry(countryCode) {
  try {
    const currency = getCurrency(countryCode);
    return currency?.abbreviation || null;
  } catch (error) {
    console.error(`Error getting currency for country ${countryCode}:`, error);
    return null;
  }
}

/**
 * Get locale string for a currency
 * @param {string} currencyCode - ISO 4217 currency code
 * @returns {string} Locale string (e.g., 'en-US', 'en-GB')
 */
export function getLocaleForCurrency(currencyCode) {
  const localeMap = {
    'USD': 'en-US',
    'EUR': 'de-DE',
    'GBP': 'en-GB',
    'INR': 'en-IN',
    'AUD': 'en-AU',
    'CAD': 'en-CA',
    'SGD': 'en-SG',
    'AED': 'ar-AE',
    'JPY': 'ja-JP',
    'CNY': 'zh-CN',
    'CHF': 'de-CH',
    'SEK': 'sv-SE',
    'NZD': 'en-NZ',
    'MXN': 'es-MX',
    'BRL': 'pt-BR',
    'ZAR': 'en-ZA',
    'HKD': 'zh-HK',
    'KRW': 'ko-KR',
    'NOK': 'nb-NO',
    'DKK': 'da-DK',
    'PLN': 'pl-PL',
    'THB': 'th-TH',
    'IDR': 'id-ID',
    'MYR': 'ms-MY',
    'PHP': 'en-PH',
    'TRY': 'tr-TR',
    'RUB': 'ru-RU',
  };
  
  return localeMap[currencyCode] || 'en-US';
}

/**
 * Round price according to currency conventions
 * @param {number} amount - Amount to round
 * @param {string} currencyCode - Currency code
 * @returns {number} Rounded amount
 */
export function roundPrice(amount, currencyCode) {
  const decimals = getCurrencyDecimals(currencyCode);
  const multiplier = Math.pow(10, decimals);
  return Math.round(amount * multiplier) / multiplier;
}
