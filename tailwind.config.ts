import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      container: {
        padding: {
          DEFAULT: '2rem',
          sm: '3rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '7rem',
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["cupcake","bumblebee","dark","dim"],
  },
}
export default config
