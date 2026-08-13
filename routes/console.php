<?php

use Illuminate\Support\Facades\Artisan;

Artisan::command('clientflow:about', function () {
    $this->info('ClientFlow CRM - Laravel + React portfolio application');
})->purpose('Display application information');
