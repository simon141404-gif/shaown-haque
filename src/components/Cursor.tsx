'use client'

import { useEffect, useState } from 'react'

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  // Only show custom cursor on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null
  }

  return (
    <>
      {/* Dot */}
      <div 
        className="fixed pointer-events-none z-[9999] rounded-full transition-transform duration-75"
        style={{
          left: position.x,
          top: position.y,
          width: isHovering ? '8px' : '6px',
          height: isHovering ? '8px' : '6px',
          background: 'white',
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Ring */}
      <div 
        className="fixed pointer-events-none z-[9998] rounded-full transition-all duration-300"
        style={{
          left: position.x,
          top: position.y,
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
          border: '1px solid rgba(255,255,255,0.5)',
          background: isHovering ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}
