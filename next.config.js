/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All images are local /public assets — no external domains needed.
    // Uncomment and add domains if you add external image URLs later.
    // domains: ['example.com'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
