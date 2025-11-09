import Link from '@/components/custom/link';
import { Fragment } from 'react';

export default function Home() {
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
                <Link href="/auth">Login</Link>
                <Link href="/auth">Register</Link>
            </div>
        </Fragment>
    );
}
