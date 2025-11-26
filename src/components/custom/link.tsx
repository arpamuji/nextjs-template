import { cn } from '@/lib/utils';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';

interface LinkProps extends Omit<NextLinkProps, 'href' | 'className'> {
    href: string;
    className?: string;
    children: ReactNode;
}

function Link({ href, className, children, ...rest }: LinkProps) {
    return (
        <NextLink
            href={href}
            className={cn('cursor-pointer text-blue-500 hover:underline', className)}
            {...rest}
        >
            {children}
        </NextLink>
    );
}

export default Link;
