/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#0a0a0a',
        darkCard: '#121214',
        darkCardHover: '#1a1a1f',
        neonCyan: '#00f2fe',
        neonPurple: '#a855f7',
        neonEmerald: '#10b981',
        borderDark: '#27272a'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 25px rgba(0, 242, 254, 0.25)',
        'neon-purple': '0 0 25px rgba(168, 85, 247, 0.25)',
        'neon-emerald': '0 0 25px rgba(16, 185, 129, 0.25)',
        'glow-lg': '0 0 50px rgba(0, 242, 254, 0.15)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
