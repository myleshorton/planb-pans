/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/tree', destination: '/tree.html', permanent: false },
      { source: '/map', destination: '/tree.html', permanent: false },
    ]
  },
}

module.exports = nextConfig
