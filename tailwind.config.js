module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f43b46",

          "secondary": "#f17e99",

          "accent": "#fab07d",

          "neutral": "#777777",

          "base-100": "#FFFFFF",

          "info": "#17233e",

          "success": "#029E9D",

          "warning": "#27334C",

          "error": "#F32B42",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

