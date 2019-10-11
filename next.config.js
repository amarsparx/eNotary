const withSass = require('@zeit/next-sass'); // Add this declaration
const withCSS = require('@zeit/next-css');

module.exports = withSass(
  withCSS({
    // env: {
    //   API_URL: process.env.API_URL || 'http://localhost:4000'
    // },
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]'
    }
  })
);
