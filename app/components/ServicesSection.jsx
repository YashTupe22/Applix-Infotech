'use client'
import { motion } from 'framer-motion'

const SAAS_URL = 'https://saas.synplixinfotech.in/'

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
        link: null,
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
        link: SAAS_URL,
        linkLabel: 'Try Our SaaS →',
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
        link: null,
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5" />
            </svg>
        ),
        title: 'Content Creation',
        description: 'Compelling copy, social media content, and digital marketing assets that drive engagement and convert visitors into clients.',
        color: 'electric',
        glow: 'hover:shadow-glow-blue',
        gradient: 'from-electric/15 to-cyan/15',
        border: 'hover:border-electric-light/40',
        tag: 'Copywriting · Social · SEO',
        link: null,
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
            <div className="absolute inset-0 opacity-30"
                style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(79,70,229,0.15) 0%, transparent 60%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
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
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 border border-white/10 group-hover:scale-110 transition-transform duration-300 ${colorMap[service.color]}`}>
                                {service.icon}
                            </div>
                            <h3 className="font-outfit text-lg font-semibold text-white mb-3 leading-snug">
                                {service.title}
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed mb-4">
                                {service.description}
                            </p>
                            {service.link ? (
                                <a
                                    href={service.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-1 text-xs font-semibold ${colorMap[service.color]} hover:underline transition-all`}
                                >
                                    {service.linkLabel}
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            ) : (
                                <div className="text-[11px] text-slate-600 font-medium">
                                    {service.tag}
                                </div>
                            )}
                            <div className={`mt-5 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${colorMap[service.color]}`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
