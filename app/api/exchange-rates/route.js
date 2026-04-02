import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { areRatesValid } from '../../services/currencyService';

const CACHE_FILE = path.join(process.cwd(), 'tmp', 'exchange-rates-cache.json');
const BASE_CURRENCY = 'INR';
const CACHE_DURATION_HOURS = 24;

// Ensure tmp directory exists
async function ensureTmpDir() {
  const tmpDir = path.join(process.cwd(), 'tmp');
  try {
    await fs.access(tmpDir);
  } catch {
    await fs.mkdir(tmpDir, { recursive: true });
  }
}

// Read cache from file
async function readCache() {
  try {
    await ensureTmpDir();
    const data = await fs.readFile(CACHE_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
}

// Write cache to file
async function writeCache(data) {
  try {
    await ensureTmpDir();
    await fs.writeFile(CACHE_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing cache:', error);
  }
}

// Fetch fresh rates from API
async function fetchFreshRates() {
  try {
    // Using ExchangeRate-API (free tier, no key required for basic usage)
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${BASE_CURRENCY}`);
    
    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.rates) {
      throw new Error('Invalid API response: missing rates');
    }
    
    const ratesData = {
      base: BASE_CURRENCY,
      rates: data.rates,
      timestamp: Date.now(),
      date: new Date().toISOString()
    };
    
    // Save to cache
    await writeCache(ratesData);
    
    return ratesData;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
}

export async function GET() {
  try {
    // Try to read from cache first
    const cachedData = await readCache();
    
    // Check if cache is valid
    if (cachedData && areRatesValid(cachedData, CACHE_DURATION_HOURS)) {
      return NextResponse.json({
        ...cachedData,
        cached: true,
        cacheAge: Math.floor((Date.now() - cachedData.timestamp) / 1000 / 60) // age in minutes
      });
    }
    
    // Cache is invalid or doesn't exist, fetch fresh rates
    try {
      const freshData = await fetchFreshRates();
      return NextResponse.json({
        ...freshData,
        cached: false
      });
    } catch (fetchError) {
      // If fetch fails but we have cached data (even if expired), use it as fallback
      if (cachedData) {
        console.warn('Using expired cache as fallback');
        return NextResponse.json({
          ...cachedData,
          cached: true,
          expired: true,
          cacheAge: Math.floor((Date.now() - cachedData.timestamp) / 1000 / 60)
        });
      }
      
      // No cache and fetch failed, return error
      throw fetchError;
    }
    
  } catch (error) {
    console.error('Exchange rates API error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch exchange rates',
        message: error.message 
      },
      { status: 500 }
    );
  }
}

// Optional: Add a POST endpoint to manually refresh cache
export async function POST() {
  try {
    const freshData = await fetchFreshRates();
    return NextResponse.json({
      ...freshData,
      cached: false,
      message: 'Cache refreshed successfully'
    });
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Failed to refresh cache',
        message: error.message 
      },
      { status: 500 }
    );
  }
}
