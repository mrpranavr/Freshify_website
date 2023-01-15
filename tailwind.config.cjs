/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: "#F9F4E8",
        secondary: "#1A4301",
        darkGreen: "#122312",
        textGreen: "#386641",
        textBlack: "#131313",
        lightRed: "#EE6055",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
