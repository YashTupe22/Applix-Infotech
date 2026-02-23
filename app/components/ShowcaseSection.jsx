'use client'
import { motion } from 'framer-motion'

function SaasDashboard() {
    return (
        <div className="w-full h-full bg-navy/80 rounded-2xl overflow-hidden flex">
            {/* Sidebar */}
            <div className="w-52 border-r border-white/8 p-4 flex flex-col gap-4 shrink-0">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-electric flex items-center justify-center">
                        <div className="w-3 h-3 border border-white rounded-sm" />
                    </div>
                    <span className="text-xs font-bold text-white font-outfit">FlowMetrics</span>
                </div>

                {/* Nav items */}
                {['Dashboard', 'Analytics', 'Users', 'Revenue', 'Settings'].map((item, i) => (
                    <div
                        key={item}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[11px] font-medium cursor-pointer transition-colors ${i === 0
                                ? 'bg-electric/20 text-electric-light border border-electric/30'
                                : 'text-slate-500 hover:text-slate-300'
                            }`}
                    >
                        <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-electric' : 'bg-slate-600'}`} />
                        {item}
                    </div>
                ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-5 flex flex-col gap-4 min-w-0">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-[12px] font-bold text-white font-outfit">Dashboard Overview</div>
                        <div className="text-[9px] text-slate-500">February 2026</div>
                    </div>
                    <div className="flex gap-2">
                        <div className="px-3 py-1 rounded-lg bg-electric/20 border border-electric/30 text-[9px] text-electric-light font-medium">Live</div>
                        <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            <div className="w-1 h-1 bg-slate-400 rounded-full" />
                        </div>
                    </div>
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-4 gap-3">
                    {[
                        { label: 'MRR', value: '$24,800', delta: '+18%', color: 'text-green-400' },
                        { label: 'Customers', value: '1,432', delta: '+9%', color: 'text-green-400' },
                        { label: 'Churn', value: '1.2%', delta: '-0.3%', color: 'text-green-400' },
                        { label: 'NPS', value: '72', delta: '+4', color: 'text-cyan' },
                    ].map((k) => (
                        <div key={k.label} className="rounded-xl bg-white/4 border border-white/8 p-3">
                            <div className="text-[8px] text-slate-500 mb-1">{k.label}</div>
                            <div className="text-[13px] font-bold text-white font-outfit">{k.value}</div>
                            <div className={`text-[8px] font-medium ${k.color}`}>{k.delta}</div>
                        </div>
                    ))}
                </div>

                {/* Chart */}
                <div className="flex-1 rounded-xl bg-white/4 border border-white/8 p-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <div className="text-[10px] font-semibold text-white">Revenue Trend</div>
                        <div className="flex gap-3">
                            <div className="flex items-center gap-1"><div className="w-2 h-0.5 rounded bg-electric" /><span className="text-[8px] text-slate-500">MRR</span></div>
                            <div className="flex items-center gap-1"><div className="w-2 h-0.5 rounded bg-cyan" /><span className="text-[8px] text-slate-500">ARR</span></div>
                        </div>
                    </div>
                    <div className="flex-1 flex items-end gap-1">
                        {[40, 55, 45, 70, 60, 85, 72, 90, 78, 95, 88, 100].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col gap-0.5 items-center">
                                <div className="w-full rounded-sm relative overflow-hidden"
                                    style={{ height: `${h * 0.9}%`, minHeight: 4 }}
                                >
                                    <div className="absolute inset-0 rounded-sm"
                                        style={{ background: `linear-gradient(to top, rgba(79,70,229,0.8), rgba(6,182,212,${0.3 + (h / 100) * 0.5}))` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-[7px] text-slate-600">
                        <span>Jan</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dec</span>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="grid grid-cols-2 gap-3">
                    {/* Top users */}
                    <div className="rounded-xl bg-white/4 border border-white/8 p-3">
                        <div className="text-[9px] font-semibold text-white mb-2">Top Accounts</div>
                        {['Acme Corp', 'TechFlow', 'NovaBuild'].map((name, i) => (
                            <div key={name} className="flex items-center justify-between py-1 border-b border-white/5 last:border-0">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-electric to-cyan flex items-center justify-center text-[7px] font-bold text-white">
                                        {name[0]}
                                    </div>
                                    <span className="text-[8px] text-slate-400">{name}</span>
                                </div>
                                <span className="text-[8px] text-green-400 font-medium">${[4800, 3200, 2900][i]}</span>
                            </div>
                        ))}
                    </div>
                    {/* Quick stats */}
                    <div className="rounded-xl bg-white/4 border border-white/8 p-3">
                        <div className="text-[9px] font-semibold text-white mb-2">System Health</div>
                        {[
                            { label: 'API Uptime', val: 99.9, color: 'bg-green-400' },
                            { label: 'DB Response', val: 85, color: 'bg-cyan' },
                            { label: 'CDN Speed', val: 97, color: 'bg-electric' },
                        ].map((item) => (
                            <div key={item.label} className="mb-2">
                                <div className="flex justify-between text-[7px] text-slate-500 mb-0.5">
                                    <span>{item.label}</span><span>{item.val}%</span>
                                </div>
                                <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                                    <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.val}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ShowcaseSection() {
    return (
        <section id="showcase" className="relative py-28 bg-charcoal overflow-hidden">
            <div className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(6,182,212,0.06) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.65 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-cyan border border-cyan/30 bg-cyan/10 mb-4">
                            Capability Showcase
                        </span>
                        <h2 className="font-outfit text-4xl lg:text-5xl font-bold mb-6">
                            Enterprise-Grade{' '}
                            <span className="gradient-text">SaaS Platforms</span>{' '}
                            Built In-House
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            This is a live demonstration of the kind of analytics dashboard we build for our clients. Clean data architecture, real-time updates, and a UI your users will love.
                        </p>

                        <div className="flex flex-col gap-4 mb-10">
                            {[
                                'Multi-tenant data isolation',
                                'Real-time WebSocket updates',
                                'Role-based access control',
                                'Stripe billing & subscriptions',
                            ].map((feat) => (
                                <div key={feat} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-cyan/20 border border-cyan/40 flex items-center justify-center shrink-0">
                                        <svg className="w-3 h-3 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-300 text-sm">{feat}</span>
                                </div>
                            ))}
                        </div>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(6,182,212,0.4)' }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-electric to-cyan text-white font-semibold text-sm transition-all duration-300"
                        >
                            Build My Product
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>
                    </motion.div>

                    {/* Right: Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.65, delay: 0.1 }}
                        className="relative"
                    >
                        {/* Outer glow */}
                        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-electric/20 via-cyan/10 to-purple/20 blur-xl opacity-60" />

                        {/* Glass frame */}
                        <div className="relative glass-card rounded-3xl overflow-hidden border border-white/10 shadow-glow-blue h-[480px]">
                            {/* Window chrome */}
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/3">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                                </div>
                                <div className="flex-1 mx-4 h-5 rounded-md bg-white/5 border border-white/8 flex items-center px-3">
                                    <span className="text-[9px] text-slate-600">app.flowmetrics.io/dashboard</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-5 h-5 rounded bg-white/5 border border-white/8" />
                                    <div className="w-5 h-5 rounded bg-electric/20 border border-electric/30" />
                                </div>
                            </div>
                            <div className="h-[calc(100%-44px)]">
                                <SaasDashboard />
                            </div>
                        </div>

                        {/* Feature badge */}
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -right-4 top-16 glass-card rounded-2xl px-4 py-3 border border-electric/30 shadow-glow-blue"
                        >
                            <div className="text-[10px] text-slate-400">Response Time</div>
                            <div className="text-[18px] font-bold text-white font-outfit">48ms</div>
                            <div className="text-[9px] text-green-400">↑ Optimized</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
