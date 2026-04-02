export function OrganizationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Synplix Infotech Services',
        url: 'https://synplixinfotech.in',
        logo: 'https://synplixinfotech.in/logo.png',
        description: 'Custom web application development, SaaS platform development, and business automation services for modern businesses.',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'outreach@synplixinfotech.in',
            contactType: 'Customer Service',
        },
        sameAs: [
            'https://saas.synplixinfotech.in',
        ],
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'INR',
            offerCount: '3',
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export function WebSiteSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Synplix Infotech Services',
        url: 'https://synplixinfotech.in',
        description: 'We design, develop, and deploy custom web systems and SaaS platforms for modern businesses.',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://synplixinfotech.in/?s={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export function ServiceSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Web Development & SaaS Development',
        provider: {
            '@type': 'Organization',
            name: 'Synplix Infotech Services',
            url: 'https://synplixinfotech.in',
        },
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Development Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Custom Web Application Development',
                        description: 'Full-stack custom web applications with modern architecture and scalable infrastructure.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'SaaS Platform Development',
                        description: 'Multi-tenant SaaS platforms with billing, authentication, and subscription management.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Business Automation',
                        description: 'Workflow automation and business process optimization solutions.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Content Creation Services',
                        description: 'Professional content writing for websites, blogs, and social media.',
                    },
                },
            ],
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export function FAQPageSchema({ faqs }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((category) => 
            category.items.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.a,
                },
            }))
        ).flat(),
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export function BreadcrumbSchema({ items }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `https://synplixinfotech.in${item.url}`,
        })),
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export function LocalBusinessSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Synplix Infotech Services',
        url: 'https://synplixinfotech.in',
        logo: 'https://synplixinfotech.in/logo.png',
        image: 'https://synplixinfotech.in/og-image.png',
        description: 'Custom web application development, SaaS platform development, and business automation services for modern businesses.',
        email: 'outreach@synplixinfotech.in',
        priceRange: '₹₹',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '20.5937',
            longitude: '78.9629',
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
        },
        areaServed: [
            {
                '@type': 'Country',
                name: 'India',
            },
            {
                '@type': 'Country',
                name: 'United States',
            },
            {
                '@type': 'Country',
                name: 'United Kingdom',
            },
        ],
        serviceType: [
            'Web Application Development',
            'SaaS Development',
            'Business Automation',
            'Content Creation',
            'Website Design',
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export function SoftwareApplicationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Synplix SaaS Platform',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser',
        url: 'https://saas.synplixinfotech.in',
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'INR',
            lowPrice: '0',
            highPrice: '1999',
            offerCount: '4',
            offers: [
                {
                    '@type': 'Offer',
                    name: 'Free Plan',
                    price: '0',
                    priceCurrency: 'INR',
                },
                {
                    '@type': 'Offer',
                    name: 'Starter Plan',
                    price: '499',
                    priceCurrency: 'INR',
                },
                {
                    '@type': 'Offer',
                    name: 'Pro Plan',
                    price: '999',
                    priceCurrency: 'INR',
                },
                {
                    '@type': 'Offer',
                    name: 'Enterprise Plan',
                    price: '1999',
                    priceCurrency: 'INR',
                },
            ],
        },
        featureList: [
            'GST Billing',
            'Advanced Analytics',
            'Multi-workspace Support',
            'Role-based Access Control',
            'PDF/Excel Export',
        ],
        provider: {
            '@type': 'Organization',
            name: 'Synplix Infotech Services',
            url: 'https://synplixinfotech.in',
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
