import React from 'react';

type ClientOption = {
    id: number;
    company_name: string;
};

type FormData = {
    client_id: string;
    name: string;
    status: string;
    due_date: string;
    budget: string;
    description: string;
};

type Props = {
    data: FormData;
    setData: (key: keyof FormData, value: string) => void;
    errors: Partial<Record<keyof FormData, string>>;
    clients: ClientOption[];
};

export default function ProjectForm({ data, setData, errors, clients }: Props) {
    return (
        <div className="form-grid">
            <label className="field">
                <span>Client</span>
                <select value={data.client_id} onChange={(e) => setData('client_id', e.target.value)}>
                    <option value="">Select a client</option>
                    {clients.map((client) => (
                        <option key={client.id} value={client.id}>{client.company_name}</option>
                    ))}
                </select>
                {errors.client_id && <small className="error-text">{errors.client_id}</small>}
            </label>

            <label className="field">
                <span>Project name</span>
                <input value={data.name} onChange={(e) => setData('name', e.target.value)} />
                {errors.name && <small className="error-text">{errors.name}</small>}
            </label>

            <label className="field">
                <span>Status</span>
                <select value={data.status} onChange={(e) => setData('status', e.target.value)}>
                    <option>Planning</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>On Hold</option>
                </select>
                {errors.status && <small className="error-text">{errors.status}</small>}
            </label>

            <label className="field">
                <span>Due date</span>
                <input type="date" value={data.due_date} onChange={(e) => setData('due_date', e.target.value)} />
                {errors.due_date && <small className="error-text">{errors.due_date}</small>}
            </label>

            <label className="field">
                <span>Budget</span>
                <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={data.budget}
                    onChange={(e) => setData('budget', e.target.value)}
                />
                {errors.budget && <small className="error-text">{errors.budget}</small>}
            </label>

            <label className="field full">
                <span>Description</span>
                <textarea
                    rows={5}
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />
                {errors.description && <small className="error-text">{errors.description}</small>}
            </label>
        </div>
    );
}
