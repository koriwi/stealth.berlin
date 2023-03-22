/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        futurism: ["Futurism", "sans-serif"],
        jura: ["Jura", "sans-serif"],
      },
      colors: {
        neonGreen: "#00FF00",
        neonOrange: "#FF5F1F",
      },
    },
  },
  plugins: [],
};
