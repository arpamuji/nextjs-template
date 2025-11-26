/**
 * Example Next.js Middleware for Route Protection
 * 
 * This is a demonstration implementation showing how to protect routes
 * based on authentication status.
 * 
 * In a real-world application, you should:
 * - Verify JWT tokens or session validity
 * - Implement role-based access control (RBAC)
 * - Add request logging and monitoring
 * - Handle token refresh logic
 * - Implement rate limiting
 * - Add security headers (CSP, HSTS, etc.)
 * - Consider geo-blocking or IP whitelisting if needed
 * 
 * Modify this code based on your project's specific requirements.
 */

import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('auth_token')?.value;

    if (request.nextUrl.pathname.startsWith('/user')) {
        if (!token) {
            return NextResponse.redirect(new URL('/auth/login', request.url));
        }
    }

    if (
        request.nextUrl.pathname.startsWith('/auth') &&
        request.nextUrl.pathname !== '/auth/logout'
    ) {
        if (token) {
            return NextResponse.redirect(new URL('/user', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/user/:path*', '/auth/:path*'],
};
