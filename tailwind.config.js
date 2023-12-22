module.exports = {
  content: [
    './app/**/*.{html,njk}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#008DB8',
        green: '#009180',
        red: 'rgb(230, 92, 85)',
        sunflower: 'rgb(255, 181, 17)',
        orange: 'rgb(243, 129, 27)',
        pink: '#E3B4D2',
      },
      fontFamily: {
        serif: [
          'Bellefair',
          'ui-serif',
          'Georgia',
          'Cambria', 
          'Times New Roman',
          'Times',
          'serif'
        ],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ]
      },
      rotate: {
        '4': '4deg',
        '8': '8deg'
      }
    },
    screens: {
      'max-xl': {max: '1279px'},
      'min-xl': '1280px',
      'max-lg': {max: '1023px'},
      'min-lg': '1024px',
      'max-md': {max: '767px'},
      'min-md': '768px',
      'max-sm': {max: '639px'},
      'min-sm': '640px',
      'max-xs': {max: '579px'},
      'min-xs': '580px',
      'max-xxs': {max: '349px'},
      'min-xxs': '350px',
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};