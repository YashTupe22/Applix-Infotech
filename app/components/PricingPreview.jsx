'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const highlights = [
    {
        category: 'Webpage Design',
        icon: '🌐',
        startingAt: '₹8,000',
        color: 'electric',
        borderHover: 'hover:border-electric/40',
        glow: 'hover:shadow-glow-blue',
        badge: 'bg-electric/10 border-electric/30 text-electric-light',
        features: ['Mobile Responsive', 'SEO Optimised', 'Fast Delivery'],
    },
    {
        category: 'Content Creation',
        icon: '✍️',
        startingAt: '₹5,000/mo',
        color: 'cyan',
        borderHover: 'hover:border-cyan/40',
        glow: 'hover:shadow-glow-cyan',
        badge: 'bg-cyan/10 border-cyan/30 text-cyan',
        features: ['Social Media Posts', 'Blog Articles', 'SEO Copywriting'],
    },
    {
        category: 'Web App / SaaS',
        icon: '🚀',
        startingAt: '₹35,000',
        color: 'purple',
        borderHover: 'hover:border-purple/40',
        glow: 'hover:shadow-glow-purple',
        badge: 'bg-purple/10 border-purple/30 text-purple',
        features: ['Full Stack', 'Stripe Billing', 'Scalable Infra'],
    },
]

const colorTextMap = {
    electric: 'text-electric-light',
    cyan: 'text-cyan',
    purple: 'text-purple',
}

export default function PricingPreview() {
    return (
        <section id="pricing" className="relative py-28 bg-navy overflow-hidden">
            <div className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(79,70,229,0.07) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-electric-light border border-electric/30 bg-electric/10 mb-4">
                        Pricing
                    </span>
                    <h2 className="font-outfit text-4xl lg:text-5xl font-bold mb-4">
                        Clear, <span className="gradient-text">Transparent Pricing</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        No hidden costs. Choose a service category below — full pricing details on the pricing page.
                    </p>
                </motion.div>

                {/* 3 Category Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={item.category}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-20px' }}
                            transition={{ duration: 0.55, delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`glass-card rounded-2xl p-7 border border-white/8 transition-all duration-300 flex flex-col gap-5 ${item.borderHover} ${item.glow}`}
                        >
                            {/* Badge */}
                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold w-fit ${item.badge}`}>
                                <span>{item.icon}</span>
                                {item.category}
                            </div>

                            {/* Price */}
                            <div>
                                <div className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Starting at</div>
                                <div className={`font-outfit text-3xl font-bold ${colorTextMap[item.color]}`}>{item.startingAt}</div>
                            </div>

                            {/* Features */}
                            <ul className="flex flex-col gap-2">
                                {item.features.map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                                        <svg className={`w-3.5 h-3.5 shrink-0 ${colorTextMap[item.color]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            {/* Link */}
                            <Link
                                href={`/pricing#${item.category.toLowerCase().split(' ')[0] === 'web' && item.category.includes('App') ? 'webapp' : item.category.toLowerCase().split('/')[0].trim().replace('webpage', 'webpage').replace('content', 'content')}`}
                                className={`mt-auto text-sm font-semibold flex items-center gap-1 ${colorTextMap[item.color]} hover:underline transition-all`}
                            >
                                See all plans
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Full plans CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center"
                >
                    <Link href="/pricing">
                        <motion.span
                            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(79,70,229,0.4)' }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-electric text-white font-semibold text-base shadow-glow-blue transition-all duration-300 cursor-pointer"
                        >
                            View Full Pricing Plans
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
