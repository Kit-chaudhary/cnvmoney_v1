/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["download-form-website.s3.ap-south-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
