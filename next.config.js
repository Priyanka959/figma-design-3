/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  // Avoid running ESLint during `next build` in CI/deploy to prevent
  // build-time failures from environment-specific ESLint CLI options.
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
