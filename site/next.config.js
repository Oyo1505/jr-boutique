const path = require('path');
const commerce = require('./commerce.config.json');
const { withCommerceConfig, getProviderName } = require('./commerce-config');

const provider = commerce.provider || getProviderName();

const isShopify = provider === '@vercel/commerce-shopify';

console.log(isShopify);

module.exports = withCommerceConfig({
  commerce,
  i18n: {
    locales: ['fr-FR'],
    defaultLocale: 'fr-FR',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: '@import "styles.scss";',
  },
  rewrites() {
    return [
      (isShopify) && {
        source: '/checkout',
        destination: '/api/commerce/checkout',
      },
    ].filter(Boolean);
  },
});

// Don't delete this console log, useful to see the commerce config in Vercel deployments
console.log('next.config.js', JSON.stringify(module.exports, null, 2));
