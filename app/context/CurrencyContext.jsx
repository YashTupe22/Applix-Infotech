'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState('INR');
  const [country, setCountry] = useState('IN');
  const [exchangeRates, setExchangeRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch exchange rates
  const fetchExchangeRates = async () => {
    try {
      const response = await fetch('/api/exchange-rates');
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }
      const data = await response.json();
      setExchangeRates(data.rates);
      return data.rates;
    } catch (err) {
      console.error('Error fetching exchange rates:', err);
      setError(err.message);
      return null;
    }
  };

  // Fetch geolocation
  const fetchGeolocation = async () => {
    try {
      const response = await fetch('/api/geolocation');
      if (!response.ok) {
        throw new Error('Failed to fetch geolocation');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching geolocation:', err);
      return { country: 'IN', currency: 'INR', source: 'error-fallback' };
    }
  };

  // Initialize on mount
  useEffect(() => {
    const initializeCurrency = async () => {
      setLoading(true);
      
      // Check if user has manually selected a currency (stored in localStorage)
      const savedCurrency = typeof window !== 'undefined' 
        ? localStorage.getItem('selectedCurrency') 
        : null;
      
      // Fetch exchange rates first (needed regardless)
      const rates = await fetchExchangeRates();
      
      if (savedCurrency) {
        // User has a saved preference, use it
        setCurrency(savedCurrency);
        setLoading(false);
      } else {
        // No saved preference, auto-detect based on location
        const geoData = await fetchGeolocation();
        setCountry(geoData.country);
        setCurrency(geoData.currency);
        setLoading(false);
      }
    };

    initializeCurrency();
  }, []);

  // Handle manual currency change
  const handleSetCurrency = (newCurrency) => {
    setCurrency(newCurrency);
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedCurrency', newCurrency);
    }
  };

  // Refresh exchange rates manually
  const refreshRates = async () => {
    setLoading(true);
    await fetchExchangeRates();
    setLoading(false);
  };

  const value = {
    currency,
    setCurrency: handleSetCurrency,
    country,
    exchangeRates,
    loading,
    error,
    refreshRates,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}
