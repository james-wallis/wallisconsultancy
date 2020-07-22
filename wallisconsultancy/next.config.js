const {
  EMAIL_JS_SERVICE,
  EMAIL_JS_TEMPLATE,
  EMAIL_JS_USER,
  CAPTCHA_SITE_KEY,
} = process.env;

module.exports = () => {
  const env = {
    EMAIL_JS_SERVICE,
    EMAIL_JS_TEMPLATE,
    EMAIL_JS_USER,
    CAPTCHA_SITE_KEY,
  }
  return {
    env
  }
}
