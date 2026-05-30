import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 這是解決路徑問題的關鍵
  basePath: '/alphaforge-frontend',
  assetPrefix: '/alphaforge-frontend/', 
};

export default nextConfig;
