# Dynamic Currency System

## Overview
The website now features an automatic currency conversion system that detects the user's country and displays prices in their local currency.

## Features
- ✅ **Auto-detection**: Automatically detects user location via IP geolocation
- ✅ **50+ Currencies**: Supports all major world currencies
- ✅ **Manual Override**: Users can manually select their preferred currency
- ✅ **Smart Caching**: Exchange rates cached for 24 hours to optimize performance
- ✅ **Graceful Fallback**: Falls back to INR if geolocation or conversion fails
- ✅ **Mobile Responsive**: Currency selector works seamlessly on all devices

## How It Works

### Architecture
1. **Geolocation API** (`/api/geolocation`): Detects user's country using:
   - Vercel geo headers (when deployed on Vercel)
   - IP-API.com (free service, no API key required)
   - Fallback to India (IN/INR)

2. **Exchange Rates API** (`/api/exchange-rates`): Fetches currency conversion rates:
   - Uses ExchangeRate-API (free tier, no key required)
   - Caches rates for 24 hours in `tmp/exchange-rates-cache.json`
   - Base currency: INR (Indian Rupee)

3. **Currency Context** (`app/context/CurrencyContext.jsx`):
   - Global state management for currency selection
   - Persists user's manual selection in localStorage
   - Provides currency, exchange rates, and loading state to all components

4. **Price Display Component** (`app/components/PriceDisplay.jsx`):
   - Automatically converts prices from INR to selected currency
   - Formats prices with proper symbols and locale
   - Shows loading skeleton during initialization

5. **Currency Selector** (`app/components/CurrencySelector.jsx`):
   - Searchable dropdown with all supported currencies
   - Located in navbar (desktop and mobile)
   - Shows currency code, name, and symbol

### File Structure
```
app/
├── api/
│   ├── geolocation/route.js          # IP-based country detection
│   └── exchange-rates/route.js       # Currency rate fetching & caching
├── components/
│   ├── CurrencySelector.jsx          # Currency dropdown selector
│   ├── PriceDisplay.jsx              # Dynamic price display
│   ├── Navbar.jsx                    # Updated with currency selector
│   ├── PricingPreview.jsx            # Updated with dynamic prices
│   └── StructuredData.jsx            # SEO schema (keeps INR for consistency)
├── context/
│   └── CurrencyContext.jsx           # Global currency state
├── services/
│   └── currencyService.js            # Currency conversion logic
├── utils/
│   └── currency.js                   # Currency utility functions
├── pricing/page.js                   # Updated with dynamic prices
└── layout.js                         # Wrapped with CurrencyProvider
```

## Configuration

### Environment Variables
Create a `.env.local` file (see `.env.example` for template):

```env
# Base currency (default: INR)
NEXT_PUBLIC_BASE_CURRENCY=INR

# Optional: ExchangeRate-API key (free tier doesn't require this)
# EXCHANGERATE_API_KEY=your_api_key_here
```

### Adding/Removing Currencies
Edit `app/utils/currency.js` and update the `getAllSupportedCurrencies()` function to add or remove currencies from the list.

### Changing Base Currency
If you want to change from INR to another currency:
1. Update `NEXT_PUBLIC_BASE_CURRENCY` in `.env.local`
2. Update the `BASE_CURRENCY` constant in `app/api/exchange-rates/route.js`
3. Update all price values in:
   - `app/lib/planConfig.js` (SaaS plans)
   - `app/pricing/page.js` (Agency services)

### Cache Strategy
- **Duration**: 24 hours (86400 seconds)
- **Storage**: File-based cache in `tmp/exchange-rates-cache.json`
- **Fallback**: If API fails, uses cached rates (even if expired)
- **Manual Refresh**: POST to `/api/exchange-rates` to force refresh

## Usage

### Displaying Prices
Use the `PriceDisplay` component anywhere you need to show dynamic pricing:

```jsx
import PriceDisplay from './components/PriceDisplay';

// Basic usage
<PriceDisplay amount={499} period="/month" />

// Without period
<PriceDisplay amount={8000} />

// Compact version
import { PriceDisplayCompact } from './components/PriceDisplay';
<PriceDisplayCompact amount={1999} period="/year" />

// With original price (shows "Originally ₹X" if not INR)
import { PriceDisplayWithOriginal } from './components/PriceDisplay';
<PriceDisplayWithOriginal amount={12000} period="/month" />
```

### Accessing Currency State
```jsx
import { useCurrency } from './context/CurrencyContext';

function MyComponent() {
  const { currency, setCurrency, exchangeRates, loading } = useCurrency();
  
  // Current currency code (e.g., 'USD', 'EUR')
  console.log(currency);
  
  // Change currency programmatically
  setCurrency('EUR');
  
  // Access exchange rates
  console.log(exchangeRates);
}
```

## API Endpoints

### GET /api/geolocation
Detects user's country and currency from IP address.

**Response:**
```json
{
  "country": "US",
  "currency": "USD",
  "source": "vercel-geo"
}
```

### GET /api/exchange-rates
Returns exchange rates with caching.

**Response:**
```json
{
  "base": "INR",
  "rates": {
    "USD": 0.012,
    "EUR": 0.011,
    "GBP": 0.009,
    ...
  },
  "timestamp": 1712079000000,
  "cached": true,
  "cacheAge": 120
}
```

### POST /api/exchange-rates
Forces a refresh of cached exchange rates.

## Testing

### Local Testing
```bash
npm run dev
```

Visit `http://localhost:3000` and:
1. Check that currency selector appears in navbar
2. Try changing currency - prices should update immediately
3. Refresh page - your selection should persist (localStorage)
4. Clear localStorage - should auto-detect based on IP

### Testing with VPN
Use a VPN to test auto-detection from different countries:
1. Connect VPN to USA → should show USD
2. Connect VPN to UK → should show GBP
3. Connect VPN to UAE → should show AED

### Production Build
```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)
The geolocation works best on Vercel as it provides `x-vercel-ip-country` headers automatically.

1. Push code to your repository
2. Deploy on Vercel
3. No additional configuration needed for geolocation

### Other Platforms
On other platforms, the system falls back to IP-API.com for geolocation. No API key required.

## Troubleshooting

### Prices not converting
- Check browser console for errors
- Verify `/api/exchange-rates` returns valid data
- Check that `CurrencyProvider` wraps your app in `layout.js`

### Currency selector not appearing
- Verify `CurrencySelector` is imported in `Navbar.jsx`
- Check that component is not hidden by CSS

### Auto-detection not working
- In development (localhost), it will always default to India
- Use VPN or deploy to production for accurate geolocation
- Check `/api/geolocation` response in browser DevTools

### Cache not working
- Ensure `tmp/` directory has write permissions
- Check server logs for file system errors
- Cache file location: `<project-root>/tmp/exchange-rates-cache.json`

## Limitations & Considerations

1. **Legal**: Displaying prices in different currencies may have tax implications depending on jurisdiction
2. **Payment**: This system only displays prices; actual payment processing still needs currency handling
3. **Rate Fluctuation**: Exchange rates change; prices may vary slightly from actual checkout
4. **SEO**: Structured data maintains INR for search engines (recommended for consistency)
5. **Rounding**: Different currencies have different decimal conventions (handled automatically)

## Future Enhancements

- [ ] Add currency conversion disclaimer
- [ ] Show savings when viewing in cheaper currency
- [ ] Add "Prices in your currency" badge
- [ ] Integrate with payment gateway for actual multi-currency billing
- [ ] Add A/B testing to measure conversion impact
- [ ] Support cryptocurrency pricing
