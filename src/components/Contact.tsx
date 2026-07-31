'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-black mb-4 text-center">Get in Touch</h2>
        <p className="text-gray-600 text-center mb-10">
          Have a project in mind? Let&apos;s work together.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name *"
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
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
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
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
              className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
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
              className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
