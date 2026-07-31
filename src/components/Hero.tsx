'use client'

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Tagline */}
        <p className="text-sm text-gray-500 mb-4 tracking-wider uppercase">
          Full Stack Developer
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
          Hi, I&apos;m Shawon Haque
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          I build beautiful, functional, and user-centered digital experiences. 
          Passionate about creating websites that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-black transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a href="https://github.com/simon141404-gif" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/shawon-haque" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
            LinkedIn
          </a>
          <a href="https://facebook.com/shawon.haque" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
            Facebook
          </a>
          <a href="https://wa.me/8801752247494" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
