import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { ServiceIcon } from '../../components/SectionIcons'
import { SERVICES, getServiceBySlug, SAAS_URL } from '../../lib/servicesConfig'

export async function generateStaticParams() {
    return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
    const service = getServiceBySlug(params.slug)
    if (!service) return { title: 'Service' }
    return {
        title: service.title,
        description: service.shortDescription,
    }
}

export default function ServiceDetailPage({ params }) {
    const service = getServiceBySlug(params.slug)
    if (!service) notFound()

    const isSaaS = service.slug === 'saas-development'

    return (
        <main className="min-h-screen bg-navy text-white">
            <Navbar />
            <article className="pt-28 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-[13px] text-[#8a8f98] hover:text-[#d0d6e0] mb-8 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        All services
                    </Link>

                    <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-8">
                        <div className="shrink-0 w-14 h-14 rounded-xl border border-electric/30 bg-electric/10 flex items-center justify-center text-electric">
                            <ServiceIcon slug={service.slug} className="w-8 h-8" />
                        </div>
                        <div className="min-w-0">
                            <h1 className="text-4xl sm:text-5xl tracking-[-0.03em] font-medium text-[#f7f8f8] mb-2">{service.title}</h1>
                            <p className="text-[14px] text-[#62666d]">{service.tag}</p>
                        </div>
                    </div>

                    <p className="text-[18px] leading-relaxed text-[#8a8f98] mb-10">{service.intro}</p>

                    <div className="mb-10">
                        <h2 className="text-lg font-medium text-[#f7f8f8] mb-4">What you get</h2>
                        <ul className="space-y-3">
                            {service.highlights.map((item) => (
                                <li key={item} className="flex gap-3 text-[15px] text-[#8a8f98] leading-relaxed">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-lg font-medium text-[#f7f8f8] mb-4">Typical deliverables</h2>
                        <ul className="space-y-2">
                            {service.deliverables.map((item) => (
                                <li key={item} className="text-[15px] text-[#8a8f98] pl-4 border-l border-white/10">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-lg font-medium text-[#f7f8f8] mb-3">Stack we often use</h2>
                        <div className="flex flex-wrap gap-2">
                            {service.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[12px] text-[#d0d6e0]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                        <a
                            href="/#contact"
                            className="inline-flex justify-center px-5 py-3 rounded-md bg-electric hover:bg-purple text-white text-[14px] font-medium transition-colors"
                        >
                            Book a free consultation
                        </a>
                        {isSaaS && (
                            <a
                                href={SAAS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center px-5 py-3 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-[#d0d6e0] text-[14px] font-medium transition-colors"
                            >
                                Try our SaaS
                            </a>
                        )}
                        <Link
                            href="/pricing"
                            className="inline-flex justify-center px-5 py-3 rounded-md border border-white/10 text-[#d0d6e0] text-[14px] font-medium hover:bg-white/[0.05] transition-colors"
                        >
                            View pricing
                        </Link>
                    </div>
                </div>
            </article>
            <Footer />
        </main>
    )
}
