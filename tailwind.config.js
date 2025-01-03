/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        loading :{
          "0%" : {
            transform : "rotate(0deg)"  
          },
          "100%":{
            transform : "rotate(360deg)"
          }
        }
      },
      animation: {
        loading: "loading 1s linear infinite",
        easein : "ease-in 1s"
      },
    },
  },
  plugins: [],
}