"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function HeaderFixed() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null)
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null)

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    })
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distanceX = touchStart.x - touchEnd.x
    const distanceY = touchStart.y - touchEnd.y
    const isLeftSwipe = distanceX > minSwipeDistance
    const isRightSwipe = distanceX < -minSwipeDistance
    const isUpSwipe = distanceY > minSwipeDistance
    const isDownSwipe = distanceY < -minSwipeDistance

    // Close menu on right swipe or up swipe
    if (isRightSwipe || isUpSwipe) {
      setIsMobileMenuOpen(false)
    }
  }

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced styling */}
          <Link
            href="/"
            className="text-2xl font-serif font-bold transition-all duration-300 hover:scale-105 text-gray-900"
          >
            <span className="relative">
              SAANRE
              <div className="absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full bg-amber-500"></div>
            </span>
          </Link>

          {/* Enhanced Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/process", label: "Our Process" },
              { href: "/craftsmanship", label: "Craftsmanship" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative group transition-all duration-300 hover:scale-105 ${
                  isActive(item.href)
                    ? "text-gray-900 font-medium"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.label}
                {/* Animated underline */}
                <div
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  } bg-amber-500`}
                ></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 text-gray-900 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-white border-t border-gray-100"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              {/* Add swipe indicator */}
              <div className="flex justify-center mb-2">
                <div className="w-12 h-1 rounded-full bg-gray-300"></div>
              </div>
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/process", label: "Our Process" },
                { href: "/craftsmanship", label: "Craftsmanship" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2 transition-colors duration-300 ${
                    isActive(item.href)
                      ? "text-gray-900 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {/* Swipe instruction */}
              <div className="pt-4 text-center">
                <p className="text-xs text-gray-400">
                  Swipe up or right to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}