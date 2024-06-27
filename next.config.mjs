/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://192.168.4.55:12333/:path*',
      },
    ]
  },
};

export default nextConfig;
