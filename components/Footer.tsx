'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/30 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/favicon.ico" alt="GoHungarySportsTours Logo" width={32} height={32} />
              <h3 className="text-lg font-semibold text-foreground mb-4">GoHungarySportsTours</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Minimalist aktív túrák Magyarország érintetlen természetében.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Navigáció</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Főoldal
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Túrák
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Rólunk
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Jogi információk</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Adatvédelmi szabályzat
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sütik szabályzata
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Address */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Cégadatok</h4>
            <address className="not-italic text-sm text-muted-foreground space-y-1 leading-relaxed">
              <p className="font-medium text-foreground">K.C. NTOMATA LIMITED</p>
              <p>Stylianou Lena,</p>
              <p>24 Christiana Court,</p>
              <p>Flat/Office 202,</p>
              <p>Strovolos,</p>
              <p>2019 Nicosia,</p>
              <p>Cyprus</p>
            </address>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
              &copy; {currentYear} GoHungarySportsTours &mdash; K.C. NTOMATA LIMITED. Minden jog fenntartva. &mdash;{' '}
              <a
                href="https://gohungarysportstours.com"
                className="hover:text-foreground transition-colors"
              >
                gohungarysportstours.com
              </a>
            </p>
        </div>
      </div>
    </footer>
  )
}
