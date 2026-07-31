'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [activeSection, setActiveSection] = useState('')
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    // Scroll behavior - hide on scroll down, show on scroll up
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      lastScrollY.current = currentScrollY
    }

    // Active section tracking
    const sections = navLinks.map(link => link.href.slice(1))
    
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId)
      if (section) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveSection(sectionId),
          onEnterBack: () => setActiveSection(sectionId),
        })
      }
    })

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="glass rounded-full px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#"
            className="font-display text-2xl tracking-wider text-white hover:text-accent-purple transition-colors"
          >
            SHAWON.
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
                {/* Active Indicator */}
                <span 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue transition-all duration-300 ${
                    activeSection === link.href.slice(1) 
                      ? 'w-1/2' 
                      : 'w-0'
                  }`}
                />
                {/* Hover Glow */}
                <span className="absolute inset-0 rounded-lg bg-accent-purple/0 hover:bg-accent-purple/10 transition-colors -z-10" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full text-sm font-medium hover:shadow-lg hover:shadow-accent-purple/30 transition-all"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
