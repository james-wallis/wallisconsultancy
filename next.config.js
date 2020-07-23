const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const {
  EMAIL_JS_SERVICE,
  EMAIL_JS_TEMPLATE,
  EMAIL_JS_USER,
  CAPTCHA_SITE_KEY,
} = process.env;

const env = {
  CANONICAL_URL: 'https://wallisconsultancy.co.uk',
  EMAIL_JS_SERVICE,
  EMAIL_JS_TEMPLATE,
  EMAIL_JS_USER,
  CAPTCHA_SITE_KEY,
};

module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    // optipng: {
    //   optimizationLevel: 3,
    // },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
  }],
  {
    env,
  },
]);
