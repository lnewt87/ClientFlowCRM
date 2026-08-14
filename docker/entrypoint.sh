#!/bin/sh
set -e

export APP_KEY="${APP_KEY:-base64:f1pkn2HwfyrRgvGV/wBH+ghEUDp985B+QTAxLEOXeEg=}"
export DB_CONNECTION="${DB_CONNECTION:-sqlite}"
export DB_DATABASE="${DB_DATABASE:-/app/database/database.sqlite}"
export SESSION_DRIVER="${SESSION_DRIVER:-file}"
export CACHE_STORE="${CACHE_STORE:-file}"
export LOG_CHANNEL="${LOG_CHANNEL:-stderr}"

mkdir -p "$(dirname "$DB_DATABASE")"
touch "$DB_DATABASE"

mkdir -p \
  /app/storage/framework/cache/data \
  /app/storage/framework/sessions \
  /app/storage/framework/views \
  /app/storage/logs \
  /app/bootstrap/cache

chmod -R 777 /app/storage /app/bootstrap/cache /app/database

php artisan package:discover --ansi
php artisan migrate --force
php artisan db:seed --force
php artisan optimize:clear

exec php artisan serve --host=0.0.0.0 --port="${PORT:-8080}"
