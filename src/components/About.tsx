'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-content', 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 md:py-32 px-6 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="about-content text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
          About Me
        </h2>

        {/* Content */}
        <div className="about-content space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            I&apos;m a Full Stack Developer with over 5 years of experience building web applications 
            and digital products. I specialize in creating responsive, user-friendly websites and 
            applications using modern technologies.
          </p>
          <p>
            My expertise spans across React, Next.js, Node.js, TypeScript, and various cloud platforms. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring new technologies, contributing to 
            open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200">
          {[
            { value: '5+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Completed' },
            { value: '30+', label: 'Happy Clients' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-500 mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
