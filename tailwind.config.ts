/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1480px",
      },
    },
    extend: {
      colors: {
        amber: {
          250: "#F3DE6D",
        },
        yellow: {
          450: "#EBC80C",
        },
        sky: {
          750: "#1B6392",
        },
        gray: {
          150: "#F2F4F5",
        },
        neutral: {
          750: "#303639",
        },
        orange: {
          450: "#FA8232",
        },
      },
    },
  },
  plugins: [],
};
