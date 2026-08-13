FROM composer:2 AS php-dependencies
WORKDIR /app

COPY . .
RUN composer install \
    --no-dev \
    --no-interaction \
    --prefer-dist \
    --optimize-autoloader

FROM node:22-alpine AS frontend
WORKDIR /app

COPY package.json ./
RUN npm install

COPY vite.config.ts tsconfig.json ./
COPY resources ./resources
COPY public ./public

RUN npm run build

FROM php:8.3-cli-bookworm AS runtime

RUN apt-get update \
    && apt-get install -y --no-install-recommends libsqlite3-dev libonig-dev \
    && docker-php-ext-install mbstring pdo_sqlite \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=php-dependencies /app /app
COPY --from=frontend /app/public/build /app/public/build

RUN chmod +x /app/docker/entrypoint.sh \
    && mkdir -p \
       /app/storage/framework/cache/data \
       /app/storage/framework/sessions \
       /app/storage/framework/views \
       /app/storage/logs \
       /app/bootstrap/cache \
       /app/database

ENV APP_ENV=production \
    APP_DEBUG=false \
    LOG_CHANNEL=stderr \
    DB_CONNECTION=sqlite \
    DB_DATABASE=/app/database/database.sqlite \
    SESSION_DRIVER=file \
    CACHE_STORE=file \
    QUEUE_CONNECTION=sync

EXPOSE 8080

ENTRYPOINT ["/app/docker/entrypoint.sh"]
