import { NextRequest, NextResponse } from 'next/server'

// IP-based provider selection middleware
// - CN users -> bailian (Alibaba Cloud DashScope)
// - Other regions -> openrouter
//
// Vercel sets `x-vercel-ip-country` for edge functions. We read it and
// inject a request header so the API route can select the provider.
export function middleware(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country')?.toUpperCase()
  
  // Only care about China (CN) vs everyone else
  const isChina = country === 'CN'
  
  const response = NextResponse.next()
  
  // Pass the decision to the API route via a header
  response.headers.set('x-image-provider', isChina ? 'bailian' : 'openrouter')
  
  return response
}

// Match only API routes that generate images
export const config = {
  matcher: '/api/pets/generate/:path*',
}
