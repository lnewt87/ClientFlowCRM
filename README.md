# ClientFlow CRM

ClientFlow is a full-stack client and project management application built with Laravel and React. It demonstrates a practical business workflow with authenticated access, relational data, CRUD operations, validation, search/filtering, and dashboard reporting.

## Live Demo

[Launch ClientFlow CRM](https://clientflowcrm-production.up.railway.app/)

<img width="1366" height="633" alt="ScreenShot Tool -20260817175424" src="https://github.com/user-attachments/assets/a39df9da-ad00-4249-b3a1-65649cc8957e" />


## Live application features

- Authenticated management dashboard
- Client create, read, update, and delete workflows
- Client search and status filtering
- Project create, update, and delete workflows
- Client-to-project relational data
- Dashboard metrics for clients, project workload, and pipeline value
- Server-side validation with inline React error feedback
- Responsive React interface
- SQLite persistence
- Docker deployment configuration

## Technology

- PHP 8.3+
- Laravel 13
- React 19
- Inertia
- TypeScript
- Vite
- SQLite
- Docker

Laravel's official React approach uses Inertia to combine server-side Laravel routing and controllers with a React frontend. ClientFlow follows that architecture.

## Demo access

Username: `demo`

Password: `ClientFlow2026!`

For a public deployment, the credentials can be changed with:

- `DEMO_USER`
- `DEMO_PASSWORD`

## Architecture

```text
Browser
   ↓
React + Inertia
   ↓
Laravel Routes / Controllers
   ↓
Eloquent Models
   ↓
SQLite
```

Laravel owns routing, validation, sessions, business logic, and persistence. React owns the user interface. Inertia passes server-side data directly to React pages without requiring a separate REST API for this application.

## Main application areas

### Dashboard
Shows total clients, active clients, pipeline value, open projects, recent clients, and upcoming projects.

### Clients
Supports CRUD operations, search, status filtering, validation, relationship details, and annual account value.

### Projects
Tracks client projects with status, due date, budget, description, and client association.

## Local development

Requirements:

- PHP 8.3+
- Composer
- Node.js 22+
- SQLite

```bash
cp .env.example .env
composer install
npm install
php artisan key:generate
touch database/database.sqlite
php artisan migrate --seed
npm run build
php artisan serve
```

For frontend development, run `npm run dev` in a second terminal.

## Docker / Railway deployment

The repository includes a multi-stage `Dockerfile` that installs PHP dependencies, builds the React frontend, configures SQLite, runs migrations/seeding, and starts Laravel using Railway's `PORT` variable.

Deploy by connecting the GitHub repository to Railway and generating a public domain after the build succeeds.

For persistent SQLite data across redeployments, attach a Railway volume and set `DB_DATABASE` to a database file inside that mounted path.

## Project highlights

- Full-stack Laravel + React application
- MVC-style Laravel backend with React pages
- Eloquent one-to-many relationship between clients and projects
- Server-side form validation
- Session-based authentication for the public portfolio demo
- Responsive business-oriented interface
- Containerized production deployment
