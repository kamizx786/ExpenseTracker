/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'inner-extra': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05), inset 0 4px 8px 0 rgba(0, 0, 0, 0.1), inset 0 8px 16px 0 rgba(0, 0, 0, 0.15), inset 0 16px 32px 0 rgba(0, 0, 0, 0.3)'
      },
      fontFamily: {
        chill: ["chillax", "sans-serif"], 
        clash: ["clash-grotesk", "sans-serif"], 
      },
      animation: {
        "fade-in-left": "fadeInLeft 1s ease-in-out",
        "fade-in-right": "fadeInRight 1s ease-in-out",
      },
      keyframes: {
        fadeInLeft: {
          "0%": { transform: "translateX(-50px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        fadeInRight: {
          "0%": { transform: "translateX(50px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
