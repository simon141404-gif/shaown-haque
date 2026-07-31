'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const posts = [
  {
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn how to build modern web applications with Next.js 14 and the App Router.',
    category: 'Tutorial',
    date: 'January 15, 2026',
    readTime: '5 min read',
  },
  {
    title: 'Building Responsive Web Apps',
    excerpt: 'Best practices for creating responsive and accessible web applications.',
    category: 'Development',
    date: 'January 10, 2026',
    readTime: '8 min read',
  },
  {
    title: 'TypeScript Best Practices',
    excerpt: 'Essential TypeScript tips and patterns for better code quality.',
    category: 'Tutorial',
    date: 'January 5, 2026',
    readTime: '6 min read',
  },
]

export default function Blog() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-card', 
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
    <section ref={sectionRef} id="blog" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 tracking-tight">
          Latest Posts
        </h2>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="blog-card border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300 cursor-pointer"
            >
              <div className="p-5">
                {/* Category & Date */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-blue-600">{post.category}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Date */}
                <p className="text-gray-400 text-xs">{post.date}</p>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <a href="#" className="text-blue-600 font-medium hover:underline">
            View All Posts →
          </a>
        </div>
      </div>
    </section>
  )
}
