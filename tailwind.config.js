/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-nutmeg": "hsl(14, 45%, 36%)",
        "primary-dark-raspberry": "hsl(332, 51%, 32%)",
        "primary-light-raspberry": "hsl(332, 51%, 97%)",
        "neutral-white": "hsl(0, 0%, 100%)",
        "neutral-rose-white": "hsl(330, 100%, 98%)",
        "neutral-eggshell": "hsl(30, 54%, 90%)",
        "neutral-wenge-brown": "hsl(30, 10%, 34%)",
        "neutral-dark-charcoal": "hsl(24, 5%, 18%)",
      },
      fontFamily: {
        youngSerif: ['"Young Serif"', "serif"],
        outfit: ['"Outfit"', "serif"],
      },
      screens: {
        tablet: "640px",
        desktop: "1024px",
      },
    },
  },
  plugins: [],
};
