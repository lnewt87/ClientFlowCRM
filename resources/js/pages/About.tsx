import React from 'react';
import AppLayout from '../components/AppLayout';

export default function About() {
    return (
        <AppLayout
            title="About ClientFlow"
            subtitle="A full-stack Laravel and React portfolio application."
        >
            <div className="about-grid">
                <section className="card prose-card">
                    <h2>Application</h2>
                    <p>
                        ClientFlow demonstrates a client-management workflow with authenticated access,
                        relational data, validation, CRUD operations, filtering, and dashboard reporting.
                    </p>
                    <p>
                        Laravel handles routing, controllers, validation, sessions, and persistence.
                        React renders the interactive interface through Inertia, allowing the project
                        to behave like a modern single-page application without a separate API layer.
                    </p>
                </section>

                <section className="card prose-card">
                    <h2>Technology</h2>
                    <ul className="tech-list">
                        <li><strong>PHP</strong><span>Application language</span></li>
                        <li><strong>Laravel 13</strong><span>Backend framework</span></li>
                        <li><strong>React 19</strong><span>Frontend UI</span></li>
                        <li><strong>Inertia</strong><span>Laravel / React bridge</span></li>
                        <li><strong>SQLite</strong><span>Relational database</span></li>
                        <li><strong>Vite</strong><span>Frontend build tooling</span></li>
                    </ul>
                </section>
            </div>
        </AppLayout>
    );
}
