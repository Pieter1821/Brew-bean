/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#FAF6F3',
          100: '#D69E7F',
          200: '#C28F72',
          300: '#AE8065',
          400: '#9A7158',
          500: '#86624B',
          600: '#72533E',
          700: '#5E4431',
          800: '#4A3524',
          900: '#362517',
        },
      },
    },
  },
  plugins: [],
}