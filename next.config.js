const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  exports: 'out',
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
