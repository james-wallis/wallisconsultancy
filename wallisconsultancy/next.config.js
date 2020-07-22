const withOptimizedImages = require('next-optimized-images');

const {
  EMAIL_JS_SERVICE,
  EMAIL_JS_TEMPLATE,
  EMAIL_JS_USER,
  CAPTCHA_SITE_KEY,
} = process.env;

const env = {
  EMAIL_JS_SERVICE,
  EMAIL_JS_TEMPLATE,
  EMAIL_JS_USER,
  CAPTCHA_SITE_KEY,
}

module.exports = withOptimizedImages({
  env,
});
