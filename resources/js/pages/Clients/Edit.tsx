import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import AppLayout from '../../components/AppLayout';
import ClientForm from '../../components/ClientForm';
import type { Client } from '../../types';

export default function EditClient({ client }: { client: Client }) {
    const { data, setData, put, processing, errors } = useForm({
        company_name: client.company_name,
        contact_name: client.contact_name,
        email: client.email,
        phone: client.phone ?? '',
        industry: client.industry ?? '',
        status: client.status,
        annual_value: String(client.annual_value),
        notes: client.notes ?? '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/clients/${client.id}`);
    };

    return (
        <AppLayout title="Edit Client" subtitle={`Update ${client.company_name}.`}>
            <section className="card form-card">
                <form onSubmit={submit}>
                    <ClientForm data={data} setData={setData} errors={errors} />
                    <div className="form-actions">
                        <button className="button primary" disabled={processing}>Save changes</button>
                        <Link href={`/clients/${client.id}`} className="button secondary">Cancel</Link>
                    </div>
                </form>
            </section>
        </AppLayout>
    );
}
