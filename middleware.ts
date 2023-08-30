import { NextRequest, NextResponse } from 'next/server'
import { get } from '@vercel/edge-config'

export const config = {
  matcher: ['/private'],
}

export default async function middleware(req: NextRequest) {
  const allowedIp = await get('ip')
  if (req.ip !== allowedIp) {
    req.nextUrl.pathname = '404'
    return NextResponse.rewrite(req.nextUrl)
  }
}
