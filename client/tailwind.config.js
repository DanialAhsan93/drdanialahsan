/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // <-- this is crucial
  theme: {
    extend: {
      keyframes: {
        'slide-diagonal': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(10px, -10px)' },
        },
        'slide-diagonal-2': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(10px, -10px)' },
        },
        'move-bottom-right': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(10px, 10px)' },
        },
        'move-top-left': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-10px, -10px)' },
        },
        'move-bottom-left': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-10px, 10px)' },
        },
        'slideTilted': {
          '0%, 100%': { transform: 'translateX(0) rotate(12deg)' },
          '50%': { transform: 'translateX(50px) rotate(12deg)' },
        },
        'slideTiltedRL': {
          '0%, 100%': { transform: 'translateX(50px) rotate(-12deg)' },
          '50%': { transform: 'translateX(0) rotate(-12deg)' },
        },


      },
      animation: {
        'slide-diagonal': 'slide-diagonal 2s ease-in-out infinite alternate',
        'slide-diagonal-2': 'slide-diagonal 2.5s ease-in-out infinite alternate',
        'move-bottom-right': 'move-bottom-right 2s ease-in-out infinite alternate',
        'move-top-left': 'move-top-left 2s ease-in-out infinite alternate',
        'move-bottom-left': 'move-bottom-left 2s ease-in-out infinite alternate',
        'slide-tilted': 'slideTilted 3s ease-in-out infinite',
        'slide-tilted-rl': 'slideTiltedRL 3s ease-in-out infinite',

      },
      screens: {
        '3xl': '2401px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}