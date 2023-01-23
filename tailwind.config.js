/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Here you can change the primary, secondary, and tertiary colors throughout the app or create your own custom colors.
        // For best contrast results, be sure to follow the Web Content Accessibility Guidelines (WCAG)
        primary: '#30A8FF',
        secondary: '#60efff',
        tertiary: '#0061ff',
      },
    },
  },
  plugins: [],
};
