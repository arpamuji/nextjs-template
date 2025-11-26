/**
 * Example Home Page Component
 * 
 * This is a demonstration implementation of a landing/home page.
 * 
 * In a real-world application, you should:
 * - Replace with your actual landing page content
 * - Add hero sections, features, testimonials
 * - Implement SEO optimization (meta tags, structured data)
 * - Add call-to-action buttons
 * - Include marketing content and branding
 * - Optimize for performance (lazy loading, image optimization)
 * - Make it responsive for all device sizes
 * 
 * Modify or replace this page based on your project's specific requirements.
 */

import Link from '@/components/custom/link';
import { Fragment } from 'react';

function HomePage() {
    return (
        <Fragment>
            <div>
                <h1 className="text-fun-blue-600 text-4xl font-medium">
                    This is Next JS Template.
                </h1>
                <p className="text-center text-sm text-gray-500">
                    Welcome to Next JS Template, get started by editing this page!
                </p>
            </div>
            <div className="text-fun-blue-500 flex flex-row items-center justify-between gap-x-16">
                <Link href="/auth/login">Login</Link>
                <Link href="/auth/register">Register</Link>
            </div>
        </Fragment>
    );
}

export default HomePage;
