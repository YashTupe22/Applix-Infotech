import { roundPrice } from '../utils/currency';

/**
 * Convert price from one currency to another
 * @param {number} amount - Amount to convert
 * @param {string} fromCurrency - Source currency code
 * @param {string} toCurrency - Target currency code
 * @param {Object} rates - Exchange rates object with currency codes as keys
 * @returns {number} Converted amount
 */
export function convertPrice(amount, fromCurrency, toCurrency, rates) {
  // If same currency, return original amount
  if (fromCurrency === toCurrency) {
    return amount;
  }
  
  // If converting from base currency (INR)
  if (fromCurrency === 'INR') {
    const rate = rates[toCurrency];
    if (!rate) {
      console.warn(`No exchange rate found for ${toCurrency}`);
      return amount;
    }
    return roundPrice(amount * rate, toCurrency);
  }
  
  // If converting to base currency (INR)
  if (toCurrency === 'INR') {
    const rate = rates[fromCurrency];
    if (!rate) {
      console.warn(`No exchange rate found for ${fromCurrency}`);
      return amount;
    }
    return roundPrice(amount / rate, 'INR');
  }
  
  // If converting between two non-base currencies
  // First convert to base (INR), then to target currency
  const fromRate = rates[fromCurrency];
  const toRate = rates[toCurrency];
  
  if (!fromRate || !toRate) {
    console.warn(`Missing exchange rates for conversion ${fromCurrency} -> ${toCurrency}`);
    return amount;
  }
  
  // Convert to INR first, then to target
  const inINR = amount / fromRate;
  const converted = inINR * toRate;
  
  return roundPrice(converted, toCurrency);
}

/**
 * Get price in specific currency from base price (INR)
 * @param {number} basePrice - Price in base currency (INR)
 * @param {string} targetCurrency - Target currency code
 * @param {Object} rates - Exchange rates object
 * @returns {number} Price in target currency
 */
export function getPriceInCurrency(basePrice, targetCurrency, rates) {
  return convertPrice(basePrice, 'INR', targetCurrency, rates);
}

/**
 * Get multiple prices in target currency
 * @param {Array<number>} prices - Array of prices in base currency
 * @param {string} targetCurrency - Target currency code
 * @param {Object} rates - Exchange rates object
 * @returns {Array<number>} Array of converted prices
 */
export function convertPrices(prices, targetCurrency, rates) {
  return prices.map(price => getPriceInCurrency(price, targetCurrency, rates));
}

/**
 * Check if exchange rates are valid and not expired
 * @param {Object} ratesData - Rates data object with timestamp
 * @param {number} maxAgeHours - Maximum age in hours (default 24)
 * @returns {boolean} True if rates are valid
 */
export function areRatesValid(ratesData, maxAgeHours = 24) {
  if (!ratesData || !ratesData.timestamp || !ratesData.rates) {
    return false;
  }
  
  const now = Date.now();
  const age = now - ratesData.timestamp;
  const maxAge = maxAgeHours * 60 * 60 * 1000; // Convert hours to milliseconds
  
  return age < maxAge;
}
