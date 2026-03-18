# Next.js App

This repository uses Next.js with the App Router.

## What Is Next.js

Next.js is a React framework for building full-stack web applications. It supports:

- File-based routing
- Server and client components
- API route handlers
- Static and dynamic rendering
- Built-in performance optimizations

## Next.js File Structure (App Router)

```text
project-root/
  src/
    app/
      api/
        command/route
        status/route
        telemetry/route
      dashboard/page
      landing/page
      login/page
      layout
      page
      globals.css
      favicon.ico
  components/
    LoginModal
    SignupModal
  lib/
    supabase/
      client
      server
  public/
    ...assets
  docs/
  supabase/
    schema.sql
  .env
  next.config.mjs
  jsconfig.json
  postcss.config.mjs
  tailwind.config.js
  .eslintrc.json
  .gitignore
  package-lock.json
  package.json
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Common Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Run lint checks

## Environment Variables

- Use `.env.local` for local development secrets.
- Use `NEXT_PUBLIC_` prefix only for variables needed in the browser.
- Keep server-only secrets without `NEXT_PUBLIC_`.

Example:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
API_SECRET_KEY=your_server_only_secret
```

## Learn More

- Next.js Docs: https://nextjs.org/docs
- App Router: https://nextjs.org/docs/app
- Routing: https://nextjs.org/docs/app/building-your-application/routing


