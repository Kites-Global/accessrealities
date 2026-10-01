import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ['192.168.56.1'],
  devIndicators: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*.s3.*.amazonaws.com" }],
  },
};
export default nextConfig;