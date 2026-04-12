'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import CurrencySelector from './CurrencySelector'
import ThemeToggle from './ThemeToggle'
import { SERVICES } from '../lib/servicesConfig'

const LOGO_ASSET = '/logo.png?v=20260412'

const navLinks = [
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'Showcase', href: '/#showcase' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
    const servicesRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 12)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        function handleClickOutside(e) {
            if (servicesRef.current && !servicesRef.current.contains(e.target)) {
                setServicesOpen(false)
            }
        }
        if (servicesOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            document.addEventListener('touchstart', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('touchstart', handleClickOutside)
        }
    }, [servicesOpen])

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'site-header--scrolled backdrop-blur-md border-b border-white/5' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-3.5 md:py-4 flex items-center justify-between">
                <Link href="/" aria-label="Synplix Home">
                    <motion.div whileHover={{ opacity: 0.9 }} className="flex items-center">
                        <Image
                            src={LOGO_ASSET}
                            alt="Synplix Infotech"
                            width={138}
                            height={56}
                            className="object-contain h-9 sm:h-10 w-auto"
                            priority
                        />
                    </motion.div>
                </Link>

                <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-7 mx-6 xl:mx-8">
                    <div className="relative" ref={servicesRef}>
                        <button
                            type="button"
                            onClick={() => setServicesOpen((o) => !o)}
                            className={`flex items-center gap-1 text-[13px] font-medium transition-colors ${
                                servicesOpen ? 'text-[#f7f8f8]' : 'text-[#d0d6e0] hover:text-[#f7f8f8]'
                            }`}
                            aria-expanded={servicesOpen}
                            aria-haspopup="true"
                        >
                            Services
                            <svg
                                className={`w-3.5 h-3.5 opacity-70 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <AnimatePresence>
                            {servicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 6 }}
                                    transition={{ duration: 0.18 }}
                                    className="absolute left-0 top-full pt-2 w-[min(100vw-2rem,17rem)] z-50"
                                >
                                    <div className="glass-card rounded-lg border border-white/10 py-2 shadow-xl">
                                        <Link
                                            href="/services"
                                            className="block px-4 py-2.5 text-[13px] text-[#d0d6e0] hover:bg-white/[0.04] hover:text-[#f7f8f8] transition-colors"
                                            onClick={() => setServicesOpen(false)}
                                        >
                                            All services
                                        </Link>
                                        <div className="section-divider my-1 opacity-50" />
                                        {SERVICES.map((s) => (
                                            <Link
                                                key={s.slug}
                                                href={`/services/${s.slug}`}
                                                className="block px-4 py-2.5 text-[13px] text-[#8a8f98] hover:bg-white/[0.04] hover:text-[#f7f8f8] transition-colors"
                                                onClick={() => setServicesOpen(false)}
                                            >
                                                {s.title}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-[13px] font-medium text-[#d0d6e0] hover:text-[#f7f8f8] transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex items-center justify-end gap-2.5">
                    <CurrencySelector compact />
                    <ThemeToggle />
                    <a
                        href="/#contact"
                        className="px-3.5 py-1.5 rounded-md text-[12px] font-medium text-white bg-electric hover:bg-purple transition-colors"
                    >
                        Book a call
                    </a>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden w-9 h-9 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex flex-col items-center justify-center gap-1"
                    aria-label="Toggle menu"
                >
                    <span className={`w-4 h-px bg-[#d0d6e0] transition-all ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
                    <span className={`w-4 h-px bg-[#d0d6e0] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-4 h-px bg-[#d0d6e0] transition-all ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
                </button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="site-mobile-menu lg:hidden border-t border-white/5 backdrop-blur-md max-h-[85vh] overflow-y-auto"
                    >
                        <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
                            <div className="border-b border-white/5 pb-2 mb-1">
                                <button
                                    type="button"
                                    onClick={() => setMobileServicesOpen((v) => !v)}
                                    className="flex w-full items-center justify-between text-[14px] font-medium text-[#d0d6e0] py-2.5"
                                    aria-expanded={mobileServicesOpen}
                                >
                                    Services
                                    <svg
                                        className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {mobileServicesOpen && (
                                    <div className="pl-2 pb-2 flex flex-col gap-0.5">
                                        <Link
                                            href="/services"
                                            onClick={() => {
                                                setMenuOpen(false)
                                                setMobileServicesOpen(false)
                                            }}
                                            className="text-[13px] text-[#8a8f98] py-2 border-l-2 border-electric/40 pl-3"
                                        >
                                            All services
                                        </Link>
                                        {SERVICES.map((s) => (
                                            <Link
                                                key={s.slug}
                                                href={`/services/${s.slug}`}
                                                onClick={() => {
                                                    setMenuOpen(false)
                                                    setMobileServicesOpen(false)
                                                }}
                                                className="text-[13px] text-[#8a8f98] py-2 pl-3 border-l border-white/5"
                                            >
                                                {s.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-[14px] font-medium text-[#d0d6e0] hover:text-[#f7f8f8] py-2.5 border-b border-white/5 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <div className="flex items-center gap-2">
                                    <CurrencySelector />
                                    <ThemeToggle />
                                </div>
                            </div>
                            <a
                                href="/#contact"
                                onClick={() => setMenuOpen(false)}
                                className="mt-2 px-4 py-2.5 rounded-md text-[13px] font-medium text-center text-white bg-electric hover:bg-purple transition-colors"
                            >
                                Book a call
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
