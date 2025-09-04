/** @type {import('tailwindcss').Config} */
export default {
content: [
"./index.html",
"./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
extend: {
fontFamily: {
sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", "Helvetica Neue", "Arial", "sans-serif"],
},
boxShadow: {
soft: "0 10px 30px rgba(0,0,0,0.15)",
},
},
},
plugins: [],
}