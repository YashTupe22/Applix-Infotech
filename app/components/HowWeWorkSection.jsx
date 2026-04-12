'use client'
import { motion } from 'framer-motion'

const steps = [
    {
        number: '01',
        title: 'Strategy',
        description: 'We map business goals, user needs, and technical constraints into a clear roadmap.',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Design',
        description: 'We prototype core flows, align on interaction patterns, and lock a production-ready UI system.',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Build & scale',
        description: 'We ship in focused sprints with QA, deployment workflows, and a plan for iteration after launch.',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
]

export default function HowWeWorkSection() {
    return (
        <section id="how-we-work" className="py-24 bg-navy">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[12px] text-[#d0d6e0] mb-4">
                        Our process
                    </span>
                    <h2 className="text-4xl lg:text-5xl tracking-[-0.03em] font-medium text-[#f7f8f8] mb-4">
                        A delivery system built for clarity
                    </h2>
                    <p className="text-[17px] text-[#8a8f98] max-w-2xl mx-auto">
                        We keep momentum high while reducing risk with a simple, transparent three-step workflow.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.08 }}
                            className="glass-card rounded-xl p-6"
                        >
                            <div className="flex items-center justify-between mb-5">
                                <div className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/10 bg-white/[0.02] text-[#d0d6e0]">
                                    {step.icon}
                                </div>
                                <div className="inline-flex items-center justify-center h-8 px-3 rounded-full border border-white/10 bg-white/[0.02] text-[12px] font-medium text-[#d0d6e0]">
                                    Step {step.number}
                                </div>
                            </div>
                            <h3 className="text-[24px] tracking-[-0.02em] font-medium text-[#f7f8f8] mb-3">
                                {step.title}
                            </h3>
                            <p className="text-[15px] leading-relaxed text-[#8a8f98]">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
