/**
 * Example Registration Form Component
 * 
 * This is a demonstration implementation of a registration form using TanStack Form
 * and Zod validation.
 * 
 * In a real-world application, you should:
 * - Add password confirmation field
 * - Implement email verification flow
 * - Add terms of service and privacy policy checkboxes
 * - Implement CAPTCHA for bot protection
 * - Add social registration options (Google, GitHub, etc.)
 * - Implement better error handling and user feedback
 * - Add accessibility features (ARIA labels, keyboard navigation)
 * - Consider adding phone number verification
 * - Add progress indicators for multi-step registration
 * 
 * Modify this component based on your project's specific requirements.
 */

import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { useToggle } from '@/hooks';
import { authRegisterRequestDto } from '@/schemas/auth.schema';
import { useAuthRegister } from '@/services/auth-mutations';
import { useForm } from '@tanstack/react-form';
import { Eye, EyeClosed, Lock, Mail, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

function RegisterForm() {
    const [passwordVisible, togglePasswordVisible] = useToggle(false);
    const router = useRouter();
    const registerMutation = useAuthRegister();
    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
        validators: {
            onSubmit: authRegisterRequestDto,
        },
        onSubmit: async ({ value }) => {
            const payload = {
                name: value.name,
                email: value.email,
                password: value.password,
            };

            try {
                const data = await registerMutation.mutateAsync(payload);

                if (data?.status) {
                    toast.success('Registration successful! Please log in.');
                    router.push('/auth/login');
                }
            } catch {
                toast.error('Registration failed. Please try again.');
            }
        },
    });

    return (
        <form
            id="register-form"
            onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
            }}
        >
            <FieldSet>
                <FieldGroup>
                    <form.Field
                        name="name"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid;

                            return (
                                <Field orientation="vertical" data-invalid={isInvalid}>
                                    <FieldLabel htmlFor="name">Name</FieldLabel>
                                    <InputGroup>
                                        <InputGroupInput
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            placeholder="Full name"
                                            aria-invalid={isInvalid}
                                        />
                                        <InputGroupAddon>
                                            <User />
                                        </InputGroupAddon>
                                    </InputGroup>
                                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                </Field>
                            );
                        }}
                    />
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
                                            placeholder="Email address"
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
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <InputGroup>
                                        <InputGroupInput
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            type={passwordVisible ? 'text' : 'password'}
                                            placeholder="Create a password"
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
                    <Field orientation="vertical">
                        <Button
                            type="submit"
                            className="w-full cursor-pointer"
                            form="register-form"
                            disabled={registerMutation.isPending}
                        >
                            {registerMutation.isPending ? 'Registering...' : 'Register'}
                        </Button>
                    </Field>
                </FieldGroup>
            </FieldSet>
        </form>
    );
}

export default RegisterForm;
