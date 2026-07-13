import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C5CE7',
          hover: '#5A4BD1',
        },
        accent: '#00D9FF',
        success: '#00B894',
        warning: '#FDCB6E',
        danger: '#FF6B6B',
        bg: {
          base: '#0F0F23',
          surface: '#1A1A2E',
          elevated: '#252542',
        },
        text: {
          primary: '#E8E8F0',
          secondary: '#8888AA',
          muted: '#555570',
        },
        border: {
          DEFAULT: '#2D2D4A',
          focus: '#6C5CE7',
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      fontSize: {
        'pixel-xs': '11px',
        'pixel-sm': '13px',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
      },
      boxShadow: {
        'glow': '0 4px 24px rgba(108, 92, 231, 0.15)',
        'glow-accent': '0 4px 24px rgba(0, 217, 255, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 1.5s ease-in-out infinite',
        'fade-in': 'fadeIn 300ms ease-out',
        'stagger': 'fadeIn 300ms ease-out both',
        'sprite': 'spritePlay 0.72s steps(8) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spritePlay: {
          'from': { backgroundPositionX: '0' },
          'to': { backgroundPositionX: '-1536px' },
        },
      },
    },
  },
  plugins: [],
}

export default config
