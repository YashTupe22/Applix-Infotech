import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ServiceIcon } from '../components/SectionIcons'
import { SERVICES } from '../lib/servicesConfig'

export const metadata = {
    title: 'Services',
    description:
        'Custom web apps, SaaS development, business automation, and content systems—built to grow with your product.',
}

export default function ServicesIndexPage() {
    return (
        <main className="min-h-screen bg-navy text-white">
            <Navbar />
            <section className="pt-28 pb-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-flex px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[12px] text-[#d0d6e0] mb-5">
                        What we build
                    </span>
                    <h1 className="text-4xl sm:text-5xl tracking-[-0.03em] font-medium text-[#f7f8f8] mb-4">
                        Services designed to grow with your product
                    </h1>
                    <p className="text-[17px] text-[#8a8f98] max-w-2xl mx-auto">
                        From strategy to launch, we cover product design and engineering in one delivery loop. Choose a service to see scope, deliverables, and how we work with your team.
                    </p>
                </div>
            </section>

            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                    {SERVICES.map((s) => (
                        <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="glass-card rounded-xl p-6 sm:p-8 flex flex-col min-h-[220px] hover:border-electric/40 transition-colors group"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="shrink-0 w-11 h-11 rounded-lg border border-electric/30 bg-electric/10 flex items-center justify-center text-electric">
                                    <ServiceIcon slug={s.slug} className="w-6 h-6" />
                                </div>
                                <div className="min-w-0">
                                    <h2 className="text-xl sm:text-[22px] font-semibold text-[#f7f8f8] tracking-[-0.01em] group-hover:text-white transition-colors">
                                        {s.title}
                                    </h2>
                                    <p className="text-[12px] text-[#62666d] mt-1">{s.tag}</p>
                                </div>
                            </div>
                            <p className="text-[15px] leading-relaxed text-[#8a8f98] flex-1 mb-4">{s.shortDescription}</p>
                            <span className="text-[13px] font-medium text-[#7170ff] group-hover:text-[#828fff]">
                                View details →
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    )
}
