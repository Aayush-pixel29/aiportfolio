import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Exclude static files, images, api routes, etc.
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') || 
    pathname.startsWith('/images') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const nextAuthSession = request.cookies.get('next-auth.session-token') || request.cookies.get('__Secure-next-auth.session-token');

  // Ensure /login redirects to home if already logged in
  if (nextAuthSession && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Allow all other routes to pass through un-gated
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
