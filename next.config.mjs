/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  async rewrites() {
    return [
      {
        source: '/api/upload',
        destination: 'http://localhost:6100/upload',
      },
    ]
  },
};

export default nextConfig;
