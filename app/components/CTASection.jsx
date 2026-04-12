'use client'
import { motion } from 'framer-motion'

export default function CTASection() {
    return (
        <section id="contact" className="py-24 bg-navy">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="glass-card rounded-2xl p-10 md:p-14 text-center"
                >
                    <span className="inline-flex px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[12px] text-[#d0d6e0] mb-6">
                        Available for new projects
                    </span>

                    <h2 className="text-4xl lg:text-6xl tracking-[-0.03em] font-medium text-[#f7f8f8] mb-5">
                        Ready to ship your next product?
                    </h2>
                    <p className="text-[17px] leading-relaxed text-[#8a8f98] max-w-2xl mx-auto mb-10">
                        Book a free strategy call and get a practical plan for design, development, and launch.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                        <a
                            href="mailto:outreach@synplixinfotech.in?subject=Free Strategy Call Request"
                            className="px-6 py-3 rounded-md bg-electric hover:bg-purple text-white text-[14px] font-medium transition-colors"
                        >
                            Book free strategy call
                        </a>
                        <a
                            href="https://wa.me/918668918164?text=Hi%2C%20I%20visited%20your%20website%20and%20I%27m%20interested%20in%20your%20services.%20I%27d%20like%20to%20discuss%20a%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-[#d0d6e0] text-[14px] font-medium transition-colors"
                        >
                            Message on WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
