'use client'

import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bottom */}
        <div className="pt-3">
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
