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
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        customcol: 'rgba(16, 45, 71, 1)',
        customblue: 'rgba(47, 115, 242, 1)',
        lablecolor: 'rgba(84, 117, 147, 1)',
        colorbg: 'rgba(192, 213, 251, 1)'
      },
      boxShadow: {
        customboxshadow: '0px 4px 50px 0px rgba(47, 115, 242, 0.15)',

      },
      textShadow: {
        'custom': '0px 8px 33.4px rgba(0, 0, 0, 0.85)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(75.06deg, #2F73F2 0%, rgba(47, 115, 242, 0) 66.21%)',
      },

    },
  },
  plugins: [

  ],
};


//customroundcol: 'rgba(192, 213, 251, 1)',
