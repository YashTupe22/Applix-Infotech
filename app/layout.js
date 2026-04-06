import './globals.css'
import { CurrencyProvider } from './context/CurrencyContext'

export const metadata = {
    title: {
        default: 'SaaS Development Company in India | Synplix Infotech',
        template: '%s | Synplix Infotech',
    },
    description: 'Leading SaaS development company in India. We build scalable web apps, MVPs, and custom SaaS solutions for startups. Book a free consultation today.',
    keywords: ['SaaS development company in India', 'custom web app development', 'MVP development services', 'SaaS developers India', 'startup software development', 'web development', 'SaaS development', 'business automation', 'Next.js development', 'React development'],
    authors: [{ name: 'Synplix Infotech', url: 'https://synplixinfotech.in' }],
    creator: 'Synplix Infotech',
    publisher: 'Synplix Infotech',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://synplixinfotech.in'),
    alternates: {
        canonical: '/',
        languages: {
            'en-IN': '/',
        },
    },
    openGraph: {
        title: 'SaaS Development Company in India | Synplix Infotech',
        description: 'Leading SaaS development company in India. We build scalable web apps, MVPs, and custom SaaS solutions for startups. Book a free consultation today.',
        type: 'website',
        url: 'https://synplixinfotech.in/',
        siteName: 'Synplix Infotech',
        locale: 'en_IN',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Synplix Infotech - SaaS Development Company in India',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SaaS Development Company in India | Synplix Infotech',
        description: 'Leading SaaS development company in India. We build scalable web apps, MVPs, and custom SaaS solutions for startups. Book a free consultation today.',
        images: ['/og-image.jpg'],
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
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#0f172a" />
                <meta name="msapplication-TileColor" content="#0A0F1E" />
                <meta name="format-detection" content="telephone=no" />
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link rel="apple-touch-icon" href="/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                {/* Google Analytics */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-FY3L58TSWT" />
                <script dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-FY3L58TSWT');
                    `
                }} />
                {/* End Google Analytics */}
                
                {/* Organization Schema - Structured Data */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Synplix Infotech",
                        "url": "https://synplixinfotech.in",
                        "logo": "https://synplixinfotech.in/logo.png",
                        "description": "Synplix Infotech is a leading SaaS development company in India, specializing in custom web app development, MVP development, and scalable software solutions for startups and SaaS businesses.",
                        "sameAs": [
                            "https://linkedin.com/company/synplix"
                        ]
                    })
                }} />
            </head>
            <body className="bg-navy text-white antialiased">
                <CurrencyProvider>
                    {children}
                </CurrencyProvider>
            </body>
        </html>
    )
}
