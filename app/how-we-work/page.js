'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { BreadcrumbSchema } from '../components/StructuredData'

const steps = [
    {
        number: '01',
        title: 'Discovery & strategy',
        description: 'We align on goals, audience, constraints, and success metrics before design or build starts.',
        details: [
            'Stakeholder interviews and requirements',
            'Competitive and market analysis',
            'User profile definition',
            'Technical feasibility review',
            'Milestone roadmap',
        ],
    },
    {
        number: '02',
        title: 'Design & prototyping',
        description: 'We shape interaction flows and visual direction into a production-ready design system.',
        details: [
            'Wireframes and flow mapping',
            'High-fidelity UI design',
            'Interactive prototypes',
            'Component system setup',
            'Feedback-driven iteration',
        ],
    },
    {
        number: '03',
        title: 'Development',
        description: 'We build in iterative sprints with robust architecture and maintainable code standards.',
        details: [
            'Agile sprint delivery',
            'API and integration work',
            'Database and domain modeling',
            'Code quality and documentation',
            'Regular demo cadence',
        ],
    },
    {
        number: '04',
        title: 'Testing & QA',
        description: 'We validate behavior, stability, and performance across realistic usage scenarios.',
        details: [
            'Unit and integration coverage',
            'End-to-end checks',
            'Performance and load validation',
            'Security review',
            'Cross-device compatibility',
        ],
    },
    {
        number: '05',
        title: 'Launch & deployment',
        description: 'We prepare infrastructure, deployment flow, and observability for a clean go-live.',
        details: [
            'Hosting and environment setup',
            'CI/CD pipeline configuration',
            'Domain and SSL setup',
            'Monitoring and alerts',
            'Launch support',
        ],
    },
    {
        number: '06',
        title: 'Support & growth',
        description: 'After launch, we continue with maintenance, optimization, and strategic improvements.',
        details: [
            'Maintenance and fixes',
            'Feature iteration',
            'Performance optimization',
            'Analytics-led improvements',
            'Scaling support',
        ],
    },
]

export default function HowWeWorkPage() {
    const breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'How We Work', url: '/how-we-work' },
    ]

    return (
        <main className="min-h-screen bg-navy text-white">
            <BreadcrumbSchema items={breadcrumbs} />
            <Navbar />

            <section className="pt-32 pb-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-[13px] text-[#8a8f98] hover:text-[#d0d6e0] mb-8 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                    <span className="block w-fit mx-auto px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[12px] text-[#d0d6e0] mb-5">
                        Our process
                    </span>
                    <h1 className="text-5xl lg:text-6xl tracking-[-0.04em] font-medium text-[#f7f8f8] mb-5">How we take products from idea to launch</h1>
                    <p className="text-[18px] text-[#8a8f98] max-w-2xl mx-auto">
                        A six-phase workflow focused on transparency, predictable delivery, and high-quality output.
                    </p>
                </div>
            </section>

            <section className="pb-20">
                <div className="max-w-6xl mx-auto px-6 grid gap-5">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.04 }}
                            className="glass-card rounded-xl p-7"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="inline-flex h-8 items-center px-3 rounded-full border border-white/10 bg-white/[0.02] text-[12px] text-[#d0d6e0]">
                                    Step {step.number}
                                </span>
                                <h2 className="text-2xl tracking-[-0.02em] font-medium text-[#f7f8f8]">{step.title}</h2>
                            </div>
                            <p className="text-[15px] leading-relaxed text-[#8a8f98] mb-5">{step.description}</p>
                            <ul className="grid md:grid-cols-2 gap-2">
                                {step.details.map((detail) => (
                                    <li key={detail} className="text-[14px] text-[#d0d6e0] flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-electric" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="pb-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <div className="glass-card rounded-2xl p-10">
                        <h2 className="text-4xl tracking-[-0.03em] font-medium text-[#f7f8f8] mb-4">Ready to start your project?</h2>
                        <p className="text-[16px] text-[#8a8f98] mb-8">Let&apos;s map scope, timeline, and delivery milestones together.</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <a
                                href="/#contact"
                                className="px-6 py-3 rounded-md bg-electric hover:bg-purple text-white text-[14px] font-medium transition-colors"
                            >
                                Start a project
                            </a>
                            <a
                                href="/pricing"
                                className="px-6 py-3 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-[#d0d6e0] text-[14px] font-medium transition-colors"
                            >
                                View pricing
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
