/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ['SF Pro Display', 'sans-serif'],
        "mono": ['Clash Grotesk', 'sans-serif']
      },
    },
  },
  plugins: [],
}
