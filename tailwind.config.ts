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
      screens: {
        xs: "480px",
      },
      colors: {
        amber: {
          150: "#F7E99E",
          250: "#F3DE6D",
          350: "#EFD33D",
        },
        yellow: {
          450: "#EBC80C",
        },
        sky: {
          550: "#2DA5F3",
          750: "#1B6392",
        },
        gray: {
          150: "#F2F4F5",
          450: "#929FA5",
          550: "#5F6C72",
        },
        neutral: {
          650: "#475156",
          750: "#303639",
        },
        orange: {
          450: "#FA8232",
        },
        zinc: {
          950: "#191C1F",
        },
      },
    },
  },
  plugins: [],
};
