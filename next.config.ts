/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 必須加入這兩行，確保靜態檔案路徑與 GitHub Pages 對應
  basePath: '/alphaforge-frontend',
  assetPrefix: '/alphaforge-frontend/',
};

module.exports = nextConfig;
