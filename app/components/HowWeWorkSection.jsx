'use client'
import { motion } from 'framer-motion'

const steps = [
    {
        number: '01',
        title: 'Strategy',
        description: 'We dive deep into your business goals, audience, and competitive landscape to craft a roadmap that wins.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        color: 'text-electric-light',
        bg: 'bg-electric/10 border-electric/30',
        bar: 'bg-electric',
    },
    {
        number: '02',
        title: 'Design',
        description: 'Pixel-perfect UI/UX with Figma prototypes, design systems, and user-tested flows before a single line of code.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        color: 'text-cyan',
        bg: 'bg-cyan/10 border-cyan/30',
        bar: 'bg-cyan',
    },
    {
        number: '03',
        title: 'Build & Scale',
        description: 'Rapid development with CI/CD pipelines, cloud infrastructure, and built-in scalability from day one.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        color: 'text-purple',
        bg: 'bg-purple/10 border-purple/30',
        bar: 'bg-purple',
    },
]

export default function HowWeWorkSection() {
    return (
        <section id="how-we-work" className="relative py-28 bg-navy overflow-hidden">
            {/* Subtle radial */}
            <div className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.1) 0%, transparent 60%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-cyan border border-cyan/30 bg-cyan/10 mb-4">
                        Our Process
                    </span>
                    <h2 className="font-outfit text-4xl lg:text-5xl font-bold mb-4">
                        How We <span className="gradient-text">Bring Ideas to Life</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        A proven 3-phase process that takes your idea from whiteboard to production without surprises.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connector line (desktop) */}
                    <div className="hidden lg:block absolute top-14 left-[16.5%] right-[16.5%] h-px">
                        <div className="h-full bg-gradient-to-r from-electric via-cyan to-purple opacity-30" />
                        {/* Animated dot */}
                        <motion.div
                            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-glow-blue"
                            animate={{ x: ['0%', '100%', '0%'] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            style={{ left: 0 }}
                        />
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-30px' }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="relative flex flex-col items-center text-center"
                            >
                                {/* Number + Icon bubble */}
                                <div className={`relative w-28 h-28 rounded-3xl glass-card border flex flex-col items-center justify-center mb-6 ${step.bg}`}>
                                    <div className={`mb-1 ${step.color}`}>{step.icon}</div>
                                    <span className={`font-outfit text-3xl font-bold ${step.color} opacity-60`}>{step.number}</span>
                                    {/* Outer ring */}
                                    <div className="absolute inset-0 rounded-3xl border border-white/5" />
                                </div>

                                {/* Progress bar accent */}
                                <div className="w-12 h-1 rounded-full mb-4 overflow-hidden bg-white/10">
                                    <motion.div
                                        className={`h-full rounded-full ${step.bar}`}
                                        initial={{ width: '0%' }}
                                        whileInView={{ width: '100%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                                    />
                                </div>

                                <h3 className="font-outfit text-2xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
