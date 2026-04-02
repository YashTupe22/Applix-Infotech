import './globals.css'
import { CurrencyProvider } from './context/CurrencyContext'

export const metadata = {
    title: {
        default: 'Synplix Infotech Services | Custom Web Apps & SaaS Development',
        template: '%s | Synplix Infotech Services',
    },
    description: 'We design, develop, and deploy custom web systems and SaaS platforms for modern businesses. Performance-first architecture, modern UI, and scalable infrastructure.',
    keywords: ['web development', 'SaaS development', 'custom web apps', 'business automation', 'content creation', 'web application development', 'software development India', 'custom software', 'Next.js development', 'React development'],
    authors: [{ name: 'Synplix Infotech Services', url: 'https://synplixinfotech.in' }],
    creator: 'Synplix Infotech Services',
    publisher: 'Synplix Infotech Services',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://synplixinfotech.in'),
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/',
        },
    },
    openGraph: {
        title: 'Synplix Infotech Services | Custom Web Apps & SaaS Development',
        description: 'Build scalable web apps and SaaS that power business growth. Performance-first architecture, modern UI, and scalable infrastructure.',
        type: 'website',
        url: 'https://synplixinfotech.in',
        siteName: 'Synplix Infotech Services',
        locale: 'en_US',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Synplix Infotech Services - Custom Web Apps & SaaS Development',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Synplix Infotech Services | Custom Web Apps & SaaS Development',
        description: 'Build scalable web apps and SaaS that power business growth.',
        images: ['/og-image.png'],
        creator: '@synplixinfotech',
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
        google: 'YOUR_GOOGLE_VERIFICATION_CODE',
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
                <meta name="theme-color" content="#4F46E5" />
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
            </head>
            <body className="bg-navy text-white antialiased">
                <CurrencyProvider>
                    {children}
                </CurrencyProvider>
            </body>
        </html>
    )
}
