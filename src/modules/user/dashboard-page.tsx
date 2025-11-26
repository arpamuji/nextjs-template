/**
 * Example User Dashboard Page Component
 * 
 * This is a demonstration implementation of a protected user dashboard.
 * 
 * In a real-world application, you should:
 * - Add actual dashboard widgets and statistics
 * - Implement data visualization (charts, graphs)
 * - Add user profile management
 * - Include notifications and activity feeds
 * - Implement proper error boundaries
 * - Add loading skeletons for better UX
 * - Make it responsive for all device sizes
 * - Add role-based content rendering
 * 
 * Modify or replace this page based on your project's specific requirements.
 */

'use client';

import Link from '@/components/custom/link';
import { useAuthLogout } from '@/services/auth-mutations';
import { useAuthUser } from '@/services/auth-queries';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';
import { toast } from 'sonner';

type LogoutEvent = React.MouseEvent<HTMLAnchorElement>;

function DashboardPage() {
    const { data: data, isLoading, error } = useAuthUser();
    const logout = useAuthLogout();
    const router = useRouter();

    const handleLogout = async (e: LogoutEvent) => {
        e.preventDefault();
        try {
            await logout.mutateAsync();
            toast.success('Logged out successfully');
            router.push('/auth/login');
        } catch {
            toast.error('Failed to log out');
        }
    };

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error loading user data.</p>}
            {data && (
                <Fragment>
                    <div className="mb-4">
                        <h1>Welcome to your Dashboard</h1>
                        <p>User Email: {data.email}</p>
                    </div>
                    <Link href="#" onClick={handleLogout}>
                        Logout
                    </Link>
                </Fragment>
            )}
        </div>
    );
}

export default DashboardPage;
