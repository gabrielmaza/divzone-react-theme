/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-600": "#a299b9",
        "gray-700": "#433E4F",
        "gray-800": "#322E3C",
        "gray-950": "#1F1D23",
        "primary-100": "#dcccff",
        "primary-300": "#8165be",
        "primary-500": "#5e4e82",
        "secondary-50": "#ffd5fc",
        "secondary-100": "#ffb7f8",
        "secondary-300": "#ef27db",
        "secondary-400": "#a61998",
        "secondary-500": "#5a0e52",
      },
      backgroundImage: (theme) => ({
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        backgroundSparkles: "url('./assets/backgroundSparkles.png')",
        arrowRight: "url('./assets/svg/Arrow.svg')",
        cuttingEdge: "url('./assets/svg/CuttingEdge.svg')",
        sparkles: "url('./assets/SingleBgSparkles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};