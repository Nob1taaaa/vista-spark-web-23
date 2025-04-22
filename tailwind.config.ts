
import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Extend existing brand colors with calmer, more trustworthy palette
        brand: {
          calm: {
            background: '#F5F7FA',   // Soft, light blue-gray background
            text: '#2C3E50',          // Deep, professional navy blue
            accent: '#4A90E2',        // Soft, trustworthy blue
            secondary: '#7FDBFF',     // Light, calming blue
            muted: '#B0BEC5',         // Soft gray for less important elements
          }
        }
      },
      fontFamily: {
        // Add professional, readable fonts
        'sans': ['Inter', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
        'display': ['Playfair Display', 'Georgia', 'serif']
      },
      boxShadow: {
        // Soft, subtle shadows for depth
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'calm': '0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)'
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#2C3E50',
            lineHeight: '1.6',
            maxWidth: '65ch',  // Optimal line length for readability
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ]
} satisfies Config
