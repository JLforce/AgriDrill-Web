# AgriDrill Web HMI

Web application for the AgriDrill autonomous farming robot.

## Stack

- Next.js 14 (App Router)
- JavaScript (ESNext)
- Supabase (PostgreSQL + Realtime)
- Tailwind CSS

## Next.js File Structure

This project follows a standard Next.js 14 App Router structure:

```text
AgriDrill-Web/
	src/
		app/
			api/
				command/route.js
				status/route.js
				telemetry/route.js
			favicon.ico
			globals.css
			layout.js
			page.js
		lib/
			supabase/
				client.js
				server.js
	public/
	docs/
	supabase/
	.env.example
	next.config.mjs
	package.json
	postcss.config.mjs
	tailwind.config.js
```

## Project Status

This repository is initialized for **Phase 1** with:

- Next.js 14 app scaffold
- Supabase client setup (server + browser helpers)
- API contract starter routes:
	- `POST /api/telemetry`
	- `POST /api/command`
	- `GET /api/status`
- Starter SQL schema for:
	- `sessions`
	- `telemetry_events`
	- `planting_logs`
	- `configurations`
	- `fault_logs`

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create local env file:

```bash
cp .env.example .env.local
```

3. Fill in Supabase values in `.env.local`.

4. Run dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Supabase Setup

1. Create a Supabase project.
2. Copy project URL and anon key into `.env.local`.
3. Run SQL in `supabase/schema.sql` inside the Supabase SQL editor.
4. Enable Realtime for `telemetry_events` and `fault_logs` in Supabase dashboard.

## API Contract (Current)

### `POST /api/telemetry`

Inserts telemetry coming from ESP32 relay/app gateway.

Example body:

```json
{
	"session_id": "f95f2d3d-bfbb-4ce0-b5bf-b2f08e2f71cb",
	"holes_drilled": 42,
	"battery_percent": 87,
	"mode": "AUTO",
	"status": "RUNNING",
	"xte": 0.14
}
```

### `POST /api/command`

Forwards dashboard commands to ESP32 endpoint.

Example body:

```json
{
	"command": "STOP",
	"payload": {}
}
```

### `GET /api/status`

Returns service health and key integration checks.

## Notes on JavaScript Choice

The roadmap originally listed TypeScript. This repo is now configured for JavaScript by design, while keeping a structure that can be migrated to TypeScript later if needed.
