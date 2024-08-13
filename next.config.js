/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "a0.muscache.com",
        protocol: "https",
        port: "",
        pathname: "/**",
      },
      {
        hostname: "kbglzqgrxnmdqvauagdb.supabase.co",
        protocol: "https",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
