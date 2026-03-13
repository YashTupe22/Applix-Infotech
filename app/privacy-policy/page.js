import Link from 'next/link'

export const metadata = {
    title: 'Privacy Policy | Synplix Infotech Services',
    description: 'Read the Synplix Infotech Services Privacy Policy to understand how we collect, use, and protect your personal information.',
}

const sections = [
    {
        title: '1. Information We Collect',
        content: `We collect information you voluntarily provide when you contact us, request a consultation, or use our services. This may include:
• Your name and email address
• Company name and website URL
• Project details and requirements
• Any other information you choose to provide

We may also collect technical data such as IP addresses, browser type, and pages visited to improve our website experience.`,
    },
    {
        title: '2. How We Use Your Information',
        content: `We use the information we collect to:
• Respond to your enquiries and provide the services you request
• Send project updates, invoices, and relevant communications
• Improve our website and service offerings
• Comply with legal obligations

We do not sell, rent, or trade your personal information to third parties for marketing purposes.`,
    },
    {
        title: '3. Data Storage & Security',
        content: `Your data is stored securely using industry-standard encryption and access controls. We retain your information only as long as necessary to fulfil the purposes described in this policy or as required by law. We implement technical and organisational measures to protect your data against unauthorised access, alteration, or disclosure.`,
    },
    {
        title: '4. Cookies',
        content: `Our website may use cookies to enhance your browsing experience. These are small text files stored on your device. You can disable cookies in your browser settings, though this may affect certain functionality of our site. We use only essential and analytics cookies — no advertising cookies are used.`,
    },
    {
        title: '5. Third-Party Services',
        content: `We may use trusted third-party services such as Google Analytics, Vercel, and email providers to operate our business. These providers have their own privacy policies and we ensure they meet adequate data protection standards.`,
    },
    {
        title: '6. Your Rights',
        content: `You have the right to:
• Access the personal data we hold about you
• Request correction of inaccurate data
• Request deletion of your data ("right to be forgotten")
• Object to processing of your data
• Withdraw consent at any time

To exercise any of these rights, please contact us at hello@synplix.in.`,
    },
    {
        title: '7. Changes to This Policy',
        content: `We may update this Privacy Policy from time to time. The date of the latest revision will always be shown at the top of this page. Continued use of our website after changes constitutes acceptance of the updated policy.`,
    },
    {
        title: '8. Contact Us',
        content: `For any questions regarding this Privacy Policy, please reach out to us at:\n\nEmail: hello@synplix.in\nSynplix Infotech Services`,
    },
]

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-navy text-white">
            {/* Header */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(79,70,229,0.12) 0%, transparent 60%)' }} />
                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-8 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-electric-light border border-electric/30 bg-electric/10 mb-5">
                        Legal
                    </span>
                    <h1 className="font-outfit text-4xl lg:text-5xl font-bold mb-4">
                        Privacy <span className="gradient-text">Policy</span>
                    </h1>
                    <p className="text-slate-400 text-lg">Last updated: February 2026</p>
                </div>
            </section>

            {/* Content */}
            <section className="pb-24">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="glass-card rounded-3xl border border-white/8 p-8 lg:p-12 flex flex-col gap-10">
                        <p className="text-slate-400 leading-relaxed">
                            Synplix Infotech Services (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This policy explains how we handle your personal information when you visit our website or engage our services.
                        </p>
                        {sections.map((section) => (
                            <div key={section.title}>
                                <h2 className="font-outfit text-xl font-bold text-white mb-3">{section.title}</h2>
                                <p className="text-slate-400 leading-relaxed whitespace-pre-line text-sm">{section.content}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-slate-500 text-sm">Questions? <a href="mailto:hello@synplix.in" className="text-electric-light hover:underline">hello@synplix.in</a></p>
                        <div className="flex justify-center gap-6 mt-4">
                            <Link href="/terms" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Terms of Service</Link>
                            <Link href="/faq" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">FAQ</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
