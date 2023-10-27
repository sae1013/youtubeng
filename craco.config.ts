const path = require('path');

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `@import "${path.resolve(__dirname, 'src/theme/variables.module.scss')}";`,
      },
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
