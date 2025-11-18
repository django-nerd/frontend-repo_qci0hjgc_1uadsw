/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1fb6ff',
        secondary: '#0a0f1a',
        accent: '#ff49db',
        neutral: {
          50: '#f5f7fa',
          100: '#e5e7eb',
          900: '#1a1a1a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(31,182,255,0.3)'
      }
    },
  },
  plugins: [],
}
