'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const pricingCategories = [
    {
        id: 'webpage',
        label: 'Webpage Design',
        icon: '🌐',
        color: 'electric',
        borderColor: 'border-electric/30',
        glowColor: 'shadow-glow-blue',
        badgeColor: 'bg-electric/10 border-electric/30 text-electric-light',
        plans: [
            {
                name: 'Starter',
                price: '₹8,000',
                period: 'one-time',
                description: 'Perfect for small businesses needing a clean, professional online presence.',
                features: ['Up to 5 pages', 'Mobile responsive', 'Contact form', 'Basic SEO setup', '1 round of revisions', '2-week delivery'],
                popular: false,
                cta: 'Get Started',
            },
            {
                name: 'Growth',
                price: '₹18,000',
                period: 'one-time',
                description: 'For businesses that want a premium website that converts visitors to clients.',
                features: ['Up to 15 pages', 'Custom animations', 'CMS integration', 'Advanced SEO', 'Google Analytics setup', '3 rounds of revisions', '4-week delivery', 'Performance optimized'],
                popular: true,
                cta: 'Most Popular',
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                period: 'quote',
                description: 'Large-scale web presence with advanced features, integrations, and ongoing support.',
                features: ['Unlimited pages', 'Custom portals', 'API integrations', 'Multi-language', 'Priority support', 'Unlimited revisions', 'Dedicated PM'],
                popular: false,
                cta: 'Get a Quote',
            },
        ],
    },
    {
        id: 'content',
        label: 'Content Creation',
        icon: '✍️',
        color: 'cyan',
        borderColor: 'border-cyan/30',
        glowColor: 'shadow-glow-cyan',
        badgeColor: 'bg-cyan/10 border-cyan/30 text-cyan',
        plans: [
            {
                name: 'Basic',
                price: '₹5,000',
                period: '/month',
                description: 'Consistent content to keep your brand voice active online.',
                features: ['8 social media posts', '2 blog articles', 'Caption copywriting', 'Hashtag strategy', 'Monthly calendar'],
                popular: false,
                cta: 'Get Started',
            },
            {
                name: 'Pro',
                price: '₹12,000',
                period: '/month',
                description: 'A complete content engine for growing brands and businesses.',
                features: ['20 social media posts', '4 blog articles', 'Email newsletter', 'SEO-optimised copy', 'Story content', 'Content strategy', 'Engagement analytics'],
                popular: true,
                cta: 'Most Popular',
            },
            {
                name: 'Agency',
                price: '₹25,000',
                period: '/month',
                description: 'Full-service content production for brands that need to dominate.',
                features: ['Unlimited posts', 'Video scripts', 'Landing page copy', 'Ad copywriting', 'Brand voice guide', 'Weekly reporting', 'Dedicated strategist'],
                popular: false,
                cta: 'Get a Quote',
            },
        ],
    },
    {
        id: 'webapp',
        label: 'Web App / SaaS',
        icon: '🚀',
        color: 'purple',
        borderColor: 'border-purple/30',
        glowColor: 'shadow-glow-purple',
        badgeColor: 'bg-purple/10 border-purple/30 text-purple',
        plans: [
            {
                name: 'MVP',
                price: '₹35,000',
                period: 'one-time',
                description: 'Launch fast with a focused, fully-functional product.',
                features: ['Core feature set', 'User authentication', 'Admin dashboard', 'Mobile responsive', 'Basic analytics', '6-week delivery'],
                popular: false,
                cta: 'Build My MVP',
            },
            {
                name: 'SaaS',
                price: '₹75,000',
                period: 'one-time',
                description: 'A production-ready SaaS with billing, roles, and scale-ready infra.',
                features: ['Multi-tenancy', 'Stripe billing', 'Role-based access', 'API + webhooks', 'Custom dashboard', 'Email automation', 'CI/CD deployment', '10-week delivery'],
                popular: true,
                cta: 'Most Popular',
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                period: 'quote',
                description: 'Complex systems, enterprise integrations, and dedicated support teams.',
                features: ['Microservices arch', 'ERP/CRM integrations', 'Custom AI features', 'SLA guarantee', 'Security audit', 'Dedicated team', 'Ongoing retainer'],
                popular: false,
                cta: 'Let\'s Talk',
            },
        ],
    },
]

