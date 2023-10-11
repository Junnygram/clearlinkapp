/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    swcPlugins: [['next-superjson-plugin', {}]],
  },
};

module.exports = nextConfig;
