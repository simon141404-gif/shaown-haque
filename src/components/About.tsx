'use client'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-black mb-8">About Me</h2>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">
            I&apos;m a Full Stack Developer with over 5 years of experience building web applications 
            and digital products. I specialize in creating responsive, user-friendly websites and 
            applications using modern technologies.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            My expertise spans across React, Next.js, Node.js, TypeScript, and various cloud platforms. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to 
            open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
          <div className="text-center">
            <p className="text-4xl font-bold text-black">5+</p>
            <p className="text-gray-500 mt-1">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-black">50+</p>
            <p className="text-gray-500 mt-1">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-black">30+</p>
            <p className="text-gray-500 mt-1">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  )
}
