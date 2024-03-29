module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-easy-import': {},
    'postcss-advanced-variables': {},
    'postcss-atroot': {},
    'postcss-map-get': {},
    'postcss-property-lookup': {},
    'postcss-rem': {baseline: 24},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {}
  },
};
