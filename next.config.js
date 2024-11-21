const withMDX = require('@next/mdx')();
module.exports = withMDX({
  experimental: {
    appDir: true, // Enable App Router
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
});