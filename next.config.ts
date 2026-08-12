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
      // 画廊聚合"新分享的 pet"，必须尽快反映分享结果。
      // 短边缘缓存（60s）+ 分享接口里的 revalidatePath('/gallery') 触发即时失效，
      // 分享后最多 60s 即在画廊可见，同时避免每次请求都回源（FOT 仍受控）。
      {
        source: '/gallery',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=60, stale-while-revalidate=86400',
          },
        ],
      },
      // 公共宠物页 /p/[id]：分享后才公开，且需避免"分享前 404 被边缘缓存 24h"
      // 的坑。同样走短边缘缓存，分享后即时可见。
      {
        source: '/p/:id',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=60, stale-while-revalidate=86400',
          },
        ],
      },
      // #13 FOT 修复：Next.js 对 ISR 页面默认 max-age=0（每次回源验证 → FOT/ISR Reads 持续高）。
      // 其余公开页 + sitemap.xml/robots.txt 加 1 天边缘缓存 + 7 天后台刷新。
      // 负向前瞻排除：/api（接口）、/my-pets（用户数据）、/auth（OAuth 回跳）、
      // /creem-test（测试页）、/gallery 与 /p/:id（上方已单独设短缓存）。
      {
        source: '/:path((?!api|my-pets|auth|creem-test|gallery|p/).*)',
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
