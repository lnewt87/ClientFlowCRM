import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import AppLayout from '../../components/AppLayout';
import ProjectForm from '../../components/ProjectForm';

type ClientOption = { id: number; company_name: string };

export default function CreateProject({ clients }: { clients: ClientOption[] }) {
    const { data, setData, post, processing, errors } = useForm({
        client_id: '',
        name: '',
        status: 'Planning',
        due_date: '',
        budget: '0',
        description: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/projects');
    };

    return (
        <AppLayout title="Add Project" subtitle="Create a project and connect it to a client.">
            <section className="card form-card">
                <form onSubmit={submit}>
                    <ProjectForm data={data} setData={setData} errors={errors} clients={clients} />
                    <div className="form-actions">
                        <button className="button primary" disabled={processing}>Create project</button>
                        <Link href="/projects" className="button secondary">Cancel</Link>
                    </div>
                </form>
            </section>
        </AppLayout>
    );
}
