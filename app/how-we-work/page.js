'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const steps = [
    {
        number: '01',
        title: 'Discovery & Strategy',
        description: 'We dive deep into your business goals, audience, and competitive landscape to craft a roadmap that wins. This phase includes stakeholder interviews, market research, and defining success metrics.',
        details: [
            'Stakeholder interviews & requirement gathering',
            'Market & competitive analysis',
            'User persona development',
            'Technical feasibility assessment',
            'Project roadmap & milestones',
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        color: 'electric',
        duration: '1-2 Weeks',
    },
    {
        number: '02',
        title: 'Design & Prototyping',
        description: 'Pixel-perfect interfaces with prototypes, design systems, and user-tested flows before a single line of code is written. We ensure the UX is intuitive and the UI is stunning.',
        details: [
            'Wireframes & low-fidelity mockups',
            'High-fidelity UI design',
            'Interactive prototypes',
            'Design system & component library',
            'User testing & feedback iteration',
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        color: 'cyan',
        duration: '2-3 Weeks',
    },
    {
        number: '03',
        title: 'Development',
        description: 'Rapid development with modern technologies, clean code architecture, and best practices. We build scalable solutions that are maintainable and performant.',
        details: [
            'Agile sprints with daily standups',
            'Clean, documented codebase',
            'API development & integrations',
            'Database architecture & optimization',
            'Regular progress demos',
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        color: 'purple',
        duration: '4-8 Weeks',
    },
    {
        number: '04',
        title: 'Testing & QA',
        description: 'Comprehensive testing to ensure your product is bug-free, secure, and performs excellently across all devices and scenarios.',
        details: [
            'Unit & integration testing',
            'End-to-end testing',
            'Performance & load testing',
            'Security vulnerability assessment',
            'Cross-browser & device testing',
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: 'electric',
        duration: '1-2 Weeks',
    },
    {
        number: '05',
        title: 'Launch & Deploy',
        description: 'CI/CD pipelines, cloud infrastructure setup, and a smooth launch process. We ensure your product goes live without a hitch.',
        details: [
            'Cloud infrastructure setup (AWS/GCP/Azure)',
            'CI/CD pipeline configuration',
            'Domain & SSL configuration',
            'Performance monitoring setup',
            'Launch day support',
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        color: 'cyan',
        duration: '3-5 Days',
    },
    {
        number: '06',
        title: 'Support & Growth',
        description: 'Ongoing maintenance, feature updates, and scaling support to help your product evolve with your business needs.',
        details: [
            'Bug fixes & maintenance',
            'Feature enhancements',
            'Performance optimization',
            'Analytics & insights',
            'Scaling & infrastructure upgrades',
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        color: 'purple',
        duration: 'Ongoing',
    },
]

const colorMap = {
    electric: {
        text: 'text-electric-light',
        bg: 'bg-electric/10',
        border: 'border-electric/30',
        glow: 'shadow-glow-blue',
        bar: 'bg-electric',
    },
    cyan: {
        text: 'text-cyan',
        bg: 'bg-cyan/10',
        border: 'border-cyan/30',
        glow: 'shadow-glow-cyan',
        bar: 'bg-cyan',
    },
    purple: {
        text: 'text-purple',
        bg: 'bg-purple/10',
        border: 'border-purple/30',
        glow: 'shadow-glow-purple',
        bar: 'bg-purple',
    },
}

export default function HowWeWorkPage() {
    return (
        <main className="min-h-screen bg-navy text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="blob w-[500px] h-[500px] bg-electric top-[-150px] left-[-100px]" />
                <div className="blob w-[400px] h-[400px] bg-purple top-[50px] right-[-100px]" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-8 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </Link>
                        <span className="block px-4 py-1.5 rounded-full text-xs font-semibold text-cyan border border-cyan/30 bg-cyan/10 mb-5 w-fit mx-auto">
                            Our Process
                        </span>
                        <h1 className="font-outfit text-5xl lg:text-6xl font-bold mb-5">
                            How We <span className="gradient-text">Bring Ideas to Life</span>
                        </h1>
                        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                            A proven 6-phase process that takes your idea from whiteboard to production — 
                            with complete transparency, no surprises, and results that exceed expectations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="relative py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="relative">
                        {/* Vertical timeline line */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric via-cyan to-purple opacity-30" />

                        {steps.map((step, index) => {
                            const colors = colorMap[step.color]
                            const isLeft = index % 2 === 0

                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 last:mb-0 ${
                                        isLeft ? '' : 'lg:direction-rtl'
                                    }`}
                                >
                                    {/* Timeline dot (center on desktop) */}
                                    <div className="hidden lg:block absolute left-1/2 top-12 -translate-x-1/2 z-10">
                                        <div className={`w-12 h-12 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.glow}`}>
                                            <span className={`font-outfit text-lg font-bold ${colors.text}`}>{step.number}</span>
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div className={`${isLeft ? 'lg:pr-16' : 'lg:pl-16 lg:col-start-2'}`}>
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className={`glass-card rounded-2xl p-8 border ${colors.border} transition-all duration-300 hover:${colors.glow}`}
                                        >
                                            {/* Mobile number badge */}
                                            <div className={`lg:hidden inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} border ${colors.border} mb-4`}>
                                                <span className={`font-outfit text-sm font-bold ${colors.text}`}>Step {step.number}</span>
                                            </div>

                                            {/* Icon and title */}
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className={`p-3 rounded-xl ${colors.bg} border ${colors.border} ${colors.text}`}>
                                                    {step.icon}
                                                </div>
                                                <div>
                                                    <h3 className="font-outfit text-2xl font-bold text-white mb-1">{step.title}</h3>
                                                    <span className={`text-sm font-medium ${colors.text}`}>{step.duration}</span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-slate-400 leading-relaxed mb-6">
                                                {step.description}
                                            </p>

                                            {/* Details list */}
                                            <ul className="space-y-2">
                                                {step.details.map((detail) => (
                                                    <li key={detail} className="flex items-start gap-3 text-sm text-slate-300">
                                                        <svg className={`w-4 h-4 mt-0.5 shrink-0 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>

                                    {/* Empty space for alternating layout */}
                                    <div className={`hidden lg:block ${isLeft ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`} />
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Why Our Process Works */}
            <section className="relative py-20 bg-charcoal">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-electric-light border border-electric/30 bg-electric/10 mb-4">
                            Why It Works
                        </span>
                        <h2 className="font-outfit text-4xl lg:text-5xl font-bold mb-4">
                            Built for <span className="gradient-text">Success</span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto">
                            Our process has been refined through dozens of successful projects to minimize risk and maximize value.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '🎯',
                                title: 'No Surprises',
                                description: 'Clear milestones, regular updates, and transparent communication throughout the project.',
                            },
                            {
                                icon: '⚡',
                                title: 'Fast Delivery',
                                description: 'Agile methodology with iterative releases means you see progress and can pivot quickly.',
                            },
                            {
                                icon: '🛡️',
                                title: 'Quality First',
                                description: 'Comprehensive testing and code reviews ensure your product is reliable and secure.',
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass-card rounded-2xl p-8 border border-white/10 text-center"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="font-outfit text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 bg-navy overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[500px] h-[300px] rounded-full bg-electric opacity-10 blur-[100px]" />
                </div>
                <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
                    <h2 className="font-outfit text-4xl font-bold mb-4">
                        Ready to Start Your <span className="gradient-text">Project?</span>
                    </h2>
                    <p className="text-slate-400 mb-8">
                        Let&apos;s discuss how we can bring your vision to life with our proven process.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.a
                            href="/#contact"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(79,70,229,0.5)' }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-electric text-white font-bold text-lg shadow-glow-blue transition-all duration-300"
                        >
                            Start Your Project
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>
                        <motion.a
                            href="/pricing"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl glass border border-white/20 text-white font-bold text-lg hover:border-electric/50 transition-all duration-300"
                        >
                            View Pricing
                        </motion.a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
