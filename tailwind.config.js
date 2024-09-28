/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'theseasons': ['TheSeasons', 'serif'],
      },
      colors: {
        darkBg: '#000000',
        darkBg2: '#866c5a',
      },
    },
  },
  plugins: [],
};
