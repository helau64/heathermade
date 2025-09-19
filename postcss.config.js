module.exports = {
  ident: 'postcss-loader',
  syntax: 'postcss-scss',
  plugins: {
    'postcss-easy-import': {},
    'postcss-advanced-variables': {},
    'postcss-atroot': {},
    'postcss-extend-rule': {},
    'postcss-property-lookup': {},
    'postcss-rem': {baseline: 24},
    'postcss-custom-media': {},
    'autoprefixer': {}
  },
};
