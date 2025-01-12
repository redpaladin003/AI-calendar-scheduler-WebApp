/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // If you're using Next.js App Router
    './pages/**/*.{js,ts,jsx,tsx}', // If you're using Pages Router
    './components/**/*.{js,ts,jsx,tsx}', // Shared components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
