import Link from 'next/link'

export const metadata = {
    title: 'FAQ | Applix Infotech Services',
    description: 'Frequently asked questions about Applix web development, SaaS, content creation services, pricing, timelines, and process.',
}

const faqs = [
    {
        category: 'General',
        icon: '💬',
        items: [
            {
                q: 'What does Applix Infotech Services do?',
                a: 'We build custom web applications, SaaS platforms, and business automation tools for modern companies. We also offer content creation services including copywriting, social media, and blog content.',
            },
            {
                q: 'Where are you based?',
                a: 'We are an India-based company working with clients globally. All communication is handled remotely via email, calls, and project management tools.',
            },
            {
                q: 'Who do you typically work with?',
                a: 'We work with startups, SMBs, and growing businesses that need a reliable technical partner. Whether you need an MVP in 6 weeks or a full enterprise SaaS, we can help.',
            },
        ],
    },
    {
        category: 'Process & Timeline',
        icon: '⚡',
        items: [
            {
                q: 'How do we get started?',
                a: 'Book a free 30-minute strategy call via our Contact section. We\'ll discuss your goals, scope out the project, and send you a proposal within 48 hours.',
            },
            {
                q: 'How long does a typical project take?',
                a: 'It depends on scope. A marketing website takes 2–4 weeks. An MVP web app takes 6–8 weeks. A full SaaS platform typically takes 10–16 weeks. We\'ll give you a precise timeline in the proposal.',
            },
            {
                q: 'What does your process look like?',
                a: 'We follow a 3-phase process: Strategy (discovery & planning) → Design (wireframes & prototypes) → Build & Scale (development, testing, deployment). You\'re involved at every stage.',
            },
            {
                q: 'Do you offer ongoing maintenance after launch?',
                a: 'Yes. We offer monthly retainer packages for hosting management, bug fixes, feature additions, and priority support. Rates vary based on scope.',
            },
        ],
    },
    {
        category: 'Pricing & Payments',
        icon: '💰',
        items: [
            {
                q: 'How is pricing structured?',
                a: 'Most projects are quoted as a fixed price based on scope. For ongoing work (content creation, maintenance), we use monthly retainer plans. See our Pricing page for indicative rates.',
            },
            {
                q: 'What payment methods do you accept?',
                a: 'We accept bank transfers (NEFT/RTGS/IMPS), UPI, and international wire transfers. Payment terms are typically 50% upfront and 50% on completion.',
            },
            {
                q: 'Do you offer discounts for startups?',
                a: 'We evaluate early-stage startups on a case-by-case basis and may offer flexible payment plans or deferred billing for the right opportunities. Contact us to discuss.',
            },
            {
                q: 'Can I request a custom pricing package?',
                a: 'Absolutely. Every business is different. Book a call and we\'ll put together a custom proposal that fits your exact needs and budget.',
            },
        ],
    },
    {
        category: 'Technical',
        icon: '⚙️',
        items: [
            {
                q: 'What technologies do you use?',
                a: 'Our core stack is Next.js, React, Node.js, PostgreSQL, and Tailwind CSS. For infrastructure, we use Vercel, AWS, and DigitalOcean. We select the best tools for your specific requirements.',
            },
            {
                q: 'Will I own the code after the project?',
                a: 'Yes. Upon final payment, all custom code, designs, and assets are fully owned by you. We hand over the complete source code and documentation.',
            },
            {
                q: 'Can you work with my existing codebase?',
                a: 'Yes. We frequently help teams improve, refactor, or extend existing applications. We\'ll do a code audit first to understand the current state and plan accordingly.',
            },
            {
                q: 'Do you build mobile apps?',
                a: 'We specialise in web-based applications that are fully mobile-responsive. For native iOS/Android apps, we can recommend trusted partners or use React Native if suitable.',
            },
        ],
    },
    {
        category: 'Content Creation',
        icon: '✍️',
        items: [
            {
                q: 'What types of content do you create?',
                a: 'We create social media posts, blog articles, website copywriting, email newsletters, ad copy, and brand voice guides. Everything is SEO-optimised and tailored to your audience.',
            },
            {
                q: 'How do the content plans work?',
                a: 'Content plans are monthly subscriptions. At the start of each month we share a content calendar for your approval, then deliver all assets on time throughout the month.',
            },
            {
                q: 'Can I request revisions on content?',
                a: 'Yes. Each content piece comes with one round of revisions included. Additional revision rounds are available for a small fee.',
            },
        ],
    },
]

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-navy text-white">
            {/* Header */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(6,182,212,0.08) 0%, transparent 60%)' }} />
                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-8 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-cyan border border-cyan/30 bg-cyan/10 mb-5">
                        Help Center
                    </span>
                    <h1 className="font-outfit text-4xl lg:text-5xl font-bold mb-4">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Everything you need to know about working with Applix. Can&apos;t find your answer?{' '}
                        <a href="mailto:hello@applix.in" className="text-electric-light hover:underline">Email us.</a>
                    </p>
                </div>
            </section>

            {/* FAQ Categories */}
            <section className="pb-24">
                <div className="max-w-3xl mx-auto px-6 flex flex-col gap-12">
                    {faqs.map((category) => (
                        <div key={category.category}>
                            {/* Category label */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-2xl">{category.icon}</span>
                                <h2 className="font-outfit text-xl font-bold text-white">{category.category}</h2>
                            </div>

                            {/* Q&A items */}
                            <div className="flex flex-col gap-3">
                                {category.items.map((item, i) => (
                                    <details
                                        key={i}
                                        className="group glass-card rounded-2xl border border-white/8 hover:border-electric/25 transition-all duration-300 overflow-hidden"
                                    >
                                        <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none select-none">
                                            <span className="font-outfit font-semibold text-white text-base pr-4">{item.q}</span>
                                            <span className="shrink-0 w-6 h-6 rounded-full bg-electric/10 border border-electric/30 flex items-center justify-center text-electric-light transition-transform duration-300 group-open:rotate-45">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                                </svg>
                                            </span>
                                        </summary>
                                        <div className="px-6 pb-5">
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* CTA */}
                    <div className="glass-card rounded-3xl border border-electric/20 p-8 text-center">
                        <h3 className="font-outfit text-2xl font-bold text-white mb-2">Still have questions?</h3>
                        <p className="text-slate-400 text-sm mb-6">Our team typically responds within a few hours during business hours (IST).</p>
                        <a
                            href="mailto:hello@applix.in"
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-electric text-white font-semibold text-sm shadow-glow-blue hover:shadow-none transition-all duration-300"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            hello@applix.in
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
