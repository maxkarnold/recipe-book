/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6766",
        secondary: "#000000",
      },
    },
  },
  plugins: [],
};
