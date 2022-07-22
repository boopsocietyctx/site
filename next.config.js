/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    runtime: 'experimental-edge',
    images: { allowFutureImage: true },
  },
  webpack: (
    config
  ) => {
    config.module.rules.push(
      {
        test: /\.html$/i,
        loader: "html-loader",
      }
    );
    return config
  },
}

module.exports = nextConfig
