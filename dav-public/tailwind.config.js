/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          800: '#800000',
        },
        yellow: {
          400: '#FFD700',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      backgroundImage: {
        'grand-gradient': 'linear-gradient(90deg, #1e3a8a 0%, #800000 50%, #FFD700 100%)',
      },
      boxShadow: {
        grand: '0 8px 32px 0 rgba(30,58,138,0.25), 0 1.5px 4px 0 rgba(128,0,0,0.10)',
      },
      keyframes: {
        'gradient-move': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        fadein: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        'gradient-move': 'gradient-move 3s ease-in-out infinite',
        'fadein': 'fadein 1.5s ease-in',
      },
    },
  },
  plugins: [],
};
