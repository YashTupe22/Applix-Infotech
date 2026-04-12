'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useCurrency } from '../context/CurrencyContext'
import { getAllSupportedCurrencies } from '../utils/currency'

export default function CurrencySelector({ compact = false }) {
  const { currency, setCurrency, loading } = useCurrency()
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const dropdownRef = useRef(null)

  const currencies = getAllSupportedCurrencies()
  const filteredCurrencies = currencies.filter(
    (c) =>
      c.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSelect = (currencyCode) => {
    setCurrency(currencyCode)
    setIsOpen(false)
    setSearchTerm('')
  }

  const selectedCurrency = currencies.find((c) => c.code === currency)

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={loading}
        className={`flex items-center gap-2 rounded-md bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${
          compact ? 'px-2.5 py-1.5' : 'px-3 py-2'
        }`}
        aria-label="Select currency"
      >
        <span className={`font-medium text-[#d0d6e0] ${compact ? 'text-[11px]' : 'text-[12px]'}`}>
          {compact ? currency : `${selectedCurrency?.symbol} ${currency}`}
        </span>
        <svg
          className={`w-3.5 h-3.5 text-[#8a8f98] transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-[#191a1b] border border-white/10 rounded-lg shadow-glass z-50 max-h-96 overflow-hidden flex flex-col">
          <div className="p-3 border-b border-white/5">
            <input
              type="text"
              placeholder="Search currency..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 bg-white/[0.02] border border-white/10 rounded-md text-[#d0d6e0] text-sm placeholder-[#62666d] focus:outline-none focus:border-white/20"
              autoFocus
            />
          </div>

          <div className="overflow-y-auto max-h-80">
            {filteredCurrencies.length > 0 ? (
              filteredCurrencies.map((c) => (
                <button
                  key={c.code}
                  onClick={() => handleSelect(c.code)}
                  className={`w-full px-4 py-2.5 text-left hover:bg-white/[0.04] transition-colors ${
                    c.code === currency ? 'bg-white/[0.05]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-base text-[#d0d6e0]">{c.symbol}</span>
                      <div>
                        <div className="text-sm font-medium text-[#f7f8f8]">{c.code}</div>
                        <div className="text-xs text-[#8a8f98]">{c.name}</div>
                      </div>
                    </div>
                    {c.code === currency && (
                      <svg className="w-4 h-4 text-electric" fill="currentColor" viewBox="0 0 20 20">
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
              <div className="px-4 py-8 text-center text-[#8a8f98] text-sm">No currencies found</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
