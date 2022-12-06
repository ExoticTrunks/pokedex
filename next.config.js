/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

module.exports =  {
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**.example.com',
    },
  ],
},
}
