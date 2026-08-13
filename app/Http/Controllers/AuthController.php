<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    public function create(Request $request): Response|RedirectResponse
    {
        if ($request->session()->get('portfolio_authenticated')) {
            return redirect()->route('dashboard');
        }

        return Inertia::render('Auth/Login');
    }

    public function store(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'username' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);

        $expectedUser = env('DEMO_USER', 'demo');
        $expectedPassword = env('DEMO_PASSWORD', 'ClientFlow2026!');

        if (
            ! hash_equals((string) $expectedUser, (string) $credentials['username']) ||
            ! hash_equals((string) $expectedPassword, (string) $credentials['password'])
        ) {
            return back()->withErrors([
                'username' => 'Invalid username or password.',
            ])->onlyInput('username');
        }

        $request->session()->regenerate();
        $request->session()->put('portfolio_authenticated', true);
        $request->session()->put('portfolio_user', [
            'name' => 'Demo Manager',
            'username' => $credentials['username'],
        ]);

        return redirect()->route('dashboard');
    }

    public function destroy(Request $request): RedirectResponse
    {
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('home');
    }
}
