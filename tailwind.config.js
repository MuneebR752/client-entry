/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite-react/lib/esm/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
