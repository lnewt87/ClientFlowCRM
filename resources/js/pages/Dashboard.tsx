import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '../components/AppLayout';
import StatusBadge from '../components/StatusBadge';
import type { Client, Project } from '../types';

type Props = {
    metrics: {
        totalClients: number;
        activeClients: number;
        pipelineValue: number;
        openProjects: number;
    };
    recentClients: Client[];
    upcomingProjects: Project[];
};

const money = (value: number | string) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
        .format(Number(value));

export default function Dashboard({ metrics, recentClients, upcomingProjects }: Props) {
    return (
        <AppLayout
            title="Dashboard"
            subtitle="A quick view of client relationships and delivery activity."
            actions={<Link href="/clients/create" className="button primary">Add client</Link>}
        >
            <div className="metrics">
                <div className="metric"><span>Total clients</span><strong>{metrics.totalClients}</strong></div>
                <div className="metric"><span>Active clients</span><strong>{metrics.activeClients}</strong></div>
                <div className="metric"><span>Pipeline value</span><strong>{money(metrics.pipelineValue)}</strong></div>
                <div className="metric"><span>Open projects</span><strong>{metrics.openProjects}</strong></div>
            </div>

            <div className="two-column">
                <section className="card">
                    <div className="card-header">
                        <div><h2>Recent clients</h2><p>Latest relationship activity</p></div>
                        <Link href="/clients">View all</Link>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead><tr><th>Company</th><th>Status</th><th>Projects</th></tr></thead>
                            <tbody>
                                {recentClients.map((client) => (
                                    <tr key={client.id}>
                                        <td>
                                            <Link href={`/clients/${client.id}`} className="table-title">
                                                {client.company_name}
                                            </Link>
                                            <small>{client.contact_name}</small>
                                        </td>
                                        <td><StatusBadge status={client.status} /></td>
                                        <td>{client.projects_count ?? 0}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="card">
                    <div className="card-header">
                        <div><h2>Upcoming projects</h2><p>Open work by due date</p></div>
                        <Link href="/projects">View all</Link>
                    </div>
                    <div className="project-list">
                        {upcomingProjects.map((project) => (
                            <div className="project-row" key={project.id}>
                                <div>
                                    <strong>{project.name}</strong>
                                    <span>{project.client?.company_name}</span>
                                </div>
                                <div className="project-meta">
                                    <StatusBadge status={project.status} />
                                    <span>{project.due_date ?? 'No date'}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
