'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PLANS, PLAN_FEATURES } from '../lib/planConfig'

const SAAS_URL = 'https://saas.synplixinfotech.in/'

const SUPPORT_LABELS = {
    community: 'Community support',
    email: 'Email support',
    priority: 'Priority support',
    csm: 'Dedicated CSM',
}

function previewFeatures(planId) {
    const l = PLAN_FEATURES[planId]
    const workspaces = l.workspaces === Infinity ? 'Unlimited workspaces' : `${l.workspaces} workspace${l.workspaces > 1 ? 's' : ''}`
    const transactions = l.monthlyTransactions === Infinity ? 'Unlimited transactions/mo' : `${l.monthlyTransactions} transactions/mo`
    return [workspaces, transactions, SUPPORT_LABELS[l.supportLevel]]
}

export default function PricingPreview() {
    return (
        <section id="pricing" className="relative py-28 bg-navy overflow-hidden">
            <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(79,70,229,0.07) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-electric-light border border-electric/30 bg-electric/10 mb-4">
                        Pricing
                    </span>
                    <h2 className="font-outfit text-4xl lg:text-5xl font-bold mb-4">
                        Flexible plans for every <span className="gradient-text">stage of growth</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Start free, upgrade when you&apos;re ready. All plans include GST billing and advanced reporting.
                    </p>
                </motion.div>

                {/* 4 Plan Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
                    {PLANS.map((plan, i) => {
                        const features = previewFeatures(plan.id)
                        return (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-20px' }}
                                transition={{ duration: 0.55, delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className={`glass-card rounded-2xl p-7 border transition-all duration-300 flex flex-col gap-5 ${
                                    plan.highlighted
                                        ? 'border-purple/50 shadow-glow-purple'
                                        : 'border-white/8 hover:border-white/20'
                                }`}
                            >
                                {/* Plan name + popular tag */}
                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-outfit font-bold text-white text-lg">{plan.label}</span>
                                        {plan.highlighted && (
                                            <span className="px-2 py-0.5 rounded-full bg-purple/20 border border-purple/30 text-purple text-xs font-semibold">
                                                Popular
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-slate-500 text-xs">{plan.tagline}</p>
                                </div>

                                {/* Price */}
                                <div>
                                    <div className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Starting from</div>
                                    {plan.monthlyPrice === 0 ? (
                                        <div className="font-outfit text-3xl font-bold text-electric-light">Free</div>
                                    ) : (
                                        <div className={`font-outfit text-3xl font-bold ${plan.highlighted ? 'text-purple' : 'text-white'}`}>
                                            ₹{plan.monthlyPrice.toLocaleString('en-IN')}
                                            <span className="text-slate-500 text-sm font-normal ml-1">/mo</span>
                                        </div>
                                    )}
                                </div>

                                {/* Features */}
                                <ul className="flex flex-col gap-2">
                                    {features.map((f) => (
                                        <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                                            <svg
                                                className={`w-3.5 h-3.5 shrink-0 ${plan.highlighted ? 'text-purple' : 'text-electric-light'}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {/* Link */}
                                <Link
                                    href={`/pricing#${plan.id}`}
                                    className={`mt-auto text-sm font-semibold flex items-center gap-1 hover:underline transition-all ${
                                        plan.highlighted ? 'text-purple' : 'text-electric-light'
                                    }`}
                                >
                                    See full plan
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Full plans CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center flex flex-wrap justify-center gap-4"
                >
                    <Link href="/pricing">
                        <motion.span
                            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(79,70,229,0.4)' }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-electric text-white font-semibold text-base shadow-glow-blue transition-all duration-300 cursor-pointer"
                        >
                            View Full Pricing Plans
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.span>
                    </Link>
                    <motion.a
                        href={SAAS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(168,85,247,0.4)' }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-purple text-white font-semibold text-base shadow-glow-purple transition-all duration-300 cursor-pointer"
                    >
                        <span>🚀</span>
                        Try Synplix SaaS
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
