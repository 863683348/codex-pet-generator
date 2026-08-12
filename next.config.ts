import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.codexpetgenerator.com' }],
        destination: 'https://codexpetgenerator.com/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      // #13 FOT 修复：Next.js 对 ISR 页面默认 max-age=0（每次回源验证 → FOT/ISR Reads 持续高）。
      // 所有公开页 + sitemap.xml/robots.txt 加 1 天边缘缓存 + 7 天后台刷新。
      // 负向前瞻排除：/api（接口）、/my-pets（用户数据）、/auth（OAuth 回跳）、/creem-test（测试页）。
      {
        source: '/:path((?!api|my-pets|auth|creem-test).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ]
  },
}

export default nextConfig
