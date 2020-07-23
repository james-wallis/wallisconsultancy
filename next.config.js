const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const {
  EMAIL_JS_SERVICE,
  EMAIL_JS_TEMPLATE,
  EMAIL_JS_USER,
  CAPTCHA_SITE_KEY,
} = process.env;

const hostedOnGitHubPages = !!process.env.github_token;
// eslint-disable-next-line no-console
console.log('Hosted on Github Pages =', hostedOnGitHubPages);

const env = {
  CANONICAL_URL: 'https://wallisconsultancy.co.uk',
  EMAIL_JS_SERVICE,
  EMAIL_JS_TEMPLATE,
  EMAIL_JS_USER,
  CAPTCHA_SITE_KEY,
  BACKEND_URL: hostedOnGitHubPages ? '/wallisconsultancy' : '',
};

module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
  }],
  {
    assetPrefix: hostedOnGitHubPages ? '/wallisconsultancy/' : '',
    env,
  },
]);
