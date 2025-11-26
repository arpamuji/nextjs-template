/**
 * Example TanStack Query Provider
 * 
 * This is a demonstration implementation showing how to configure
 * TanStack Query (React Query) for your application.
 * 
 * In a real-world application, you should:
 * - Adjust staleTime and cacheTime based on your data requirements
 * - Add React Query DevTools in development mode
 * - Configure retry logic and error handling
 * - Set up default mutations options
 * - Add global query/mutation callbacks
 * - Configure refetchOnWindowFocus, refetchOnReconnect
 * - Add persistence for offline support if needed
 * 
 * Modify this provider based on your project's specific requirements.
 */

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, useState } from 'react';

interface ReactQueryProviderProps {
    children: React.ReactNode;
}

const ReactQueryProvider: FC<ReactQueryProviderProps> = ({ children }) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 5 * 60 * 1000,
                    },
                },
            }),
    );

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
