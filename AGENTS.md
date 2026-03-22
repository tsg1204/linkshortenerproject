# Agent Instructions — Link Shortener Project

This file is the entry point for LLM agent instructions. It describes the project at a high level and links to detailed standards documents that all agents must follow.

## Project Overview

A full-stack **link shortener** web application built with the Next.js App Router. Users can sign up, create shortened URLs, and be redirected when a short link is visited. The application tracks click counts per link.

## Key Constraints

- **TypeScript strict mode is always on.** Never disable strict checks or use `any`.
- **Server Components by default.** Add `'use client'` only when strictly necessary.
- **All database access is server-side only.** Never import `db` or `schema` in client components.
- **Clerk is the single source of truth for user identity.** Never trust user IDs from request bodies or query params.
- **Validate all user input with Zod** before writing to the database.
- **Use `@/` path alias** for all cross-directory imports.

## Documentation Index

> **CRITICAL REQUIREMENT — NO EXCEPTIONS:**
> You **MUST** read the full contents of every relevant file in the `/docs` directory **before writing a single line of code**. This is not optional. Skipping this step will result in incorrect, non-compliant output. If a task touches authentication, UI, or any documented domain, open and read the corresponding doc file first — then generate code.

The `/docs` directory contains detailed, mandatory standards. Each file governs a specific domain of the codebase:

- [Authentication](docs/auth.md) — Clerk setup, protected routes, modal sign-in/sign-up, middleware
- [UI Components](docs/ui.md) — shadcn/ui usage, adding components, styling with Tailwind, icons

**Required workflow before generating any code:**

1. Identify which domain(s) your task touches.
2. Open and fully read every relevant `/docs` file for those domains.
3. Only then write code, strictly following the standards in those files.

## Quick Reference

```
Stack:     Next.js 16 (App Router) · TypeScript 5 · React 19
Auth:      Clerk (@clerk/nextjs v6)
Database:  PostgreSQL (Neon) + Drizzle ORM
UI:        shadcn/ui · Tailwind CSS v4 · Radix UI · Lucide React
```

```
app/                  Routes and layouts
components/ui/        shadcn/ui base components
db/index.ts           Drizzle client (singleton)
db/schema.ts          Table definitions
lib/utils.ts          cn() and shared utilities
proxy.ts              Clerk middleware
docs/                 This documentation
```

## Development Commands

```bash
npm run dev         # Start dev server (webpack)
npm run dev:turbo   # Start dev server (Turbopack)
npm run build       # Production build
npm run lint        # Run ESLint

npx drizzle-kit generate   # Generate migration from schema changes
npx drizzle-kit migrate    # Apply migrations to the database
npx drizzle-kit studio     # Open Drizzle Studio (visual DB browser)
npx shadcn add <name>      # Add a shadcn/ui component
```
