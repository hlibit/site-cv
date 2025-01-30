/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Manrope",
    },
    extend: {
      colors: {
        background: "#3730a3",
        textColor: "#ede9fe",
        inputTextColor: "#1e1b4b",
      },
      animation: {
        "spin-slow": "spin 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
