/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#199393",
        secondary: "#C2E8E8",
      },
      fontFamily: {
        kaushan: ["Kaushan Script"],
      },
    },
  },
  plugins: [],
};
