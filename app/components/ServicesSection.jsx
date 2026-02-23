'use client'
import { motion } from 'framer-motion'

const services = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        title: 'Custom Web Applications',
        description: 'Full-stack web apps built for performance, reliability, and seamless user experience. Tailored to your exact business logic.',
        color: 'electric',
        glow: 'hover:shadow-glow-blue',
        gradient: 'from-electric/20 to-purple/10',
        border: 'hover:border-electric/40',
        tag: 'React · Next.js · Node.js',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
        title: 'SaaS Development',
        description: 'End-to-end SaaS platforms with multi-tenancy, billing integrations, auth systems, and analytics dashboards.',
        color: 'cyan',
        glow: 'hover:shadow-glow-cyan',
        gradient: 'from-cyan/20 to-electric/10',
        border: 'hover:border-cyan/40',
        tag: 'Stripe · Auth · Postgres',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
            </svg>
        ),
        title: 'Business Automation',
        description: 'Automate repetitive workflows, data pipelines, and operations with intelligent integrations and custom tooling.',
        color: 'purple',
        glow: 'hover:shadow-glow-purple',
        gradient: 'from-purple/20 to-cyan/10',
        border: 'hover:border-purple/40',
        tag: 'APIs · Webhooks · n8n',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        title: 'UI/UX Design',
        description: 'Premium interface design that converts. Figma prototypes, design systems, and pixel-perfect implementations.',
        color: 'electric',
        glow: 'hover:shadow-glow-blue',
        gradient: 'from-electric/15 to-cyan/15',
        border: 'hover:border-electric-light/40',
        tag: 'Figma · Framer · CSS',
    },
]

const colorMap = {
    electric: 'text-electric-light',
    cyan: 'text-cyan',
    purple: 'text-purple',
}

export default function ServicesSection() {
    return (
        <section id="services" className="relative py-28 bg-charcoal overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 opacity-30"
                style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(79,70,229,0.15) 0%, transparent 60%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-electric-light border border-electric/30 bg-electric/10 mb-4">
                        What We Build
                    </span>
                    <h2 className="font-outfit text-4xl lg:text-5xl font-bold mb-4">
                        Services That <span className="gradient-text">Scale With You</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        From initial concept to production deployment — we handle the full stack so you can focus on growth.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{ duration: 0.55, delay: i * 0.1 }}
                            whileHover={{ y: -6, scale: 1.01 }}
                            className={`group glass-card rounded-2xl p-6 border border-white/8 transition-all duration-400 cursor-default ${service.glow} ${service.border}`}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 border border-white/10 group-hover:scale-110 transition-transform duration-300 ${colorMap[service.color]}`}>
                                {service.icon}
                            </div>

                            {/* Content */}
                            <h3 className="font-outfit text-lg font-semibold text-white mb-3 leading-snug">
                                {service.title}
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed mb-4">
                                {service.description}
                            </p>

                            {/* Tag */}
                            <div className="text-[11px] text-slate-600 font-medium">
                                {service.tag}
                            </div>

                            {/* Bottom glow line */}
                            <div className={`mt-5 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${colorMap[service.color]}`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
