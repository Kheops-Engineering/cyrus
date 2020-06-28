module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.css|\.s(c|a)ss$/,
        use: [{
          loader: 'lit-scss-loader',
        }, 'extract-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
});