'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/simon141404-gif' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/shawon-haque' },
  { name: 'Facebook', href: 'https://facebook.com/shawon.haque' },
  { name: 'WhatsApp', href: 'https://wa.me/8801752247494' },
]

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.footer-content', 
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          }
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Logo & Description */}
        <div className="footer-content text-center mb-10">
          <a href="#home" className="text-2xl font-bold">
            SHAWON HAQUE
          </a>
          <p className="text-gray-400 mt-2 text-sm">
            Full Stack Developer
          </p>
        </div>

        {/* Footer Links */}
        <div className="footer-content flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="footer-content flex justify-center gap-6 mb-10">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Copyright */}
        <div className="footer-content text-center text-gray-500 text-sm">
          <p>© 2026 Shawon Haque. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
