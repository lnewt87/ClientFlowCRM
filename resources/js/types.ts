export type SharedProps = {
    [key: string]: unknown;
    auth?: {
        user?: {
            name: string;
            username: string;
        } | null;
    };
    flash?: {
        success?: string | null;
        error?: string | null;
    };
};

export type Client = {
    id: number;
    company_name: string;
    contact_name: string;
    email: string;
    phone?: string | null;
    industry?: string | null;
    status: 'Active' | 'Prospect' | 'Inactive';
    annual_value: string | number;
    notes?: string | null;
    projects_count?: number;
    projects?: Project[];
    created_at: string;
    updated_at: string;
};

export type Project = {
    id: number;
    client_id: number;
    name: string;
    status: 'Planning' | 'In Progress' | 'Completed' | 'On Hold';
    due_date?: string | null;
    budget: string | number;
    description?: string | null;
    client?: {
        id: number;
        company_name: string;
    };
};
