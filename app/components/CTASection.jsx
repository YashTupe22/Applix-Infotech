'use client'
import { motion } from 'framer-motion'

export default function CTASection() {
    return (
        <section id="contact" className="relative py-28 bg-charcoal overflow-hidden">
            {/* Background glow orbs */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[600px] h-[600px] rounded-full bg-electric opacity-10 blur-[120px]" />
            </div>
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-cyan opacity-5 blur-[80px]" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-purple opacity-8 blur-[80px]" />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-electric/30 text-electric-light text-sm font-medium mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                    Available for New Projects
                </motion.div>

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="font-outfit text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
                >
                    Ready to Build{' '}
                    <span className="gradient-text">Something Scalable?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.12 }}
                    className="text-slate-400 text-xl mb-12 max-w-xl mx-auto leading-relaxed"
                >
                    Let&apos;s turn your vision into a product that scales. Free 30-minute strategy call — no commitment, no fluff.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <motion.a
                        href="mailto:outreach@synplixinfotech.in?subject=Free Strategy Call Request"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="relative group inline-flex items-center gap-2.5 px-10 py-5 rounded-2xl bg-electric font-bold text-lg text-white overflow-hidden transition-all duration-300 animate-pulse-glow"
                    >
                        {/* Shimmer sweep */}
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                        <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="relative z-10">Book Free Strategy Call</span>
                    </motion.a>

                    <motion.a
                        href="mailto:outreach@synplixinfotech.in"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-8 py-5 rounded-2xl glass border border-white/20 font-semibold text-lg text-slate-300 hover:border-electric/50 hover:text-white transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Send Us a Message
                    </motion.a>
                </motion.div>

                {/* Social proof mini-row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="flex items-center justify-center gap-6 mt-12 flex-wrap"
                >
                    {[
                        { icon: '⚡', text: '48hr response time' },
                        { icon: '🔒', text: 'NDA on request' },
                        { icon: '🚀', text: 'Ship in 4-6 weeks' },
                    ].map((item) => (
                        <div key={item.text} className="flex items-center gap-2 text-sm text-slate-500">
                            <span>{item.icon}</span>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}
