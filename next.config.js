const withCss = require('@zeit/next-css');
const withImage = require('next-images');
// Checking if it's prod

module.exports = withImage(withCss({
  inlineImageLimit: 16384,
  webpack(config) {
    config.module.rules.push({
      test: /\.(eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 999999,
          publicPath: './',
          outputPath: 'static/',
          name: '[name].[ext]',
        },
      },
    });

    return config;
  },
}));
