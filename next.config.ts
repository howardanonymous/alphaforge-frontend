import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 這一行告訴 Next.js 你的網站是放在 /alphaforge-frontend/ 這個路徑下
  basePath: '/alphaforge-frontend',
  // 這一行確保所有靜態資源（CSS/JS）都會指向正確的路徑
  assetPrefix: '/alphaforge-frontend/',
};

export default nextConfig;
