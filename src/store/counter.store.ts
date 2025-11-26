/**
 * Example Zustand Counter Store
 * 
 * This is a demonstration implementation showing how to create a Zustand store
 * for managing client-side state.
 * 
 * In a real-world application, you should:
 * - Replace this example store with your actual application state
 * - Consider using middleware (persist, devtools, immer)
 * - Implement proper TypeScript types
 * - Add selectors for optimized re-renders
 * - Consider splitting into multiple stores by domain
 * - Add state persistence if needed (localStorage, sessionStorage)
 * - Implement state reset and cleanup logic
 * 
 * Modify or replace this store based on your project's specific requirements.
 */

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    setCount: (count: number) => void;
}

export const useCounterStore = create<CounterState>()(
    devtools(
        (set) => ({
            count: 0,
            increment: () => set((state) => ({ count: state.count + 1 })),
            decrement: () => set((state) => ({ count: state.count - 1 })),
            reset: () => set({ count: 0 }),
            setCount: (count: number) => set({ count }),
        }),
        {
            name: 'counter-store',
        },
    ),
);