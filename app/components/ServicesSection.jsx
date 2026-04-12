'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ServiceIcon } from './SectionIcons'
import { SERVICES } from '../lib/servicesConfig'

export default function ServicesSection() {
    return (
        <section id="services" className="py-16 sm:py-24 bg-charcoal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="text-center mb-10 sm:mb-14"
                >
                    <span className="inline-flex px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[12px] text-[#d0d6e0] mb-4">
                        What we build
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] font-medium text-[#f7f8f8] mb-4 px-1">
                        Our engineering services
                    </h2>
                    <p className="text-base sm:text-[17px] text-[#8a8f98] max-w-2xl mx-auto px-1">
                        End-to-end digital solutions tailored for startups, SaaS products, and scaling businesses.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 items-stretch">
                    {SERVICES.map((service, i) => (
                        <motion.article
                            key={service.slug}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.08 }}
                            className="glass-card rounded-xl p-6 flex flex-col h-full min-h-[280px] sm:min-h-[260px]"
                        >
                            <div className="w-10 h-10 rounded-lg border border-electric/30 bg-electric/10 flex items-center justify-center text-electric mb-5">
                                <ServiceIcon slug={service.slug} className="w-5 h-5" />
                            </div>
                            <h3 className="text-[18px] sm:text-[20px] leading-[1.3] tracking-[-0.01em] font-semibold text-[#f7f8f8] mb-3">
                                {service.title}
                            </h3>
                            <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#8a8f98] mb-5 flex-1">{service.shortDescription}</p>
                            <div className="mt-auto flex flex-col gap-2">
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="text-[13px] font-medium text-[#7170ff] hover:text-[#828fff] transition-colors w-fit"
                                >
                                    Learn more →
                                </Link>
                                {service.link ? (
                                    <a
                                        href={service.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[12px] text-[#62666d] hover:text-[#8a8f98] transition-colors w-fit"
                                    >
                                        {service.linkLabel} →
                                    </a>
                                ) : (
                                    <span className="text-[12px] text-[#62666d]">{service.tag}</span>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
