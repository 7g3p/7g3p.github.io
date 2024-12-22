/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/art-studio/' : '',
  basePath: isProd ? '/art-studio' : '',
  output: 'export'
};

export default nextConfig;
