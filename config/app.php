<?php

return [
    'name' => env('APP_NAME', 'ClientFlow'),
    'env' => env('APP_ENV', 'production'),
    'debug' => (bool) env('APP_DEBUG', false),
    'url' => env('APP_URL', 'http://localhost'),
    'timezone' => 'America/New_York',
    'locale' => 'en',
    'fallback_locale' => 'en',
    'faker_locale' => 'en_US',
    'cipher' => 'AES-256-CBC',
    'key' => env('APP_KEY', 'base64:f1pkn2HwfyrRgvGV/wBH+ghEUDp985B+QTAxLEOXeEg='),
    'previous_keys' => array_filter(explode(',', env('APP_PREVIOUS_KEYS', ''))),
    'maintenance' => [
        'driver' => 'file',
        'store' => 'database',
    ],
];
