/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cardGreen: "#49d0b0",
        cardGreenHover: "#5edcbe",
        cardOrange: "#fb6d6c",
        cardOrangeHover: "#ffa0a0",
        cardBlue: "#74beff",
        cardBlueHover: "#a2d4ff",
        cardYellow: "#ffce4b",
        cardYellowHover: "#feda79",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
