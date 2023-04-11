/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#34D399", // グリーンの背景色
      },
      textColor: {
        primary: "#34D399", // グリーンのテキスト色
      },
      borderColor: {
        primary: "#34D399", // グリーンのボーダー色
      },
    },
  },
  plugins: [],
};
