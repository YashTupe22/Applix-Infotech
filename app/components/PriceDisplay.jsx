'use client';

import React from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { formatPrice, getLocaleForCurrency } from '../utils/currency';
import { getPriceInCurrency } from '../services/currencyService';

export default function PriceDisplay({ 
  amount, 
  period = null, 
  showOriginal = false,
  allowWrap = false,
  className = '' 
}) {
  const { currency, exchangeRates, loading } = useCurrency();

  // If still loading, show skeleton or original price
  if (loading || !exchangeRates) {
    return (
      <span className={className}>
        {showOriginal ? `₹${amount.toLocaleString()}${period || ''}` : (
          <span className="inline-block bg-white/10 animate-pulse rounded">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        )}
      </span>
    );
  }

  // Convert price to selected currency
  const convertedAmount = getPriceInCurrency(amount, currency, exchangeRates);

  // Format the price with proper locale and currency
  const locale = getLocaleForCurrency(currency);
  const formattedPrice = formatPrice(convertedAmount, currency, locale);

  const wrapClass = allowWrap ? 'whitespace-normal break-words' : 'whitespace-nowrap';

  return (
    <span className={`tabular-nums ${wrapClass} ${className}`}>
      {formattedPrice}
      {period && <span className="text-[0.8em] ml-0.5">{period}</span>}
    </span>
  );
}

// Compact version for smaller displays
export function PriceDisplayCompact({ amount, period = null, className = '' }) {
  const { currency, exchangeRates, loading } = useCurrency();

  if (loading || !exchangeRates) {
    return <span className={className}>...</span>;
  }

  const convertedAmount = getPriceInCurrency(amount, currency, exchangeRates);
  const locale = getLocaleForCurrency(currency);
  const formattedPrice = formatPrice(convertedAmount, currency, locale);

  return (
    <span className={`tabular-nums whitespace-nowrap ${className}`}>
      {formattedPrice}
      {period && <span className="text-[0.8em] ml-0.5">{period}</span>}
    </span>
  );
}

// Version with original price shown below
export function PriceDisplayWithOriginal({ amount, period = null, className = '' }) {
  const { currency, exchangeRates, loading } = useCurrency();

  if (loading || !exchangeRates) {
    return (
      <div className={className}>
        <div className="text-2xl font-bold">₹{amount.toLocaleString()}{period}</div>
      </div>
    );
  }

  const convertedAmount = getPriceInCurrency(amount, currency, exchangeRates);
  const locale = getLocaleForCurrency(currency);
  const formattedPrice = formatPrice(convertedAmount, currency, locale);

  // Only show original if currency is not INR
  const showOriginalPrice = currency !== 'INR';

  return (
    <div className={className}>
      <div className="text-2xl font-bold tabular-nums whitespace-nowrap">
        {formattedPrice}
        {period}
      </div>
      {showOriginalPrice && (
        <div className="text-sm text-gray-400 mt-1">
          Originally ₹{amount.toLocaleString()}{period}
        </div>
      )}
    </div>
  );
}
