module.exports = {
  defaultSeverity: 'warning',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-sass-guidelines',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: ['stylelint-scss'],
  rules: {
    'scss/at-extend-no-missing-placeholder': true,
  },
}
