'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PLANS, PLAN_FEATURES } from '../lib/planConfig'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { BreadcrumbSchema } from '../components/StructuredData'
import PriceDisplay from '../components/PriceDisplay'

const SAAS_URL = 'https://saas.synplixinfotech.in/'

const agencyCategories = [
    {
        id: 'webpage',
        label: 'Webpage Design',
        plans: [
            {
                name: 'Starter',
                price: 8000,
                period: 'one-time',
                description: 'For small businesses that need a clean, conversion-ready online presence.',
                features: ['Up to 5 pages', 'Responsive layout', 'Contact form', 'Basic SEO setup', '1 revision round'],
                popular: false,
                cta: 'Get Started',
            },
            {
                name: 'Growth',
                price: 18000,
                period: 'one-time',
                description: 'For growing businesses that want premium UI and stronger content structure.',
                features: ['Up to 15 pages', 'Custom interactions', 'CMS integration', 'Analytics setup', '3 revision rounds'],
                popular: true,
                cta: 'Most Popular',
            },
            {
                name: 'Enterprise',
                price: null,
                period: 'quote',
                description: 'For large web properties with advanced workflows and integrations.',
                features: ['Unlimited pages', 'Custom portals', 'API integrations', 'Priority support', 'Dedicated PM'],
                popular: false,
                cta: 'Get a Quote',
            },
        ],
    },
    {
        id: 'content',
        label: 'Content Creation',
        plans: [
            {
                name: 'Basic',
                price: 5000,
                period: '/month',
                description: 'Consistent monthly output for early-stage teams.',
                features: ['8 social posts', '2 blog articles', 'Caption copy', 'Content calendar'],
                popular: false,
                cta: 'Get Started',
            },
            {
                name: 'Pro',
                price: 12000,
                period: '/month',
                description: 'A complete content pipeline for active growth channels.',
                features: ['20 social posts', '4 blog articles', 'Newsletter copy', 'SEO optimization'],
                popular: true,
                cta: 'Most Popular',
            },
            {
                name: 'Agency',
                price: 25000,
                period: '/month',
                description: 'High-volume content production with strategic oversight.',
                features: ['High-output publishing', 'Landing page copy', 'Ad copywriting', 'Weekly reporting'],
                popular: false,
                cta: 'Get a Quote',
            },
        ],
    },
]

const SUPPORT_LABELS = {
    community: 'Community support',
    email: 'Email support',
    priority: 'Priority support',
    csm: 'Dedicated CSM',
}

function fmtNum(val) {
    return val === Infinity ? 'Unlimited' : val.toLocaleString('en-IN')
}

function fmtMonths(val) {
    return val === Infinity ? 'Unlimited' : `${val} months`
}

function buildFeatureRows(planId) {
    const l = PLAN_FEATURES[planId]
    return [
        `${fmtNum(l.workspaces)} workspace${l.workspaces === 1 ? '' : 's'}`,
        `${fmtNum(l.teamMembers)} team member${l.teamMembers === 1 ? '' : 's'}`,
        `${fmtNum(l.monthlyTransactions)} transactions/month`,
        `${fmtNum(l.dataRecords)} data records`,
        `${fmtNum(l.customWorkflows)} custom workflows`,
        l.offlineMode ? 'Offline mode' : null,
        l.gstBilling ? 'GST billing' : null,
        l.attendancePayroll ? 'Attendance & payroll' : null,
        l.pdfExcelExport ? 'PDF / Excel export' : null,
        l.advancedAnalytics ? 'Advanced analytics' : null,
        l.multiWorkspaceDashboard ? 'Multi-workspace dashboard' : null,
        l.rbac ? 'Role-based access (RBAC)' : null,
        l.twoFA ? '2FA security' : null,
        `${fmtMonths(l.dataRetentionMonths)} data retention`,
        SUPPORT_LABELS[l.supportLevel],
    ].filter(Boolean)
}

