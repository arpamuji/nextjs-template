/**
 * Example Authentication Queries Service
 * 
 * This file demonstrates how to handle read operations (fetching user data)
 * using TanStack Query.
 * 
 * In a real-world application, you should:
 * - Configure appropriate cache times based on data volatility
 * - Add error boundaries and fallback UI
 * - Implement proper retry strategies
 * - Handle authentication errors (401/403)
 * - Add request cancellation for unmounted components
 * - Consider using suspense for better loading states
 * 
 * Modify this code based on your project's specific requirements.
 */

import { clientFetch } from '@/lib/axios';
import type { User } from '@/types/auth.type';
import { useQuery } from '@tanstack/react-query';

async function getAuthUser(): Promise<User> {
    const res = await clientFetch.get('/auth/me');
    return res.data;
}

export function useAuthUser() {
    return useQuery({
        queryKey: ['me'],
        queryFn: getAuthUser,
        retry: false,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}
