'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TourCard from '@/components/TourCard'
import { getTourById, tours } from '@/lib/tours'
import { content } from '@/lib/content'
import { MapPin, Clock, TrendingUp, Compass, AlertCircle } from 'lucide-react'

interface TourDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { id } = await params
  const tour = getTourById(id)

  if (!tour) {
    notFound()
  }

  const relatedTours = tours.filter(t => tour.relatedTourIds.includes(t.id)).slice(0, 3)

  const difficultyLabels: Record<string, string> = {
    easy: content.tours.easy,
    moderate: content.tours.moderate,
    challenging: content.tours.challenging,
  }

  const activityLabels: Record<string, string> = {
    hiking: content.tours.hiking,
    cycling: content.tours.cycling,
    running: content.tours.running,
    walking: content.tours.walking,
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Back link */}
        <div className="py-6 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/catalog"
              className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-2"
            >
              ← {content.common.backToTours}
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                {activityLabels[tour.activity]}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {tour.nameHu}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
              {tour.descriptionHu}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                  <MapPin size={16} className="text-accent" />
                  {content.tours.distance}
                </div>
                <div className="text-2xl font-bold text-foreground">{tour.distance} {content.tours.km}</div>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                  <Clock size={16} className="text-accent" />
                  {content.tours.duration}
                </div>
                <div className="text-2xl font-bold text-foreground">{tour.duration}</div>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                  <TrendingUp size={16} className="text-accent" />
                  {content.tours.difficulty}
                </div>
                <div className="text-2xl font-bold text-foreground">{difficultyLabels[tour.difficulty]}</div>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                  <Compass size={16} className="text-accent" />
                  {content.tours.elevation}
                </div>
                <div className="text-2xl font-bold text-foreground">{tour.elevation} {content.tours.m}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Route Overview */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-foreground mb-6">Útvonal áttekintés</h2>
                <div className="p-6 rounded-lg bg-gradient-to-br from-secondary/30 to-secondary/10 border border-border">
                  <p className="text-foreground leading-relaxed">{tour.routeOverview}</p>
                </div>

                {/* Important Info */}
                <div className="mt-8 p-6 rounded-lg bg-accent/5 border border-accent/20 flex gap-4">
                  <AlertCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Fontos információ</h3>
                    <p className="text-sm text-muted-foreground">
                      Kérjük, vigyenek megfelelő felszerelést, vizet és hasznos ételt. Az időjárás gyorsan változhat. Kezdje korai reggel.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div>
                <div className="rounded-lg bg-card border border-border p-6 sticky top-24">
                  <h3 className="font-bold text-foreground mb-4">Túra információ</h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Szezón</p>
                      <div className="flex flex-wrap gap-2">
                        {tour.season.map(s => (
                          <span key={s} className="px-2 py-1 rounded text-xs bg-secondary text-foreground">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Kezdési dátum</p>
                      <p className="text-foreground font-medium">{new Date(tour.startDate).toLocaleDateString('hu-HU')}</p>
                    </div>

                    {tour.endDate && (
                      <div className="border-t border-border pt-4">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Záró dátum</p>
                        <p className="text-foreground font-medium">{new Date(tour.endDate).toLocaleDateString('hu-HU')}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Layers */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">Élmény rétegek</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tour.experienceLayers.map((layer, idx) => (
                  <div key={idx} className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-foreground mb-2">{layer.title}</h3>
                    <p className="text-sm text-muted-foreground">{layer.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Traveler Perspectives */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">Utazó nézőpontok</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tour.travelerPerspectives.map((perspective, idx) => (
                  <div key={idx} className="p-6 rounded-lg bg-secondary/20 border border-border">
                    <h3 className="font-semibold text-foreground mb-2 text-lg">{perspective.title}</h3>
                    <p className="text-muted-foreground mb-4">{perspective.description}</p>
                    <p className="text-sm text-accent font-medium">Fókusz: {perspective.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Tours */}
            {relatedTours.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">{content.common.relatedTours}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedTours.map(relatedTour => (
                    <TourCard key={relatedTour.id} tour={relatedTour} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
