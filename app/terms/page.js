import Link from 'next/link'

export const metadata = {
    title: 'Terms of Service | Applix Infotech Services',
    description: 'Read the Terms of Service for Applix Infotech Services — governing use of our website and engagement of our development services.',
}

const sections = [
    {
        title: '1. Acceptance of Terms',
        content: `By accessing our website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.`,
    },
    {
        title: '2. Services Provided',
        content: `Applix Infotech Services provides custom web application development, SaaS platform development, business automation, and content creation services. The specific scope, deliverables, timeline, and pricing for each project are defined in a separate Statement of Work (SOW) or project agreement signed by both parties.`,
    },
    {
        title: '3. Payment Terms',
        content: `• A deposit (typically 50%) is required before project commencement.
• The remaining balance is due upon project completion or as per the agreed milestone schedule.
• Invoices are payable within 7 business days of issue.
• Late payments may attract an interest charge of 1.5% per month.
• All prices are quoted in Indian Rupees (INR) unless otherwise specified.`,
    },
    {
        title: '4. Intellectual Property',
        content: `Upon receipt of full payment, all custom code, designs, and assets created specifically for your project are transferred to you. 

We retain the right to use general methodologies, tools, and frameworks used during development. We may display your completed project in our portfolio unless you request otherwise in writing.

Third-party assets (fonts, libraries, stock images) are subject to their own licence agreements.`,
    },
    {
        title: '5. Revisions & Changes',
        content: `The number of revision rounds included is specified in the project agreement. Additional revisions beyond the agreed scope will be billed at our standard hourly rate. 

Significant changes to project scope after sign-off may require a revised quote and timeline adjustment.`,
    },
    {
        title: '6. Confidentiality',
        content: `Both parties agree to keep confidential any proprietary or sensitive information shared during the project. We will not disclose your business information, strategies, or technical details to third parties without your consent except where required by law.`,
    },
    {
        title: '7. Limitation of Liability',
        content: `Our liability is limited to the total fees paid for the specific project in question. We are not liable for indirect, incidental, or consequential damages arising from use of our deliverables. 

We are not responsible for third-party services, hosting providers, or infrastructure beyond our direct control.`,
    },
    {
        title: '8. Termination',
        content: `Either party may terminate a project agreement with 14 days' written notice. In the event of termination, you are liable for payment for all work completed up to the termination date. The deposit is non-refundable unless Applix fails to deliver agreed deliverables.`,
    },
    {
        title: '9. Governing Law',
        content: `These terms are governed by the laws of India. Any disputes shall be resolved through good-faith negotiation, and if necessary, through binding arbitration in accordance with Indian arbitration laws.`,
    },
    {
        title: '10. Contact',
        content: `For any questions about these Terms, contact us at:\n\nEmail: hello@applix.in\nApplix Infotech Services`,
    },
]

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-navy text-white">
            {/* Header */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(124,58,237,0.1) 0%, transparent 60%)' }} />
                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-8 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-purple border border-purple/30 bg-purple/10 mb-5">
                        Legal
                    </span>
                    <h1 className="font-outfit text-4xl lg:text-5xl font-bold mb-4">
                        Terms of <span className="gradient-text">Service</span>
                    </h1>
                    <p className="text-slate-400 text-lg">Last updated: February 2026</p>
                </div>
            </section>

            {/* Content */}
            <section className="pb-24">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="glass-card rounded-3xl border border-white/8 p-8 lg:p-12 flex flex-col gap-10">
                        <p className="text-slate-400 leading-relaxed">
                            These Terms of Service govern your use of the Applix Infotech Services website and the engagement of our professional services. Please read them carefully.
                        </p>
                        {sections.map((section) => (
                            <div key={section.title}>
                                <h2 className="font-outfit text-xl font-bold text-white mb-3">{section.title}</h2>
                                <p className="text-slate-400 leading-relaxed whitespace-pre-line text-sm">{section.content}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-slate-500 text-sm">Questions? <a href="mailto:hello@applix.in" className="text-electric-light hover:underline">hello@applix.in</a></p>
                        <div className="flex justify-center gap-6 mt-4">
                            <Link href="/privacy-policy" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Privacy Policy</Link>
                            <Link href="/faq" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">FAQ</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
