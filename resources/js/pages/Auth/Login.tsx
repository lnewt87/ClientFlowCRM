import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        username: '',
        password: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <>
            <Head title="Sign in" />
            <div className="login-page">
                <div className="login-panel">
                    <Link href="/" className="brand login-brand">
                        <span className="brand-mark">CF</span>
                        <span>ClientFlow</span>
                    </Link>

                    <h1>Welcome back</h1>
                    <p className="muted">Sign in to manage clients and projects.</p>

                    <form onSubmit={submit} className="login-form">
                        <label className="field">
                            <span>Username</span>
                            <input
                                value={data.username}
                                onChange={(e) => setData('username', e.target.value)}
                                autoComplete="username"
                            />
                            {errors.username && <small className="error-text">{errors.username}</small>}
                        </label>

                        <label className="field">
                            <span>Password</span>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                autoComplete="current-password"
                            />
                            {errors.password && <small className="error-text">{errors.password}</small>}
                        </label>

                        <button className="button primary full-width" disabled={processing}>
                            {processing ? 'Signing in…' : 'Sign in'}
                        </button>
                    </form>

                    <div className="demo-access">
                        <strong>Demo access</strong>
                        <span>demo / ClientFlow2026!</span>
                    </div>
                </div>
            </div>
        </>
    );
}
