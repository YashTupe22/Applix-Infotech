# SEO Optimization Guide

## ✅ Status: Fully Optimized

This document outlines all SEO optimizations implemented for synplixinfotech.in.

---

## 1. Sitemap Configuration

### Location
`app/sitemap.js` → Generates `/sitemap.xml`

### Indexed Pages
| URL | Priority | Change Frequency |
|-----|----------|------------------|
| `/` (Homepage) | 1.0 | Weekly |
| `/pricing` | 0.9 | Weekly |
| `/how-we-work` | 0.8 | Monthly |
| `/faq` | 0.7 | Monthly |
| `/terms` | 0.3 | Yearly |
| `/privacy-policy` | 0.3 | Yearly |

### Submit to Search Engines
1. **Google Search Console**: https://search.google.com/search-console
   - Add property: `https://synplixinfotech.in`
   - Submit sitemap: `https://synplixinfotech.in/sitemap.xml`

2. **Bing Webmaster Tools**: https://www.bing.com/webmasters
   - Add site and submit sitemap

---

## 2. Robots.txt

### Location
`public/robots.txt`

### Configuration
- ✅ Allow all search engines
- ✅ Block API routes (`/api/`)
- ✅ Block temp/cache files
- ✅ Allow static assets
- ✅ Block AI crawlers (GPTBot, ChatGPT-User, CCBot)
- ✅ Sitemap URL declared

---

## 3. Meta Tags (Per Page)

### Global (layout.js)
- Title template: `%s | Synplix Infotech Services`
- Description: Company overview
- Keywords: 10 relevant keywords
- Authors, Creator, Publisher metadata
- OpenGraph tags (Facebook, LinkedIn)
- Twitter Card tags
- Robot directives
- Google verification placeholder
- Manifest link

### Page-Specific Metadata
Each page has custom:
- Title
- Description
- Canonical URL
- OpenGraph data
- Twitter Card data

---

## 4. Structured Data (Schema.org)

### Schemas Implemented

#### Homepage (`/`)
1. **OrganizationSchema** - Company information
2. **WebSiteSchema** - Site search action
3. **ServiceSchema** - Service catalog
4. **LocalBusinessSchema** - Local SEO (NEW)
5. **SoftwareApplicationSchema** - SaaS product (NEW)

#### FAQ Page (`/faq`)
- **FAQPageSchema** - Rich snippets for Q&A

#### All Pages
- **BreadcrumbSchema** - Navigation trail

### Testing Structured Data
Use Google's Rich Results Test:
https://search.google.com/test/rich-results

---

## 5. Technical SEO

### Performance
- ✅ Next.js Image optimization
- ✅ Font preconnect (Google Fonts)
- ✅ Async loading for analytics
- ✅ Static generation where possible

### Accessibility
- ✅ Semantic HTML
- ✅ Alt text for images
- ✅ Proper heading hierarchy
- ✅ ARIA labels

### Mobile
- ✅ Responsive design
- ✅ Mobile-friendly navigation
- ✅ Touch-friendly buttons

### PWA Support
- ✅ manifest.json
- ✅ Theme color
- ✅ App icons

---

## 6. Google Search Console Setup

### Step 1: Verify Ownership
1. Go to https://search.google.com/search-console
2. Add property: `https://synplixinfotech.in`
3. Choose "URL prefix" method
4. Use HTML tag verification:
   - Copy the verification code
   - Update `app/layout.js`:
   ```javascript
   verification: {
       google: 'YOUR_ACTUAL_CODE_HERE',
   },
   ```

### Step 2: Submit Sitemap
1. In Search Console, go to "Sitemaps"
2. Enter: `sitemap.xml`
3. Click "Submit"

### Step 3: Request Indexing
1. Go to "URL Inspection"
2. Enter your homepage URL
3. Click "Request Indexing"
4. Repeat for key pages

### Step 4: Monitor
- Check "Coverage" for indexing issues
- Review "Core Web Vitals"
- Monitor "Search Performance"

---

## 7. Google Analytics Integration

### Tracking ID
`G-FY3L58TSWT`

### Events to Track
- Page views (automatic)
- "Book a Call" clicks
- Currency changes
- Pricing plan views
- Form submissions

---

## 8. Content SEO Checklist

### For Each Page
- [ ] Unique title (50-60 characters)
- [ ] Meta description (150-160 characters)
- [ ] H1 heading (one per page)
- [ ] Internal links to other pages
- [ ] External links to authoritative sources
- [ ] Image alt text
- [ ] Keyword in first paragraph

### Keyword Strategy
**Primary Keywords:**
- Web development services India
- SaaS development company
- Custom web application development
- Business automation services

**Secondary Keywords:**
- Website design pricing
- Content creation services
- Next.js development
- React development company

---

## 9. Link Building Opportunities

### Internal Linking
- Homepage → Pricing
- Homepage → How We Work
- Pricing → Contact
- FAQ → Pricing
- Blog → Services (when added)

### External Opportunities
- Business directories (Clutch, GoodFirms)
- Tech blogs and publications
- Social media profiles
- Partner websites

---

## 10. Future SEO Improvements

### Recommended
- [ ] Add blog section for content marketing
- [ ] Implement hreflang for international targeting
- [ ] Add customer testimonials with Review schema
- [ ] Create case studies with proper schema
- [ ] Add video content with VideoObject schema
- [ ] Implement breadcrumbs UI on all pages

### Advanced
- [ ] Set up Google Tag Manager for event tracking
- [ ] Implement Core Web Vitals monitoring
- [ ] Add AMP versions for mobile pages
- [ ] Create XML news sitemap (if blog added)

---

## 11. Files Modified/Created

### Created
- `public/manifest.json` - PWA manifest
- `SEO_OPTIMIZATION.md` - This document

### Modified
- `app/sitemap.js` - Improved timestamps
- `public/robots.txt` - Enhanced directives
- `app/layout.js` - Enhanced metadata
- `app/components/StructuredData.jsx` - Added LocalBusiness and SoftwareApplication schemas
- `app/page.js` - Added new schemas to homepage

---

## 12. Testing Tools

### SEO Testing
- **Google PageSpeed Insights**: https://pagespeed.web.dev
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Google Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Lighthouse**: Built into Chrome DevTools

### Schema Testing
- **Schema.org Validator**: https://validator.schema.org
- **Google Structured Data Testing Tool**: https://search.google.com/structured-data/testing-tool

### General SEO
- **Ahrefs**: https://ahrefs.com
- **SEMrush**: https://semrush.com
- **Moz**: https://moz.com

---

## Quick Reference

### Important URLs
- **Site**: https://synplixinfotech.in
- **Sitemap**: https://synplixinfotech.in/sitemap.xml
- **Robots**: https://synplixinfotech.in/robots.txt

### Key Files
```
app/
├── layout.js           # Global metadata
├── sitemap.js          # Sitemap generator
├── page.js             # Homepage with schemas
├── components/
│   └── StructuredData.jsx  # All schemas
├── pricing/
│   └── layout.js       # Pricing metadata
├── how-we-work/
│   └── layout.js       # Process page metadata
├── faq/
│   └── page.js         # FAQ with schema
public/
├── robots.txt          # Crawler directives
├── manifest.json       # PWA manifest
├── logo.png            # Logo for schemas
└── og-image.png        # Social sharing image
```

---

**Last Updated:** April 2, 2026  
**Status:** ✅ Production Ready  
**Build:** ✅ Successful
