const withNextIntl = require('next-intl/plugin')('./i18n.js');

module.exports = withNextIntl({
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'drive.google.com' },
      { protocol: 'https', hostname: 'i.ibb.co', pathname: '/**' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
});