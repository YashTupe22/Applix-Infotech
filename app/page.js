import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import HowWeWorkSection from './components/HowWeWorkSection'
import ShowcaseSection from './components/ShowcaseSection'
import WhyChooseSection from './components/WhyChooseSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function Home() {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <div className="section-divider" />
            <ServicesSection />
            <div className="section-divider" />
            <HowWeWorkSection />
            <div className="section-divider" />
            <ShowcaseSection />
            <div className="section-divider" />
            <WhyChooseSection />
            <CTASection />
            <Footer />
        </main>
    )
}
