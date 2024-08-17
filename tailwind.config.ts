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
          850: "#233038",
        },
        neutral: {
          650: "#475156",
          750: "#303639",
          950: "#141414",
        },
        red: {
          550: "#EE5858",
          // 550: "#c5594b",
        },
        orange: {
          150: "#FFE7D6",
          250: "#FFCEAD",
          450: "#FA8232",
        },
        zinc: {
          450: "#ADB7BC",
          950: "#191C1F",
        },
        green: {
          650: "#2db224",
        },
        slate: {
          350: "#BBD0DE",
        },
        cyan: {
          850: "#2E5974",
          950: "#124261",
        },
      },
    },
  },
  plugins: [],
};
