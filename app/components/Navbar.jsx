'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import CurrencySelector from './CurrencySelector'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = ['Services', 'How We Work', 'Showcase', 'Pricing', 'Contact']

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center group cursor-pointer"
                    >
                        <Image 
                            src="/logo.png" 
                            alt="Synplix Infotech" 
                            width={140} 
                            height={60}
                            className="object-contain h-12 w-auto"
                            priority
                        />
                    </motion.div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link}
                            href={
                                link === 'Pricing' ? '/pricing' : 
                                link === 'How We Work' ? '/how-we-work' : 
                                `/#${link.toLowerCase().replace(' ', '-')}`
                            }
                            className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
                        >
                            <motion.span whileHover={{ y: -1 }} className="block">
                                {link}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-electric group-hover:w-full transition-all duration-300" />
                            </motion.span>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <CurrencySelector />
                    <motion.a
                        href="/#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white border border-electric/50 hover:border-electric hover:bg-electric/10 hover:shadow-glow-blue transition-all duration-300"
                    >
                        Book a Call
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 rounded-lg border border-white/10 hover:border-electric/50 transition-colors"
                    aria-label="Toggle menu"
                >
                    <span className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/10 bg-navy/95 backdrop-blur-xl"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link}
                                    href={
                                        link === 'Pricing' ? '/pricing' : 
                                        link === 'How We Work' ? '/how-we-work' : 
                                        `/#${link.toLowerCase().replace(' ', '-')}`
                                    }
                                    onClick={() => setMenuOpen(false)}
                                    className="text-slate-300 hover:text-white text-sm font-medium py-2 border-b border-white/5 transition-colors"
                                >
                                    {link}
                                </Link>
                            ))}
                            <div className="py-2 border-b border-white/5">
                                <div className="text-slate-400 text-xs mb-2">Currency</div>
                                <CurrencySelector />
                            </div>
                            <a
                                href="/#contact"
                                onClick={() => setMenuOpen(false)}
                                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-electric/20 border border-electric/50 text-center"
                            >
                                Book a Call
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
