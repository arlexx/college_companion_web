/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        body: [`var(--font-inter)`],
        lex: [`var(--font-lexend)`],
        inter: [`var(--font-inter)`],
      },
      colors: {
        primary: "#006636",
        sec: "#F3CA07",
        tertiary: "#00B30F",
      },
    },
  },
  plugins: [],
};