function PlanCard({ plan, color, glowColor, isActive }) {
    const glowMap = {
        electric: 'shadow-glow-blue border-electric/50',
        cyan: 'shadow-glow-cyan border-cyan/50',
        purple: 'shadow-glow-purple border-purple/50',
    }
    const btnMap = {
        electric: 'bg-electric hover:bg-electric/90',
        cyan: 'bg-cyan hover:bg-cyan/90',
        purple: 'bg-purple hover:bg-purple/90',
    }
    const checkMap = {
        electric: 'text-electric-light',
        cyan: 'text-cyan',
        purple: 'text-purple',
    }
    return (
        <motion.div
            whileHover={{ y: -6 }}
            className={`relative glass-card rounded-2xl p-7 border flex flex-col h-full transition-all duration-300 ${plan.popular
                    ? `border-2 ${glowMap[color]} scale-[1.02]`
                    : 'border-white/10 hover:border-white/20'
                }`}
        >
            {plan.popular && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white ${btnMap[color]}`}>
                    ✦ Most Popular
                </div>
            )}

            <div className="mb-5">
                <h3 className="font-outfit text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-slate-500 text-sm">{plan.description}</p>
            </div>

            <div className="mb-6">
                <span className="font-outfit text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-500 text-sm ml-1">{plan.period}</span>
            </div>

            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <svg className={`w-4 h-4 mt-0.5 shrink-0 ${checkMap[color]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {feat}
                    </li>
                ))}
            </ul>

            <motion.a
                href="mailto:hello@applix.in"
                whileTap={{ scale: 0.97 }}
                className={`text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${plan.popular
                        ? `${btnMap[color]} text-white shadow-lg`
                        : 'glass border border-white/15 text-white hover:border-white/30'
                    }`}
            >
                {plan.cta} →
            </motion.a>
        </motion.div>
    )
}

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-navy text-white">
            {/* Header */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="blob w-[500px] h-[500px] bg-electric top-[-150px] left-[-100px]" />
                <div className="blob w-[400px] h-[400px] bg-purple top-[50px] right-[-100px]" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-8 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </Link>
                        <span className="block px-4 py-1.5 rounded-full text-xs font-semibold text-electric-light border border-electric/30 bg-electric/10 mb-5 w-fit mx-auto">
                            Transparent Pricing
                        </span>
                        <h1 className="font-outfit text-5xl lg:text-6xl font-bold mb-5">
                            Simple, <span className="gradient-text">Honest Pricing</span>
                        </h1>
                        <p className="text-slate-400 text-xl max-w-xl mx-auto">
                            No hidden fees. No surprises. Pick the plan that fits your stage and goals.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Categories */}
            {pricingCategories.map((category, catIdx) => (
                <section
                    key={category.id}
                    id={category.id}
                    className={`relative py-20 ${catIdx % 2 === 0 ? 'bg-charcoal' : 'bg-navy'}`}
                >
                    <div className="relative z-10 max-w-7xl mx-auto px-6">
                        {/* Category header */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.55 }}
                            className="mb-12"
                        >
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold mb-4 ${category.badgeColor}`}>
                                <span>{category.icon}</span>
                                {category.label}
                            </div>
                            <h2 className="font-outfit text-3xl lg:text-4xl font-bold text-white">
                                {category.label} Plans
                            </h2>
                        </motion.div>

                        {/* Plans grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {category.plans.map((plan, i) => (
                                <motion.div
                                    key={plan.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-20px' }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <PlanCard
                                        plan={plan}
                                        color={category.color}
                                        glowColor={category.glowColor}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA bottom */}
            <section className="relative py-20 bg-charcoal overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[500px] h-[300px] rounded-full bg-electric opacity-10 blur-[100px]" />
                </div>
                <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
                    <h2 className="font-outfit text-4xl font-bold mb-4">
                        Not sure which plan? <span className="gradient-text">Let&apos;s talk.</span>
                    </h2>
                    <p className="text-slate-400 mb-8">Book a free 30-min strategy call and we&apos;ll recommend the best fit for your goals.</p>
                    <motion.a
                        href="mailto:hello@applix.in?subject=Pricing Enquiry"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(79,70,229,0.5)' }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-electric text-white font-bold text-lg shadow-glow-blue transition-all duration-300"
                    >
                        Book Free Strategy Call
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>
                </div>
            </section>
        </main>
    )
}
