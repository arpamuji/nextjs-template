import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Eye, EyeClosed, Lock, Mail } from 'lucide-react';
import { useState } from 'react';

function RegisterForm() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <form>
            <FieldSet>
                <FieldGroup>
                    <Field orientation="vertical">
                        <FieldLabel htmlFor="name">Name</FieldLabel>
                        <Input id="name" placeholder="Full name"></Input>
                    </Field>
                    <Field orientation="vertical">
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <InputGroup>
                            <InputGroupInput id="email" placeholder="Email address" />
                            <InputGroupAddon>
                                <Mail />
                            </InputGroupAddon>
                        </InputGroup>
                    </Field>
                    <Field orientation="vertical">
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <InputGroup>
                            <InputGroupInput
                                id="password"
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
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                >
                                    {passwordVisible ? <Eye /> : <EyeClosed />}
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Field>
                    <Field orientation="vertical">
                        <Button type="submit" className="w-full cursor-pointer">
                            Register
                        </Button>
                    </Field>
                </FieldGroup>
            </FieldSet>
        </form>
    );
}

export default RegisterForm;
