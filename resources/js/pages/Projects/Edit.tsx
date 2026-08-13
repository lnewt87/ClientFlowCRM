import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import AppLayout from '../../components/AppLayout';
import ProjectForm from '../../components/ProjectForm';
import type { Project } from '../../types';

type ClientOption = { id: number; company_name: string };

export default function EditProject({
    project,
    clients,
}: {
    project: Project;
    clients: ClientOption[];
}) {
    const { data, setData, put, processing, errors } = useForm({
        client_id: String(project.client_id),
        name: project.name,
        status: project.status,
        due_date: project.due_date ?? '',
        budget: String(project.budget),
        description: project.description ?? '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/projects/${project.id}`);
    };

    return (
        <AppLayout title="Edit Project" subtitle={`Update ${project.name}.`}>
            <section className="card form-card">
                <form onSubmit={submit}>
                    <ProjectForm data={data} setData={setData} errors={errors} clients={clients} />
                    <div className="form-actions">
                        <button className="button primary" disabled={processing}>Save changes</button>
                        <Link href="/projects" className="button secondary">Cancel</Link>
                    </div>
                </form>
            </section>
        </AppLayout>
    );
}
