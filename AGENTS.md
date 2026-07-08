# Agent Instructions

## Project Context

bton is a small contractor focused on small to medium clients. Prioritize practical, maintainable solutions that are easy to operate, explain, and hand off.

## Stack

- Astro JS
- Resend
- Cloudflare

## Development Guidelines

- Use best practices for all changes.
- Use the latest Astro best practices and idioms.
- Prefer simple, focused implementations over unnecessary complexity.
- Keep performance, accessibility, SEO, and maintainability in mind.
- Follow the existing project structure and conventions.
- When an appropriate skill is available, use it.
- Validate changes with relevant checks when possible.

## Astro Guidelines

- Prefer Astro components and static-first patterns where appropriate.
- Use client-side JavaScript only when needed.
- Keep components small, reusable, and content-focused.
- Use Astro integrations and configuration in line with current Astro recommendations.

## Cloudflare / Resend Guidelines

- Treat secrets and API keys as environment variables; never hard-code them.
- Keep Cloudflare deployment/runtime constraints in mind.
- Use Resend for email-related functionality and handle failures gracefully.
