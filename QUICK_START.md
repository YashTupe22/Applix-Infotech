# Quick Start Guide - Currency System

## 🚀 Get Started in 3 Steps

### 1. Install & Build
```bash
# Dependencies already installed
npm run build
npm run dev
```

### 2. Visit the Site
Open `http://localhost:3002` in your browser

### 3. Test the System
- **Look for** the currency selector in the top-right of the navbar
- **Click it** to see 50+ currencies
- **Select a currency** (e.g., USD, EUR, GBP)
- **Watch** all prices update automatically
- **Refresh** the page - your selection persists

## 🎯 What to Expect

### On Homepage
- Pricing preview section shows dynamic prices
- Currency selector visible in navbar

### On /pricing Page
- All SaaS plans (Free, Starter, Pro, Enterprise) show converted prices
- Agency services (Webpage Design, Content Creation) show converted prices
- Toggle between monthly/annual still works

### User Experience
1. **First visit**: Auto-detects country from IP → shows local currency
2. **Manual change**: User can select any currency from dropdown
3. **Return visits**: Previous selection remembered (localStorage)

## 📍 Auto-Detection

### In Development (localhost)
- Will always default to **India (INR)**
- IP detection doesn't work on localhost

### In Production
- Detects user's actual country
- Shows appropriate currency automatically

### Testing Different Countries
Use a VPN to test:
- **USA** → USD
- **UK** → GBP
- **UAE** → AED
- **Europe** → EUR

## 🔧 Quick Customization

### Change Base Currency
Edit `app/api/exchange-rates/route.js`:
```javascript
const BASE_CURRENCY = 'USD'; // Change from 'INR'
```

### Add/Remove Currencies
Edit `app/utils/currency.js`:
```javascript
export function getAllSupportedCurrencies() {
  return [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    // Add more here
  ];
}
```

### Adjust Cache Duration
Edit `app/api/exchange-rates/route.js`:
```javascript
const CACHE_DURATION_HOURS = 12; // Change from 24
```

## 🌍 Deployment

### Vercel (One-Click)
```bash
vercel --prod
```
Geolocation works automatically with Vercel geo headers.

### Other Platforms
```bash
npm run build
npm start
```
Falls back to IP-API.com for geolocation.

## 📊 Verify It's Working

### Check APIs
1. **Geolocation**: `http://localhost:3002/api/geolocation`
   - Should return: `{"country":"IN","currency":"INR","source":"fallback"}`

2. **Exchange Rates**: `http://localhost:3002/api/exchange-rates`
   - Should return: `{"base":"INR","rates":{...},"cached":false}`

### Browser Console
Open DevTools → Console, you should see:
- No errors related to currency
- Clean initialization

### Test Conversion
1. Go to `/pricing`
2. Open DevTools → Console
3. Type: `localStorage.setItem('selectedCurrency', 'USD')`
4. Refresh page
5. Prices should now show in USD

## 🐛 Common Issues

### "Prices not showing"
- Check if dev server is running
- Clear browser cache
- Check console for errors

### "Currency selector not visible"
- Check navbar is loaded
- Try desktop view (might be hidden on mobile in some views)

### "All prices in INR only"
- Wait for initial load (shows loading skeleton first)
- Check `/api/exchange-rates` is working
- Check browser console for errors

## 💡 Pro Tips

1. **Testing**: Use browser DevTools → Application → LocalStorage to change currency manually
2. **Cache**: Delete `tmp/exchange-rates-cache.json` to force fresh rates
3. **Logs**: Check terminal for API errors during development
4. **Mobile**: Test currency selector on actual mobile device

## 📚 Full Documentation

- **Complete guide**: See `CURRENCY_SYSTEM.md`
- **Implementation**: See `IMPLEMENTATION_SUMMARY.md`
- **API docs**: See inline comments in code

## 🎉 That's It!

Your site now has automatic currency conversion!

Questions? Check the full documentation in `CURRENCY_SYSTEM.md`
