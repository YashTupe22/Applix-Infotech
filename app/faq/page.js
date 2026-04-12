import Link from 'next/link'
import { FAQPageSchema, BreadcrumbSchema } from '../components/StructuredData'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
    title: 'FAQ | Synplix Infotech Services',
    description: 'Frequently asked questions about Synplix web development, SaaS, content creation services, pricing, timelines, and process.',
    metadataBase: new URL('https://synplixinfotech.in'),
    alternates: {
        canonical: '/faq',
    },
    openGraph: {
        title: 'FAQ | Synplix Infotech Services',
        description: 'Everything you need to know about working with Synplix. Pricing, process, timelines, and technical questions answered.',
        type: 'website',
        url: 'https://synplixinfotech.in/faq',
        siteName: 'Synplix Infotech Services',
    },
    twitter: {
        card: 'summary',
        title: 'FAQ | Synplix Infotech Services',
        description: 'Frequently asked questions about our web development, SaaS, and content creation services.',
    },
}

const faqs = [
    {
        category: 'General',
        icon: '💬',
        items: [
            {
                q: 'What does Synplix Infotech Services do?',
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
                q: 'How is Synplix pricing structured?',
                a: 'Synplix offers four subscription plans: Free (forever free), Starter (₹499/month), Pro (₹999/month), and Enterprise (₹1,999/month). Paying annually saves you 20% — equivalent to 2 months free. Prices are shown as ₹X/year billed annually on the pricing page.',
            },
            {
                q: 'Is there a free plan?',
                a: 'Yes. The Free plan is free forever — no credit card required. It supports 1 workspace, up to 50 transactions per month, 5 custom workflows, and 25 data records, with offline mode and GST billing included. Upgrade any time when you need more capacity.',
            },
            {
                q: 'Can I switch plans at any time?',
                a: 'Yes. You can upgrade or downgrade your plan at any time from your account settings. Upgrades take effect immediately; downgrades apply at the start of your next billing cycle.',
            },
            {
                q: 'What payment methods do you accept?',
                a: 'We accept UPI, NEFT/RTGS/IMPS bank transfers, and credit/debit cards. Subscriptions are billed monthly or annually in advance in Indian Rupees (INR).',
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
    const breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'FAQ', url: '/faq' },
    ]

    return (
        <main className="min-h-screen bg-navy text-white">
            <FAQPageSchema faqs={faqs} />
            <BreadcrumbSchema items={breadcrumbs} />
            <Navbar />

            <section className="pt-36 pb-14">
                <div className="max-w-3xl mx-auto px-6">
                    <Link href="/" className="flex w-fit items-center gap-2 text-[13px] text-[#8a8f98] hover:text-[#d0d6e0] mb-8 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                    <span className="block w-fit px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[12px] text-[#d0d6e0] mb-5">
                        Help center
                    </span>
                    <h1 className="text-5xl tracking-[-0.04em] font-medium text-[#f7f8f8] mb-4">Frequently asked questions</h1>
                    <p className="text-[17px] text-[#8a8f98]">
                        Everything you need to know about working with Synplix. Need help fast?{' '}
                        <a href="mailto:outreach@synplixinfotech.in" className="text-[#7170ff] hover:text-[#828fff] transition-colors">Email us</a>.
                    </p>
                </div>
            </section>

            <section className="pb-24">
                <div className="max-w-3xl mx-auto px-6 flex flex-col gap-12">
                    {faqs.map((category) => (
                        <div key={category.category}>
                            <h2 className="text-2xl tracking-[-0.02em] font-medium text-[#f7f8f8] mb-6">{category.category}</h2>
                            <div className="flex flex-col gap-3">
                                {category.items.map((item, i) => (
                                    <details key={i} className="group glass-card rounded-xl overflow-hidden">
                                        <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none select-none">
                                            <span className="text-[16px] font-medium text-[#f7f8f8] pr-4">{item.q}</span>
                                            <span className="shrink-0 w-6 h-6 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#d0d6e0] transition-transform duration-300 group-open:rotate-45">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                                </svg>
                                            </span>
                                        </summary>
                                        <div className="px-6 pb-5">
                                            <p className="text-[15px] leading-relaxed text-[#8a8f98]">{item.a}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="glass-card rounded-2xl p-8 text-center">
                        <h3 className="text-2xl tracking-[-0.02em] font-medium text-[#f7f8f8] mb-2">Still have questions?</h3>
                        <p className="text-[14px] text-[#8a8f98] mb-6">Our team responds quickly during business hours (IST).</p>
                        <a
                            href="mailto:outreach@synplixinfotech.in"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-electric hover:bg-purple text-white text-[14px] font-medium transition-colors"
                        >
                            outreach@synplixinfotech.in
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
