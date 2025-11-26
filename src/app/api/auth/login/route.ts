/**
 * Example Authentication Login API Route
 * 
 * This is a demonstration implementation showing how to handle user login.
 * In a real-world application, you should:
 * - Connect to an actual backend API or database
 * - Validate credentials against stored user data
 * - Generate secure JWT tokens or session tokens
 * - Implement proper error handling and logging
 * - Add rate limiting to prevent brute force attacks
 * - Consider multi-factor authentication
 * 
 * Modify this code based on your project's specific requirements.
 */

import { authLoginDto } from '@/schemas/auth.schema';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const tokenName = process.env.AUTH_COOKIE_NAME || 'auth_token';

    try {
        const body = await req.json();
        const validatedBody = authLoginDto.parse(body);
        const res = NextResponse.json({
            status: true,
            email: validatedBody.email,
        });
        const token = 'sample_token_12345'; // Just for example purposes, in real scenario get from backend

        res.cookies.set(tokenName, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7, // 7 days,
            path: '/',
        });

        return res;
    } catch {
        return NextResponse.json(
            {
                status: false,
                message: 'Invalid credentials or server error',
            },
            { status: 400 },
        );
    }
}
