/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'franklin': ['"Franklin Gothic Medium"', '"Arial Narrow"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

