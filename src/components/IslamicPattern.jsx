export default function IslamicPattern() {
  return (
    <div className="geometric-overlay" aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.15 }}
      >
        <defs>
          <pattern
            id="islamic-pattern"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M60 0 L120 60 L60 120 L0 60 Z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.5"
            />
            <path
              d="M60 15 L105 60 L60 105 L15 60 Z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.3"
            />
            <circle cx="60" cy="60" r="30" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
            <circle cx="60" cy="60" r="15" fill="none" stroke="#D4AF37" strokeWidth="0.2" />
            <path
              d="M60 0 L60 120 M0 60 L120 60"
              stroke="#D4AF37"
              strokeWidth="0.2"
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
      </svg>
    </div>
  )
}
