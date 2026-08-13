import React, { PropsWithChildren } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import type { SharedProps } from '../types';

type Props = PropsWithChildren<{
    title: string;
    subtitle?: string;
    actions?: React.ReactNode;
}>;

export default function AppLayout({ title, subtitle, actions, children }: Props) {
    const page = usePage<SharedProps>();
    const path = window.location.pathname;

    const logout = () => router.post('/logout');

    const nav = [
        ['/dashboard', 'Dashboard'],
        ['/clients', 'Clients'],
        ['/projects', 'Projects'],
        ['/about', 'About'],
    ];

    return (
        <>
            <Head title={title} />
            <header className="topbar">
                <div className="shell topbar-inner">
                    <Link href="/dashboard" className="brand">
                        <span className="brand-mark">CF</span>
                        <span>ClientFlow</span>
                    </Link>

                    <nav className="nav-links">
                        {nav.map(([href, label]) => (
                            <Link
                                key={href}
                                href={href}
                                className={path.startsWith(href) ? 'nav-link active' : 'nav-link'}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    <div className="account">
                        <span className="account-name">{page.props.auth?.user?.name ?? 'Manager'}</span>
                        <button className="button ghost small" onClick={logout}>Sign out</button>
                    </div>
                </div>
            </header>

            <main className="shell page">
                <div className="page-heading">
                    <div>
                        <h1>{title}</h1>
                        {subtitle && <p>{subtitle}</p>}
                    </div>
                    {actions && <div className="page-actions">{actions}</div>}
                </div>

                {page.props.flash?.success && (
                    <div className="alert success">{page.props.flash.success}</div>
                )}
                {page.props.flash?.error && (
                    <div className="alert danger">{page.props.flash.error}</div>
                )}

                {children}
            </main>
        </>
    );
}
