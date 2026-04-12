import { SERVICES } from './lib/servicesConfig'

export default function sitemap() {
    const baseUrl = 'https://synplixinfotech.in'
    const currentDate = new Date().toISOString()

    const serviceRoutes = [
        {
            url: `${baseUrl}/services`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        ...SERVICES.map((s) => ({
            url: `${baseUrl}/services/${s.slug}`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        })),
    ]

    const routes = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/how-we-work`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...serviceRoutes,
        {
            url: `${baseUrl}/faq`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]
    
    return routes
}
