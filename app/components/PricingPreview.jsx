'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PLANS, PLAN_FEATURES } from '../lib/planConfig'
import PriceDisplay from './PriceDisplay'

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
        <section id="pricing" className="py-16 sm:py-24 bg-charcoal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="text-center mb-14"
                >
                    <span className="inline-flex px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[12px] text-[#d0d6e0] mb-4">
                        Pricing
                    </span>
                    <h2 className="text-4xl lg:text-5xl tracking-[-0.03em] font-medium text-[#f7f8f8] mb-4">
                        Flexible plans for every stage of growth
                    </h2>
                    <p className="text-[17px] text-[#8a8f98] max-w-2xl mx-auto">
                        Start free and scale when you need more capacity, security, and collaboration features.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mb-10 items-stretch">
                    {PLANS.map((plan, i) => {
                        const features = previewFeatures(plan.id)
                        return (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: i * 0.08 }}
                                className={`glass-card rounded-xl p-5 sm:p-6 flex flex-col min-w-0 h-full ${plan.highlighted ? 'border-electric/40' : ''}`}
                            >
                                <div className="mb-2 min-h-[24px] flex items-center">
                                    <span
                                        className={`inline-flex w-fit px-2 py-0.5 rounded-full text-[11px] bg-electric/20 border border-electric/30 text-[#d0d6e0] ${
                                            plan.highlighted ? '' : 'invisible pointer-events-none select-none'
                                        }`}
                                        aria-hidden={!plan.highlighted}
                                    >
                                        Popular
                                    </span>
                                </div>
                                <span className="text-[20px] tracking-[-0.01em] font-medium text-[#f7f8f8] block mb-1">{plan.label}</span>
                                <p className="text-[12px] text-[#62666d] mb-4 min-h-[2.5rem]">{plan.tagline}</p>

                                <div className="mb-5 min-h-[3rem] sm:min-h-[3.25rem] flex flex-col justify-end gap-1 w-full min-w-0 shrink-0">
                                    {plan.monthlyPrice === 0 ? (
                                        <>
                                            <div className="text-2xl sm:text-3xl xl:text-[1.65rem] tracking-[-0.02em] font-medium text-[#f7f8f8] tabular-nums leading-tight">
                                                Free
                                            </div>
                                            <span className="text-[12px] text-[#62666d]">Forever</span>
                                        </>
                                    ) : (
                                        <div className="text-2xl sm:text-3xl xl:text-[1.65rem] tracking-[-0.02em] font-medium text-[#f7f8f8] tabular-nums leading-tight w-full min-w-0">
                                            <PriceDisplay amount={plan.monthlyPrice} period="/mo" allowWrap />
                                        </div>
                                    )}
                                </div>

                                <ul className="space-y-2 mb-6 flex-1 min-h-0">
                                    {features.map((f) => (
                                        <li key={f} className="text-[14px] text-[#8a8f98] flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-electric" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <Link href={`/pricing#${plan.id}`} className="text-[13px] font-medium text-[#7170ff] hover:text-[#828fff] transition-colors">
                                    See full plan →
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>

                <div className="text-center flex flex-wrap justify-center gap-3">
                    <Link href="/pricing" className="inline-flex items-center px-5 py-3 rounded-md bg-electric hover:bg-purple text-white text-[14px] font-medium transition-colors">
                        View full pricing
                    </Link>
                    <a
                        href={SAAS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-5 py-3 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-[#d0d6e0] text-[14px] font-medium transition-colors"
                    >
                        Try Synplix SaaS
                    </a>
                </div>
            </div>
        </section>
    )
}
