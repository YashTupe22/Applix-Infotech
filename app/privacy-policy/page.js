import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
    title: 'Privacy Policy | Synplix Infotech Services',
    description: 'Read the Synplix Infotech Services Privacy Policy to understand how we collect, use, and protect your personal information.',
    metadataBase: new URL('https://synplixinfotech.in'),
    alternates: {
        canonical: '/privacy-policy',
    },
    openGraph: {
        title: 'Privacy Policy | Synplix Infotech Services',
        description: 'Learn how Synplix collects, uses, and protects your personal information.',
        type: 'website',
        url: 'https://synplixinfotech.in/privacy-policy',
        siteName: 'Synplix Infotech Services',
    },
    twitter: {
        card: 'summary',
        title: 'Privacy Policy | Synplix Infotech Services',
        description: 'Our Privacy Policy explains how we handle your personal information.',
    },
    robots: {
        index: true,
        follow: true,
    },
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

To exercise any of these rights, please contact us at outreach@synplixinfotech.in.`,
    },
    {
        title: '7. Changes to This Policy',
        content: `We may update this Privacy Policy from time to time. The date of the latest revision will always be shown at the top of this page. Continued use of our website after changes constitutes acceptance of the updated policy.`,
    },
    {
        title: '8. Contact Us',
        content: `For any questions regarding this Privacy Policy, please reach out to us at:\n\nEmail: outreach@synplixinfotech.in\nSynplix Infotech Services`,
    },
]

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-navy text-white">
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
                        Legal
                    </span>
                    <h1 className="text-5xl tracking-[-0.04em] font-medium text-[#f7f8f8] mb-4">Privacy policy</h1>
                    <p className="text-[16px] text-[#8a8f98]">Last updated: February 2026</p>
                </div>
            </section>

            <section className="pb-24">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="glass-card rounded-2xl p-8 lg:p-12 flex flex-col gap-10">
                        <p className="text-[15px] text-[#8a8f98] leading-relaxed">
                            Synplix Infotech Services (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This policy explains how we handle your personal information when you visit our website or engage our services.
                        </p>
                        {sections.map((section) => (
                            <div key={section.title}>
                                <h2 className="text-2xl tracking-[-0.02em] font-medium text-[#f7f8f8] mb-3">{section.title}</h2>
                                <p className="text-[15px] text-[#8a8f98] leading-relaxed whitespace-pre-line">{section.content}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-[14px] text-[#8a8f98]">Questions? <a href="mailto:outreach@synplixinfotech.in" className="text-[#7170ff] hover:text-[#828fff] transition-colors">outreach@synplixinfotech.in</a></p>
                        <div className="flex justify-center gap-6 mt-4">
                            <Link href="/terms" className="text-[14px] text-[#8a8f98] hover:text-[#d0d6e0] transition-colors">Terms of Service</Link>
                            <Link href="/faq" className="text-[14px] text-[#8a8f98] hover:text-[#d0d6e0] transition-colors">FAQ</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
