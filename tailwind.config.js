/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        green: "#079912",
        black: {
          primary: "#161513",
          secondary: "#1C1C22",
        },
        white: {
          primary: "#F0F2F5",
          secondary: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
