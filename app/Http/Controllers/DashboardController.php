<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(): Response
    {
        $clients = Client::query()->withCount('projects')->latest()->take(5)->get();

        return Inertia::render('Dashboard', [
            'metrics' => [
                'totalClients' => Client::count(),
                'activeClients' => Client::where('status', 'Active')->count(),
                'pipelineValue' => (float) Client::sum('annual_value'),
                'openProjects' => Project::whereIn('status', ['Planning', 'In Progress'])->count(),
            ],
            'recentClients' => $clients,
            'upcomingProjects' => Project::query()
                ->with('client:id,company_name')
                ->whereNotNull('due_date')
                ->whereIn('status', ['Planning', 'In Progress'])
                ->orderBy('due_date')
                ->take(5)
                ->get(),
        ]);
    }
}
