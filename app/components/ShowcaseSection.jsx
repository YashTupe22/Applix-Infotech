'use client'
import { motion } from 'framer-motion'

function SaasDashboard() {
    return (
        <div className="w-full h-full bg-[#0f1011] p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <div className="text-[11px] text-[#8a8f98]">FlowMetrics · Dashboard</div>
                <div className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-[#d0d6e0]">Production</div>
            </div>

            <div className="grid grid-cols-4 gap-2">
                {[
                    { label: 'MRR', value: '$24.8K' },
                    { label: 'Users', value: '1,432' },
                    { label: 'Churn', value: '1.2%' },
                    { label: 'NPS', value: '72' },
                ].map((k) => (
                    <div key={k.label} className="rounded-md border border-white/10 bg-white/[0.02] p-2">
                        <div className="text-[9px] text-[#8a8f98]">{k.label}</div>
                        <div className="text-[12px] text-[#f7f8f8] font-semibold mt-1">{k.value}</div>
                    </div>
                ))}
            </div>

            <div className="rounded-md border border-white/10 bg-white/[0.02] p-3 flex-1 flex items-end gap-1">
                {[40, 55, 45, 70, 60, 85, 72, 90, 78, 95, 88, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-electric/70" style={{ height: `${h * 0.85}%`, minHeight: 4, opacity: 0.25 + i * 0.05 }} />
                ))}
            </div>
        </div>
    )
}

export default function ShowcaseSection() {
    return (
        <section id="showcase" className="py-24 bg-charcoal">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[12px] text-[#d0d6e0] mb-4">
                            Capability showcase
                        </span>
                        <h2 className="text-4xl lg:text-5xl tracking-[-0.03em] font-medium text-[#f7f8f8] mb-6">
                            Enterprise SaaS interfaces built for daily operations
                        </h2>
                        <p className="text-[17px] leading-relaxed text-[#8a8f98] mb-8">
                            We design and build product surfaces that stay readable, fast, and reliable as usage scales.
                        </p>
                        <div className="space-y-3 mb-8">
                            {[
                                'Multi-tenant architecture',
                                'Real-time updates and reporting',
                                'Role-based access controls',
                                'Billing and subscription workflows',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2.5 text-[15px] text-[#d0d6e0]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-electric" />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-electric hover:bg-purple text-white text-[14px] font-medium transition-colors"
                        >
                            Build my product
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                    >
                        <div className="rounded-xl border border-white/10 bg-[#191a1b] overflow-hidden shadow-glass h-[440px]">
                            <SaasDashboard />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
