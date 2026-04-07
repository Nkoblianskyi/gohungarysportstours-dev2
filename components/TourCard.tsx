import Link from 'next/link'
import Image from 'next/image'
import { Tour } from '@/lib/types'
import { MapPin, Clock, TrendingUp } from 'lucide-react'

interface TourCardProps {
  tour: Tour
}

export default function TourCard({ tour }: TourCardProps) {
  const activityLabels: Record<string, string> = {
    hiking: 'Túrázás',
    cycling: 'Kerékpározás',
    running: 'Futás',
    walking: 'Séta',
  }

  const difficultyLabels: Record<string, string> = {
    easy: 'Könnyű',
    moderate: 'Közepes',
    challenging: 'Kihívó',
  }

  return (
    <Link href={`/tours/${tour.id}`}>
      <article className="group h-full border border-border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col">
        {/* Image */}
        <div className="aspect-video bg-secondary overflow-hidden relative">
          {tour.images[0] ? (
            <Image
              src={tour.images[0]}
              alt={tour.nameHu}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground/50">
              <span className="text-sm">{tour.nameHu}</span>
            </div>
          )}
        </div>

        <div className="p-4 flex flex-col flex-1">
          {/* Activity badge */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
              {activityLabels[tour.activity]}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
            {tour.nameHu}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">
            {tour.descriptionHu}
          </p>

          {/* Stats */}
          <div className="space-y-2 mb-4 border-t border-border pt-4">
            <div className="flex items-center gap-2 text-sm text-foreground">
              <MapPin size={16} className="text-accent flex-shrink-0" />
              <span>{tour.distance} km</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Clock size={16} className="text-accent flex-shrink-0" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <TrendingUp size={16} className="text-accent flex-shrink-0" />
              <span>{difficultyLabels[tour.difficulty]}</span>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full px-4 py-2 rounded-md border border-accent text-accent text-sm font-medium hover:bg-accent/10 transition-colors">
            Részletek
          </button>
        </div>
      </article>
    </Link>
  )
}
