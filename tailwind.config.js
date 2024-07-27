/** @type {import('tailwindcss').Config} */
// import dayImg from '../assets/Images/day.png'
// import nightImg from '../assets/Images/night.png'
export default {
  content: [
    './index.html', './src/**/*.{js,jsx,css}',
  ],
  theme: {
    extend: {
      colors: {
        "dark-orange": "#FF5823",
        "cornsilk": "#fff8dc",
        "darkblue": "#080831",
        "whitesmoke": "#f5f5f5",
      },
      backgroundImage: {
        'day': "url('/src/assets/Images/day.webp')",
        'night': "url('/src/assets/Images/night.webp')",
      },
    },
  },
  plugins: [], darkMode: 'class',
}

