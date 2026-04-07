export type ActivityType = 'hiking' | 'cycling' | 'running' | 'walking'

export type Difficulty = 'easy' | 'moderate' | 'challenging'

export interface ExperienceLayer {
  title: string
  description: string
}

export interface TravelerPerspective {
  title: string
  description: string
  focus: string
}

export interface Tour {
  id: string
  nameHu: string
  descriptionHu: string
  distance: number // in km
  elevation: number // in meters
  duration: string // e.g., "6 hours"
  difficulty: Difficulty
  activity: ActivityType
  season: string[]
  startDate: string // future date only
  endDate?: string
  routeOverview: string
  experienceLayers: ExperienceLayer[]
  travelerPerspectives: TravelerPerspective[]
  images: string[] // image paths
  relatedTourIds: string[]
}

export interface TourFilters {
  activity?: ActivityType
  difficulty?: Difficulty
  distanceMin?: number
  distanceMax?: number
  search?: string
}
