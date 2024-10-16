import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // atau 'media' untuk berdasarkan preferensi sistem
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily :{
        sans: ['Poppins', 'sans-serif'], // Menambahkan Poppins sebagai font sans-serif
      },
    },
  },
  plugins: [],
};
export default config;
