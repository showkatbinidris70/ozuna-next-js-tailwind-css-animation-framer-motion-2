/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: 'url("/assets/images/navbar-bg-photo.png")',
        "image-1": 'url("/assets/images/Mask-group-bg-1.png")',
        "image-2": 'url("/assets/images/Mask-group-bg-2.png")',
        "image-3": 'url("/assets/images/Mask-group-bg-3.png")',
      },
    },
  },
  plugins: [],
};
