/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
}

