import React, { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import AppLayout from '../../components/AppLayout';
import StatusBadge from '../../components/StatusBadge';
import type { Client } from '../../types';

type Props = {
    clients: Client[];
    filters: {
        q: string;
        status: string;
    };
};

const money = (value: string | number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
        .format(Number(value));

export default function ClientsIndex({ clients, filters }: Props) {
    const [q, setQ] = useState(filters.q);
    const [status, setStatus] = useState(filters.status);

    const search = (e: React.FormEvent) => {
        e.preventDefault();
        router.get('/clients', { q, status }, { preserveState: true, replace: true });
    };

    return (
        <AppLayout
            title="Clients"
            subtitle="Manage client relationships, value, and project activity."
            actions={<Link href="/clients/create" className="button primary">Add client</Link>}
        >
            <form className="filters" onSubmit={search}>
                <input
                    placeholder="Search company, contact, or email"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="">All statuses</option>
                    <option>Active</option>
                    <option>Prospect</option>
                    <option>Inactive</option>
                </select>
                <button className="button secondary">Filter</button>
            </form>

            <section className="card">
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Client</th>
                                <th>Industry</th>
                                <th>Status</th>
                                <th>Projects</th>
                                <th>Annual value</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.length === 0 && (
                                <tr><td colSpan={6} className="empty">No clients matched your filters.</td></tr>
                            )}
                            {clients.map((client) => (
                                <tr key={client.id}>
                                    <td>
                                        <Link href={`/clients/${client.id}`} className="table-title">
                                            {client.company_name}
                                        </Link>
                                        <small>{client.contact_name} · {client.email}</small>
                                    </td>
                                    <td>{client.industry || '—'}</td>
                                    <td><StatusBadge status={client.status} /></td>
                                    <td>{client.projects_count ?? 0}</td>
                                    <td>{money(client.annual_value)}</td>
                                    <td className="align-right">
                                        <Link href={`/clients/${client.id}/edit`} className="text-link">Edit</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </AppLayout>
    );
}
