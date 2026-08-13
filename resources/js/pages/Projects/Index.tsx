import React from 'react';
import { Link, router } from '@inertiajs/react';
import AppLayout from '../../components/AppLayout';
import StatusBadge from '../../components/StatusBadge';
import type { Project } from '../../types';

const money = (value: string | number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
        .format(Number(value));

export default function ProjectsIndex({ projects }: { projects: Project[] }) {
    const remove = (project: Project) => {
        if (window.confirm(`Delete project "${project.name}"?`)) {
            router.delete(`/projects/${project.id}`);
        }
    };

    return (
        <AppLayout
            title="Projects"
            subtitle="Track client work, budgets, due dates, and delivery status."
            actions={<Link href="/projects/create" className="button primary">Add project</Link>}
        >
            <section className="card">
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Client</th>
                                <th>Status</th>
                                <th>Due date</th>
                                <th>Budget</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                                <tr key={project.id}>
                                    <td><span className="table-title">{project.name}</span></td>
                                    <td>{project.client?.company_name}</td>
                                    <td><StatusBadge status={project.status} /></td>
                                    <td>{project.due_date ?? '—'}</td>
                                    <td>{money(project.budget)}</td>
                                    <td className="align-right row-actions">
                                        <Link href={`/projects/${project.id}/edit`} className="text-link">Edit</Link>
                                        <button className="link-button danger-text" onClick={() => remove(project)}>Delete</button>
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
