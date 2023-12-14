/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgIntro: "hsl(217, 28%, 15%)",
        bgMain: "hsl(218, 28%, 13%)",
        bgFooter: "hsl(216, 53%, 9%)",
        bgTestimonial: "hsl(219, 30%, 18%)",
        cyan: "hsl(176, 68%, 64%)",
        blue: "hsl(198, 60%, 50%)",
        error: "hsl(0, 100%, 63%)",
      },
      fontFamily: {
        heading: ["Raleway", "san-serif"],
        sans: ["Open Sans", "san-serif"],
      },
    },
  },
  plugins: [],
};
