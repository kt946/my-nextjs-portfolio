/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Here you can change the primary and secondary colors throughout the app.
        // For best contrast results, be sure to follow the Web Content Accessibility Guidelines (WCAG)
        primary: '#00A6FF',
        secondary: '#60efff',
      },
    },
  },
  plugins: [],
};
