import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/private'],
}

export default async function middleware(req: NextRequest) {
  if (req.ip !== '1.2.3.4') {
    req.nextUrl.pathname = '404'
    return NextResponse.rewrite(req.nextUrl)
  }
}
