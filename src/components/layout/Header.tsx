'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Trigger global page entrance animation
    const root = document.getElementById('__next')
    requestAnimationFrame(() => root?.classList.add('page-loaded'))

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Full-width wrapper */}
      <div className={`transition-all duration-300 w-full mx-auto`}>
        {/* Visual header band (becomes transparent on scroll for md+) */}
        <div className={`relative duration-300 h-20 bg-white md:bg-white/80 md:backdrop-blur-md shadow-md md:shadow-none rounded-b-2xl md:rounded-b-none overflow-hidden ${isScrolled ? 'md:hidden' : ''}`}>
          {/* Inner constrained content that becomes a visible pill on md when scrolled */}
              <div className={`w-full max-w-screen-xl mx-auto flex items-center justify-center h-full px-4 sm:px-6 lg:px-8 ${isScrolled ? 'md:max-w-2xl md:mx-auto md:rounded-full md:bg-white md:backdrop-blur-sm md:shadow-md md:px-8 md:py-3 md:relative md:z-50' : ''}`}>
            {/* Logo - Hidden when scrolled */}
            <Link href="/" className={`site-logo transition-all duration-300 absolute left-6 ${isScrolled ? 'md:hidden' : ''} font-dm font-medium text-[30px] text-[#000000]`}>
              Area
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#benefits" className="text-[#000000] hover:text-gray-500 transition-colors font-dm font-bold text-[14px]">
                Benefits
              </Link>
              <Link href="#specifications" className="text-[#000000] hover:text-gray-500 transition-colors font-dm font-bold text-[14px]">
                Specifications
              </Link>
              <Link href="#how-to" className="text-[#000000] hover:text-gray-500 transition-colors font-dm font-bold text-[14px]">
                How-to
              </Link>
              <Link href="#resources" className="text-[#000000] hover:text-gray-500 transition-colors font-dm font-bold text-[14px]">
                Contact Us
              </Link>
            </nav>

            {/* Mobile hamburger (right) */}
            <div className="md:hidden absolute right-6">
              <button
                aria-label="Toggle menu"
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md bg-white/90 backdrop-blur-sm"
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Pill overlay shown when scrolled - centered and floating */}
        {isScrolled && (
         <div className="hidden md:flex absolute left-1/2 top-3 transform -translate-x-1/2 z-50 header-pill">
            <nav className="flex items-center justify-center w-full">
              <Link href="#benefits" className="mx-2 font-dm font-bold text-[14px] text-[#000000]">Benefits</Link>
              <Link href="#specifications" className="mx-2 font-dm font-bold text-[14px] text-[#000000]">Specifications</Link>
              <Link href="#how-to" className="mx-2 font-dm font-bold text-[14px] text-[#000000]">How-to</Link>
              <Link href="#resources" className="mx-2 font-dm font-bold text-[14px] text-[#000000]">Contact Us</Link>
            </nav>
          </div>
        )}

        {/* Desktop CTA (visible on md+) - positioned relative to header */}
        {!isScrolled && (
          <div className="hidden md:block absolute right-8 top-4 z-50">
            <a href="https://www.figma.com/sites/" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-0 w-3 h-3 transform -translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10" />
                </svg>
              </Button>
            </a>
          </div>
        )}

        {/* Mobile dropdown menu - positioned under header and right-aligned */}
        {menuOpen && (
          <div className="md:hidden absolute top-full right-0 w-full flex justify-end z-50">
            <div className="mt-2 mr-6 w-56 bg-white/95 backdrop-blur-md border border-gray-100 rounded-md shadow-sm py-4 px-4">
              <nav className="flex flex-col space-y-3">
                <Link href="#benefits" onClick={() => setMenuOpen(false)} className="text-[#000000] font-dm font-bold text-[14px]">
                  Benefits
                </Link>
                <Link href="#specifications" onClick={() => setMenuOpen(false)} className="text-[#000000] font-dm font-bold text-[14px]">
                  Specifications
                </Link>
                <Link href="#how-to" onClick={() => setMenuOpen(false)} className="text-[#000000] font-dm font-bold text-[14px]">
                  How-to
                </Link>
                <Link href="#resources" onClick={() => setMenuOpen(false)} className="text-[#000000] font-dm font-bold text-[14px]">
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