function AgencyCard({ plan }) {
    return (
        <motion.div whileHover={{ y: -4 }} className={`glass-card rounded-xl p-5 sm:p-6 flex flex-col min-w-0 h-full ${plan.popular ? 'border-electric/40' : ''}`}>
            <div className="mb-3 min-h-[28px] flex items-center">
                <span
                    className={`inline-flex w-fit px-2.5 py-1 rounded-full text-[11px] border border-electric/30 bg-electric/15 text-[#d0d6e0] ${
                        plan.popular ? '' : 'invisible pointer-events-none select-none'
                    }`}
                    aria-hidden={!plan.popular}
                >
                    Popular
                </span>
            </div>

            <div className="min-h-[98px]">
                <h3 className="text-[22px] tracking-[-0.01em] font-medium text-[#f7f8f8] mb-2">{plan.name}</h3>
                <p className="text-[14px] text-[#8a8f98] leading-relaxed">{plan.description}</p>
            </div>

            <div className="my-5 sm:my-6 min-h-[4.75rem] sm:min-h-[5rem] flex flex-col justify-end gap-1.5 w-full min-w-0 shrink-0">
                {plan.price === null ? (
                    <span className="text-2xl sm:text-3xl xl:text-[1.65rem] tracking-[-0.02em] font-medium text-[#f7f8f8] tabular-nums leading-tight">
                        Custom
                    </span>
                ) : (
                    <>
                        <span className="text-2xl sm:text-3xl xl:text-[1.65rem] tracking-[-0.02em] font-medium text-[#f7f8f8] tabular-nums leading-tight block w-full min-w-0">
                            <PriceDisplay amount={plan.price} period={plan.period === 'one-time' ? '' : plan.period} allowWrap />
                        </span>
                        {plan.period === 'one-time' && (
                            <span className="text-[13px] text-[#62666d] leading-snug">One-time</span>
                        )}
                    </>
                )}
            </div>

            <ul className="space-y-2 mb-8 flex-1">
                {plan.features.map((feature) => (
                    <li key={feature} className="text-[14px] text-[#8a8f98] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric" />
                        {feature}
                    </li>
                ))}
            </ul>

            <a
                href="mailto:outreach@synplixinfotech.in?subject=Pricing Enquiry"
                className={`text-center py-3 rounded-md text-[14px] font-medium transition-colors ${
                    plan.popular ? 'bg-electric hover:bg-purple text-white' : 'border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-[#d0d6e0]'
                }`}
            >
                {plan.cta}
            </a>
        </motion.div>
    )
}

