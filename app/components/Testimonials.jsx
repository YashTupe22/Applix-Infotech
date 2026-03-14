'use client'
import { motion } from 'framer-motion'

// TODO before going live: Replace with real client quotes and add actual photos
const testimonials = [
    {
        quote:
            'Synplix delivered our SaaS dashboard in under 5 weeks. The code quality and design were exactly what we needed to go live with confidence.',
        name: 'Rahul Mehta',
        role: 'Founder, TechFlow Analytics',
        avatar: 'RM',
    },
    {
        quote:
            'They understood our business logic faster than any agency we\'d worked with. The automation pipelines they built saved us 20+ hours per week.',
        name: 'Priya Sharma',
        role: 'CTO, NovaBuild Solutions',
        avatar: 'PS',
    },
    {
        quote:
            'Professional, fast, and honest about timelines. The MVP they shipped got us our first 50 customers within a month of launch.',
        name: 'Aditya Joshi',
        role: 'CEO, Acme Corp India',
        avatar: 'AJ',
    },
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative py-28 bg-charcoal overflow-hidden">
            <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-cyan border border-cyan/30 bg-cyan/10 mb-4">
                        Client Stories
                    </span>
                    <h2 className="font-outfit text-4xl lg:text-5xl font-bold mb-4">
                        Trusted by <span className="gradient-text">Founders & CTOs</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Real results from real businesses. We measure success by your growth metrics, not just shipped code.
                    </p>
                </motion.div>

                {/* Testimonial cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-20px' }}
                            transition={{ duration: 0.55, delay: i * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="glass-card rounded-2xl p-7 border border-white/8 hover:border-white/20 flex flex-col gap-5 transition-all duration-300"
                        >
                            {/* Stars */}
                            <div className="text-amber-400 text-sm tracking-widest">★★★★★</div>

                            {/* Quote */}
                            <p className="text-slate-300 text-sm leading-relaxed flex-1">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                                {/* Avatar — replace with <Image> when real photos are available */}
                                <div className="w-10 h-10 rounded-full bg-electric/20 text-electric-light text-xs font-bold flex items-center justify-center shrink-0">
                                    {t.avatar}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">{t.name}</p>
                                    <p className="text-xs text-slate-500">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-8 text-sm text-slate-500"
                >
                    {[
                        { icon: '✓', label: 'NDA on request' },
                        { icon: '✓', label: '30+ projects delivered' },
                        { icon: '✓', label: '48hr response time' },
                        { icon: '✓', label: 'Ship in 4–6 weeks' },
                    ].map((badge) => (
                        <span key={badge.label} className="flex items-center gap-2">
                            <span className="text-cyan font-bold">{badge.icon}</span>
                            {badge.label}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
