/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    images: { allowFutureImage: true },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/i,
      loader: "html-loader",
    });
    return config;
  },
  // api: {
  //   bodyParser: false
  // }
};

module.exports = nextConfig;
