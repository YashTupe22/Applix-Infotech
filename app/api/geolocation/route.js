import { NextResponse } from 'next/server';
import { getCurrencyForCountry } from '../../utils/currency';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    // Try to get country from Vercel's geo headers first
    const country = request.headers.get('x-vercel-ip-country') || 
                    request.geo?.country || null;
    
    if (country) {
      const currency = getCurrencyForCountry(country);
      return NextResponse.json({ 
        country, 
        currency: currency || 'INR',
        source: 'vercel-geo'
      });
    }
    
    // Fallback: Try to get IP address and use external service
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 
               request.headers.get('x-real-ip') || 
               request.ip || null;
    
    // If we have an IP, use ip-api.com (free, no key required)
    if (ip && ip !== '127.0.0.1' && ip !== '::1') {
      try {
        const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,countryCode`, {
          headers: {
            'User-Agent': 'Synplix-Website/1.0'
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          
          if (data.status === 'success' && data.countryCode) {
            const currency = getCurrencyForCountry(data.countryCode);
            return NextResponse.json({ 
              country: data.countryCode, 
              currency: currency || 'INR',
              source: 'ip-api'
            });
          }
        }
      } catch (error) {
        console.error('IP geolocation API error:', error);
        // Continue to fallback
      }
    }
    
    // Final fallback: Return India (default)
    return NextResponse.json({ 
      country: 'IN', 
      currency: 'INR',
      source: 'fallback'
    });
    
  } catch (error) {
    console.error('Geolocation error:', error);
    
    // Return India as fallback on error
    return NextResponse.json({ 
      country: 'IN', 
      currency: 'INR',
      source: 'error-fallback'
    });
  }
}
