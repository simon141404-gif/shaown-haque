'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-content', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 md:py-32 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Section Title */}
        <div className="contact-content text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Get in Touch
          </h2>
        </div>
        <p className="contact-content text-gray-500 text-center mb-10">
          Have a project in mind? Let&apos;s work together.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-content space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name *"
                className="w-full px-4 py-3.5 border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors bg-white"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email *"
                className="w-full px-4 py-3.5 border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors bg-white"
              />
            </div>
          </div>

          <div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-3.5 border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors bg-white"
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Message *"
              className="w-full px-4 py-3.5 border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors bg-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all hover:shadow-xl hover:shadow-gray-900/20 hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
