'use client'

import { useState, useMemo } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TourCard from '@/components/TourCard'
import { tours } from '@/lib/tours'
import { content } from '@/lib/content'
import { ActivityType, Difficulty } from '@/lib/types'
import { Search } from 'lucide-react'

export default function CatalogPage() {
  const [search, setSearch] = useState('')
  const [selectedActivity, setSelectedActivity] = useState<ActivityType | 'all'>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all')
  const [minDistance, setMinDistance] = useState(0)
  const [maxDistance, setMaxDistance] = useState(50)

  const activityOptions: { value: ActivityType | 'all'; label: string }[] = [
    { value: 'all', label: 'Összes' },
    { value: 'hiking', label: content.tours.hiking },
    { value: 'cycling', label: content.tours.cycling },
    { value: 'running', label: content.tours.running },
    { value: 'walking', label: content.tours.walking },
  ]

  const difficultyOptions: { value: Difficulty | 'all'; label: string }[] = [
    { value: 'all', label: 'Összes' },
    { value: 'easy', label: content.tours.easy },
    { value: 'moderate', label: content.tours.moderate },
    { value: 'challenging', label: content.tours.challenging },
  ]

  const filteredTours = useMemo(() => {
    return tours.filter(tour => {
      const matchesSearch = search === '' || 
        tour.nameHu.toLowerCase().includes(search.toLowerCase()) ||
        tour.descriptionHu.toLowerCase().includes(search.toLowerCase())
      
      const matchesActivity = selectedActivity === 'all' || tour.activity === selectedActivity
      const matchesDifficulty = selectedDifficulty === 'all' || tour.difficulty === selectedDifficulty
      const matchesDistance = tour.distance >= minDistance && tour.distance <= maxDistance

      return matchesSearch && matchesActivity && matchesDifficulty && matchesDistance
    })
  }, [search, selectedActivity, selectedDifficulty, minDistance, maxDistance])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background border-b border-border">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{content.tours.allTours}</h1>
            <p className="text-lg text-muted-foreground">Fedezd fel az összes elérhető túrát. Szűrd le őket az Ön igénye szerint.</p>
          </div>
        </section>

        {/* Filters & Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1">
                <div className="space-y-6 sticky top-24">
                  {/* Search */}
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">Keresés</label>
                    <div className="relative">
                      <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Túra neve..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                      />
                    </div>
                  </div>

                  {/* Activity Filter */}
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">{content.tours.activity}</label>
                    <select
                      value={selectedActivity}
                      onChange={(e) => setSelectedActivity(e.target.value as ActivityType | 'all')}
                      className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      {activityOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Difficulty Filter */}
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">{content.tours.difficulty}</label>
                    <select
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
                      className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      {difficultyOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Distance Range Filter */}
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      {content.tours.distance}: {minDistance}-{maxDistance} km
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={minDistance}
                      onChange={(e) => setMinDistance(Number(e.target.value))}
                      className="w-full accent-accent"
                    />
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={maxDistance}
                      onChange={(e) => setMaxDistance(Number(e.target.value))}
                      className="w-full accent-accent mt-2"
                    />
                  </div>

                  {/* Clear Filters */}
                  <button
                    onClick={() => {
                      setSearch('')
                      setSelectedActivity('all')
                      setSelectedDifficulty('all')
                      setMinDistance(0)
                      setMaxDistance(50)
                    }}
                    className="w-full px-4 py-2 rounded-md border border-border text-foreground hover:bg-secondary/30 transition-colors text-sm font-medium"
                  >
                    Szűrők törlése
                  </button>
                </div>
              </div>

              {/* Tours Grid */}
              <div className="lg:col-span-3">
                {filteredTours.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-xl text-muted-foreground mb-4">Nincs olyan túra, amely megfelel a szűrőknek.</p>
                    <button
                      onClick={() => {
                        setSearch('')
                        setSelectedActivity('all')
                        setSelectedDifficulty('all')
                        setMinDistance(0)
                        setMaxDistance(50)
                      }}
                      className="inline-block px-6 py-2 rounded-md border border-accent text-accent hover:bg-accent/10 transition-colors font-medium"
                    >
                      Szűrők törlése
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-muted-foreground mb-6">{filteredTours.length} túra találva</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredTours.map(tour => (
                        <TourCard key={tour.id} tour={tour} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
