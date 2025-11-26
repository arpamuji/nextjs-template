/**
 * Example Authentication Mutations Service
 * 
 * This file demonstrates how to handle write operations (login, register, logout)
 * using TanStack Query mutations.
 * 
 * In a real-world application, you should:
 * - Add proper error handling and retry logic
 * - Implement request/response interceptors
 * - Add loading states and optimistic updates
 * - Handle network errors gracefully
 * - Add analytics or logging for user actions
 * - Implement token refresh logic
 * 
 * Modify this code based on your project's specific requirements.
 */

import { clientFetch } from '@/lib/axios';
import type { LoginFormValues, RegisterFormValues } from '@/types/auth.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';

async function login(payload: LoginFormValues) {
    const res = await clientFetch.post('/auth/login', payload);
    return res.data;
}
async function register(payload: RegisterFormValues) {
    const res = await clientFetch.post('/auth/register', payload);
    return res.data;
}
async function logout() {
    const res = await clientFetch.post('/auth/logout');
    return res.data;
}

export function useAuthLogin() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: login,
        onSuccess: (response) => {
            queryClient.invalidateQueries({ queryKey: ['me'] });

            return response;
        },
    });
}

export function useAuthRegister() {
    return useMutation({
        mutationFn: register,
    });
}

export function useAuthLogout() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: logout,
        onSuccess: () => {
            queryClient.setQueryData(['me'], null);
            queryClient.clear();
        },
    });
}
