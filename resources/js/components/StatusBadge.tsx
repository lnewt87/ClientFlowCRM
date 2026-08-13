import React from 'react';

export default function StatusBadge({ status }: { status: string }) {
    const slug = status.toLowerCase().replace(/\s+/g, '-');
    return <span className={`status ${slug}`}>{status}</span>;
}
