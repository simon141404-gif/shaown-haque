'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory and seamless checkout experience.',
    category: 'Web Development',
    date: 'January 2026',
  },
  {
    title: 'AI Dashboard',
    description: 'Analytics dashboard with real-time data visualization and AI-powered insights.',
    category: 'Web Development',
    date: 'December 2025',
  },
  {
    title: 'Social App',
    description: 'Social media application with real-time messaging and engagement features.',
    category: 'Mobile App',
    date: 'November 2025',
  },
  {
    title: 'Portfolio v1',
    description: 'Personal portfolio with 3D animations and interactive elements.',
    category: 'Web Development',
    date: 'October 2025',
  },
  {
    title: 'Task Management',
    description: 'Productivity app with kanban boards and team collaboration features.',
    category: 'Web App',
    date: 'September 2025',
  },
  {
    title: 'Blog Platform',
    description: 'Content management system with SEO optimization and analytics.',
    category: 'Web Development',
    date: 'August 2025',
  },
]

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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
    <section ref={sectionRef} id="portfolio" className="py-24 md:py-32 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 tracking-tight">
          Portfolio
        </h2>

        {/* Projects List */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="project-card p-6 bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-400 whitespace-nowrap ml-4">{project.date}</span>
              </div>
              <p className="text-gray-500 mb-4">{project.description}</p>
              <span className="inline-block px-3 py-1 text-xs font-medium text-gray-500 bg-gray-100">
                {project.category}
              </span>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all">
            Load More
          </button>
        </div>
      </div>
    </section>
  )
}
