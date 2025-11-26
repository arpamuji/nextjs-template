/**
 * Example Authentication Validation Schemas
 * 
 * This file demonstrates how to define Zod schemas for validating
 * authentication-related data.
 * 
 * In a real-world application, you should:
 * - Adjust validation rules based on your security requirements
 * - Add custom error messages for better UX
 * - Implement password strength meters
 * - Add email format validation with DNS lookup
 * - Consider adding username validation
 * - Add custom validators for business rules
 * - Implement field-level async validation if needed
 * 
 * Modify these schemas based on your project's specific requirements.
 */

import z from 'zod';

export const authLoginRequestDto = z.object({
    email: z
        .email({ message: 'Please check your credential' })
        .nonempty({ message: 'Please check your credential' }),
    password: z
        .string()
        .nonempty({ message: 'Please check your credential' }),
});

export const authLoginResponseDto = z.object({
    data: z.object({
        access_token: z.string(),
    }),
});

export const authLoginDto = z.object({
    email: z.email(),
    password: z.string().min(8),
});

export const authRegisterRequestDto = z.object({
    name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long' })
        .max(100, { message: 'Name must be at most 100 characters long' }),
    email: z
        .email({ message: 'Invalid email address' })
        .nonempty({ message: 'Please enter your email' }),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
            message: 'Password must contain uppercase letters, lowercase letters, and numbers',
        })
        .nonempty({ message: 'Please enter your password' }),
});

export const authRegisterResponseDto = z.object({
    data: z.object({
        access_token: z.string(),
    }),
});

export const authRegisterDto = z.object({
    name: z.string().min(2).max(100),
    email: z.email(),
    password: z.string().min(8),
});
