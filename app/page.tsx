'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TourCard from '@/components/TourCard'
import { tours } from '@/lib/tours'
import { content } from '@/lib/content'
import { ChevronDown } from 'lucide-react'

export default function Home() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const featuredTours = tours.slice(0, 3)

  const faqItems = [
    {
      question: 'Szükségem van-e korábbi tapasztalatra?',
      answer: 'Nem. Könnyű szintű túráink tökéletesek kezdőknek. Minden szint részesül megfelelő lehetőségekben.'
    },
    {
      question: 'Mikor a legjobb idő túrázni?',
      answer: 'Tavasz és ősz ideális időszakok. Nyár szintén jó, de nyáron korán kell indulni. Tél csak kijelölt túrákra ajánlott.'
    },
    {
      question: 'Mit tegyek viselni?',
      answer: 'Kényelmes, nem szoros ruhákat és jó cipőket ajánlunk. Viss magaddal vizet, hasznos ételt és naptejatet.'
    },
    {
      question: 'Meg lehet-e szünetet tartani az útvonal közben?',
      answer: 'Persze! Javasoljuk a rendszeres pihenőket. Az összes túra útvonalának van kijelölt pihenőhelye.'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
                  {content.hero.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
                  {content.hero.subtitle}
                </p>
                <Link
                  href="/catalog"
                  className="inline-block px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  {content.hero.cta}
                </Link>
              </div>

              {/* Hero image */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
                <img
                  src="/images/bukk-panorama.jpg"
                  alt="Magyar természet - hegyi panoráma"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-sm text-white/80 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    Magyarország természeti szépségei
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tours Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{content.tours.featured}</h2>
              <p className="text-lg text-muted-foreground">Válogasson a legjobb túrák közül, amely passzol az Ön szintjéhez.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/catalog"
                className="inline-block px-8 py-3 rounded-md border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
              >
                {content.tours.allTours}
              </Link>
            </div>
          </div>
        </section>

        {/* Why Minimalist Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Miért minimalist megközelítés?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Autentikus élmény</h3>
                <p className="text-muted-foreground">Minimalista megközelítéssel visszatérünk az esszenciálishoz. Szabad, tiszta és őszinte természeti élmény.</p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Fenntarthatóság</h3>
                <p className="text-muted-foreground">Csökkentett lábnyom, tiszteletben tartva a környezetet. Így minden generáció élvezheti a természetét.</p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Személyi fejlődés</h3>
                <p className="text-muted-foreground">Egyszerűség által készülsz a kihívásokra. Megtalálod a belső erődet és kitartásodat.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Hasznos tippek</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Korai indulás</h3>
                  <p className="text-muted-foreground text-sm">Indulj korán reggel, hogy maximálisan élvezd a napfényt és az egyéb túrázókat elkerüld.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Megfelelő felszerelés</h3>
                  <p className="text-muted-foreground text-sm">Viselj rétegezetten, jó cipőkben és mindig vigyél vizet magaddal.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Tempo szabályozás</h3>
                  <p className="text-muted-foreground text-sm">Halad saját tempódban. Az érzés és az élmény fontosabb, mint a sebesség.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Időjárás-figyelés</h3>
                  <p className="text-muted-foreground text-sm">Ellenőrizd az időjárást előre. A magyarországi hegyekben gyors lehet az időjárás-változás.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Gyakran feltett kérdések</h2>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-border rounded-lg bg-card">
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/30 transition-colors"
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  >
                    <h3 className="font-semibold text-foreground text-left">{item.question}</h3>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 text-accent transition-transform ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedFAQ === index && (
                    <div className="px-6 pb-4 border-t border-border">
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
