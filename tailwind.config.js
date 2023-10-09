/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      white: "#FFFFFF",
      neutral: "#D1D5DB",
      error: "#D32F2F",
      "primary-t": "#6B7280",
      "accent-t": "#374151",
      "light-t": "#FFFFFF",
    },
    fontFamily: {
      sans: ["Open Sans", "Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
