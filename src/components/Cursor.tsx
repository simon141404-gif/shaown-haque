'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const outlineRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const dot = dotRef.current
    const outline = outlineRef.current

    if (!dot || !outline) return

    // Show cursor on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true)
      
      // Move dot instantly
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
      
      // Move outline with delay for trailing effect
      outline.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
      }, {
        duration: 500,
        fill: 'forwards',
      })
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // Add hover detection for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')

      if (isInteractive) {
        outline.classList.add('hovering')
      } else {
        outline.classList.remove('hovering')
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleMouseOver)

    // Hide default cursor
    document.body.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleMouseOver)
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
        }}
      />
      <div
        ref={outlineRef}
        className={`fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9998] transition-all duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}
