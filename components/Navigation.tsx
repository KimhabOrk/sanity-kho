'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from "next/image"

interface NavbarProps {
  transparent?: boolean
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Projects', href: '/projects' },
    { label: 'Lookbook', href: '/lookbook' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  // Determine navbar background styling based on page type and mobile menu state
  const getNavbarClasses = () => {
    if (transparent) {
      // Home page navbar
      if (isOpen) {
        // Mobile menu open: blurry black with 40% opacity
        return 'bg-black/40 backdrop-blur-md border-b border-neutral-800/30'
      } else {
        // Mobile menu closed: transparent
        return 'bg-transparent border-transparent'
      }
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarClasses()}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center h-full py-1"
          >
             <Image 
                src="https://ik.imagekit.io/kimhabork/assets/kho-dark.png"
                width={168}
                height={38}
                priority
                alt="logo"
                className="h-[38px] w-full md:h-[44px] object-cover" 
              />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 text-sm font-medium hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-primary transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation - Animated Dropdown */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-white/40 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-0 py-2 text-white/80 text-sm font-medium hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
