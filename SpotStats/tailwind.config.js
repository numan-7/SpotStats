/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          100: "#d0d0d0",
          200: "#a0a0a0",
          300: "#717171",
          400: "#414141",
          500: "#121212",
          600: "#0e0e0e",
          700: "#0b0b0b",
          800: "#070707",
          900: "#040404"
        },
        white: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333"
        },
        teal: {
          100: "#d2f1dd",
          200: "#a5e3bb",
          300: "#77d598",
          400: "#4ac776",
          500: "#1db954",
          600: "#179443",
          700: "#116f32",
          800: "#0c4a22",
          900: "#062511"
        },
        green: {
          100: "#d2f7df",
          200: "#a5efbf",
          300: "#78e7a0",
          400: "#4bdf80",
          500: "#1ed760",
          600: "#18ac4d",
          700: "#12813a",
          800: "#0c5626",
          900: "#062b13"
        },    
      },
      fontFamily: {
        main: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}