import './globals.css'
import { CurrencyProvider } from './context/CurrencyContext'

export const metadata = {
    title: 'Synplix Infotech Services | Custom Web Apps & SaaS Development',
    description: 'We design, develop, and deploy custom web systems and SaaS platforms for modern businesses. Performance-first architecture, modern UI, and scalable infrastructure.',
    keywords: 'web development, SaaS development, custom web apps, business automation, content creation',
    metadataBase: new URL('https://synplixinfotech.in'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Synplix Infotech Services | Custom Web Apps & SaaS Development',
        description: 'Build scalable web apps and SaaS that power business growth.',
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
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#1a1d29" />
                <meta name="format-detection" content="telephone=no" />
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link rel="apple-touch-icon" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                {/* Google Tag Manager */}
                <script dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-59D46R9Z');`
                }} />
                {/* End Google Tag Manager */}
            </head>
            <body className="bg-navy text-white antialiased">
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe 
                        src="https://www.googletagmanager.com/ns.html?id=GTM-59D46R9Z"
                        height="0" 
                        width="0" 
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                <CurrencyProvider>
                    {children}
                </CurrencyProvider>
            </body>
        </html>
    )
}
