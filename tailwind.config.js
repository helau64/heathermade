module.exports = {
  content: [
    './app/**/*.{html,njk}',
  ],
  theme: {
    extend: {
      colors: {
        blue: 'rgb(50, 85, 164)',
        green: 'rgb(0, 169, 92)',
        red: 'rgb(255, 102, 94)',
        sunflower: 'rgb(255, 181, 17)'
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