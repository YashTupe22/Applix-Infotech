'use client'
import { motion } from 'framer-motion'

const stats = [
    { value: '40+', label: 'Products shipped' },
    { value: '99.9%', label: 'Observed uptime' },
    { value: '<48h', label: 'Proposal turnaround' },
]

const CHART_BARS = [32, 44, 38, 52, 48, 60, 58, 68, 72, 78, 82, 90]
const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

function DashboardMockup() {
    return (
        <div className="h-full min-h-0 w-full p-3 sm:p-4 flex flex-col gap-3 bg-[#0f1011]">
            <div className="flex items-center justify-between shrink-0">
                <div className="text-[10px] sm:text-[11px] text-[#8a8f98]">Synplix Workspace</div>
                <div className="px-2 py-0.5 rounded-full border border-white/10 text-[9px] sm:text-[10px] text-[#d0d6e0]">Live</div>
            </div>

            <div className="grid grid-cols-3 gap-2 shrink-0">
                {[
                    { label: 'MRR', value: '$24.8K' },
                    { label: 'Users', value: '2,847' },
                    { label: 'Latency', value: '48ms' },
                ].map((item) => (
                    <div key={item.label} className="rounded-md border border-white/10 bg-white/[0.02] p-2 min-w-0">
                        <div className="text-[9px] sm:text-[10px] text-[#8a8f98] truncate">{item.label}</div>
                        <div className="text-[11px] sm:text-[12px] text-[#f7f8f8] font-semibold mt-1 tabular-nums">{item.value}</div>
                    </div>
                ))}
            </div>

            <div className="rounded-md border border-white/10 bg-white/[0.02] p-3 flex flex-col flex-1 min-h-0 overflow-hidden">
                <div className="text-[9px] sm:text-[10px] text-[#8a8f98] mb-2 shrink-0">Monthly growth</div>
                <div className="relative h-[120px] sm:h-[132px] overflow-hidden">
                    <div className="absolute inset-0 flex items-end justify-between gap-1 px-0.5 pb-5">
                        {CHART_BARS.map((h, i) => (
                            <div
                                key={`bar-${i}`}
                                className="flex-1 min-w-0 rounded-t-sm bg-electric/70 origin-bottom"
                                style={{
                                    height: `${h}%`,
                                    opacity: 0.35 + i * 0.045,
                                }}
                            />
                        ))}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between gap-0.5 px-0.5 pt-1 border-t border-white/10">
                        {MONTHS.map((m, i) => (
                            <span key={`m-${i}`} className="flex-1 min-w-0 text-center text-[8px] sm:text-[9px] text-[#62666d] tabular-nums">
                                {m}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function HeroSection() {
    return (
        <section id="hero" className="hero-surface relative min-h-[100svh] flex items-center pt-20 sm:pt-24 overflow-hidden">
            <div
                className="absolute inset-0 opacity-30"
                style={{ background: 'radial-gradient(ellipse 70% 45% at 70% 20%, rgba(94,106,210,0.16) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="order-1">
                    <motion.span
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[12px] font-medium text-[#d0d6e0] mb-6"
                    >
                        Product engineering for startups and SaaS teams
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.05 }}
                        className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.02] tracking-[-0.04em] font-medium text-[#f7f8f8] mb-6"
                    >
                        Build software that scales with your business.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="text-base sm:text-[18px] leading-relaxed text-[#8a8f98] max-w-xl mb-8 sm:mb-10"
                    >
                        We design and ship web apps, SaaS platforms, and automation systems with reliable architecture, clean UX, and fast delivery cycles.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                        className="flex flex-wrap gap-3 mb-12"
                    >
                        <a
                            href="#contact"
                            className="px-5 py-3 rounded-md bg-electric hover:bg-purple text-white text-[14px] font-medium transition-colors"
                        >
                            Book a free consultation
                        </a>
                        <a
                            href="#showcase"
                            className="px-5 py-3 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-[#d0d6e0] text-[14px] font-medium transition-colors"
                        >
                            View our work
                        </a>
                    </motion.div>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-xl">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div className="text-[24px] leading-none tracking-[-0.03em] font-medium text-[#f7f8f8]">{stat.value}</div>
                                <div className="text-[12px] text-[#62666d] mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="order-2 w-full max-w-lg mx-auto lg:max-w-none lg:mx-0"
                >
                    <div className="rounded-xl border border-white/10 bg-[#191a1b] shadow-glass overflow-hidden h-[340px] sm:h-[380px] lg:h-[420px] flex flex-col">
                        <DashboardMockup />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
