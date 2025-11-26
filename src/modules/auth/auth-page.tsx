/**
 * Example Authentication Page Component
 * 
 * This is a demonstration implementation showing how to create a shared
 * authentication page with login/register toggle.
 * 
 * In a real-world application, you should:
 * - Consider separating login and register into distinct pages
 * - Add social authentication options (Google, GitHub, etc.)
 * - Implement password reset flow
 * - Add email verification flow
 * - Include terms of service and privacy policy links
 * - Improve accessibility (ARIA labels, keyboard navigation)
 * - Add loading states and error boundaries
 * - Implement redirect after login based on user role
 * 
 * Modify or replace this page based on your project's specific requirements.
 */

'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useMemo } from 'react';

import LoginForm from './_components/login-form';
import RegisterForm from './_components/register-form';

function AuthPage() {
    const pathname = usePathname();
    const formMode = useMemo(() => {
        return pathname.includes('register') ? 'register' : 'login';
    }, [pathname]);

    return (
        <Fragment>
            <Card className="w-full sm:w-1/2 xl:w-1/3">
                <CardContent>
                    <div className="mb-8 flex flex-row items-center gap-x-4">
                        <Link
                            href="/auth/login"
                            className={`text-xl ${formMode === 'login' ? 'text-foreground' : 'text-muted-foreground'}`}
                        >
                            Login
                        </Link>
                        <Separator orientation="vertical" className="h-6!" />
                        <Link
                            href="/auth/register"
                            className={`text-xl ${formMode === 'register' ? 'text-foreground' : 'text-muted-foreground'}`}
                        >
                            Register
                        </Link>
                    </div>
                    {formMode === 'login' && <LoginForm />}
                    {formMode === 'register' && <RegisterForm />}
                </CardContent>
            </Card>
        </Fragment>
    );
}

export default AuthPage;
