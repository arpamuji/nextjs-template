/**
 * Example useToggle Custom Hook
 * 
 * This is a demonstration implementation of a reusable toggle hook
 * for managing boolean state.
 * 
 * In a real-world application, you can:
 * - Use this hook as-is for toggle functionality
 * - Extend it with additional features (callbacks, persistence)
 * - Create similar custom hooks for other common patterns
 * - Add TypeScript generics for more flexibility
 * 
 * Modify or extend this hook based on your project's specific requirements.
 */

import { useState } from 'react';

export function useToggle(initialValue = false): [boolean, () => void, (value: boolean) => void] {
    const [state, setState] = useState(initialValue);

    const toggle = () => setState((prev) => !prev);
    const set = (value: boolean) => setState(value);

    return [state, toggle, set];
}
