import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Ignore ESLint errors during build to prevent Vercel deploy halts
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Prevent unneeded halts on build
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
