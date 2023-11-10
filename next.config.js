/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
   experimental: {
      serverComponentsExternalPackages: ['mongoose'],
   },
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
         },
      ],
   },
   sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
   },
   webpack(config) {
      config.experiments = {
         ...config.experiments,
         topLevelAwait: true,
      };
      return config;
   },
};

module.exports = nextConfig;
