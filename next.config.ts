import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: "build",
  output: "export",
  images: {
    qualities: [25, 50, 75, 100],
    unoptimized: true
  },
};

export default nextConfig;
