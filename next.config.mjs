/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.shopify.com',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
