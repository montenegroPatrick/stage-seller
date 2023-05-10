/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "franck-roger-server.eddi.cloud",
        port: "",
        pathname: "",
      },
    ],
  },
};

module.exports = nextConfig;
