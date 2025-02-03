/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono",
      mono: "JetBrains Mono",
    },
    extend: {
      colors: {
        background: {
          primary: "#1c1c22",
          secondary: "#232229",
        },
        text: {
          primary: "#e5e5e5",
          dark: "#8E8D94",
          lightGreen: "#02FE9C",
          darkGreen: "#57D09F",
        },
        inputTextColor: "#1e1b4b",
      },
      screens: {
        xs: "0px",
        sm: "550px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },

      animation: {
        "spin-slow": "spin 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
