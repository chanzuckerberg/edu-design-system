module.exports = {
  parser: 'postcss-scss',
  
  plugins: [
    require('@csstools/postcss-sass'),
    require('postcss-prefixer')({
      prefix: 'czedi-'
    }),
    require('postcss-preset-env')({
      stage: 3,
    })
  ]
}