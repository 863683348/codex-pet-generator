interface ProgressRingProps {
  size?: number
  strokeWidth?: number
  progress?: number // 0-100
  label?: string
}

export default function ProgressRing({
  size = 80,
  strokeWidth = 4,
  progress = 0,
  label,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#2D2D4A"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#progressGradient)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-500 ease-in-out"
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6C5CE7" />
              <stop offset="100%" stopColor="#00D9FF" />
            </linearGradient>
          </defs>
        </svg>
        {progress > 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-pixel text-[10px] text-text-primary">{progress}%</span>
          </div>
        )}
      </div>
      {label && (
        <p className="font-pixel text-[10px] text-text-secondary">{label}</p>
      )}
    </div>
  )
}
