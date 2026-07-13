interface PixelPetProps {
  size?: number
  color?: string
  className?: string
}

// CSS/SVG pixel-art pet mascot. Reused in hero, loading states, and
// per-state placeholders inside the animation grid.
export default function PixelPet({
  size = 64,
  color = '#6C5CE7',
  className = '',
}: PixelPetProps) {
  const inner = '#0F0F23'
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={`pixel-pet ${className}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {/* ears */}
      <polygon points="12,24 12,6 30,20" fill={color} />
      <polygon points="52,24 52,6 34,20" fill={color} />
      <polygon points="17,20 17,11 25,19" fill={inner} />
      <polygon points="47,20 47,11 39,19" fill={inner} />
      {/* head */}
      <rect x="11" y="18" width="42" height="38" rx="12" fill={color} />
      {/* eyes */}
      <rect x="21" y="32" width="8" height="10" rx="4" fill={inner} />
      <rect x="35" y="32" width="8" height="10" rx="4" fill={inner} />
      <rect x="23" y="34" width="3" height="3" fill="#fff" />
      <rect x="37" y="34" width="3" height="3" fill="#fff" />
      {/* nose */}
      <polygon points="30,44 34,44 32,47" fill="#FF6B6B" />
      {/* mouth */}
      <rect x="31" y="48" width="2" height="2" fill={inner} />
    </svg>
  )
}
