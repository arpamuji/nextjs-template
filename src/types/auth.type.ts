/**
 * Example Authentication Type Definitions
 * 
 * This file demonstrates how to define TypeScript types for authentication-related data.
 * 
 * In a real-world application, you should:
 * - Add more user properties (roles, permissions, profile data)
 * - Define types for JWT tokens and refresh tokens
 * - Add types for authentication responses and errors
 * - Include metadata (created_at, updated_at, last_login)
 * - Define types for different authentication methods
 * - Add utility types for type safety
 * 
 * Modify or extend these types based on your project's specific requirements.
 */

export interface LoginFormValues {
    email: string;
    password: string;
}
export interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
}

export interface User {
    id?: string;
    name: string;
    email: string;
}
