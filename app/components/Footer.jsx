'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
    const year = new Date().getFullYear()

    const links = {
        Services: [
            { label: 'Web Apps', href: '#services' },
            { label: 'SaaS Development', href: '#services' },
            { label: 'Automation', href: '#services' },
            { label: 'Content Creation', href: '#services' },
        ],
        Company: [
            { label: 'How We Work', href: '#how-we-work' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Showcase', href: '#showcase' },
            { label: 'Contact', href: '#contact' },
        ],
        Legal: [
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'FAQ', href: '/faq' },
        ],
    }

    return (
        <footer className="relative bg-navy border-t border-white/8 pt-16 pb-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-electric flex items-center justify-center shadow-glow-blue">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M9 1L16 5V13L9 17L2 13V5L9 1Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.15)" />
                                    <path d="M9 1L9 17M2 5L16 13M16 5L2 13" stroke="white" strokeWidth="1" strokeOpacity="0.6" />
                                </svg>
                            </div>
                            <span className="font-outfit font-bold text-xl text-white">
                                Synplix<span className="text-electric">.</span>
                            </span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
                            Custom web applications and SaaS platforms built for modern businesses that demand performance and scale.
                        </p>
                        <div className="flex gap-3">
                            {[

                            ].map((social) => (
                                <motion.a key={social.label} href="#" aria-label={social.label} whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-9 h-9 rounded-xl glass border border-white/10 hover:border-electric/40 flex items-center justify-center text-slate-500 hover:text-electric-light transition-colors duration-200">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                                        <path d={social.path} />
                                    </svg>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(links).map(([group, items]) => (
                        <div key={group}>
                            <h4 className="font-outfit font-semibold text-white text-sm mb-4">{group}</h4>
                            <ul className="flex flex-col gap-2.5">
                                {items.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="section-divider mb-6" />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-slate-600 text-xs">
                        © {year} Synplix Infotech Services. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy-policy" className="text-slate-700 hover:text-slate-500 text-xs transition-colors">Privacy</Link>
                        <span className="text-slate-800">·</span>
                        <Link href="/terms" className="text-slate-700 hover:text-slate-500 text-xs transition-colors">Terms</Link>
                        <span className="text-slate-800">·</span>
                        <Link href="/faq" className="text-slate-700 hover:text-slate-500 text-xs transition-colors">FAQ</Link>
                        <span className="text-slate-800">·</span>
                        <span className="text-slate-700 text-xs">Built with Next.js</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
