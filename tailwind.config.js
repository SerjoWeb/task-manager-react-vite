// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#F3F3F3",
        "gray-text": "#8D8D8D",
        "gray-light": "#FDFDFD",
        "gray-border": "#CBCBCB",
        blue: "#3556AB",
        "blue-dark": "#071D55",
        "blue-button": "#123EB1",
        "blue-text": "#0D2972",
        green: "#CDE53D",
        "green-bg": "#53DA69",
        "green-border": "#49C25D",
        gold: "#F2C94C",
        red: "#AB3535",
        "red-border": "#720D0D"
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        md: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
