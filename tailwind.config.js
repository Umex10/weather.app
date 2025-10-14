/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // alle React Dateien
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient-dark': 'linear-gradient(to top, #24243e, #302b63, #0f0c29)',
      },
    },
  },
  plugins: [],
}
