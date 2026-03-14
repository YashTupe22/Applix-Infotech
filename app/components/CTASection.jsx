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
                        href="https://wa.me/918668918164?text=Hi%2C%20I%20visited%20your%20website%20and%20I%27m%20interested%20in%20your%20services.%20I%27d%20like%20to%20discuss%20a%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-8 py-5 rounded-2xl glass border border-white/20 font-semibold text-lg text-slate-300 hover:border-electric/50 hover:text-white transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
