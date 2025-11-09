'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Fragment, useState } from 'react';

import LoginForm from './_components/login-form';
import RegisterForm from './_components/register-form';

function AuthPage() {
    const [formMode, setFormMode] = useState<'login' | 'register'>('login');

    return (
        <Fragment>
            <Card className="w-1/3">
                <CardContent>
                    <div className="mb-8 flex flex-row items-center gap-x-4">
                        <Link
                            href="#"
                            className={`text-xl ${formMode === 'login' ? 'text-foreground' : 'text-muted-foreground'}`}
                            onClick={() => setFormMode('login')}
                        >
                            Login
                        </Link>
                        <Separator orientation="vertical" className="h-6!" />
                        <Link
                            href="#"
                            className={`text-xl ${formMode === 'register' ? 'text-foreground' : 'text-muted-foreground'}`}
                            onClick={() => setFormMode('register')}
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
