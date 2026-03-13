'use client'
import { motion } from 'framer-motion'

const reasons = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Performance-First Architecture',
        description: 'Every system we build is optimized from day one — sub-100ms API responses, 99.9% uptime SLAs, and efficient database queries.',
        color: 'text-electric-light',
        bg: 'bg-electric/10 border-electric/20',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
        title: 'Modern UI Design',
        description: 'We don\'t just build functional — we build beautiful. Interfaces your customers will brag about and your competitors will envy.',
        color: 'text-cyan',
        bg: 'bg-cyan/10 border-cyan/20',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
        title: 'Future Scalable Infrastructure',
        description: 'Cloud-native deployments that auto-scale from 10 to 10 million users. Kubernetes, Vercel, AWS — we pick what fits your needs.',
        color: 'text-purple',
        bg: 'bg-purple/10 border-purple/20',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: 'Business-Focused Solutions',
        description: 'We measure success by your revenue metrics, not just code quality. Every decision ties back to your business objectives.',
        color: 'text-electric-light',
        bg: 'bg-electric/10 border-electric/20',
    },
]

export default function WhyChooseSection() {
    return (
        <section id="why" className="relative py-28 bg-navy overflow-hidden">
            <div className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 60% 40% at 0% 50%, rgba(79,70,229,0.08) 0%, transparent 60%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.65 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-electric-light border border-electric/30 bg-electric/10 mb-4">
                            Why Synplix
                        </span>
                        <h2 className="font-outfit text-4xl lg:text-5xl font-bold mb-6 leading-snug">
                            We Build With{' '}
                            <span className="gradient-text">Purpose — Not Shortcuts</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Most agencies ship fast and fix later. We architect for scale, design for conversion, and deliver products your team is proud to own.
                        </p>

                        {/* Trust badges */}
                        <div className="flex flex-wrap gap-3">
                            {['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Stripe', 'Vercel'].map((tech) => (
                                <span key={tech} className="px-3 py-1.5 rounded-lg glass border border-white/10 text-xs text-slate-400 font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Bullets */}
                    <div className="flex flex-col gap-5">
                        {reasons.map((reason, i) => (
                            <motion.div
                                key={reason.title}
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-20px' }}
                                transition={{ duration: 0.55, delay: i * 0.1 }}
                                whileHover={{ x: 4 }}
                                className="flex gap-4 glass-card rounded-2xl p-5 border border-white/6 hover:border-white/15 transition-all duration-300 cursor-default"
                            >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${reason.bg} ${reason.color}`}>
                                    {reason.icon}
                                </div>
                                <div>
                                    <h3 className="font-outfit font-semibold text-white text-base mb-1">{reason.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">{reason.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
