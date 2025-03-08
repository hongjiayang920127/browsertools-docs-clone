/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['mintlify.s3.us-west-1.amazonaws.com', 'mintlify.s3-us-west-1.amazonaws.com'],
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/installation',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;