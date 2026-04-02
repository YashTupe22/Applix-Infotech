'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { getAllSupportedCurrencies } from '../utils/currency';

export default function CurrencySelector() {
  const { currency, setCurrency, loading } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  const currencies = getAllSupportedCurrencies();

  // Filter currencies based on search
  const filteredCurrencies = currencies.filter(
    (c) =>
      c.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleSelect = (currencyCode) => {
    setCurrency(currencyCode);
    setIsOpen(false);
    setSearchTerm('');
  };

  const selectedCurrency = currencies.find((c) => c.code === currency);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={loading}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-charcoal/50 border border-electric/20 hover:border-electric/40 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Select currency"
      >
        <span className="text-sm font-medium text-white">
          {selectedCurrency?.symbol} {currency}
        </span>
        <svg
          className={`w-4 h-4 text-cyan transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-charcoal border border-electric/20 rounded-lg shadow-glow-blue z-50 max-h-96 overflow-hidden flex flex-col">
          {/* Search Input */}
          <div className="p-3 border-b border-electric/10">
            <input
              type="text"
              placeholder="Search currencies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 bg-navy/50 border border-electric/20 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-electric/40"
              autoFocus
            />
          </div>

          {/* Currency List */}
          <div className="overflow-y-auto max-h-80 custom-scrollbar">
            {filteredCurrencies.length > 0 ? (
              filteredCurrencies.map((c) => (
                <button
                  key={c.code}
                  onClick={() => handleSelect(c.code)}
                  className={`w-full px-4 py-2.5 text-left hover:bg-electric/10 transition-colors ${
                    c.code === currency
                      ? 'bg-electric/20 text-cyan'
                      : 'text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{c.symbol}</span>
                      <div>
                        <div className="text-sm font-medium">{c.code}</div>
                        <div className="text-xs text-gray-400">{c.name}</div>
                      </div>
                    </div>
                    {c.code === currency && (
                      <svg
                        className="w-5 h-5 text-cyan"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-gray-400 text-sm">
                No currencies found
              </div>
            )}
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(79, 70, 229, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(79, 70, 229, 0.7);
        }
      `}</style>
    </div>
  );
}