function SaasCard({ plan, annual }) {
    const isAnnual = annual && plan.annualPrice !== null
    const features = buildFeatureRows(plan.id)

    return (
        <motion.div whileHover={{ y: -4 }} className={`glass-card rounded-xl p-5 sm:p-6 flex flex-col min-w-0 h-full ${plan.highlighted ? 'border-electric/40' : ''}`}>
            <div className="mb-3 min-h-[28px] flex items-center">
                <span
                    className={`inline-flex w-fit px-2.5 py-1 rounded-full text-[11px] border border-electric/30 bg-electric/15 text-[#d0d6e0] ${
                        plan.highlighted ? '' : 'invisible pointer-events-none select-none'
                    }`}
                    aria-hidden={!plan.highlighted}
                >
                    Popular
                </span>
            </div>

            <div className="min-h-[5.5rem]">
                <h3 className="text-[22px] tracking-[-0.01em] font-medium text-[#f7f8f8] mb-2">{plan.label}</h3>
                <p className="text-[14px] text-[#8a8f98] leading-relaxed">{plan.tagline}</p>
            </div>

            <div className="my-5 sm:my-6 min-h-[4.75rem] sm:min-h-[5rem] flex flex-col justify-end gap-1.5 w-full min-w-0 shrink-0">
                {plan.monthlyPrice === 0 ? (
                    <>
                        <span className="text-2xl sm:text-3xl xl:text-[1.65rem] tracking-[-0.02em] font-medium text-[#f7f8f8] tabular-nums leading-tight">
                            Free
                        </span>
                        <span className="text-[12px] sm:text-[13px] text-[#62666d] leading-snug">Forever</span>
                    </>
                ) : isAnnual ? (
                    <>
                        <span className="text-2xl sm:text-3xl xl:text-[1.65rem] tracking-[-0.02em] font-medium text-[#f7f8f8] tabular-nums leading-tight block w-full min-w-0">
                            <PriceDisplay amount={plan.annualPrice} period="/year" allowWrap />
                        </span>
                        <span className="text-[12px] sm:text-[13px] text-[#62666d] leading-snug">Billed annually</span>
                    </>
                ) : (
                    <span className="text-2xl sm:text-3xl xl:text-[1.65rem] tracking-[-0.02em] font-medium text-[#f7f8f8] tabular-nums leading-tight block w-full min-w-0">
                        <PriceDisplay amount={plan.monthlyPrice} period="/month" allowWrap />
                    </span>
                )}
            </div>

            <ul className="space-y-2 mb-8 flex-1">
                {features.map((feature) => (
                    <li key={feature} className="text-[14px] text-[#8a8f98] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric" />
                        {feature}
                    </li>
                ))}
            </ul>

            <a
                href={SAAS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center py-3 rounded-md text-[14px] font-medium transition-colors ${
                    plan.highlighted ? 'bg-electric hover:bg-purple text-white' : 'border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-[#d0d6e0]'
                }`}
            >
                {plan.monthlyPrice === 0 ? 'Get Started Free' : plan.id === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
            </a>
        </motion.div>
    )
}

export default function PricingPage() {
    const [annual, setAnnual] = useState(false)

    const breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'Pricing', url: '/pricing' },
    ]

    return (
        <main className="min-h-screen bg-navy text-white">
            <BreadcrumbSchema items={breadcrumbs} />
            <Navbar />

            <section className="pt-32 pb-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-[13px] text-[#8a8f98] hover:text-[#d0d6e0] mb-8 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                    <span className="block w-fit mx-auto px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[12px] text-[#d0d6e0] mb-5">
                        Transparent pricing
                    </span>
                    <h1 className="text-5xl lg:text-6xl tracking-[-0.04em] font-medium text-[#f7f8f8] mb-5">Simple, predictable plans</h1>
                    <p className="text-[18px] text-[#8a8f98] max-w-2xl mx-auto">No hidden fees or surprise line items. Choose the model that fits your stage.</p>
                </div>
            </section>

            {agencyCategories.map((category) => (
                <section key={category.id} id={category.id} className="py-16 bg-charcoal">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl lg:text-4xl tracking-[-0.03em] font-medium text-[#f7f8f8] mb-10">{category.label} Plans</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
                            {category.plans.map((plan) => (
                                <AgencyCard key={`${category.id}-${plan.name}`} plan={plan} />
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            <section id="saas" className="py-16 bg-navy">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-10">
                        <h2 className="text-3xl lg:text-4xl tracking-[-0.03em] font-medium text-[#f7f8f8] mb-4">Synplix SaaS subscription plans</h2>
                        <p className="text-[16px] text-[#8a8f98] max-w-xl">Start free, then scale with advanced controls, security, and support.</p>

                        <div className="inline-flex items-center gap-3 border border-white/10 rounded-full px-4 py-2 mt-6 bg-white/[0.02]">
                            <span className={`text-[13px] ${!annual ? 'text-[#f7f8f8]' : 'text-[#8a8f98]'}`}>Monthly</span>
                            <button
                                onClick={() => setAnnual((a) => !a)}
                                className={`relative w-10 h-5 rounded-full transition-colors ${annual ? 'bg-electric' : 'bg-white/20'}`}
                                aria-label="Toggle annual billing"
                            >
                                <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${annual ? 'translate-x-5' : 'translate-x-0'}`} />
                            </button>
                            <span className={`text-[13px] ${annual ? 'text-[#f7f8f8]' : 'text-[#8a8f98]'}`}>
                                Annual <span className="ml-1 text-[#7170ff]">Save 20%</span>
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 items-stretch">
                        {PLANS.map((plan) => (
                            <div key={plan.id} id={plan.id} className="h-full min-w-0 flex">
                                <SaasCard plan={plan} annual={annual} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-charcoal">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <h2 className="text-4xl tracking-[-0.03em] font-medium text-[#f7f8f8] mb-4">Need a custom recommendation?</h2>
                    <p className="text-[16px] text-[#8a8f98] mb-8">Book a free strategy call and we&apos;ll map a plan to your exact scope.</p>
                    <a
                        href="mailto:outreach@synplixinfotech.in?subject=Pricing Enquiry"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-electric hover:bg-purple text-white text-[14px] font-medium transition-colors"
                    >
                        Book free strategy call
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    )
}
