const path = require('path');
const commerce = require('./commerce.config.json');
const { withCommerceConfig, getProviderName } = require('./commerce-config');

const provider = commerce.provider || getProviderName();
const isBC = provider === '@vercel/commerce-bigcommerce';
const isShopify = provider === '@vercel/commerce-shopify';
const isSaleor = provider === '@vercel/commerce-saleor';
const isSwell = provider === '@vercel/commerce-swell';
const isVendure = provider === '@vercel/commerce-vendure';

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
      (isBC || isShopify || isSwell || isVendure || isSaleor) && {
        source: '/checkout',
        destination: '/api/commerce/checkout',
      },
      // The logout is also an action so this route is not required, but it's also another way
      // you can allow a logout!
      isBC && {
        source: '/logout',
        destination: '/api/logout?redirect_to=/',
      },
      // For Vendure, rewrite the local api url to the remote (external) api url. This is required
      // to make the session cookies work.
      isVendure && process.env.NEXT_PUBLIC_VENDURE_LOCAL_URL && {
        source: `${process.env.NEXT_PUBLIC_VENDURE_LOCAL_URL}/:path*`,
        destination: `${process.env.NEXT_PUBLIC_VENDURE_SHOP_API_URL}/:path*`,
      },
    ].filter(Boolean);
  },
});

// Ne supprimez pas ce console log, il est utile pour voir la configuration commerce dans les déploiements Vercel
console.log('next.config.js', JSON.stringify(module.exports, null, 2));
