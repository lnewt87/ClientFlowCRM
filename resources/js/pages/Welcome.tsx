import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Client Management Portal" />
            <div className="welcome">
                <div className="shell">
                    <header className="welcome-nav">
                        <div className="brand">
                            <span className="brand-mark">CF</span>
                            <span>ClientFlow</span>
                        </div>
                        <Link href="/login" className="button ghost">Sign in</Link>
                    </header>

                    <section className="hero">
                        <div className="hero-copy">
                            <span className="eyebrow">CLIENT OPERATIONS</span>
                            <h1>Keep clients, projects, and pipeline in one place.</h1>
                            <p>
                                ClientFlow is a lightweight CRM built with Laravel, React,
                                Inertia, and SQLite for managing client relationships and project delivery.
                            </p>
                            <div className="hero-actions">
                                <Link href="/login" className="button primary large">Open dashboard</Link>
                                <a href="#features" className="button secondary large">View features</a>
                            </div>
                        </div>

                        <div className="hero-card">
                            <div className="mini-label">Portfolio application</div>
                            <div className="stack-list">
                                <div><strong>Backend</strong><span>Laravel / PHP</span></div>
                                <div><strong>Frontend</strong><span>React + Inertia</span></div>
                                <div><strong>Database</strong><span>SQLite</span></div>
                                <div><strong>Deployment</strong><span>Docker ready</span></div>
                            </div>
                        </div>
                    </section>

                    <section className="feature-section" id="features">
                        <div className="feature">
                            <span>01</span>
                            <h3>Client CRUD</h3>
                            <p>Create, view, edit, search, filter, and remove client records.</p>
                        </div>
                        <div className="feature">
                            <span>02</span>
                            <h3>Project Tracking</h3>
                            <p>Connect projects to clients and track status, due dates, and budgets.</p>
                        </div>
                        <div className="feature">
                            <span>03</span>
                            <h3>Dashboard Metrics</h3>
                            <p>See active clients, pipeline value, and current project workload.</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
