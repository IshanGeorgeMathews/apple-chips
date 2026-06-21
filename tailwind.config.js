/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          red: '#ff3b30',
          green: '#34c759',
          lightGreen: '#32d74b',
        },
        dark: {
          DEFAULT: '#000000',
          surface: '#1c1c1e',
          accent: '#2c2c2e',
        }
      },
      fontFamily: {
        sans: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
