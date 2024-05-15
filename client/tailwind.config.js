/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        64:['Sixtyfour'],
        mont:["Montserrat"],
        inter:['Inter'],
        whisper:['Whisper']
      },
      colors: {
        primary: "#fff",
        secondary: "#FD624B",
        tertiary: "#30312F",
        secondary_shade: "#ff725c",
      },
      spacing:{
        side:'140px',
        mb_side:'20px',
        top:'20px'
      }
    },
  },
  plugins: [],
}

