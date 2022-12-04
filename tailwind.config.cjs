/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1678CB",
        "primary-light": "#3B8BEA",
        secondary: "#68D6F5",
        dark: "#242424",
        white: "#FFFFFF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        h2: "48px",
        h3: "32px",
        h4: "20px",
        h5: "16px",
        h6: "12px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
