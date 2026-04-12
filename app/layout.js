import './globals.css'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { CurrencyProvider } from './context/CurrencyContext'
import { ThemeProvider } from './context/ThemeContext'

const SITE_URL = 'https://synplixinfotech.in'
const SITE_NAME = 'Synplix Infotech Services'
const DEFAULT_TITLE = 'SaaS & Web Development Partner in Pune | Synplix Infotech Services'
const DEFAULT_DESCRIPTION =
    'Synplix Infotech Services is a product-focused engineering partner in Pune, India. We help startups and SaaS teams build scalable websites, SaaS platforms, and digital products.'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export const metadata = {
    title: {
        default: DEFAULT_TITLE,
        template: '%s | Synplix Infotech',
    },
    description: DEFAULT_DESCRIPTION,
    keywords: [
        'SaaS developer in Pune',
        'website developer in Pune',
        'web development company Pune',
        'SaaS product development',
        'startup engineering partner',
        'custom software development Pune',
        'Synplix Infotech Services',
    ],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(SITE_URL),
    alternates: {
        canonical: '/',
        languages: {
            'en-IN': '/',
        },
    },
    openGraph: {
        title: DEFAULT_TITLE,
        description: 'Product-focused engineering partner for startups, SaaS teams, and growing businesses in Pune, India. Build faster. Scale smarter.',
        type: 'website',
        url: `${SITE_URL}/`,
        siteName: SITE_NAME,
        locale: 'en_IN',
        images: [
            {
                url: '/logo.png',
                alt: 'Synplix Infotech Services - SaaS and Web Development in Pune',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: DEFAULT_TITLE,
        description: 'Product-focused engineering partner for startups and SaaS teams in Pune. Book a free strategy call.',
        images: ['/logo.png'],
        creator: '@synplix',
        site: '@synplix',
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'O166mjEMsmsbqWYXilnmQQn3KT82naM5CdafSSQtUUM',
    },
    category: 'technology',
    manifest: '/manifest.json',
    icons: {
        icon: [
            { url: '/favicon.png', type: 'image/png' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
        apple: [{ url: '/favicon.png' }],
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="theme-color" content="#0f172a" />
                <meta name="msapplication-TileColor" content="#0A0F1E" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="geo.region" content="IN-MH" />
                <meta name="geo.placename" content="Pune, Maharashtra, India" />
                <meta name="geo.position" content="18.5204;73.8567" />
                <meta name="ICBM" content="18.5204, 73.8567" />
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link rel="apple-touch-icon" href="/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@graph': [
                            {
                                '@type': 'LocalBusiness',
                                '@id': `${SITE_URL}/#business`,
                                name: SITE_NAME,
                                alternateName: 'Synplix Infotech',
                                url: `${SITE_URL}/`,
                                logo: {
                                    '@type': 'ImageObject',
                                    url: `${SITE_URL}/logo.png`,
                                },
                                image: `${SITE_URL}/logo.png`,
                                description: DEFAULT_DESCRIPTION,
                                telephone: '+918668918164',
                                email: 'outreach@synplixinfotech.in',
                                address: {
                                    '@type': 'PostalAddress',
                                    streetAddress: 'Pune',
                                    addressLocality: 'Pune',
                                    addressRegion: 'Maharashtra',
                                    postalCode: '411001',
                                    addressCountry: 'IN',
                                },
                                geo: {
                                    '@type': 'GeoCoordinates',
                                    latitude: 18.5204,
                                    longitude: 73.8567,
                                },
                                openingHoursSpecification: [
                                    {
                                        '@type': 'OpeningHoursSpecification',
                                        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                                        opens: '09:00',
                                        closes: '18:00',
                                    },
                                ],
                                priceRange: '$$',
                                currenciesAccepted: 'INR, USD',
                                paymentAccepted: 'Bank Transfer, UPI, Credit Card',
                                areaServed: [
                                    { '@type': 'City', name: 'Pune' },
                                    { '@type': 'Country', name: 'India' },
                                    { '@type': 'Country', name: 'United States' },
                                ],
                                knowsAbout: [
                                    'SaaS Product Development',
                                    'Website Development',
                                    'MVP Development',
                                    'UI/UX Design',
                                    'API Development',
                                    'React.js',
                                    'Node.js',
                                    'Cloud Infrastructure',
                                ],
                                hasOfferCatalog: {
                                    '@type': 'OfferCatalog',
                                    name: 'Engineering Services',
                                    itemListElement: [
                                        {
                                            '@type': 'Offer',
                                            itemOffered: {
                                                '@type': 'Service',
                                                name: 'SaaS Product Development',
                                                description: 'End-to-end SaaS platform development for startups and scaling businesses.',
                                            },
                                        },
                                        {
                                            '@type': 'Offer',
                                            itemOffered: {
                                                '@type': 'Service',
                                                name: 'Custom Website Development',
                                                description: 'High-performance, SEO-ready custom websites built for conversion.',
                                            },
                                        },
                                        {
                                            '@type': 'Offer',
                                            itemOffered: {
                                                '@type': 'Service',
                                                name: 'MVP Development',
                                                description: 'Fast, lean MVP builds to validate ideas and attract early users.',
                                            },
                                        },
                                        {
                                            '@type': 'Offer',
                                            itemOffered: {
                                                '@type': 'Service',
                                                name: 'UI/UX Design',
                                                description: 'User-first design systems and interactive prototypes for digital products.',
                                            },
                                        },
                                    ],
                                },
                                sameAs: [
                                    'https://linkedin.com/company/synplix',
                                    'https://saas.synplixinfotech.in',
                                ],
                            },
                            {
                                '@type': 'WebSite',
                                '@id': `${SITE_URL}/#website`,
                                url: `${SITE_URL}/`,
                                name: SITE_NAME,
                                description: 'Product-focused engineering partner for startups and SaaS teams in Pune, India.',
                                publisher: {
                                    '@id': `${SITE_URL}/#business`,
                                },
                                potentialAction: {
                                    '@type': 'SearchAction',
                                    target: {
                                        '@type': 'EntryPoint',
                                        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
                                    },
                                    'query-input': 'required name=search_term_string',
                                },
                                inLanguage: 'en-IN',
                            },
                            {
                                '@type': 'WebPage',
                                '@id': `${SITE_URL}/#webpage`,
                                url: `${SITE_URL}/`,
                                name: DEFAULT_TITLE,
                                isPartOf: {
                                    '@id': `${SITE_URL}/#website`,
                                },
                                about: {
                                    '@id': `${SITE_URL}/#business`,
                                },
                                description: 'Synplix Infotech Services helps startups and SaaS teams build scalable websites and digital products. Based in Pune, India.',
                                breadcrumb: {
                                    '@type': 'BreadcrumbList',
                                    itemListElement: [
                                        {
                                            '@type': 'ListItem',
                                            position: 1,
                                            name: 'Home',
                                            item: `${SITE_URL}/`,
                                        },
                                    ],
                                },
                                inLanguage: 'en-IN',
                                potentialAction: [
                                    {
                                        '@type': 'ReadAction',
                                        target: [`${SITE_URL}/`],
                                    },
                                ],
                            },
                            {
                                '@type': 'ProfessionalService',
                                '@id': `${SITE_URL}/#professionalservice`,
                                name: SITE_NAME,
                                serviceType: [
                                    'SaaS developer in Pune',
                                    'Website developer in Pune',
                                    'Software development company Pune',
                                    'Startup engineering partner India',
                                ],
                                provider: {
                                    '@id': `${SITE_URL}/#business`,
                                },
                                areaServed: 'Pune, Maharashtra, India',
                            },
                        ],
                    })
                }} />
            </head>
            <body className={`${inter.variable} bg-navy text-white antialiased`}>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-FY3L58TSWT" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-FY3L58TSWT');
                    `}
                </Script>
                <ThemeProvider>
                    <CurrencyProvider>
                        {children}
                    </CurrencyProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
