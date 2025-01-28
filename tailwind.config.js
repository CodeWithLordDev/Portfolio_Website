const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        gradientMove: "gradientMove 5s ease infinite",
        globescroll: "globeScroll 10s linear infinite",
      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        globeScroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        dmSerif: ['"DM Serif Text"', 'serif'],
        prociono: ['Prociono', 'serif'],
        rubikVinyl: ['"Rubik Vinyl"', 'cursive'],
        rubikWetPaint: ['"Rubik Wet Paint"', 'cursive'],
        satisfy: ['Satisfy', 'cursive'],
        crimsonText: ['"Crimson Text"', 'serif'],
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};





// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
