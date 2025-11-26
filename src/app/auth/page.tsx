/**
 * Example Auth Route Redirect
 * 
 * This is a demonstration implementation that redirects /auth to /auth/login.
 * 
 * In a real-world application, you should:
 * - Decide if you want a dedicated auth landing page
 * - Redirect based on user authentication state
 * - Consider showing auth options (login/register/SSO)
 * - Add proper error handling
 * 
 * Modify this behavior based on your project's specific auth flow requirements.
 */

import { redirect } from 'next/navigation';

export default function AuthPage() {
    redirect('/auth/login');
}
