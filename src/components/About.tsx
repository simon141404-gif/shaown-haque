'use client'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6" style={{ background: '#0a0a0a' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white font-bold mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
          About Me
        </h2>
        
        <div className="space-y-6 text-white/60 leading-relaxed">
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
        <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10">
          <div>
            <p className="text-white font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>5+</p>
            <p className="text-white/40 text-sm mt-1">Years Experience</p>
          </div>
          <div>
            <p className="text-white font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>50+</p>
            <p className="text-white/40 text-sm mt-1">Projects Completed</p>
          </div>
          <div>
            <p className="text-white font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>30+</p>
            <p className="text-white/40 text-sm mt-1">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  )
}
