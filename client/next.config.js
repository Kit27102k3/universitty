/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*', // NestJS server
      },
      {
        source: '/python-api/:path*',
        destination: 'http://localhost:8001/:path*', // Python server
      },
    ];
  },
};

export default nextConfig; 