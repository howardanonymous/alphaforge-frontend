import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',       // 強制輸出為靜態檔案
  images: {
    unoptimized: true,    // GitHub Pages 不支援預設圖片優化
  },
};

export default nextConfig;
