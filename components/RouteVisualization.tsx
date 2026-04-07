'use client'

export default function RouteVisualization() {
  return (
    <div className="w-full aspect-video bg-gradient-to-b from-accent/10 to-secondary/30 rounded-lg border border-border flex items-center justify-center overflow-hidden">
      {/* Abstract route visualization */}
      <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        {/* Background */}
        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.05" />
          </linearGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-border)" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>

        {/* Grid background */}
        <rect width="400" height="300" fill="url(#grid)" />

        {/* Mountain peaks (simplified) */}
        <polygon points="50,250 100,120 150,200 200,80 250,200 300,130 350,220 400,150" 
                 fill="url(#routeGradient)" stroke="var(--color-accent)" strokeWidth="2" opacity="0.6" />

        {/* Route path */}
        <path d="M 50,250 Q 100,200 150,200 T 250,200 T 350,220" 
              fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeDasharray="5,5" opacity="0.8" />

        {/* Start marker */}
        <circle cx="50" cy="250" r="6" fill="var(--color-accent)" />
        <text x="50" y="275" textAnchor="middle" fontSize="12" fill="var(--color-foreground)" opacity="0.7">
          Start
        </text>

        {/* End marker */}
        <circle cx="350" cy="220" r="6" fill="var(--color-accent)" opacity="0.5" />
        <text x="350" y="245" textAnchor="middle" fontSize="12" fill="var(--color-foreground)" opacity="0.7">
          Vége
        </text>

        {/* Checkpoints */}
        <circle cx="150" cy="200" r="4" fill="var(--color-accent)" opacity="0.6" />
        <circle cx="250" cy="200" r="4" fill="var(--color-accent)" opacity="0.6" />
      </svg>
    </div>
  )
}
