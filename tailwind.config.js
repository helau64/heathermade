module.exports = {
  content: ["./**/*.njk"],
  theme: {
    extend: {
      colors: {
        blue: 'rgb(50, 85, 164)',
        green: 'rgb(0, 169, 92)',
        red: 'rgb(255, 102, 94)',
        sunflower: 'rgb(255, 181, 17)'
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