import './globals.css'

export const metadata = {
    title: 'Synplix Infotech Services | Custom Web Apps & SaaS Development',
    description: 'We design, develop, and deploy custom web systems and SaaS platforms for modern businesses. Performance-first architecture, modern UI, and scalable infrastructure.',
    keywords: 'web development, SaaS development, custom web apps, business automation, content creation',
    openGraph: {
        title: 'Synplix Infotech Services | Custom Web Apps & SaaS Development',
        description: 'Build scalable web apps and SaaS that power business growth.',
        type: 'website',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-navy text-white antialiased">
                {children}
            </body>
        </html>
    )
}
