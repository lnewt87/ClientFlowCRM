<?php

namespace Database\Seeders;

use App\Models\Client;
use App\Models\Project;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $northstar = Client::firstOrCreate(
            ['email' => 'maya@northstardigital.test'],
            [
                'company_name' => 'Northstar Digital',
                'contact_name' => 'Maya Chen',
                'phone' => '(555) 014-1182',
                'industry' => 'Digital Services',
                'status' => 'Active',
                'annual_value' => 48000,
                'notes' => 'Quarterly strategy reviews and ongoing web support.',
            ]
        );

        $harbor = Client::firstOrCreate(
            ['email' => 'james@harborbuild.test'],
            [
                'company_name' => 'Harbor Build Co.',
                'contact_name' => 'James Walker',
                'phone' => '(555) 018-2304',
                'industry' => 'Construction',
                'status' => 'Active',
                'annual_value' => 72000,
                'notes' => 'Website modernization and internal client portal.',
            ]
        );

        $lumina = Client::firstOrCreate(
            ['email' => 'sofia@luminahealth.test'],
            [
                'company_name' => 'Lumina Health',
                'contact_name' => 'Sofia Patel',
                'phone' => '(555) 019-8820',
                'industry' => 'Healthcare',
                'status' => 'Prospect',
                'annual_value' => 36000,
                'notes' => 'Discovery phase for a new scheduling experience.',
            ]
        );

        Project::firstOrCreate(
            ['client_id' => $northstar->id, 'name' => 'Analytics Dashboard'],
            [
                'status' => 'In Progress',
                'due_date' => now()->addDays(24)->toDateString(),
                'budget' => 18500,
                'description' => 'Interactive reporting dashboard for campaign and sales performance.',
            ]
        );

        Project::firstOrCreate(
            ['client_id' => $harbor->id, 'name' => 'Customer Portal'],
            [
                'status' => 'Planning',
                'due_date' => now()->addDays(42)->toDateString(),
                'budget' => 32000,
                'description' => 'Secure portal for project updates, documents, and customer communication.',
            ]
        );

        Project::firstOrCreate(
            ['client_id' => $northstar->id, 'name' => 'Website Refresh'],
            [
                'status' => 'Completed',
                'due_date' => now()->subDays(12)->toDateString(),
                'budget' => 12000,
                'description' => 'Responsive redesign and content migration.',
            ]
        );

        // Keep the prospect visible on the dashboard even before a project is created.
        $lumina->touch();
    }
}
