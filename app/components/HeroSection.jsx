'use client'
import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay, ease: 'easeOut' },
    }),
}

function DashboardMockup() {
    return (
        <div className="w-full h-full p-4 flex flex-col gap-3 font-inter">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-1">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>
                <div className="text-[10px] text-slate-500">Applix SaaS Dashboard</div>
                <div className="w-5 h-5 rounded-full bg-electric/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-electric" />
                </div>
            </div>

            {/* KPI Cards row */}
            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: 'Revenue', value: '$48.2K', up: true },
                    { label: 'Users', value: '2,847', up: true },
                    { label: 'Uptime', value: '99.9%', up: true },
                ].map((kpi) => (
                    <div key={kpi.label} className="rounded-lg bg-white/5 border border-white/8 p-2">
                        <div className="text-[9px] text-slate-500 mb-0.5">{kpi.label}</div>
                        <div className="text-[12px] font-bold text-white font-outfit">{kpi.value}</div>
                        <div className="text-[8px] text-green-400">↑ +12.4%</div>
                    </div>
                ))}
            </div>

            {/* Chart area */}
            <div className="flex-1 rounded-lg bg-white/5 border border-white/8 p-3 flex flex-col gap-2">
                <div className="text-[9px] text-slate-400 font-medium">Monthly Growth</div>
                <div className="flex-1 flex items-end gap-1.5">
                    {[35, 52, 45, 68, 55, 78, 65, 88, 72, 95, 82, 100].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                            <div
                                className="w-full rounded-t-sm"
                                style={{
                                    height: `${h * 0.6}%`,
                                    background: i === 11
                                        ? 'linear-gradient(to top, #4F46E5, #818CF8)'
                                        : `rgba(79,70,229,${0.3 + (h / 100) * 0.4})`,
                                    minHeight: '4px',
                                }}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-between text-[7px] text-slate-600">
                    <span>Jan</span><span>Apr</span><span>Jul</span><span>Dec</span>
                </div>
            </div>

            {/* Activity list */}
            <div className="rounded-lg bg-white/5 border border-white/8 p-2">
                <div className="text-[9px] text-slate-400 font-medium mb-1.5">Recent Activity</div>
                {[
                    { icon: '🚀', text: 'New deployment pushed', time: '2m ago' },
                    { icon: '👤', text: 'User #2847 signed up', time: '5m ago' },
                    { icon: '💰', text: 'Payment $499 received', time: '12m ago' },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 py-1 border-b border-white/5 last:border-0">
                        <span className="text-[10px]">{item.icon}</span>
                        <span className="text-[8px] text-slate-400 flex-1">{item.text}</span>
                        <span className="text-[7px] text-slate-600">{item.time}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-20">

            {/* Gradient Blobs */}
            <div className="blob w-[600px] h-[600px] bg-electric top-[-100px] left-[-200px]" style={{ animationDelay: '0s' }} />
            <div className="blob w-[500px] h-[500px] bg-purple top-[100px] right-[-150px]" style={{ animationDelay: '2s' }} />
            <div className="blob w-[400px] h-[400px] bg-cyan bottom-[-50px] left-[30%]" style={{ animationDelay: '4s' }} />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Copy */}
                <div>
                    <motion.div
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-electric/30 text-electric-light text-sm font-medium mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                        Premium Web Development Studio
                    </motion.div>

                    <motion.h1
                        custom={0.1}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="font-outfit text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6"
                    >
                        Build Scalable{' '}
                        <span className="gradient-text">Web Apps & SaaS</span>{' '}
                        That Power Business Growth
                    </motion.h1>

                    <motion.p
                        custom={0.2}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-slate-400 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg"
                    >
                        We design, develop, and deploy custom web systems for modern businesses — from MVPs to enterprise-grade SaaS platforms.
                    </motion.p>

                    <motion.div
                        custom={0.35}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex flex-wrap gap-4"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(79,70,229,0.6)' }}
                            whileTap={{ scale: 0.97 }}
                            className="px-8 py-4 rounded-2xl bg-electric text-white font-semibold text-base shadow-glow-blue transition-all duration-300 inline-flex items-center gap-2"
                        >
                            Book a Free Consultation
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>
                        <motion.a
                            href="#showcase"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-8 py-4 rounded-2xl glass border border-white/20 text-white font-semibold text-base hover:border-electric/50 hover:bg-electric/5 transition-all duration-300 inline-flex items-center gap-2"
                        >
                            View Our Work
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </motion.a>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        custom={0.5}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex gap-8 mt-12 pt-8 border-t border-white/10"
                    >
                        {[
                            { value: '30+', label: 'Projects Delivered' },
                            { value: '100%', label: 'Client Satisfaction' },
                            { value: '5+', label: 'Years Experience' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="text-2xl font-bold font-outfit gradient-text-blue">{stat.value}</div>
                                <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right: Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 60, rotateY: 15 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
                    className="relative hidden lg:block"
                >
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative"
                    >
                        {/* Glow ring behind card */}
                        <div className="absolute inset-0 rounded-3xl bg-electric/20 blur-2xl scale-105" />

                        {/* Main card */}
                        <div className="relative glass-card rounded-3xl overflow-hidden border border-electric/20 shadow-glow-blue h-[440px]">
                            <DashboardMockup />
                        </div>

                        {/* Floating badge 1 */}
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            className="absolute -top-6 -left-8 glass-card rounded-2xl px-4 py-3 border border-cyan/30 shadow-glow-cyan"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-xs font-semibold text-white">Live & Deployed</span>
                            </div>
                        </motion.div>

                        {/* Floating badge 2 */}
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            className="absolute -bottom-4 -right-6 glass-card rounded-2xl px-4 py-3 border border-purple/30"
                        >
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-electric-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span className="text-xs font-semibold text-slate-300">99.9% Uptime</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-slate-600">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
                >
                    <div className="w-1 h-2 rounded-full bg-electric" />
                </motion.div>
            </motion.div>

        </section>
    )
}
