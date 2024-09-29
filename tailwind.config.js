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
        darkBg: '#000000', //negro
        colorbg2: '#dfc990', //color 2
        colorbg2hover: '#b2a173', //color 2 hover
        colorbg: '#f1e8d9', //color 3
        darkBg2: '#866c5a', //color 4 café
        colorGreen: '#839969', //verde
        colorGreen2: '#697A54' //verde hover
      },
    },
  },
  plugins: [],
};
