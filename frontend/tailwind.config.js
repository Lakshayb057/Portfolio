/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#09090b",   // Deep obsidian zinc-950
        secondary: "#18181b", // Zinc 900
        accent: "#ef4444",    // Vibrant crimson Red 500
        'accent-glow': "rgba(239, 68, 68, 0.4)",
        highlight: "#f87171", // Red 400
        dark: {
          950: "#09090b",
          900: "#121215",
          850: "#18181b",
          800: "#27272a",
          700: "#3f3f46"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        monoton: ['Monoton', 'cursive', 'sans-serif'],
        inline: ['Monoton', 'Bungee Inline', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 10s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'equalizer': 'equalizer 1.2s ease-in-out infinite alternate',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        equalizer: {
          '0%': { height: '4px' },
          '100%': { height: '16px' }
        }
      }
    },
  },
  plugins: [],
}
