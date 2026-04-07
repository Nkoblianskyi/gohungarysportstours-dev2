'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
          <Image src="/favicon.ico" alt="GoHungarySportsTours Logo" width={32} height={32} />
            <span className="text-xl font-semibold tracking-tight text-foreground">
              GoHungarySportsTours
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:gap-8 md:items-center">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Főoldal
            </Link>
            <Link href="/catalog" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Túrák
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Rólunk
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Kapcsolat
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-2 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Főoldal
            </Link>
            <Link
              href="/catalog"
              className="block px-2 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Túrák
            </Link>
            <Link
              href="/about"
              className="block px-2 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rólunk
            </Link>
            <Link
              href="/contact"
              className="block px-2 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kapcsolat
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
