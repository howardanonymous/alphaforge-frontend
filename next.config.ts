import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',

  // GitHub Pages 子路徑（一定要改成你的 repo 名）
  basePath: isProd ? '/alphaforge-saas' : '',

  // 靜態輸出一定要關掉圖片優化
  images: {
    unoptimized: true,
  },

  // 建議：避免 trailing slash 問題（GitHub Pages 常見坑）
  trailingSlash: true,

  // 如果你有 WebSocket / API，不影響 build，但避免誤用 SSR
  reactStrictMode: true,
};

export default nextConfig;
