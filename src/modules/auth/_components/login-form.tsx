import Link from '@/components/custom/link';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Lock, LogIn, Mail } from 'lucide-react';
import React from 'react';

function LoginForm() {
    return (
        <form>
            <FieldSet>
                <FieldGroup>
                    <Field orientation="vertical">
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <InputGroup>
                            <InputGroupInput
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                            />
                            <InputGroupAddon>
                                <Mail />
                            </InputGroupAddon>
                        </InputGroup>
                    </Field>
                    <Field orientation="vertical">
                        <div className="flex items-center justify-between">
                            <FieldLabel htmlFor="password">Password</FieldLabel>
                            <Link href="/forgot-password" className="text-foreground text-sm">
                                Forgot password?
                            </Link>
                        </div>
                        <InputGroup>
                            <InputGroupInput
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                            />
                            <InputGroupAddon>
                                <Lock />
                            </InputGroupAddon>
                        </InputGroup>
                    </Field>
                    <Field>
                        <Button type="submit" className="w-full cursor-pointer">
                            <LogIn />
                            Login
                        </Button>
                    </Field>
                </FieldGroup>
            </FieldSet>
        </form>
    );
}

export default LoginForm;
