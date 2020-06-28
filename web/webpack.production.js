const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.css|\.s(c|a)ss$/,
        use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'extract-loader', 'sass-loader', 'lit-scss-loader',
          {
            loader: 'lit-scss-loader',
            options: {
              minify: true, // defaults to false
            },
          }, 'extract-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  plugins: [new MiniCssExtractPlugin()],
});