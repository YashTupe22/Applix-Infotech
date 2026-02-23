'use client'
import { motion } from 'framer-motion'

export default function Footer() {
    const year = new Date().getFullYear()

    const links = {
        Services: ['Web Apps', 'SaaS Development', 'Automation', 'UI/UX Design'],
        Company: ['About Us', 'How We Work', 'Contact', 'Blog'],
        Legal: ['Privacy Policy', 'Terms of Service'],
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
                                Applix<span className="text-electric">.</span>
                            </span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
                            Custom web applications and SaaS platforms built for modern businesses that demand performance and scale.
                        </p>
                        {/* Social */}
                        <div className="flex gap-3">
                            {[
                                { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                                { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                                { label: 'GitHub', path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' },
                            ].map((social) => (
                                <motion.a
                                    key={social.label}
                                    href="#"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-9 h-9 rounded-xl glass border border-white/10 hover:border-electric/40 flex items-center justify-center text-slate-500 hover:text-electric-light transition-colors duration-200"
                                >
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
                                    <li key={item}>
                                        <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200">
                                            {item}
                                        </a>
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
                        © {year} Applix Infotech Services. All rights reserved.
                    </p>
                    <p className="text-slate-700 text-xs">
                        Built with Next.js · Deployed on Vercel
                    </p>
                </div>
            </div>
        </footer>
    )
}
