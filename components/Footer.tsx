'use client'

import Link from 'next/link'
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-background py-6 md:py-10 border-t border-white/20 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Bottom */}
        <div className="pt-4">
          <div className="flex gap-4 justify-center items-center mx-auto mb-4">
            <Link href="https://facebook.com/kimhab.ork.kh">
              <Facebook size={24} className="h-6 w-6 md:h-8 md:w-8 text-white/60 hover:text-primary" />
            </Link>
            <Link href="https://instagram.com/kimhab_ork">
              <Instagram size={24} className="h-6 w-6 md:h-8 md:w-8 text-white/60 hover:text-primary" />
            </Link>
            <Link href="https://linkedin.com/in/kimhab-ork">
              <Linkedin size={24} className="h-6 w-6 md:h-8 md:w-8 text-white/60 hover:text-primary" />
            </Link>
          </div>
          <div className="flex flex-col justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Kimhab Ork. All rights reserved.
            </p>
            <div className="flex justify-center items-center mx-auto gap-4">
              <Link
                href="/privacy"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}