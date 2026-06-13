/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkcyan: '#008B8B',
        ink: '#111827',
        paper: '#ffffff',
        surface: '#f9fafb',
        'green-forest': '#047857',
        muted: '#6b7280',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        'mono-dm': ['DM Mono', 'monospace'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundColor: {
        paper: '#ffffff',
        surface: '#f9fafb',
      },
      textColor: {
        ink: '#111827',
        muted: '#6b7280',
        'green-forest': '#047857',
      }
    },
  },
  plugins: [],
}
