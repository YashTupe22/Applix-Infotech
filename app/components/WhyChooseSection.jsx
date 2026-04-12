'use client'
import { motion } from 'framer-motion'
import { WhyChooseIcon } from './SectionIcons'

const reasons = [
    {
        title: 'Performance-first architecture',
        description: 'Fast APIs, stable data models, and reliable deployment pipelines are built in from day one.',
    },
    {
        title: 'Product-grade UX',
        description: 'Clear hierarchy, legible interfaces, and decision-focused flows for real operational usage.',
    },
    {
        title: 'Scalable engineering',
        description: 'Systems are structured to move from MVP traction to high-usage production workloads.',
    },
    {
        title: 'Business alignment',
        description: 'We optimize for business outcomes like conversion, retention, and team productivity.',
    },
]

export default function WhyChooseSection() {
    return (
        <section id="why" className="py-16 sm:py-24 bg-navy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-[1.05fr_1.2fr] gap-10 lg:gap-14 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                        className="self-start"
                    >
                        <span className="inline-flex px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[12px] text-[#d0d6e0] mb-4">
                            Why Synplix
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.08] font-medium text-[#f7f8f8] mb-6">
                            Built for teams that need confidence, not guesswork
                        </h2>
                        <p className="text-base sm:text-[17px] leading-relaxed text-[#8a8f98] mb-8">
                            We combine product strategy, design systems, and engineering execution into one delivery loop that stays focused on results.
                        </p>

                        <div className="flex flex-wrap gap-2.5">
                            {['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'].map((tech) => (
                                <span key={tech} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[12px] text-[#d0d6e0]">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="glass-card rounded-xl p-5 mt-6">
                            <p className="text-[13px] text-[#62666d] mb-2">Delivery quality</p>
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { k: 'Sprints', v: 'Weekly' },
                                    { k: 'Updates', v: 'Daily' },
                                    { k: 'Response', v: '<24h' },
                                ].map((item) => (
                                    <div key={item.k}>
                                        <div className="text-[16px] font-medium text-[#f7f8f8]">{item.v}</div>
                                        <div className="text-[12px] text-[#8a8f98]">{item.k}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {reasons.map((reason, i) => (
                            <motion.div
                                key={reason.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: i * 0.08 }}
                                className="glass-card rounded-xl p-6 flex flex-col h-full min-h-[200px]"
                            >
                                <div className="w-10 h-10 rounded-lg border border-electric/30 bg-electric/10 flex items-center justify-center text-electric mb-4">
                                    <WhyChooseIcon index={i} className="w-5 h-5" />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] tracking-[-0.01em] leading-[1.3] font-medium text-[#f7f8f8] mb-2">{reason.title}</h3>
                                <p className="text-[15px] leading-relaxed text-[#8a8f98]">{reason.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
