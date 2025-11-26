/**
 * Example Login Form Component
 * 
 * This is a demonstration implementation of a login form using TanStack Form
 * and Zod validation.
 * 
 * In a real-world application, you should:
 * - Add remember me functionality
 * - Implement password reset flow
 * - Add social login options (Google, GitHub, etc.)
 * - Implement CAPTCHA for bot protection
 * - Add loading states and skeleton screens
 * - Implement better error handling and user feedback
 * - Add accessibility features (ARIA labels, keyboard navigation)
 * - Consider adding biometric authentication
 * 
 * Modify this component based on your project's specific requirements.
 */

import Link from '@/components/custom/link';
import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { useToggle } from '@/hooks';
import { authLoginRequestDto } from '@/schemas/auth.schema';
import { useAuthLogin } from '@/services/auth-mutations';
import { useForm } from '@tanstack/react-form';
import { Eye, EyeClosed, Lock, LogIn, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

function LoginForm() {
    const [passwordVisible, togglePasswordVisible] = useToggle(false);
    const loginMutation = useAuthLogin();
    const router = useRouter();
    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        validators: {
            onSubmit: authLoginRequestDto,
        },
        onSubmit: async ({ value }) => {
            const payload = {
                email: value.email,
                password: value.password,
            };

            try {
                const data = await loginMutation.mutateAsync(payload);

                if (data?.status) {
                    toast.success('Login successful!');
                    router.push('/user');
                } else {
                    toast.error(data?.message || 'Login failed. Please try again.');
                }
            } catch {
                toast.error('Login failed. Please try again.');
            }
        },
    });

    return (
        <form
            id="login-form"
            onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
            }}
        >
            <FieldSet>
                <FieldGroup>
                    <form.Field
                        name="email"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid;

                            return (
                                <Field orientation="vertical" data-invalid={isInvalid}>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <InputGroup>
                                        <InputGroupInput
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            type="email"
                                            placeholder="Enter your email"
                                            aria-invalid={isInvalid}
                                        />
                                        <InputGroupAddon>
                                            <Mail />
                                        </InputGroupAddon>
                                    </InputGroup>
                                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                </Field>
                            );
                        }}
                    />
                    <form.Field
                        name="password"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid;
                            return (
                                <Field orientation="vertical" data-invalid={isInvalid}>
                                    <div className="flex items-center justify-between">
                                        <FieldLabel htmlFor="password">Password</FieldLabel>
                                        <Link
                                            href="/forgot-password"
                                            className="text-foreground text-sm"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <InputGroup>
                                        <InputGroupInput
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            type={passwordVisible ? 'text' : 'password'}
                                            placeholder="Enter your password"
                                            aria-invalid={isInvalid}
                                        />
                                        <InputGroupAddon>
                                            <Lock />
                                        </InputGroupAddon>
                                        <InputGroupAddon align="inline-end">
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="cursor-pointer hover:bg-transparent"
                                                onClick={togglePasswordVisible}
                                            >
                                                {passwordVisible ? <Eye /> : <EyeClosed />}
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                </Field>
                            );
                        }}
                    />
                    <Field>
                        <Button
                            type="submit"
                            className="w-full cursor-pointer"
                            form="login-form"
                            disabled={loginMutation.isPending}
                        >
                            <LogIn />
                            {loginMutation.isPending ? 'Logging in...' : 'Login'}
                        </Button>
                    </Field>
                </FieldGroup>
            </FieldSet>
        </form>
    );
}

export default LoginForm;
