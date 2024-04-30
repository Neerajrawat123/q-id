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
        'main-pattern': "url('/images/fgh-bg-1.png')",
        'secondary-pattern': "url('/images/grid-for-video.png')",
        'tertiary-pattern' : "url('/images/qd-ffvc-2-sdf.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'logo-col': '#CECECE',
        'blue':'#6FA6FD',
        'col-contact': '#B1B1B1',
        'form': '#B8B8B8',
        'form-bord': '#5E5E5E',
        'main-text': '#7A7A7A',
        'grid-col': '#000000BA',
        'card-1': '#121E13',
        'card-2' : '#241b08ad',
        'card-bord':'#FFFFFF30',
        'grad-col': '#93fb70',
        'sec-text-col' : '#797878F5',
        'footer-text': '#AEAEAE',
        'p-col': '#FFFFFFB3',
        'green-grad-1': '#93FB70',
        'green-grad-2': '#4D7603',
        'orange-grad-1': '#CF5924 ',
        'menu-col': '#E7E7E7',
        'menu': '#202020'
      },
      fontFamily: {
        'primary-font': ['Raleway', 'sans-serif'],
      },
      boxShadow:{
        'card-1-shad': '-4px -13px 99px -29px rgba(77.54021739130434, 225.75, 0, 0.34)',
        'card-2-shad': '-16px 49px 68px -18px rgba(226, 186.00000000000014, 0, 0.18)',
        'small-card-1': '2px -13px 99px -5px rgba(77.54021739130434, 225.75, 0, 0.34)',
        'small-card-2': '-2px -13px 59px -19px rgba(225.75, 197.28586956521735, 0, 0.34)'
      }
    },
  },
  plugins: [],
};
