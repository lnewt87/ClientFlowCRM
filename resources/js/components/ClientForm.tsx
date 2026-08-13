import React from 'react';

type FormData = {
    company_name: string;
    contact_name: string;
    email: string;
    phone: string;
    industry: string;
    status: string;
    annual_value: string;
    notes: string;
};

type Props = {
    data: FormData;
    setData: (key: keyof FormData, value: string) => void;
    errors: Partial<Record<keyof FormData, string>>;
};

export default function ClientForm({ data, setData, errors }: Props) {
    const field = (name: keyof FormData, label: string, type = 'text') => (
        <label className="field">
            <span>{label}</span>
            <input
                type={type}
                value={data[name]}
                onChange={(e) => setData(name, e.target.value)}
            />
            {errors[name] && <small className="error-text">{errors[name]}</small>}
        </label>
    );

    return (
        <div className="form-grid">
            {field('company_name', 'Company name')}
            {field('contact_name', 'Primary contact')}
            {field('email', 'Email', 'email')}
            {field('phone', 'Phone')}
            {field('industry', 'Industry')}

            <label className="field">
                <span>Status</span>
                <select value={data.status} onChange={(e) => setData('status', e.target.value)}>
                    <option>Active</option>
                    <option>Prospect</option>
                    <option>Inactive</option>
                </select>
                {errors.status && <small className="error-text">{errors.status}</small>}
            </label>

            <label className="field">
                <span>Annual value</span>
                <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={data.annual_value}
                    onChange={(e) => setData('annual_value', e.target.value)}
                />
                {errors.annual_value && <small className="error-text">{errors.annual_value}</small>}
            </label>

            <label className="field full">
                <span>Notes</span>
                <textarea
                    rows={5}
                    value={data.notes}
                    onChange={(e) => setData('notes', e.target.value)}
                />
                {errors.notes && <small className="error-text">{errors.notes}</small>}
            </label>
        </div>
    );
}
