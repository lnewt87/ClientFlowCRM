import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import AppLayout from '../../components/AppLayout';
import ClientForm from '../../components/ClientForm';

export default function CreateClient() {
    const { data, setData, post, processing, errors } = useForm({
        company_name: '',
        contact_name: '',
        email: '',
        phone: '',
        industry: '',
        status: 'Prospect',
        annual_value: '0',
        notes: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/clients');
    };

    return (
        <AppLayout title="Add Client" subtitle="Create a new client relationship record.">
            <section className="card form-card">
                <form onSubmit={submit}>
                    <ClientForm data={data} setData={setData} errors={errors} />
                    <div className="form-actions">
                        <button className="button primary" disabled={processing}>Create client</button>
                        <Link href="/clients" className="button secondary">Cancel</Link>
                    </div>
                </form>
            </section>
        </AppLayout>
    );
}
