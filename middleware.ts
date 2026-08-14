import { NextRequest, NextResponse } from 'next/server'

// Edge middleware handling three concerns:
// 1. Force HTTPS (GSC showed http:// and https:// homepages both getting clicks)
// 2. IP-based provider selection for the image generation API
// 3. Keep account/user pages out of the public index via x-robots-tag
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Enforce HTTPS. Skip localhost so local dev isn't redirected into a loop.
  const proto = request.headers.get('x-forwarded-proto') || 'https'
  const host = request.headers.get('host') || ''
  if (proto === 'http' && !host.includes('localhost')) {
    const url = request.nextUrl.clone()
    url.protocol = 'https:'
    return NextResponse.redirect(url, 308)
  }

  const response = NextResponse.next()

  // 2. IP-based provider selection for image generation API only.
  if (pathname.startsWith('/api/pets/generate')) {
    const country = request.headers.get('x-vercel-ip-country')?.toUpperCase()
    response.headers.set('x-image-provider', country === 'CN' ? 'bailian' : 'openrouter')
  }

  // 3. Keep user/account pages out of the public index. Works for both
  // server and client components (my-pets is a client page with no metadata export).
  if (/^\/(signin|signup|my-pets|payment|auth)(\/|$)/.test(pathname)) {
    response.headers.set('x-robots-tag', 'noindex, nofollow')
  }

  return response
}

export const config = {
  // Run on everything except static assets and the sitemap/robots endpoints.
  matcher: '/((?!_next/static|_next/image|favicon.ico|og-image.png|icon.svg|robots.txt|sitemap.xml).*)',
}
