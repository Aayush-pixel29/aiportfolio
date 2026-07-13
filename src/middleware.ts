import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Exclude static files, images, api routes, and the login page itself
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') || 
    pathname.startsWith('/images') ||
    pathname === '/login' ||
    pathname.includes('.') // matches favicon.ico, etc.
  ) {
    return NextResponse.next();
  }

  // Check if they have the local auth cookie or the NextAuth Google cookie
  const authEmail = request.cookies.get('portfolio_lead_email');
  const nextAuthSession = request.cookies.get('next-auth.session-token') || request.cookies.get('__Secure-next-auth.session-token');

  // If no auth cookie, redirect to login
  if (!authEmail && !nextAuthSession) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
