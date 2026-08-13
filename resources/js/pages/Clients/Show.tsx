import React from 'react';
import { Link, router } from '@inertiajs/react';
import AppLayout from '../../components/AppLayout';
import StatusBadge from '../../components/StatusBadge';
import type { Client } from '../../types';

const money = (value: string | number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
        .format(Number(value));

export default function ClientShow({ client }: { client: Client }) {
    const remove = () => {
        if (window.confirm(`Delete ${client.company_name}? This also removes its projects.`)) {
            router.delete(`/clients/${client.id}`);
        }
    };

    return (
        <AppLayout
            title={client.company_name}
            subtitle={`${client.contact_name} · ${client.email}`}
            actions={
                <>
                    <Link href={`/clients/${client.id}/edit`} className="button secondary">Edit</Link>
                    <button className="button danger" onClick={remove}>Delete</button>
                </>
            }
        >
            <div className="detail-grid">
                <section className="card detail-card">
                    <h2>Client details</h2>
                    <dl>
                        <div><dt>Status</dt><dd><StatusBadge status={client.status} /></dd></div>
                        <div><dt>Industry</dt><dd>{client.industry || '—'}</dd></div>
                        <div><dt>Phone</dt><dd>{client.phone || '—'}</dd></div>
                        <div><dt>Annual value</dt><dd>{money(client.annual_value)}</dd></div>
                    </dl>
                    <div className="notes">
                        <span>Notes</span>
                        <p>{client.notes || 'No notes have been added.'}</p>
                    </div>
                </section>

                <section className="card">
                    <div className="card-header">
                        <div><h2>Projects</h2><p>Work connected to this client</p></div>
                        <Link href="/projects/create">Add project</Link>
                    </div>
                    <div className="project-list">
                        {(client.projects ?? []).length === 0 && (
                            <div className="empty-block">No projects yet.</div>
                        )}
                        {(client.projects ?? []).map((project) => (
                            <div className="project-row" key={project.id}>
                                <div>
                                    <strong>{project.name}</strong>
                                    <span>{project.due_date ?? 'No due date'}</span>
                                </div>
                                <StatusBadge status={project.status} />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
