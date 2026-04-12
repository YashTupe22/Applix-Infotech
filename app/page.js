import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import HowWeWorkSection from './components/HowWeWorkSection'
import ShowcaseSection from './components/ShowcaseSection'
import WhyChooseSection from './components/WhyChooseSection'
import PricingPreview from './components/PricingPreview'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import { OrganizationSchema, WebSiteSchema, ServiceSchema, LocalBusinessSchema, SoftwareApplicationSchema } from './components/StructuredData'

export default function Home() {
    return (
        <main>
            <OrganizationSchema />
            <WebSiteSchema />
            <ServiceSchema />
            <LocalBusinessSchema />
            <SoftwareApplicationSchema />
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <HowWeWorkSection />
            <ShowcaseSection />
            <WhyChooseSection />
            <PricingPreview />
            <CTASection />
            <Footer />
        </main>
    )
}
