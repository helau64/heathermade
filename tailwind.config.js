module.exports = {
  content: [
    './app/**/*.{html,njk}',
  ],
  theme: {
    extend: {
      colors: {
        blue: 'rgb(50, 85, 164)',
        green: 'rgb(0, 169, 92)',
        red: 'rgb(230, 92, 85)',
        sunflower: 'rgb(255, 181, 17)',
        orange: 'rgb(243, 129, 27)',
        pink: 'rgb(249, 132, 202)',
      },
      fontFamily: {
        goodsans: [
          'Good Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        reckless: [
          'Reckless',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ]
      },
      rotate: {
        '4': '4deg',
        '8': '8deg'
      }
    },
    screens: {
      xxs: '350px',
      xs: '580px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};