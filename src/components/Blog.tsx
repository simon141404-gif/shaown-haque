'use client'

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
  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-black mb-8">Latest Posts</h2>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer"
            >
              {/* Content */}
              <div className="p-5">
                {/* Category & Date */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-blue-600">{post.category}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-black mb-2 leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Date */}
                <p className="text-gray-400 text-xs mt-4">{post.date}</p>
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
