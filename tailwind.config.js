/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "browser-img": "url('/src/assets/githubimg.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#010409",

          secondary: "#0D1117",

          accent: "#161B22",

          neutral: "#1f2833",

          "base-100": "#010409",

          info: "#6fc2ec",

          success: "#249e79",

          warning: "#f4c15d",

          error: "#f26491",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
