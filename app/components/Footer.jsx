'use client'
import Link from 'next/link'
import { SERVICES } from '../lib/servicesConfig'

export default function Footer() {
    const year = new Date().getFullYear()
    const SAAS_URL = 'https://saas.synplixinfotech.in/'

    const links = {
        Services: [
            { label: 'All services', href: '/services' },
            ...SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
        ],
        Products: [{ label: 'Synplix SaaS', href: SAAS_URL, external: true }],
        Company: [
            { label: 'How We Work', href: '/how-we-work' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Showcase', href: '/#showcase' },
            { label: 'Contact', href: '/#contact' },
        ],
        Legal: [
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'FAQ', href: '/faq' },
        ],
    }

    return (
        <footer className="bg-charcoal border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 mb-12">
                    <div className="lg:col-span-2">
                        <div className="mb-4 text-2xl tracking-[-0.02em] font-medium text-[#f7f8f8]">
                            Synplix<span className="text-electric">.</span>
                        </div>
                        <p className="text-[15px] leading-relaxed text-[#8a8f98] max-w-sm">
                            Custom web applications and SaaS platforms engineered for fast teams that value reliability and clarity.
                        </p>
                    </div>

                    {Object.entries(links).map(([group, items]) => (
                        <div key={group}>
                            <h4 className="text-[13px] font-medium text-[#d0d6e0] mb-4">{group}</h4>
                            <ul className="space-y-2">
                                {items.map((item) => (
                                    <li key={item.label}>
                                        {item.external ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[13px] text-[#8a8f98] hover:text-[#f7f8f8] transition-colors"
                                            >
                                                {item.label}
                                            </a>
                                        ) : (
                                            <Link href={item.href} className="text-[13px] text-[#8a8f98] hover:text-[#f7f8f8] transition-colors">
                                                {item.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="section-divider mb-6" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[12px] text-[#62666d]">© {year} Synplix Infotech Services. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy-policy" className="text-[12px] text-[#62666d] hover:text-[#d0d6e0] transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-[12px] text-[#62666d] hover:text-[#d0d6e0] transition-colors">
                            Terms
                        </Link>
                        <Link href="/faq" className="text-[12px] text-[#62666d] hover:text-[#d0d6e0] transition-colors">
                            FAQ
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
