/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
    darkMode: 'class', // <-- this is crucial
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}