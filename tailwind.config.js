/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gunmetal: '#20333a',
        'dark-gunmetal': '#1e2426',
        flax: '#E8D495',
        amber: '#FEC100',
        'police-blue': '#295066',
      },
    },
  },
  plugins: [],
} 