/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
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
      {
        hostname: "avatar.iran.liara.run",
        protocol: "https",
        port: "",
        pathname: "/**",
      },
      {
        hostname: "picsum.photos",
        protocol: "https",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
